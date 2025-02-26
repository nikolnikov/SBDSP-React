import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import Button from '../../Button';
import ContextualMenu from '../../ContextualMenu';

const HeaderNav = ({
    buttonClickHandler,
    buttonLabel,
    navData,
    secondaryButton,
    userAvatarInitial,
    userMenuContent,
    userName
}) => {
    const [userMenu, setUserMenu] = useState();
    const [menuOpen, setMenuOpen] = useState(null);
    const navRef = useRef(null);

    const handleClick = e => {
        setUserMenu(e.currentTarget);
    };
    const handleClose = () => {
        setUserMenu();
    };

    const menuToggle = idx => {
        setMenuOpen(prevState => (prevState === idx ? null : idx));
    };

    const handleClickOutside = useCallback(event => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(null);
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
                                        <span
                                            className={navItem.icon}
                                            aria-label={navItem.label}
                                        ></span>
                                    )}
                                    {navItem.label}
                                    <span
                                        className="ds-icon--caret-down"
                                        aria-label="Dropdown"
                                    ></span>
                                </button>

                                {navItem.dropdownContents &&
                                    menuOpen === idx && (
                                        <div className="ds-header__dropdown">
                                            {navItem.dropdownContents}
                                        </div>
                                    )}
                            </div>
                        </React.Fragment>
                    ))}
            </div>

            {buttonLabel && (
                <Button
                    ariaLabel={buttonLabel}
                    clickHandler={buttonClickHandler}
                    label={buttonLabel}
                    size="small"
                    type={secondaryButton ? 'secondary' : null}
                >
                    {buttonLabel}
                </Button>
            )}

            {userAvatarInitial && (
                <>
                    <button
                        className={classNames(
                            'ds-header__account ds-menu__trigger',
                            {
                                '--opened': userMenu
                            }
                        )}
                        aria-label="account menu"
                        onClick={handleClick}
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

                    <ContextualMenu
                        closeMenu={handleClose}
                        menuClass="--account-menu"
                        menuRight
                        menuWidth={320}
                        openMenu={userMenu}
                    >
                        {userMenuContent}
                    </ContextualMenu>
                </>
            )}
        </nav>
    );
};

export default HeaderNav;
