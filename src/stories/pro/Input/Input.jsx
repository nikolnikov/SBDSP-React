import React from 'react';
import DSInput from '../components/Input';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const Input = ({
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    isLoading = false,
    isRequired = false,
    label,
    leftIcon,
    name,
    onChange = () => {},
    placeholder,
    rightIcon,
    tooltipMessage,
    type
}) => {
    return (
        <DSInput
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isRequired={isRequired}
            label={label}
            leftIcon={leftIcon}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            rightIcon={rightIcon}
            tooltipMessage={tooltipMessage}
            type={type}
        />
    );
};

Input.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string.isRequired,
    leftIcon: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rightIcon: PropTypes.string,
    tooltipMessage: PropTypes.string,
    type: PropTypes.string
};