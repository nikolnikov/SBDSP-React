import React from 'react';
import DSLink from '../components/Link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSLink = ({ 
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

QDSLink.propTypes = {
    customClasses: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    isDestructive: PropTypes.bool,
    isInverse: PropTypes.bool,
    label: PropTypes.string.isRequired,
    newWindow: PropTypes.bool,
    url: PropTypes.string
};