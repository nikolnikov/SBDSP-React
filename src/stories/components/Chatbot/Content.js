import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import QDSButton from '../Button';
import QDSIconButton from '../Button/IconButton.index';
import QDSChatbotIntro from './Intro';
import QDSToast from '../Toast';

const getPrimaryResponse = response => {
    if (!response) return '';
    const marker = ' Do you want me';
    const idx = response.indexOf(marker);
    return idx >= 0 ? response.substring(0, idx) : response;
};

const QDSChatbotContent = ({
    hasConsented,
    onClose,
    consented,
    feedbackOptions = [],
    introTitle = '',
    introMessage = '',
    suggestionQuestions = [],
    showConversation = false,
    conversation = [],
    responses = [],
    onSuggestionSelect,
    onScroll,
    contentRef,
    onRetry,
    thumbsDownHandler,
    thumbsUpHandler,
    responseLoadingDelay
}) => {
    const [visibleResponses, setVisibleResponses] = useState({});
    const [copiedByTurn, setCopiedByTurn] = useState({});
    const [activeThumbs, setActiveThumbs] = useState({});
    const [feedbackVisibility, setFeedbackVisibility] = useState({});
    const [showFeedbackToast, setShowFeedbackToast] = useState(false);
    // Internal ref to always have a DOM reference even if a ref isn't passed in
    const internalContentRef = useRef(null);

    // Utility to support either function refs or object refs passed via props
    const attachContentRef = node => {
        if (typeof contentRef === 'function') {
            contentRef(node);
        } else if (contentRef && typeof contentRef === 'object') {
            contentRef.current = node; // eslint-disable-line no-param-reassign
        }
        internalContentRef.current = node;
    };

    const renderFeedbackOptions = () => {
        if (!Array.isArray(feedbackOptions)) return null;
        const items = feedbackOptions.filter(Boolean);
        if (!items.length) return null;
        return (
            <div className="ds-chatbot__feedback-options">
                {items.map(opt => {
                    const { id, label, action, ...rest } = opt;
                    const key = id || label;
                    if (!key) return null;
                    const handleClick = () => {
                        if (typeof action === 'function')
                            action({ id, label, action, ...rest });
                    };
                    return (
                        <QDSButton
                            key={key}
                            clickHandler={handleClick}
                            label={label || ''}
                            type="option"
                        />
                    );
                })}
            </div>
        );
    };

    useEffect(() => {
        if (!conversation || conversation.length === 0) {
            if (Object.keys(visibleResponses).length > 0) {
                setVisibleResponses({});
            }
            return;
        }
        const timeouts = [];
        conversation.forEach(turn => {
            if (turn?.id && !visibleResponses[turn.id]) {
                const to = setTimeout(() => {
                    setVisibleResponses(prev => ({ ...prev, [turn.id]: true }));
                }, responseLoadingDelay);
                timeouts.push(to);
            }
        });
        return () => {
            timeouts.forEach(t => clearTimeout(t));
        };
    }, [conversation, visibleResponses, responseLoadingDelay]);

    // Always keep the viewport scrolled to the bottom so the latest question/response is visible
    useEffect(() => {
        if (!showConversation) return;
        const el = internalContentRef.current;
        if (!el) return;
        // Use requestAnimationFrame to ensure DOM has painted new content before scrolling
        requestAnimationFrame(() => {
            try {
                el.scrollTop = el.scrollHeight;
            } catch (e) {
                /* noop */
            }
        });
    }, [showConversation, conversation?.length, visibleResponses]);

    const copyContent = (text, turnId) => {
        if (!navigator?.clipboard || !text) return;
        navigator.clipboard
            .writeText(text)
            .then(() => {
                if (!turnId) return;
                setCopiedByTurn(prev => ({ ...prev, [turnId]: true }));
                setTimeout(
                    () =>
                        setCopiedByTurn(prev => ({ ...prev, [turnId]: false })),
                    1500
                );
            })
            .catch(() => {});
    };

    const handleRetry = turn => {
        if (!turn?.id) return;
        setVisibleResponses(prev => {
            const next = { ...prev };
            delete next[turn.id];
            return next;
        });

        setActiveThumbs(prev => ({ ...prev, [turn.id]: null }));
        setFeedbackVisibility(prev => ({ ...prev, [turn.id]: false }));
        setCopiedByTurn(prev => ({ ...prev, [turn.id]: false }));
        if (typeof onRetry === 'function') {
            onRetry(turn);
        }
    };

    const handleThumbsUpClick = turn => {
        const id = turn?.id;
        if (!id) return;
        setActiveThumbs(prev => ({
            ...prev,
            [id]: prev[id] === 'up' ? null : 'up'
        }));
        setFeedbackVisibility(prev => ({ ...prev, [id]: false }));
        if (typeof thumbsUpHandler === 'function') {
            thumbsUpHandler(turn);
        }
    };

    const handleThumbsDownClick = turn => {
        const id = turn?.id;
        if (!id) return;
        const isMobile =
            typeof window !== 'undefined' && window.innerWidth < 768;
        if (isMobile) {
            // On small screens just acknowledge feedback via toast, do not open feedback block
            setActiveThumbs(prev => {
                const nextVal = prev[id] === 'down' ? null : 'down';
                if (nextVal === 'down') setShowFeedbackToast(true);
                return { ...prev, [id]: nextVal };
            });
            setFeedbackVisibility(prev => ({ ...prev, [id]: false }));
        } else {
            // Existing desktop / larger screen behavior
            setActiveThumbs(prev => {
                const nextVal = prev[id] === 'down' ? null : 'down';
                setFeedbackVisibility(v => ({
                    ...v,
                    [id]: nextVal === 'down'
                }));
                return { ...prev, [id]: nextVal };
            });
        }
        if (typeof thumbsDownHandler === 'function') {
            thumbsDownHandler(turn);
        }
    };

    return (
        <div
            className="ds-chatbot__content"
            ref={attachContentRef}
            onScroll={onScroll}
        >
            {!showConversation && (
                <QDSChatbotIntro
                    hasConsented={hasConsented}
                    onClose={onClose}
                    consented={consented}
                    introTitle={introTitle}
                    introMessage={introMessage}
                    suggestionQuestions={suggestionQuestions}
                    onSuggestionSelect={onSuggestionSelect}
                />
            )}

            {showConversation &&
                Array.isArray(conversation) &&
                conversation.map((turn, idx) => {
                    const baseItem = responses[idx] || responses[0] || {};
                    const normalized =
                        typeof baseItem === 'string'
                            ? { response: baseItem }
                            : baseItem || {};
                    const raw = turn?.response || normalized.response || '';
                    const primary = getPrimaryResponse(raw);
                    const followup = normalized.followup || '';
                    const isVisible = !!visibleResponses[turn.id];
                    return (
                        <React.Fragment key={turn.id}>
                            <div className="ds-chatbot__question">
                                {turn.question}
                            </div>
                            <div
                                className="ds-chatbot__response"
                                data-testid="chatbot-response"
                            >
                                {!isVisible ? (
                                    <div className="ds-loading-data">
                                        &nbsp;
                                    </div>
                                ) : (
                                    primary
                                )}
                                {isVisible && primary && (
                                    <>
                                        {followup && (
                                            <div className="ds-chatbot__response-followup">
                                                {followup}
                                            </div>
                                        )}
                                        <div className="ds-chatbot__response-actions">
                                            {!copiedByTurn[turn.id] && (
                                                <QDSIconButton
                                                    clickHandler={() =>
                                                        copyContent(
                                                            primary,
                                                            turn.id
                                                        )
                                                    }
                                                    icon="copy"
                                                    size="md"
                                                    tooltip="Copy"
                                                />
                                            )}

                                            {copiedByTurn[turn.id] && (
                                                <QDSIconButton
                                                    clickHandler={() => {}}
                                                    icon="check"
                                                    size="md"
                                                    tooltip="Copied"
                                                />
                                            )}

                                            <QDSIconButton
                                                clickHandler={() =>
                                                    handleThumbsUpClick(turn)
                                                }
                                                icon={
                                                    activeThumbs[turn.id] ===
                                                    'up'
                                                        ? 'thumbs-up-filled'
                                                        : 'thumbs-up'
                                                }
                                                size="md"
                                                tooltip="Good response"
                                            />
                                            <QDSIconButton
                                                clickHandler={() =>
                                                    handleThumbsDownClick(turn)
                                                }
                                                icon={
                                                    activeThumbs[turn.id] ===
                                                    'down'
                                                        ? 'thumbs-down-filled'
                                                        : 'thumbs-down'
                                                }
                                                size="md"
                                                tooltip="Bad response"
                                            />
                                            <QDSIconButton
                                                clickHandler={() =>
                                                    handleRetry(turn)
                                                }
                                                icon="arrows-counter-clockwise"
                                                size="md"
                                                tooltip="Try again"
                                            />
                                        </div>

                                        {activeThumbs[turn.id] === 'down' &&
                                            feedbackVisibility[turn.id] && (
                                                <div className="ds-chatbot__feedback">
                                                    <div className="ds-chatbot__feedback-content">
                                                        <div className="ds-chatbot__feedback-title">
                                                            Provide Feedback:
                                                        </div>

                                                        {renderFeedbackOptions()}
                                                    </div>

                                                    <div className="ds-chatbot__feedback-close">
                                                        <QDSIconButton
                                                            clickHandler={() =>
                                                                setFeedbackVisibility(
                                                                    prev => ({
                                                                        ...prev,
                                                                        [turn.id]: false
                                                                    })
                                                                )
                                                            }
                                                            icon="close"
                                                            size="md"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                    </>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })}
            {showFeedbackToast && (
                <QDSToast
                    opened={showFeedbackToast}
                    onClose={() => setShowFeedbackToast(false)}
                    message="Thanks for providing feedback"
                    duration={5000}
                    type="success"
                />
            )}
        </div>
    );
};

QDSChatbotContent.propTypes = {
    hasConsented: PropTypes.bool,
    onClose: PropTypes.func,
    consented: PropTypes.func,
    feedbackOptions: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                id: PropTypes.string,
                label: PropTypes.string,
                action: PropTypes.func
            })
        ])
    ),
    introTitle: PropTypes.string,
    introMessage: PropTypes.string,
    suggestionQuestions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string
        })
    ),
    showConversation: PropTypes.bool,
    conversation: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            question: PropTypes.string,
            response: PropTypes.string
        })
    ),
    responses: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                id: PropTypes.string,
                response: PropTypes.string,
                followup: PropTypes.string
            })
        ])
    ),
    responseLoadingDelay: PropTypes.number,
    onSuggestionSelect: PropTypes.func,
    onScroll: PropTypes.func,
    contentRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    onRetry: PropTypes.func,
    thumbsDownHandler: PropTypes.func,
    thumbsUpHandler: PropTypes.func
};

export default QDSChatbotContent;
