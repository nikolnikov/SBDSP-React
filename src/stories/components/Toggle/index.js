'use-client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSToggle = ({
    isChecked,
    customClasses = [],
    isDisabled,
    inputId,
    label,
    labelPosition = 'after',
    name,
    onChange
}) => {
    return (
        <div
            className={classNames('ds-toggle-switch', customClasses, {
                '--disabled': isDisabled
            })}
        >
            {label && labelPosition === 'before' && (
                <div className="ds-toggle-switch__label" aria-label={inputId}>
                    {label}
                </div>
            )}
            <label className="ds-toggle-switch__container" htmlFor={inputId}>
                <input
                    disabled={isDisabled}
                    type="checkbox"
                    id={inputId}
                    name={name}
                    {...(isChecked && { defaultChecked: true })}
                    onChange={onChange}
                />
                <div className="ds-toggle-switch__slider"></div>
            </label>
            {label && labelPosition === 'after' && (
                <div className="ds-toggle-switch__label" aria-label={inputId}>
                    {label}
                </div>
            )}
        </div>
    );
};

QDSToggle.propTypes = {
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['before', 'after']),
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default QDSToggle;
