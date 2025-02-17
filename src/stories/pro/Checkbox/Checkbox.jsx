import React from 'react';
import DSCheckbox from '../components/Checkbox';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const Checkbox = ({ 
    inputId,
    label,
    name,
    isChecked = false,
    customClasses = [],
    isDisabled = false,
    isIndeterminate = false,
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
            onChange={onChange}
            value={value}
        />
    );
};

Checkbox.propTypes = {
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isIndeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
};