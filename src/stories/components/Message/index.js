import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon/';
import QDSIconButton from '../Button/IconButton.index';

const QDSMessage = ({
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
        informative: 'info',
        success: 'check-circle',
        warning: 'warning',
        error: 'warning-octagon'
    };

    const icon = iconType[type];

    return (
        <div
            className={classNames(`ds-message --${type}`, customClasses)}
            role="alert"
        >
            {!noIcon && (
                <div className="ds-message__icon">
                    <QDSIcon name={icon} />
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
                    <QDSIconButton
                        icon="close"
                        label="close"
                        clickHandler={closeHandler}
                        size="md"
                    />
                </div>
            )}
        </div>
    );
};

QDSMessage.propTypes = {
    actions: PropTypes.array,
    closeHandler: PropTypes.func,
    customClasses: PropTypes.string,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error'])
        .isRequired
};

export default QDSMessage;
