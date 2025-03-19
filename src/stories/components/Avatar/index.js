'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSAvatar = ({
    clickHandler,
    customClasses,
    isButton,
    isDisabled,
    isOutlined,
    initial,
    hasNotification,
    size
}) => {
    return isButton ? (
        <button
            className={classNames('ds-avatar', customClasses, {
                '--disabled': isDisabled,
                '--notification': hasNotification,
                '--solid': !isOutlined,
                '--outlined': isOutlined,
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
                '--solid': !isOutlined,
                '--outlined': isOutlined,
                [`--${size}`]: size
            })}
        >
            {initial}
        </div>
    );
};

QDSAvatar.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isButton: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isOutlined: PropTypes.bool,
    hasNotification: PropTypes.bool,
    initial: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};

export default QDSAvatar;
