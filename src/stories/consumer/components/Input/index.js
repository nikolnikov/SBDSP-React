'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({
    customClasses = [],
    errorMessage,
    hasError,
    hintMessage,
    inputId,
    isDisabled,
    isRequired,
    label,
    leftIcon,
    name,
    onChange,
    placeholder,
    rightIcon,
    type
}) => {
    return (
        <div
            className={classNames('ds-input', customClasses, {
                '--disabled': isDisabled,
                '--error': hasError,
                '--icons': rightIcon || leftIcon,
                '--icon-left': leftIcon,
                '--icon-right': rightIcon,
                '--required': isRequired
            })}
        >
            <label className="ds-input__label" htmlFor={inputId}>
                {label && <span>{label}</span>}
            </label>
            <div className="ds-flex --start-center --row">
                {leftIcon && (
                    <span
                        className={`${leftIcon} --left`}
                        aria-label="{leftIcon}"
                    ></span>
                )}
                <input
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={value => onChange(value)}
                />
                {rightIcon && (
                    <span
                        className={`${rightIcon} --right`}
                        aria-label="{rightIcon}"
                    ></span>
                )}
            </div>

            {errorMessage && (
                <div className="ds-input__error">{errorMessage}</div>
            )}
            {hintMessage && <div className="ds-input__hint">{hintMessage}</div>}
        </div>
    );
};

Input.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    leftIcon: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rightIcon: PropTypes.string,
    type: PropTypes.string
};

export default Input;
