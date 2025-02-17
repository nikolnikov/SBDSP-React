import React, { useState } from 'react';
import DSInputMultiSelect from '../components/InputMultiSelect';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const InputSelectMulti = ({
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    menuClass,
    isRequired = false,
    label,
    onChange,
    options,
    placeholder,
    selectedValue = [],
    tooltipMessage
}) => {
    const [value, setValue] = useState(selectedValue || []);

    const updateValue = e => {
        const selectedValue = e?.target?.value;
        if (selectedValue) {
            setValue(
                Array.isArray(selectedValue) ? selectedValue : [selectedValue]
            );
        }

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <DSInputMultiSelect
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            menuClass={menuClass}
            isRequired={isRequired}
            label={label}
            onChange={updateValue}
            options={options}
            placeholder={placeholder}
            selectedValue={Array.isArray(value) ? value : []}
            tooltipMessage={tooltipMessage}
        />
    );
};

InputSelectMulti.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    menuClass: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    selectedValue: PropTypes.arrayOf(PropTypes.string),
    tooltipMessage: PropTypes.string
};