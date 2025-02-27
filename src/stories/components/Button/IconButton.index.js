'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const IconButton = ({
    clickHandler,
    customClasses = [],
    iconClass,
    isDestructive,
    isDisabled,
    isInverse,
    size = 'large'
}) => {
    return (
        <button
            className={classNames('ds-button --icon', customClasses, {
                [`--${size}`]: size,
                '--destructive': isDestructive,
                '--disabled': isDisabled,
                '--inverse': isInverse
            })}
            aria-label={iconClass}
            onClick={clickHandler}
        >
            <span
                className={`${iconClass}`}
                aria-label={iconClass}
                role="img"
            ></span>
        </button>
    );
};

IconButton.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    iconClass: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default IconButton;
