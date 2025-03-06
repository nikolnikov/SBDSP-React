'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import HeaderSubNav from './HeaderSubNav';

const Header = ({
    button,
    customClasses,
    logo,
    logoSize,
    noMargins,
    noMaxWidth,
    navData,
    subNavData,
    userAvatarInitial,
    userMenuContent,
    userName
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
                    href="/"
                >
                    <img src={logo} alt="logo" />
                </a>

                <HeaderNav
                    button={button}
                    navData={navData}
                    userAvatarInitial={userAvatarInitial}
                    userMenuContent={userMenuContent}
                    userName={userName}
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

export default Header;
