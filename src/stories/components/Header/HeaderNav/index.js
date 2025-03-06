import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';

const HeaderNav = ({
    button,
    navData,
    userAvatarInitial,
    userMenuContent,
    userName
}) => {
    const [userMenu, setUserMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const navRef = useRef(null);

    const userMenuToggle = () => {
        setUserMenu(!userMenu);
    };

    const menuToggle = idx => {
        setMenuOpen(prevState => (prevState === idx ? null : idx));
    };

    const handleClickOutside = useCallback(event => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(null);
        }

        setUserMenu(false);
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <nav className="ds-header__nav" ref={navRef}>
            <div className="ds-header__nav-item-wrapper">
                {navData &&
                    navData.length > 0 &&
                    navData.map((navItem, idx) => (
                        <React.Fragment key={idx}>
                            <div
                                className={classNames('ds-header__nav-item', {
                                    '--active': menuOpen === idx
                                })}
                            >
                                <button
                                    onClick={
                                        navItem.route
                                            ? () =>
                                                  (window.location.href =
                                                      navItem.route)
                                            : () => menuToggle(idx)
                                    }
                                >
                                    {navItem.icon && (
                                        <span
                                            className={`ds-icon--${navItem.icon}`}
                                            aria-label={navItem.label}
                                        ></span>
                                    )}
                                    {navItem.label}
                                    <span
                                        className="ds-icon--caret-down"
                                        aria-label="Dropdown"
                                    ></span>
                                </button>

                                {navItem.subNav && (
                                    <div className="ds-header__dropdown">
                                        {navItem.subNav.map(
                                            (subNavItem, subIdx) => (
                                                <button
                                                    key={subIdx}
                                                    className="ds-header__dropdown-item"
                                                    onClick={() =>
                                                        (window.location.href =
                                                            subNavItem.route)
                                                    }
                                                >
                                                    {subNavItem.icon && (
                                                        <span
                                                            className={`ds-icon--${subNavItem.icon}`}
                                                            aria-label={
                                                                subNavItem.label
                                                            }
                                                        ></span>
                                                    )}
                                                    {subNavItem.label}
                                                </button>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
            </div>

            {button && button}

            {userAvatarInitial && (
                <div
                    className={classNames('ds-header__account', {
                        '--opened': userMenu
                    })}
                >
                    <button
                        className="ds-header__account-trigger"
                        aria-label="account menu"
                        onClick={userMenuToggle}
                    >
                        <div className="ds-avatar --solid --medium">
                            {userAvatarInitial}
                        </div>
                        {userName && (
                            <div className="ds-header__account-name">
                                {userName}
                            </div>
                        )}
                        <span className="ds-icon--caret-down"></span>
                    </button>

                    {userMenu && userMenuContent && (
                        <div className="ds-header__dropdown">
                            {userMenuContent}
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default HeaderNav;
