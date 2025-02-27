import React from 'react';
import DSIconButton from '../components/Button/IconButton.index'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const IconButton = ({ 
    customClasses = null,
    iconClass = null,
    isDestructive = false,
    isDisabled = false,
    isInverse = false,
    size = 'large'
}) => {  
    return (
        <DSIconButton
            clickHandler={() => console.log('Button Clicked')}
            customClasses={classNames(customClasses)}
            iconClass={iconClass}
            isDestructive={isDestructive}
            isDisabled={isDisabled}
            isInverse={isInverse}
            size={size}
        />
    );
};

IconButton.propTypes = {
    customClasses: PropTypes.string,
    iconClass: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};