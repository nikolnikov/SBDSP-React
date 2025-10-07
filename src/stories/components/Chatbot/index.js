import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSChatbotFooter from './Footer';
import QDSChatbotHeader from './Header';
import QDSChatbotContent from './Content';

const QDSChatbot = ({
    askInputAttachHandler,
    askInputDisabled,
    askInputId,
    askInputOnChange,
    askInputPlaceholder,
    askInputSubmitHandler,
    askInputValue,
    askInputVoiceHandler,
    customClasses,
    feedbackOptions = [],
    hideHeader,
    isRestarted = false,
    introTitle = '',
    introMessage = '',
    onClose,
    restart,
    responses = [],
    responseLoadingDelay,
    suggestionQuestions = [],
    thumbsDownHandler,
    thumbsUpHandler,
    title
}) => {
    const chatbotRef = useRef(null);
    const chatbotContentRef = useRef(null);
    const [isExtended, setIsExtended] = useState(false);
    const [hasConsented, setHasConsented] = useState(false);
    const [conversation, setConversation] = useState([]);
    const [internalInputValue, setInternalInputValue] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (isRestarted) {
            setConversation([]);
        }
    }, [isRestarted]);

    const onChatbotScroll = e => {
        const scrollTop = e.currentTarget.scrollTop;
        setIsScrolled(scrollTop > 0);
    };

    const extend = () => setIsExtended(prev => !prev);

    const consented = () => setHasConsented(true);

    const handleInputChange = e => {
        const val = e?.target?.value ?? '';
        setInternalInputValue(val);
        if (askInputOnChange) askInputOnChange(e);
    };

    const handleSubmit = () => {
        const valueToCheck = (internalInputValue || askInputValue || '').trim();
        if (valueToCheck.length > 0) {
            setConversation(prev => [
                ...prev,
                {
                    id: `${Date.now()}-${prev.length}`,
                    question: valueToCheck
                }
            ]);
            setInternalInputValue('');
        }
        if (askInputSubmitHandler) {
            askInputSubmitHandler();
        }
    };

    const handleRestart = () => {
        setConversation([]);
        if (typeof restart === 'function') restart();
    };

    const handleSuggestionSelect = (question, option) => {
        const q = (question || option?.question || '').trim();
        if (!q) return;
        setConversation(prev => [
            ...prev,
            {
                id: `${Date.now()}-${prev.length}`,
                question: q,
                option
            }
        ]);
    };

    const hasAskedFirstQuestion = conversation.length > 0;

    return (
        <>
            <div
                className={classNames('ds-chatbot', customClasses, {
                    '--extended': isExtended,
                    '--no-header': hideHeader
                })}
                ref={chatbotRef}
            >
                {!hideHeader && (
                    <QDSChatbotHeader
                        onClose={onClose}
                        title={title}
                        isExtended={isExtended}
                        showRestart={hasAskedFirstQuestion}
                        restart={handleRestart}
                        extend={extend}
                        isScrolled={isScrolled}
                    />
                )}

                <QDSChatbotContent
                    hasConsented={hasConsented}
                    onClose={onClose}
                    consented={consented}
                    feedbackOptions={feedbackOptions}
                    introTitle={introTitle}
                    introMessage={introMessage}
                    suggestionQuestions={suggestionQuestions}
                    responses={responses}
                    responseLoadingDelay={responseLoadingDelay}
                    showConversation={hasAskedFirstQuestion}
                    conversation={conversation}
                    onSuggestionSelect={handleSuggestionSelect}
                    onScroll={onChatbotScroll}
                    contentRef={chatbotContentRef}
                    thumbsDownHandler={thumbsDownHandler}
                    thumbsUpHandler={thumbsUpHandler}
                />

                {hasConsented && (
                    <QDSChatbotFooter
                        askInputAttachHandler={askInputAttachHandler}
                        askInputDisabled={askInputDisabled}
                        askInputId={askInputId}
                        askInputOnChange={handleInputChange}
                        askInputPlaceholder={askInputPlaceholder}
                        askInputSubmitHandler={handleSubmit}
                        askInputValue={internalInputValue}
                        askInputVoiceHandler={askInputVoiceHandler}
                    />
                )}
            </div>
        </>
    );
};

QDSChatbot.propTypes = {
    askInputAttachHandler: PropTypes.func,
    askInputDisabled: PropTypes.bool,
    askInputId: PropTypes.string,
    askInputOnChange: PropTypes.func,
    askInputPlaceholder: PropTypes.string,
    askInputSubmitHandler: PropTypes.func,
    askInputValue: PropTypes.string,
    askInputVoiceHandler: PropTypes.func,
    customClasses: PropTypes.string,
    feedbackOptions: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                id: PropTypes.string,
                label: PropTypes.string,
                action: PropTypes.func
            })
        ])
    ),
    hideHeader: PropTypes.bool,
    isRestarted: PropTypes.bool,
    introTitle: PropTypes.string,
    introMessage: PropTypes.string,
    onClose: PropTypes.func,
    restart: PropTypes.func,
    responses: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                response: PropTypes.string,
                followup: PropTypes.string
            })
        ])
    ),
    responseLoadingDelay: PropTypes.number,
    suggestionQuestions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string
        })
    ),
    thumbsDownHandler: PropTypes.func,
    thumbsUpHandler: PropTypes.func,
    title: PropTypes.string
};

export default QDSChatbot;
