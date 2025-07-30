'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import HeaderSubNav from './HeaderSubNav';

const QDSHeader = ({
    button,
    customClasses,
    logo,
    logoSize,
    logoUrl,
    noMargins,
    noMaxWidth,
    navData,
    notificationsTitle,
    subNavData,
    userAvatarInitial,
    userMenuContent,
    userName,
    userNotifications
}) => {
    return (
        <header className="ds-header">
            <div
                className={classNames('ds-grid', customClasses, {
                    '--margins': !noMargins,
                    '--max-width': !noMaxWidth
                })}
            >
                <a
                    className={classNames('ds-brand-wrapper', {
                        [`--${logoSize}`]: logoSize
                    })}
                    href={logoUrl || '/'}
                >
                    <img src={logo} alt="logo" />
                </a>

                <HeaderNav
                    button={button}
                    navData={navData}
                    notificationsTitle={notificationsTitle}
                    userAvatarInitial={userAvatarInitial}
                    userMenuContent={userMenuContent}
                    userName={userName}
                    userNotifications={userNotifications}
                />
            </div>

            {subNavData && subNavData.length > 0 && (
                <HeaderSubNav
                    customClasses={customClasses}
                    noMargins={noMargins}
                    noMaxWidth={noMaxWidth}
                    subNavData={subNavData}
                />
            )}
        </header>
    );
};

QDSHeader.propTypes = {
    button: PropTypes.object,
    customClasses: PropTypes.string,
    logo: PropTypes.string,
    logoSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    logoUrl: PropTypes.string,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool,
    navData: PropTypes.array,
    notificationsTitle: PropTypes.string,
    subNavData: PropTypes.array,
    userAvatarInitial: PropTypes.string,
    userMenuContent: PropTypes.node,
    userName: PropTypes.string,
    userNotifications: PropTypes.array
};

export default QDSHeader;
