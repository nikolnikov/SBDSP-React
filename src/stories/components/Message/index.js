import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '../Button/IconButton.index';

const Message = ({
    actions,
    closeHandler,
    customClasses,
    hideX,
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
            className={classNames(`ds-message --${type}`, customClasses)}
            role="alert"
        >
            {!noIcon && (
                <div className="ds-message__icon">
                    {icon && (
                        <span
                            className={icon.className}
                            aria-label={icon.label}
                            role="img"
                        ></span>
                    )}
                </div>
            )}
            <div className="ds-message__content">
                {title && <h3>{title}</h3>}
                {message}

                {actions && (
                    <div className="ds-message__actions">
                        {actions.map((action, index) => (
                            <a
                                key={index}
                                className="ds-link"
                                href={action.action}
                            >
                                {action.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {!hideX && (
                <div className="ds-message__close">
                    <IconButton
                        icon="close"
                        label="close"
                        clickHandler={closeHandler}
                        size="medium"
                    />
                </div>
            )}
        </div>
    );
};

Message.propTypes = {
    actions: PropTypes.array,
    closeHandler: PropTypes.func,
    customClasses: PropTypes.string,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error'])
        .isRequired
};

export default Message;
