import React from 'react';
import DSToggle from '../components/Toggle';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const Toggle = ({ 
    customClasses = [],
    isChecked = false,
    isDisabled = false,
    inputId,
    leftLabel,
    name,
    onChange,
    rightLabel
}) => {
    return (
        <DSToggle
            customClasses={classNames(customClasses)}
            isChecked={isChecked}
            isDisabled={isDisabled}
            inputId={inputId}
            leftLabel={leftLabel}
            name={name}
            onChange={onChange}
            rightLabel={rightLabel}
        />
    );
};

Toggle.propTypes = {
    customClasses: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    inputId: PropTypes.string.isRequired,
    leftLabel: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    rightLabel: PropTypes.string
};