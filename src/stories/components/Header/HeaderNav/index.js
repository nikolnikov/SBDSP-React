import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import QDSIcon from '../../Icon';
import QDSIconButton from '../../Button/IconButton.index';

const HeaderNav = ({
    button,
    navData,
    notificationsTitle,
    userNotifications,
    userAvatarInitial,
    userMenuContent,
    userName
}) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [notificationsOpen, setNotificationsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const notificationsRef = useRef(null);
    const userMenuRef = useRef(null);

    const userMenuToggle = () => {
        setUserMenuOpen(prevState => !prevState);
        setMenuOpen(null);
    };

    const userNotificationsToggle = () => {
        setNotificationsMenuOpen(prevState => !prevState);
        setMenuOpen(null);
    };

    const menuToggle = idx => {
        setMenuOpen(prevState => (prevState === idx ? null : idx));
    };

    const handleClickOutside = useCallback(event => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(null);
        }

        if (
            userMenuRef.current &&
            !userMenuRef.current.contains(event.target)
        ) {
            setUserMenuOpen(false);
            setNotificationsMenuOpen(false);
        }

        if (
            notificationsRef.current &&
            !notificationsRef.current.contains(event.target)
        ) {
            setNotificationsMenuOpen(false);
        }
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
                                        <QDSIcon name={navItem.icon} />
                                    )}
                                    {navItem.label}
                                    {navItem.subNav && (
                                        <QDSIcon name="caret-down" />
                                    )}
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
                                                        <QDSIcon
                                                            name={
                                                                subNavItem.icon
                                                            }
                                                        />
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

                {userNotifications && userNotifications.length > 0 && (
                    <div
                        className={classNames('ds-header__nav-item', {
                            '--active': notificationsOpen
                        })}
                        ref={notificationsRef}
                    >
                        <button onClick={userNotificationsToggle}>
                            <QDSIcon name="bell" />
                            Notifications
                            <span className="ds-icon--caret-down"></span>
                        </button>

                        {notificationsOpen && (
                            <div className="ds-header__dropdown --notifications">
                                {notificationsTitle && (
                                    <h4>{notificationsTitle}</h4>
                                )}
                                {userNotifications.map((notification, idx) => (
                                    <div
                                        key={idx}
                                        className="ds-header__dropdown-item"
                                    >
                                        <QDSIcon name="bell" />

                                        <div className="ds-header__notification-content">
                                            <b>{notification.title}</b>
                                            <p>{notification.message}</p>
                                        </div>

                                        <QDSIconButton
                                            icon="close"
                                            onClick={() => {}}
                                            size="sm"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {button && button}

            {userAvatarInitial && (
                <div
                    className={classNames('ds-header__account', {
                        '--opened': userMenuOpen
                    })}
                >
                    <button
                        className="ds-header__account-trigger"
                        aria-label="account menu"
                        onClick={userMenuToggle}
                        ref={userMenuRef}
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

                    {userMenuOpen && userMenuContent && (
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
