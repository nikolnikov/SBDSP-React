import React from 'react';
import DSButton from '../components/Button'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsc.scss';

export const DSCIconButton = ({ 
    clickHandler = () => console.log('Button Clicked'),
    customClasses = [],
    iconClass,
    isDisabled = false,
    isInverse = false,
    size = 'large',
    type = 'icon'
}) => {  
    return (
        <DSButton
            clickHandler={clickHandler}
            customClasses={classNames(customClasses)}
            iconClass={iconClass}
            isDisabled={isDisabled}
            isInverse={isInverse}
            size={size}
            type={type}
        />
    );
};

DSCIconButton.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    iconClass: PropTypes.string,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['icon'])
};
