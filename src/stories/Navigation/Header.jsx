import React from 'react';
import DSHeader from '../components/Header';
import PropTypes from 'prop-types';

export const QDSHeader = ({ 
    button,
    customClasses,
    logo,
    logoSize,
    noMargins = false,
    noMaxWidth = false,
    navData,
    notificationsTitle,
    subNavData,
    userAvatarInitial,
    userMenuContent,
    userName,
    userNotifications
}) => {
    return (
        <DSHeader
            button={button}
            customClasses={customClasses}
            logo={logo}
            logoSize={logoSize}
            navData={navData}
            noMargins={noMargins}
            noMaxWidth={noMaxWidth}
            notificationsTitle={notificationsTitle}
            subNavData={subNavData}
            userAvatarInitial={userAvatarInitial}
            userMenuContent={userMenuContent}
            userName={userName}
            userNotifications={userNotifications}
        />
    );
};

QDSHeader.propTypes = {
    button: PropTypes.object,
    customClasses: PropTypes.string,
    logo: PropTypes.string,
    logoSize: PropTypes.string,
    navData: PropTypes.array,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    notificationsTitle: PropTypes.string,
    subNavData: PropTypes.array,
    userAvatarInitial: PropTypes.string,
    userMenuContent: PropTypes.node,
    userName: PropTypes.string,
    userNotifications: PropTypes.array
};