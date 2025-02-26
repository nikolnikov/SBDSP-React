import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';

const HeaderSubNav = ({ customClasses, noMargins, noMaxWidth, subNavData }) => {
    const [menuOpen, setMenuOpen] = useState(null);
    const navRef = useRef(null);

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
        <nav className="ds-header__subnav" ref={navRef}>
            <div
                className={classNames('ds-grid', customClasses, {
                    '--margins': !noMargins,
                    '--max-width': !noMaxWidth
                })}
            >
                {subNavData &&
                    subNavData.length > 0 &&
                    subNavData.map((navItem, idx) => (
                        <React.Fragment key={idx}>
                            <div
                                className={classNames(
                                    'ds-header__subnav-item',
                                    {
                                        '--active': menuOpen === idx
                                    }
                                )}
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
        </nav>
    );
};

export default HeaderSubNav;
