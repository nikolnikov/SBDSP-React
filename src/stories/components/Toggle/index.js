'use-client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Toggle = ({
    isChecked,
    customClasses = [],
    isDisabled,
    inputId,
    leftLabel,
    name,
    onChange,
    rightLabel
}) => {
    return (
        <div
            className={classNames('ds-toggle-switch', customClasses, {
                '--disabled': isDisabled
            })}
        >
            {leftLabel && (
                <div className="ds-toggle-switch__label" aria-label={inputId}>
                    {leftLabel}
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
            {rightLabel && (
                <div className="ds-toggle-switch__label" aria-label={inputId}>
                    {rightLabel}
                </div>
            )}
        </div>
    );
};

Toggle.propTypes = {
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    inputId: PropTypes.string.isRequired,
    leftLabel: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    rightLabel: PropTypes.string
};

export default Toggle;
