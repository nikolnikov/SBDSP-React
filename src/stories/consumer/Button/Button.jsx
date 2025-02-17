import React from 'react';
import DSButton from '../components/Button'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsc.scss';

export const DSCButton = ({ 
    clickHandler,
    customClasses = [],
    iconClass,
    iconRight,
    isDisabled,
    isInverse,
    isDestructive,
    isDownload,
    label,
    size = 'large',
    type = 'primary'
}) => {  
    return (
        <DSButton
            clickHandler={clickHandler}
            customClasses={classNames(customClasses)}
            iconClass={iconClass}
            iconRight={iconRight}
            isDisabled={isDisabled}
            isInverse={isInverse}
            isDestructive={isDestructive}
            isDownload={isDownload}
            label={label}
            size={size}
            type={type}
        />
    );
};

DSCButton.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    iconClass: PropTypes.string,
    iconRight: PropTypes.string,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isDownload: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'icon'])
};
