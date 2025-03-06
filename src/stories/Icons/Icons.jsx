import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DSIcon from '../components/Icon';

export const Icon = ({ 
    color,
    customClasses,
    name,
    isIllustrative,
    isLegacy,
    size
}) => {
    return (
        <DSIcon
            color={color}
            customClasses={classNames(customClasses)}
            name={name}
            isIllustrative={isIllustrative}
            isLegacy={isLegacy}
            size={size}
        />
    );
};

Icon.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    name: PropTypes.string,
    isIllustrative: PropTypes.bool,
    isLegacy: PropTypes.bool,
    size: PropTypes.string
};