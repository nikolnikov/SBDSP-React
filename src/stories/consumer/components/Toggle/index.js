'use-client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Toggle = ({
    isChecked,
    customClasses = [],
    isDisabled,
    inputId,
    label,
    name,
    onChange
}) => {
    return (
        <div
            className={classNames('ds-toggle-switch', customClasses, {
                '--disabled': isDisabled
            })}
        >
            <label htmlFor={inputId}>
                <input
                    type="checkbox"
                    name={name}
                    id={inputId}
                    {...(isChecked && { defaultChecked: true })}
                    onChange={onChange}
                />
                <div className="--slider"></div>
            </label>
            <span>{label}</span>
        </div>
    );
};

Toggle.propTypes = {
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default Toggle;
