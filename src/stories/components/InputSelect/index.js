'use client';

import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import QDSIconButton from '../Button/IconButton.index';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSInputSelect = ({
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
    tooltip
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
                {tooltip && (
                    <QDSIconButton
                        customClasses="ds-tooltip"
                        icon="info"
                        size="sm"
                        tooltip={tooltip}
                    />
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
                <div className="ds-input__error" role="alert">
                    {errorMessage}
                </div>
            )}
            {hintMessage && !errorMessage && (
                <div className="ds-input__hint" role="tooltip">
                    {hintMessage}
                </div>
            )}
        </div>
    );
};

QDSInputSelect.propTypes = {
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
    tooltip: PropTypes.string
};

export default QDSInputSelect;
