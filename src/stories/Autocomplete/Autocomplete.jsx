import React from 'react';
import DSAutocomplete from '../components/Autocomplete';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const QDSAutocomplete = ({ 
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    isRequired = false,
    placeholder,
    searchIcon = false,
    label,
    maxWidth,
    optionList
}) => {
    const getValue = selection => {
        console.log(selection);
    };

    return (
        <DSAutocomplete
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            searchIcon={searchIcon}
            label={label}
            placeholder={placeholder}
            isRequired={isRequired}
            maxWidth={maxWidth}
            getSelection={getValue}
            optionList={optionList}
        />
    );
};

QDSAutocomplete.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    placeholder: PropTypes.string,
    searchIcon: PropTypes.bool,
    label: PropTypes.string,
    maxWidth: PropTypes.number,
    getSelection: PropTypes.func,
    optionList: PropTypes.array
};