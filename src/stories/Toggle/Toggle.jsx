import React from 'react';
import DSToggle from '../components/Toggle';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSToggle = ({ 
    customClasses = [],
    isChecked = false,
    isDisabled = false,
    inputId,
    label,
    labelPosition = 'after',
    name,
    onChange,
}) => {
    return (
        <DSToggle
            customClasses={classNames(customClasses)}
            isChecked={isChecked}
            isDisabled={isDisabled}
            inputId={inputId}
            label={label}
            labelPosition={labelPosition}
            name={name}
            onChange={onChange}
        />
    );
};

QDSToggle.propTypes = {
    customClasses: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['before', 'after']),
    name: PropTypes.string,
    onChange: PropTypes.func,
};