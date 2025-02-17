import React from 'react';
import DSHeader from '../components/Header';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const NavHeader = ({ 
    buttonClickHandler,
    buttonLabel,
    customContent,
    hasNav = true,
    logo,
    logoSize,
    margins,
    navData,
    secondaryButton = false,
    maxWidth = true,
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
            margins={margins}
            navData={navData}
            secondaryButton={secondaryButton}
            maxWidth={maxWidth}
            userAvatarInitial={userAvatarInitial}
            userMenuContent={userMenuContent}
            userName={userName}
        />
    );
};

NavHeader.propTypes = {
    buttonClickHandler: PropTypes.func,
    buttonLabel: PropTypes.string,
    customContent: PropTypes.node,
    hasNav: PropTypes.bool,
    logo: PropTypes.string,
    logoSize: PropTypes.string,
    margins: PropTypes.bool,
    navData: PropTypes.array,
    secondaryButton: PropTypes.bool,
    maxWidth: PropTypes.bool,
    userAvatarInitial: PropTypes.string,
    userMenuContent: PropTypes.node,
    userName: PropTypes.string
};