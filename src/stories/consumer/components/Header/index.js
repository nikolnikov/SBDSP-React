'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import HeaderTopBar from './HeaderTopBar';

const Header = ({
    children,
    customClasses = [],
    logo,
    margins,
    maxWidth,
    navData,
    topBarData
}) => {
    return (
        <div className="ds-header__wrapper">
            {topBarData && <HeaderTopBar topBarData={topBarData} />}

            <header className="ds-header --react">
                <div
                    className={classNames('ds-grid', customClasses, {
                        '--margins': margins,
                        '--max-width': maxWidth
                    })}
                >
                    <a className="ds-header__logo" href="/">
                        <img src={logo} alt="logo" />
                    </a>

                    {navData ? (
                        <HeaderNav
                            children={children}
                            navData={navData}
                            topBarData={topBarData}
                        />
                    ) : (
                        <div className="ds-header__right">
                            <div className="ds-header__actions">{children}</div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

Header.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.array,
    logo: PropTypes.string,
    margins: PropTypes.bool,
    maxWidth: PropTypes.bool,
    navData: PropTypes.array,
    topBarData: PropTypes.array
};

export default Header;
