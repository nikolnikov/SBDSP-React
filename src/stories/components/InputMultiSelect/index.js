'use client';

import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import QDSIconButton from '../Button/IconButton.index';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSInputMultiSelect = ({
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
    selectedValue = [],
    tooltip
}) => {
    const [selected, setSelected] = useState(selectedValue);

    const handleSelect = label => {
        if (selected.includes(label)) {
            setSelected(selected.filter(item => item !== label));
        } else {
            setSelected([...selected, label]);
        }
        onChange(selected);
    };

    const renderValue = () => {
        if (selected.length === 0) {
            return placeholder;
        }
        return selected.length > 2 ? (
            <>
                <div className="ds-dropdown__selected-wrapper">
                    {selected.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="ds-dropdown__selected">
                            {item}
                        </span>
                    ))}
                </div>
                <span className="ds-dropdown__selected-plus">
                    +{selected.length - 2}
                </span>
            </>
        ) : (
            <div className="ds-dropdown__selected-wrapper">
                {selected.map((item, idx) => (
                    <span key={idx} className="ds-dropdown__selected">
                        {item}
                    </span>
                ))}
            </div>
        );
    };

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
                multiple
                onChange={value => onChange(value)}
                renderValue={renderValue}
                value={selected}
                variant="standard"
            >
                {options.map((label, idx) => (
                    <MenuItem
                        className={`ds-dropdown__item ${
                            selected.includes(label) ? 'selected' : ''
                        }`}
                        key={idx}
                        value={label}
                        onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleSelect(label);
                            }
                        }}
                    >
                        <label className="ds-input__checkbox">
                            <input
                                type="checkbox"
                                checked={selected.includes(label)}
                                onChange={() => handleSelect(label)}
                            />
                            <span></span>
                            {label}
                        </label>
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

QDSInputMultiSelect.propTypes = {
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
    tooltip: PropTypes.string
};

export default QDSInputMultiSelect;
