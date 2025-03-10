'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const QDSTag = ({
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
            {showClose && <Icon name="close" />}
        </button>
    );
};

QDSTag.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSelected: PropTypes.bool,
    label: PropTypes.string.isRequired,
    showClose: PropTypes.bool
};

export default QDSTag;
