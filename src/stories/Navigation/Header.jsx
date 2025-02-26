import React from 'react';
import DSHeader from '../components/Header';
import PropTypes from 'prop-types';

export const Header = ({ 
    buttonClickHandler,
    buttonLabel,
    customContent,
    hasNav = true,
    logo,
    logoSize,
    navData,
    noMargins = false,
    noMaxWidth = false,
    secondaryButton = false,
    userAvatarInitial,
    userMenuContent,
    userName
}) => {
    return (
        <DSHeader
            buttonClickHandler={buttonClickHandler}
            buttonLabel={buttonLabel}
            customContent={customContent}
            hasNav={hasNav}
            logo={logo}
            logoSize={logoSize}
            noMargins={noMargins}
            navData={navData}
            secondaryButton={secondaryButton}
            noMaxWidth={noMaxWidth}
            userAvatarInitial={userAvatarInitial}
            userMenuContent={userMenuContent}
            userName={userName}
        />
    );
};

Header.propTypes = {
    buttonClickHandler: PropTypes.func,
    buttonLabel: PropTypes.string,
    customContent: PropTypes.node,
    hasNav: PropTypes.bool,
    logo: PropTypes.string,
    logoSize: PropTypes.string,
    navData: PropTypes.array,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    secondaryButton: PropTypes.bool,
    userAvatarInitial: PropTypes.string,
    userMenuContent: PropTypes.node,
    userName: PropTypes.string
};