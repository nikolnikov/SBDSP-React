'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tag = ({
    children,
    clickHandler,
    customClasses = [],
    isDisabled,
    isSecondary,
    isSelected,
    showClose
}) => {
    return (
        <button
            className={classNames('ds-tag', customClasses, {
                '--disabled': isDisabled,
                '--secondary': isSecondary,
                '--selected': isSelected
            })}
            onClick={clickHandler}
            aria-label={children}
            tabIndex={isDisabled ? '-1' : 0}
        >
            {children}
            {showClose && (
                <span className="ds-icon--close" aria-label="close"></span>
            )}
        </button>
    );
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSelected: PropTypes.bool,
    showClose: PropTypes.bool
};

export default Tag;
