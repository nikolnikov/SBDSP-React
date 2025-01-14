'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Avatar = ({
    button,
    children,
    clickHandler,
    customClasses = [],
    isDisabled,
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
            {children}
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
            {children}
        </div>
    );
};

Avatar.propTypes = {
    button: PropTypes.bool,
    children: PropTypes.node,
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    hasNotification: PropTypes.bool,
    outlined: PropTypes.bool,
    size: PropTypes.string
};

export default Avatar;
