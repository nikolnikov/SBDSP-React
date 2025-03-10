'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSAvatar = ({
    button,
    clickHandler,
    customClasses = [],
    isDisabled,
    initial,
    hasNotification,
    outlined,
    size
}) => {
    return button ? (
        <button
            className={classNames('ds-avatar', customClasses, {
                '--disabled': isDisabled,
                '--notification': hasNotification,
                '--solid': !outlined,
                '--outlined': outlined,
                [`--${size}`]: size
            })}
            onClick={clickHandler}
        >
            {initial}
        </button>
    ) : (
        <div
            className={classNames('ds-avatar', {
                [customClasses]: customClasses,
                '--disabled': isDisabled,
                '--notification': hasNotification,
                '--solid': !outlined,
                '--outlined': outlined,
                [`--${size}`]: size
            })}
        >
            {initial}
        </div>
    );
};

QDSAvatar.propTypes = {
    button: PropTypes.bool,
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    hasNotification: PropTypes.bool,
    initial: PropTypes.string,
    outlined: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};

export default QDSAvatar;
