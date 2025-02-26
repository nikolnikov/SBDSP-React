import React from 'react';
import DSButton from '../components/Button'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const IconButton = ({ 
    customClasses = null,
    iconClass = null,
    isDestructive = false,
    isDisabled = false,
    isInverse = false,
    size = 'large',
    type = 'icon',
}) => {  
    return (
        <DSButton
            clickHandler={() => console.log('Button Clicked')}
            customClasses={classNames(customClasses)}
            iconClass={iconClass}
            isDestructive={isDestructive}
            isDisabled={isDisabled}
            isInverse={isInverse}
            size={size}
            type={type}
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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['icon']),
};
