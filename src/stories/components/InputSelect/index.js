'use client';

import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip from '../Tooltip';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const InputSelect = ({
    customClasses = [],
    errorMessage,
    hasError,
    hintMessage,
    inputId,
    isDisabled,
    menuClass,
    isRequired,
    label,
    onChange,
    options,
    placeholder,
    selectedValue,
    tooltipMessage
}) => {
    return (
        <div
            className={classNames('ds-input', customClasses, {
                '--disabled': isDisabled,
                '--required': isRequired,
                '--error': hasError
            })}
        >
            <label className="ds-input__label" htmlFor={inputId}>
                {label && <span>{label}</span>}
                {tooltipMessage && (
                    <Tooltip title={tooltipMessage}>
                        <button
                            className="ds-tooltip ds-button --icon --sm"
                            aria-label="tooltip"
                        >
                            <span
                                className="ds-icon--info"
                                aria-label="info filled"
                                role="img"
                            />
                        </button>
                    </Tooltip>
                )}
            </label>
            <Select
                className="ds-input-select"
                disabled={isDisabled}
                displayEmpty
                inputProps={{ id: inputId }}
                labelId={inputId}
                MenuProps={{
                    classes: {
                        paper: `ds-dropdown ${menuClass ? menuClass : ''}`
                    }
                }}
                onChange={value => onChange(value)}
                renderValue={selected => {
                    if (selected.length === 0) {
                        return placeholder;
                    }

                    return options.map(label =>
                        label === selected ? label : ''
                    );
                }}
                value={selectedValue || ''}
                variant="standard"
            >
                {options.map((label, idx) => (
                    <MenuItem
                        className="ds-dropdown__item"
                        key={idx}
                        value={label}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Select>
            {errorMessage && (
                <div className="ds-input__error">{errorMessage}</div>
            )}
            {hintMessage && <div className="ds-input__hint">{hintMessage}</div>}
        </div>
    );
};

InputSelect.propTypes = {
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
    selectedValue: PropTypes.string,
    tooltipMessage: PropTypes.string
};

export default InputSelect;
