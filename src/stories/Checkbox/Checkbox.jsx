import React from 'react';
import DSCheckbox from '../components/Checkbox';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSCheckbox = ({ 
    inputId,
    label,
    name,
    isChecked = false,
    customClasses = [],
    isDisabled = false,
    isIndeterminate = false,
    isRequired = false,
    onChange,
    value
}) => {
    
    return (
        <DSCheckbox
            inputId={inputId}
            label={label}
            name={name}
            isChecked={isChecked}
            customClasses={classNames(customClasses)}
            isDisabled={isDisabled}
            isIndeterminate={isIndeterminate}
            isRequired={isRequired}
            onChange={onChange}
            value={value}
        />
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