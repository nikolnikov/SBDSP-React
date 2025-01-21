import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ 
    inputId,
    label,
    name,
    isChecked = false,
    customClasses = [],
    isDisabled = false,
    isIndeterminate = false,
    onChange,
    value,
    ...props
}) => {
    const checkboxClass = ['ds-input__checkbox'];

    if (customClasses) {
        checkboxClass.push(customClasses);
    }

    if (isDisabled) {
        checkboxClass.push('--disabled');
    }

    if (isIndeterminate) {
        checkboxClass.push('--indeterminate');
    }

    return (
        <label
            className={checkboxClass.join(' ')}
            {...props}
            htmlFor={inputId}
            aria-label={label}
        >
            <input
                disabled={isDisabled}
                id={inputId}
                name={name}
                type="checkbox"
                onChange={value => onChange(value)}
                value={value}
                {...(isChecked && { checked: true })}
            ></input>
            <span></span>
            {label}
        </label>
    );
};

Checkbox.propTypes = {
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
};