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
    isRequired,
    value
}) => {
    return (
        <div
            className={classNames('ds-input__radio', customClasses, {
                '--disabled': isDisabled,
                '--required': isRequired
            })}
        >
            <input
                disabled={isDisabled}
                id={inputId}
                type="radio"
                name={name}
                required={isRequired}
                onChange={value => onChange(value)}
                value={value}
                {...(isChecked && { defaultChecked: true })}
            ></input>
            <label htmlFor={inputId}>
                <span>{label}</span>
            </label>
        </div>
    );
};

RadioButton.propTypes = {
    customClasses: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    value: PropTypes.string.isRequired
};

export default RadioButton;
