import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiAutocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';

export const Autocomplete = ({ 
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    searchIcon = false,
    label,
    placeholder,
    isRequired = false,
    maxWidth,
    getSelection,
    optionList,
    ...props
}) => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState(null);

    if (!optionList) {
        throw new Error('You must provide an array list of options');
    }

    useEffect(() => {
        getSelection(inputValue);
    }, [getSelection, inputValue]);

    const autocompleteClass = ['ds-autocomplete'];

    return (
        <MuiAutocomplete
            disabled={isDisabled}
            id={inputId}
            onInputChange={(e, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onChange={(e, newValue) => {
                setValue(newValue);
            }}
            options={optionList}
            sx={maxWidth && { width: maxWidth }}
            PopperComponent={props => (
                <Popper {...props} className="ds-menu"></Popper>
            )}
            value={value}
            renderInput={params => (
                <div
                    className={classNames('ds-input', customClasses, {
                        '--disabled': isDisabled,
                        '--error': hasError,
                        '--icons --icon-left': searchIcon,
                        '--required': isRequired
                    })}
                    ref={params.InputProps.ref}
                >
                    {label && (
                        <label
                            aria-label={label}
                            className="ds-input__label"
                            htmlFor={inputId}
                        >
                            <span>{label}</span>
                        </label>
                    )}

                    <div className="ds-flex --start-center --row">
                        {searchIcon && (
                            <span className="ds-icon--search --left"></span>
                        )}

                        <input
                            placeholder={placeholder}
                            type="text"
                            {...params.inputProps}
                        />
                    </div>

                    {errorMessage && (
                        <div className="ds-input__error">{errorMessage}</div>
                    )}
                    {hintMessage && (
                        <div className="ds-input__hint">{hintMessage}</div>
                    )}
                </div>
            )}
        />
    );
};

Autocomplete.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    searchIcon: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
    maxWidth: PropTypes.number,
    getSelection: PropTypes.func,
    optionList: PropTypes.array
};