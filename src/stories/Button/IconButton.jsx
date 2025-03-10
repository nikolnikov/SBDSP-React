import React from 'react';
import DSIconButton from '../components/Button/IconButton.index'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSIconButton = ({ 
    clickHandler,
    customClasses = [],
    icon,
    isDestructive,
    isDisabled,
    isInverse,
    size = 'lg',
    tooltip,
    tooltipPlacement = 'top'
}) => {  
    return (
        <DSIconButton
            clickHandler={clickHandler}    
            customClasses={classNames(customClasses)}
            icon={icon}
            isDestructive={isDestructive}
            isDisabled={isDisabled}
            isInverse={isInverse}
            size={size}
            tooltip={tooltip}
            tooltipPlacement={tooltipPlacement}
        />
    );
};

QDSIconButton.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    tooltip: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};