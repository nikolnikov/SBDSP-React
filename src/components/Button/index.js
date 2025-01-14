'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
    ariaLabel,
    children,
    clickHandler,
    customClasses = [],
    isDestructive,
    isDisabled,
    isInverse,
    isSave,
    medium,
    small,
    type
}) => {
    return (
        <button
            className={classNames('ds-button', customClasses, {
                [`--${type}`]: type,
                '--primary':
                    type !== 'ghost' && type !== 'secondary' && type !== 'icon',
                '--md': type === 'icon' && medium,
                '--sm': type === 'icon' && small,
                '--warning': isDestructive,
                '--disabled': isDisabled,
                '--inverse': isInverse,
                '--save': isSave,
                '--small': small
            })}
            aria-label={ariaLabel}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.node.isRequired,
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isSave: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    type: PropTypes.oneOf(['secondary', 'ghost', 'icon'])
};

export default Button;
