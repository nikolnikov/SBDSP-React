'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';

const QDSTag = ({
    clickHandler,
    customClasses,
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
            {showClose && <QDSIcon name="close" />}
        </button>
    );
};

QDSTag.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    label: PropTypes.string.isRequired,
    showClose: PropTypes.bool
};

export default QDSTag;
