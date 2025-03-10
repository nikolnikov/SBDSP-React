'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSRadioButton = ({
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

QDSRadioButton.propTypes = {
    customClasses: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default QDSRadioButton;
