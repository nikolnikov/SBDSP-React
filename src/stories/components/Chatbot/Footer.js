import React, { useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIconButton from '../Button/IconButton.index';

const QDSChatbotFooter = ({
    askInputAttachHandler,
    askInputDisabled,
    askInputId,
    askInputOnChange,
    askInputPlaceholder,
    askInputSubmitHandler,
    askInputValue,
    askInputVoiceHandler
}) => {
    const textareaRef = useRef(null);
    const MIN_ROWS = 1;
    const MAX_ROWS = 3;

    const autoResize = useCallback(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.rows = MIN_ROWS;
        const computed = window.getComputedStyle(el);
        const lineHeight = parseInt(computed.lineHeight || '20', 10) || 20;
        const currentRows = Math.floor(el.scrollHeight / lineHeight);
        if (currentRows >= MAX_ROWS) {
            el.rows = MAX_ROWS;
            el.scrollTop = el.scrollHeight;
        } else {
            el.rows = Math.max(currentRows, MIN_ROWS);
        }
    }, []);

    useEffect(() => {
        autoResize();
    }, [askInputValue, autoResize]);

    const handleChange = e => {
        if (askInputOnChange) {
            askInputOnChange(e);
        }
        autoResize();
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (askInputSubmitHandler && !askInputDisabled) {
                askInputSubmitHandler(e);
            }
        }
    };

    return (
        <div className="ds-chatbot__footer">
            <div className="ds-chatbot__search">
                <div
                    className={classNames('ds-input --textarea', {
                        '--disabled': askInputDisabled
                    })}
                >
                    <QDSIconButton
                        clickHandler={askInputAttachHandler}
                        icon="paperclip"
                        size="md"
                        tooltip="Add files"
                    />
                    <textarea
                        ref={textareaRef}
                        className="ds-textarea"
                        disabled={askInputDisabled}
                        id={askInputId}
                        rows={MIN_ROWS}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder={askInputPlaceholder || 'Ask anything'}
                        value={askInputValue}
                        style={{ resize: 'none', overflowY: 'auto' }}
                        aria-label="Chat input"
                    />
                    <QDSIconButton
                        clickHandler={askInputVoiceHandler}
                        icon="microphone"
                        size="md"
                        tooltip="Dictate"
                    />
                </div>

                <QDSIconButton
                    clickHandler={askInputSubmitHandler}
                    icon="arrow-circle-up"
                />
            </div>

            <div className="ds-chatbot__copyright">
                By using QuestAI, you agree to the{' '}
                <a href="#" className="ds-link">
                    terms of use
                </a>
                .
            </div>
        </div>
    );
};

QDSChatbotFooter.propTypes = {
    askInputAttachHandler: PropTypes.func,
    askInputDisabled: PropTypes.bool,
    askInputId: PropTypes.string,
    askInputOnChange: PropTypes.func,
    askInputPlaceholder: PropTypes.string,
    askInputSubmitHandler: PropTypes.func,
    askInputValue: PropTypes.string,
    askInputVoiceHandler: PropTypes.func
};

export default QDSChatbotFooter;
