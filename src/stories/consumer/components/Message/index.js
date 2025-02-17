import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Message = ({
    children,
    closeHandler,
    customClasses,
    inlineActions,
    message,
    noIcon,
    title,
    type
}) => {
    const iconType = {
        informative: { className: 'ds-icon--info', label: 'informative' },
        success: { className: 'ds-icon--check-circle', label: 'success' },
        warning: { className: 'ds-icon--warning', label: 'alert' },
        error: { className: 'ds-icon--warning-octagon', label: 'error' }
    };

    const icon = iconType[type];

    return (
        <div
            className={classNames(
                `ds-message ${type ? `--${type}` : ''}`,
                customClasses
            )}
            role="dialog"
        >
            {!noIcon && (
                <div className="ds-message__icon">
                    <span
                        className={
                            icon
                                ? icon.className
                                : 'ds-icon--chat-teardrop-text'
                        }
                        aria-label={icon ? icon.label : 'default'}
                    ></span>
                </div>
            )}
            <div className="ds-message__content">
                {title && <div className="ds-message__title">{title}</div>}

                {message}

                {children && (
                    <div
                        className={`ds-message__actions ${
                            inlineActions ? '--inline' : ''
                        }`}
                    >
                        {children}
                    </div>
                )}
            </div>

            {closeHandler && (
                <button
                    className="ds-button --icon"
                    aria-label="dismiss message"
                    onClick={closeHandler}
                >
                    <span className="ds-icon--close" aria-label="close"></span>
                </button>
            )}
        </div>
    );
};

Message.propTypes = {
    children: PropTypes.node,
    closeHandler: PropTypes.func,
    customClasses: PropTypes.string,
    inlineActions: PropTypes.bool,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error'])
};

export default Message;
