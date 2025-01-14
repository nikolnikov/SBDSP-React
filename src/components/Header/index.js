'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import Button from '../Button';
import Menu from '../Menu';

const Header = ({
    buttonClickHandler,
    buttonLabel,
    customClasses = [],
    customContent,
    hasNav,
    logo,
    logoSize,
    margins,
    navData,
    secondaryButton,
    maxWidth,
    userAvatarInitial,
    userMenuContent,
    userName
}) => {
    const [menu, setMenu] = useState();
    const handleClick = e => {
        setMenu(e.currentTarget);
    };
    const handleClose = () => {
        setMenu();
    };
    return (
        <header className="ds-header">
            <div
                className={classNames('ds-grid', customClasses, {
                    '--margins': margins,
                    '--max-width': maxWidth
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
                {(hasNav || buttonLabel || userAvatarInitial) && (
                    <nav className="ds-header__nav">
                        {hasNav && <HeaderNav navData={navData} />}

                        {customContent && customContent}

                        {buttonLabel && (
                            <Button
                                ariaLabel={buttonLabel}
                                clickHandler={buttonClickHandler}
                                customClasses="ds-ml-16"
                                label={buttonLabel}
                                small
                                type={secondaryButton ? 'secondary' : null}
                            >
                                {buttonLabel}
                            </Button>
                        )}

                        {userAvatarInitial && (
                            <>
                                <button
                                    className={classNames(
                                        'ds-header__account ds-menu__trigger ds-ml-16',
                                        {
                                            '--opened': menu
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

                                <Menu
                                    closeMenu={handleClose}
                                    menuClass="--account-menu"
                                    menuRight
                                    menuWidth={320}
                                    openMenu={menu}
                                >
                                    {userMenuContent}
                                </Menu>
                            </>
                        )}
                    </nav>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    buttonClickHandler: PropTypes.func,
    buttonLabel: PropTypes.string,
    customClasses: PropTypes.array,
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

export default Header;
