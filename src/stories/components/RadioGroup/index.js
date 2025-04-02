import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const QDSRadioGroup = ({
    customClasses,
    groupLabel,
    groupName,
    isVertical,
    onChange,
    radioOptions
}) => {
    return (
        <div
            className={classNames('ds-input__radio-group', customClasses, {
                '--vertical': isVertical
            })}
        >
            {groupLabel && (
                <label>
                    <span>{groupLabel}</span>
                </label>
            )}

            {radioOptions.map((option, index) => (
                <div
                    key={index}
                    className={classNames('ds-input__radio', {
                        '--disabled': option.isDisabled
                    })}
                >
                    <input
                        disabled={option.isDisabled}
                        id={option.inputId}
                        type="radio"
                        name={groupName}
                        onChange={() => onChange(option.value)}
                        value={option.value}
                        {...(option.isChecked && { defaultChecked: true })}
                    />
                    <label htmlFor={option.inputId}>{option.label}</label>
                </div>
            ))}
        </div>
    );
};

QDSRadioGroup.propTypes = {
    customClasses: PropTypes.string,
    groupLabel: PropTypes.string,
    isVertical: PropTypes.bool,
    groupName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    radioOptions: PropTypes.arrayOf(
        PropTypes.shape({
            inputId: PropTypes.string.isRequired,
            isChecked: PropTypes.bool,
            isDisabled: PropTypes.bool,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired
};

export default QDSRadioGroup;
