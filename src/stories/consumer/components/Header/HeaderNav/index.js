'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../Button';

const HeaderNav = ({ children, navData, topBarData }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSubNavVisible, setIsSubNavVisible] = useState(false);

    const toggleNav = () => {
        if (window.innerWidth < 1024) {
            setIsNavVisible(!isNavVisible);
        }
    };

    const toggleSubNav = () => {
        setIsSubNavVisible(!isSubNavVisible);
    };

    return (
        <>
            <nav
                className={`ds-header__nav ${isNavVisible ? 'show' : ''}`}
                role="navigation"
            >
                {(navData || []).map((navItem, idx) =>
                    navItem.subNav ? (
                        <div
                            key={idx}
                            className={classNames(
                                'ds-header__nav-item --dropdown'
                            )}
                        >
                            <a href={navItem.route} onClick={toggleSubNav}>
                                {navItem.label}
                            </a>

                            <div
                                className={`ds-header__subnav ${
                                    isSubNavVisible ? 'show' : ''
                                }`}
                                role="navigation"
                            >
                                <div className="ds-row --max-width --margins">
                                    <div className="ds-header__subnav-content">
                                        <a
                                            onClick={toggleSubNav}
                                            className="ds-link --icons"
                                        >
                                            <span
                                                className="ds-icon--caret-left"
                                                aria-label="caret-left"
                                            ></span>
                                            <span>Back</span>
                                        </a>

                                        <div className="ds-header__subnav-title">
                                            {navItem.label}
                                        </div>

                                        <ul className="ds-header__subnav-links">
                                            {navItem.subNav.map(
                                                (subNavItem, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={
                                                                subNavItem.route
                                                            }
                                                            className="ds-link"
                                                        >
                                                            {subNavItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        {navItem.image && (
                                            <div className="ds-header__subnav-img">
                                                <img src={navItem.image} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <a
                            key={idx}
                            href={navItem.route}
                            className={classNames('ds-header__nav-item')}
                        >
                            {navItem.label}
                        </a>
                    )
                )}

                {topBarData && (
                    <div className="ds-topbar">
                        {(topBarData || []).map((navItem, idx) => (
                            <a
                                key={idx}
                                href={navItem.route}
                                className="ds-link"
                            >
                                {navItem.label}
                            </a>
                        ))}

                        <Button customClasses="ds-topbar__account" type="icon">
                            <span
                                className="ds-icon--user-circle"
                                aria-label="user-circle"
                            ></span>
                            <span>LS</span>
                        </Button>
                    </div>
                )}
            </nav>

            <div className="ds-header__right">
                <div className="ds-header__actions">{children}</div>

                <div className="ds-header__mobile">
                    <Button
                        aria-label="Navigation"
                        clickHandler={toggleNav}
                        type="icon"
                    >
                        <span
                            aria-label="Navigation"
                            className={`${
                                isNavVisible
                                    ? 'ds-icon--close'
                                    : 'ds-icon--menu'
                            }`}
                        ></span>
                    </Button>
                </div>
            </div>
        </>
    );
};

HeaderNav.propTypes = {
    children: PropTypes.node,
    navData: PropTypes.array,
    topBarData: PropTypes.array
};

export default HeaderNav;
