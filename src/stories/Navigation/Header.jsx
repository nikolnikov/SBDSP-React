import React from 'react';
import DSHeader from '../components/Header';
import PropTypes from 'prop-types';

export const Header = ({ 
    button,
    customClasses,
    logo,
    logoSize,
    noMargins = false,
    noMaxWidth = false,
    navData,
    subNavData,
    userAvatarInitial,
    userMenuContent,
    userName
}) => {
    return (
        <DSHeader
            button={button}
            customClasses={customClasses}
            logo={logo}
            logoSize={logoSize}
            noMargins={noMargins}
            noMaxWidth={noMaxWidth}
            navData={navData}
            subNavData={subNavData}
            userAvatarInitial={userAvatarInitial}
            userMenuContent={userMenuContent}
            userName={userName}
        />
    );
};

Header.propTypes = {
    button: PropTypes.object,
    customClasses: PropTypes.string,
    logo: PropTypes.string,
    logoSize: PropTypes.string,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    navData: PropTypes.array,
    subNavData: PropTypes.array,
    userAvatarInitial: PropTypes.string,
    userMenuContent: PropTypes.node,
    userName: PropTypes.string
};