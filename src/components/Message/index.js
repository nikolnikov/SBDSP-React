import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Message = ({
    children,
    closeHandler,
    customClasses,
    message,
    noIcon,
    showActions,
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
            className={classNames(`ds-message --${type}`, customClasses)}
            role="alert"
        >
            {!noIcon && (
                <div className="ds-message__icon">
                    {icon && (
                        <span
                            className={icon.className}
                            aria-label={icon.label}
                        ></span>
                    )}
                </div>
            )}
            <div className="ds-message__content">
                {title && <h3>{title}</h3>}
                {message}

                {showActions && (
                    <div className="ds-message__actions">{children}</div>
                )}
            </div>

            {closeHandler && (
                <div className="ds-message__close">
                    <button
                        className="ds-button --icon --md"
                        aria-label="close"
                        onClick={closeHandler}
                    >
                        <span
                            className="ds-icon--close"
                            aria-label="close"
                        ></span>
                    </button>
                </div>
            )}
        </div>
    );
};

Message.propTypes = {
    children: PropTypes.node,
    closeHandler: PropTypes.func,
    customClasses: PropTypes.string,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    showActions: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error'])
        .isRequired
};

export default Message;
