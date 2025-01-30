'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tag = ({
    clickHandler,
    customClasses = [],
    isDisabled,
    isSecondary,
    isSelected,
    label,
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
            aria-label={label}
            tabIndex={isDisabled ? '-1' : 0}
        >
            {label}
            {showClose && (
                <span className="ds-icon--close" aria-label="close"></span>
            )}
        </button>
    );
};

Tag.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSelected: PropTypes.bool,
    label: PropTypes.string.isRequired,
    showClose: PropTypes.bool
};

export default Tag;
