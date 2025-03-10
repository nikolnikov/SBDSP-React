import React from 'react';
import DSRadioButton from '../components/RadioButton';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSRadioButton = ({ 
    customClasses = [],
    inputId,
    isChecked = false,
    isDisabled = false,
    label,
    name,
    onChange,
    value
}) => {
    return (
        <DSRadioButton
            customClasses={classNames(customClasses)}
            inputId={inputId}
            isChecked={isChecked}
            isDisabled={isDisabled}
            label={label}
            name={name}
            onChange={onChange}
            value={value}
        />
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