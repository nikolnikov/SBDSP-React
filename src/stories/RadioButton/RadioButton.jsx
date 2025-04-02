import React, { useState } from 'react';
import DSRadioGroup from '../components/RadioGroup';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSRadioGroup = ({ 
    customClasses,
    groupLabel,
    groupName,
    isVertical = false,
    onChange,
    radioOptions
}) => {
    return (
        <DSRadioGroup
            customClasses={classNames(customClasses)}
            groupLabel={groupLabel}
            groupName={groupName}
            isVertical={isVertical}
            onChange={onChange}
            radioOptions={radioOptions}
        />
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