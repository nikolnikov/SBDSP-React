import React, { useState } from 'react';
import DSChatbot from '../components/Chatbot';
import DSSideSheet from '../components/SideSheet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSChatbot = ({ 
    askInputAttachHandler,
    askInputDisabled,
    askInputId,
    askInputOnChange,
    askInputPlaceholder = 'Ask anything',
    askInputSubmitHandler,
    askInputValue,
    askInputVoiceHandler,
    customClasses,
    feedbackOptions = [],
    hideHeader,
    isRestarted = false,
    introTitle,
    introMessage,
    onClose,
    restart,
    responses = [],
    responseLoadingDelay = 2000,
    suggestionQuestions = [],
    thumbsDownHandler,
    thumbsUpHandler,
    title
}) => {
    const [chatbotOpen, setChatbotOpen] = useState(false);

    const handleClose = () => {
        setChatbotOpen(false);
        if (typeof onClose === 'function') {
            onClose();
        }
    };

    return (
        <>
            <button
                className="ds-button --primary"
                onClick={() => {
                    setChatbotOpen(true);
                }}
            >
                Open Chatbot
            </button>

            <DSSideSheet
                opened={chatbotOpen}
                isChatbot
                onClose={handleClose}
            >
                <DSChatbot
                    askInputAttachHandler={askInputAttachHandler}
                    askInputDisabled={askInputDisabled}
                    askInputId={askInputId}
                    askInputOnChange={askInputOnChange}
                    askInputPlaceholder={askInputPlaceholder}
                    askInputSubmitHandler={askInputSubmitHandler}
                    askInputValue={askInputValue}
                    askInputVoiceHandler={askInputVoiceHandler}
                    customClasses={classNames(customClasses)}
                    feedbackOptions={feedbackOptions}
                    hideHeader={hideHeader}
                    isRestarted={isRestarted}
                    introTitle={introTitle}
                    introMessage={introMessage}
                    onClose={handleClose}
                    restart={restart}
                    responses={responses}
                    responseLoadingDelay={responseLoadingDelay}
                    suggestionQuestions={suggestionQuestions}
                    thumbsDownHandler={thumbsDownHandler}
                    thumbsUpHandler={thumbsUpHandler}
                    title={title}
                />
            </DSSideSheet>
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
    customClasses: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    feedbackOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            action: PropTypes.func
        })
    ),
    hideHeader: PropTypes.bool,
    isRestarted: PropTypes.bool,
    introTitle: PropTypes.string,
    introMessage: PropTypes.string,
    onClose: PropTypes.func,
    restart: PropTypes.func,
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            response: PropTypes.string,
            followup: PropTypes.string
        })
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