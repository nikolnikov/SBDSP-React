import React from 'react';
import DSFooter from '../components/Footer';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Footer = ({ 
    customClasses,
    hideLogo = false,
    hideNav = false,
    noMargins = false,
    noMaxWidth = false,
}) => {
    return (
        <DSFooter
            customClasses={classNames(customClasses)}
            hideLogo={hideLogo}
            hideNav={hideNav}
            noMargins={noMargins}
            noMaxWidth={noMaxWidth}
        />
    );
};

Footer.propTypes = {
    customClasses: PropTypes.string,
    hideLogo: PropTypes.bool,
    hideNav: PropTypes.bool,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
};