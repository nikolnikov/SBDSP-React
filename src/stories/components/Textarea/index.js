'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSTextarea = ({
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
                <div className="ds-input__error" role="alert">
                    {errorMessage}
                </div>
            )}
            {hintMessage && !errorMessage && (
                <div className="ds-input__hint" role="tooltip">
                    {hintMessage}
                </div>
            )}
        </div>
    );
};

QDSTextarea.propTypes = {
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

export default QDSTextarea;
