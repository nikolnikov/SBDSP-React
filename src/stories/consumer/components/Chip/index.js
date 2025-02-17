'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Chip = ({
    children,
    dismissHandler,
    customClasses = [],
    hasIcon,
    hasDismiss,
    isInverse
}) => {
    return (
        <div
            className={classNames('ds-chip', customClasses, {
                '--inverse': isInverse
            })}
            role="button"
        >
            {hasIcon && <span className={hasIcon} aria-label={hasIcon}></span>}

            {children}

            {hasDismiss && (
                <button onClick={dismissHandler} aria-label="Close"></button>
            )}
        </div>
    );
};

Chip.propTypes = {
    children: PropTypes.node,
    dismissHandler: PropTypes.func,
    customClasses: PropTypes.string,
    hasDismiss: PropTypes.bool,
    hasIcon: PropTypes.string,
    isInverse: PropTypes.bool
};

export default Chip;
