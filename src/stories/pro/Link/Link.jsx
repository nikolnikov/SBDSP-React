import React from 'react';
import DSLink from '../components/Link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.css';

export const Link = ({ 
    customClasses = [],
    iconLeft,
    iconRight,
    isDestructive = false,
    isInverse = false,
    label,
    newWindow = false,
    url
}) => {
    return (
        <DSLink
            customClasses={classNames(customClasses)}
            iconLeft={iconLeft}
            iconRight={iconRight}
            isDestructive={isDestructive}
            isInverse={isInverse}
            label={label}
            newWindow={newWindow}
            url={url}
        />
    );
};

Link.propTypes = {
    customClasses: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    isDestructive: PropTypes.bool,
    isInverse: PropTypes.bool,
    label: PropTypes.string.isRequired,
    newWindow: PropTypes.bool,
    url: PropTypes.string
};