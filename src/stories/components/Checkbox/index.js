'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSCheckbox = ({
    inputId,
    label,
    name,
    isChecked: initialChecked,
    customClasses = [],
    isDisabled,
    isIndeterminate,
    isRequired,
    onChange,
    value
}) => {
    const [isChecked, setIsChecked] = useState(!!initialChecked);

    const handleChange = event => {
        const newChecked = event.target.checked;
        setIsChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <label
            className={classNames('ds-input__checkbox', customClasses, {
                '--disabled': isDisabled,
                '--indeterminate': isIndeterminate,
                '--required': isRequired
            })}
            htmlFor={inputId}
            aria-label={label}
        >
            <input
                disabled={isDisabled}
                id={inputId}
                name={name}
                type="checkbox"
                onChange={handleChange}
                value={value}
                checked={isChecked}
            ></input>
            <span></span>
            {label}
        </label>
    );
};

QDSCheckbox.propTypes = {
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default QDSCheckbox;
