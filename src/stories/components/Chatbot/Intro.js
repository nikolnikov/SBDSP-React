import React from 'react';
import PropTypes from 'prop-types';
import QDSButton from '../Button';
import QDSIcon from '../Icon';

const QDSChatbotIntro = ({
    hasConsented,
    onClose,
    consented,
    introTitle = '',
    introMessage = '',
    suggestionQuestions = [],
    onSuggestionSelect
}) => {
    if (!hasConsented) {
        return (
            <div className="ds-chatbot__intro">
                <QDSIcon name="ai" size="32" />
                <h2>Consent</h2>
                By clicking 'I Consent’ below, you agree to the AI Chat Terms of
                Use which include providing this AI tool access to your
                information in order to answer questions about your lab results.
                This AI is programmed to provide general information and should
                not be considered a substitute for professional medical advice.
                <div className="ds-mt-16 ds-flex --row --wrap --end-center">
                    <QDSButton
                        clickHandler={onClose}
                        label="Cancel"
                        size="sm"
                        type="secondary"
                    />
                    <QDSButton
                        clickHandler={consented}
                        type="primary"
                        label="I consent"
                        size="sm"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="ds-chatbot__suggestions">
            <div className="ds-chatbot__suggestions-preamble">
                <QDSIcon name="ai" size="32" />
                {introTitle && <h2>{introTitle}</h2>}
                {introMessage && introMessage}
                {suggestionQuestions.length > 0 && (
                    <div className="ds-chatbot__suggestions-options">
                        {suggestionQuestions.map((option, index) => (
                            <QDSButton
                                key={index}
                                clickHandler={() =>
                                    onSuggestionSelect &&
                                    onSuggestionSelect(option.question, option)
                                }
                                label={option.question}
                                type="option"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

QDSChatbotIntro.propTypes = {
    hasConsented: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    consented: PropTypes.func.isRequired,
    introTitle: PropTypes.string,
    introMessage: PropTypes.string,
    suggestionQuestions: PropTypes.array,
    onSuggestionSelect: PropTypes.func
};

export default QDSChatbotIntro;
