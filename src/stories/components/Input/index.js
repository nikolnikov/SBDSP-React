'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

const Input = ({
    customClasses = [],
    errorMessage,
    hasError,
    hintMessage,
    inputId,
    isDisabled,
    isLoading,
    isRequired,
    label,
    iconLeft,
    iconRight,
    name,
    onChange,
    placeholder,
    tooltipMessage,
    type
}) => {
    return (
        <div
            className={classNames('ds-input', customClasses, {
                '--disabled': isDisabled,
                '--error': hasError,
                '--icons': iconRight || iconLeft || isLoading,
                '--icon-left': iconLeft,
                '--icon-right': iconRight || isLoading,
                '--required': isRequired
            })}
        >
            <label className="ds-input__label" htmlFor={inputId}>
                {label && <span>{label}</span>}

                {tooltipMessage && (
                    <Tooltip tooltip={tooltipMessage}>
                        <button
                            className="ds-tooltip ds-button --icon --sm"
                            aria-label="tooltip"
                        >
                            <span
                                className="ds-icon--info"
                                aria-label="info filled"
                                role="img"
                            ></span>
                        </button>
                    </Tooltip>
                )}
            </label>
            <div className="ds-flex --start-center --row">
                {iconLeft && (
                    <span
                        className={`ds-icon--${iconLeft} --left`}
                        aria-label={`${iconLeft}`}
                        role="img"
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
                {iconRight && (
                    <span
                        className={`ds-icon--${iconRight} --right`}
                        aria-label={`${iconRight}`}
                        role="img"
                    ></span>
                )}
                {isLoading && (
                    <div
                        className="ds-loading --small --right"
                        aria-label="loading"
                        role="progressbar"
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}
            </div>

            {errorMessage && (
                <div className="ds-input__error" role="alert">
                    {errorMessage}
                </div>
            )}
            {hintMessage && (
                <div className="ds-input__hint" role="tooltip">
                    {hintMessage}
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    tooltipMessage: PropTypes.string,
    type: PropTypes.string
};

export default Input;
