'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Textarea = ({
    customClasses = [],
    errorMessage,
    hasError,
    hintMessage,
    inputId,
    isDisabled,
    isRequired,
    label,
    name,
    onChange,
    placeholder
}) => {
    return (
        <div
            className={classNames('ds-input --textarea', customClasses, {
                '--disabled': isDisabled,
                '--error': hasError,
                '--required': isRequired
            })}
        >
            <label
                aria-label={label}
                className="ds-input__label"
                htmlFor={inputId}
            >
                {label && <span>{label}</span>}
            </label>

            <textarea
                className="ds-textarea"
                disabled={isDisabled}
                id={inputId}
                name={name}
                placeholder={placeholder}
                onChange={value => onChange(value)}
            ></textarea>

            {errorMessage && (
                <div className="ds-input__error">{errorMessage}</div>
            )}
            {hintMessage && <div className="ds-input__hint">{hintMessage}</div>}
        </div>
    );
};

Textarea.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default Textarea;
