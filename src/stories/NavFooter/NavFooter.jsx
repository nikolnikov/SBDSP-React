import React from 'react';
import DSFooter from '../../components/Footer';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const NavFooter = ({ 
    customClasses,
    logo = true,
    hasNav = true,
    margins = true,
    maxWidth = true,
}) => {
    return (
        <DSFooter
            customClasses={classNames(customClasses)}
            logo={logo}
            hasNav={hasNav}
            margins={margins}
            maxWidth={maxWidth}
        />
    );
};

NavFooter.propTypes = {
    customClasses: PropTypes.string,
    logo: PropTypes.bool,
    hasNav: PropTypes.bool,
    margins: PropTypes.bool,
    maxWidth: PropTypes.bool,
};