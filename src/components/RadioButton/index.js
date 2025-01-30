'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = ({
    customClasses = [],
    inputId,
    isChecked,
    isDisabled,
    label,
    name,
    onChange,
    value
}) => {
    return (
        <div
            className={classNames('ds-input__radio', customClasses, {
                '--disabled': isDisabled
            })}
        >
            <input
                disabled={isDisabled}
                id={inputId}
                type="radio"
                name={name}
                onChange={value => onChange(value)}
                value={value}
                {...(isChecked && { defaultChecked: true })}
            ></input>
            <label htmlFor={inputId}>{label}</label>
        </div>
    );
};

RadioButton.propTypes = {
    customClasses: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default RadioButton;
