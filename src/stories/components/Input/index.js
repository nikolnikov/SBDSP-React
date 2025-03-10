'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';
import QDSIconButton from '../Button/IconButton.index';
import QDSLoader from '../Loader';

const QDSInput = ({
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
    tooltip,
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

                {tooltip && (
                    <QDSIconButton
                        customClasses="ds-tooltip"
                        icon="info"
                        size="sm"
                        tooltip={tooltip}
                    />
                )}
            </label>
            <div className="ds-flex --start-center --row">
                {iconLeft && <QDSIcon customClasses="--left" name={iconLeft} />}
                <input
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={value => onChange(value)}
                />
                {iconRight && (
                    <QDSIcon customClasses="--right" name={iconRight} />
                )}
                {isLoading && (
                    <QDSLoader customClasses="ds-loading --right" isSmall />
                )}
            </div>

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

QDSInput.propTypes = {
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
    tooltip: PropTypes.string,
    type: PropTypes.string
};

export default QDSInput;
