'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSTag = ({
    clickHandler,
    customClasses,
    hideHandler,
    isDisabled,
    isSecondary,
    label,
    showClose
}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        if (!isDisabled) {
            setIsSelected(prevState => !prevState);
            if (clickHandler) {
                clickHandler();
            }
        }
    };

    const handleHide = () => {
        if (!isDisabled) {
            setIsSelected(prevState => !prevState);
            hideHandler();
        }
    };

    return (
        <button
            className={classNames('ds-tag', customClasses, {
                '--disabled': isDisabled,
                '--secondary': isSecondary,
                '--selected': isSelected
            })}
            onClick={handleClick}
            aria-label={label}
            tabIndex={isDisabled ? '-1' : 0}
        >
            {label}
            {showClose && (
                <span
                    className="ds-icon--close"
                    role="button"
                    aria-label="Dismiss"
                    onClick={handleHide}
                ></span>
            )}
        </button>
    );
};

QDSTag.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    hideHandler: PropTypes.func,
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    label: PropTypes.string.isRequired,
    showClose: PropTypes.bool
};

export default QDSTag;
