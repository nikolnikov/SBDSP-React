'use client';

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';

const QDSNavRail = ({ navItems, noHeader }) => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeSubItem, setActiveSubItem] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);
    const navButtons = useRef([]);

    const handleItemClick = (item, index) => {
        if (activeItem === item) {
            setActiveItem(null);
            setShowDrawer(false);
        } else {
            setActiveItem(item);
            setShowDrawer(!!item.subItems);

            if (item.route && !item.subItems) {
                window.location.href = item.route;
            }
        }
    };

    const handleSubItemClick = subItem => {
        if (subItem.expandedSubItems) {
            setActiveSubItem(activeSubItem === subItem ? null : subItem);
        } else {
            setActiveItem(null);
            setActiveSubItem(subItem);
            setShowDrawer(false);

            if (subItem.route) {
                window.location.href = subItem.route;
            }
        }
    };

    const handleOverlayClick = () => {
        setShowDrawer(false);
        setActiveItem(null);
        setActiveSubItem(null);
    };

    useEffect(() => {
        const currentPathName = window.location.pathname;
        const defaultItem = navItems.find(
            item => currentPathName === `${item.route}`
        );
        setActiveItem(defaultItem);
        setShowDrawer(!!defaultItem?.subItems);
    }, [navItems]);

    return (
        <>
            <div
                className={classNames('ds-navrail', {
                    '--no-header': noHeader
                })}
            >
                <div className="ds-navrail__rail">
                    {navItems.map((item, index) => (
                        <button
                            key={item.label}
                            className={classNames('ds-navrail__item', {
                                '--opened': activeItem === item
                            })}
                            aria-label={item.label}
                            onClick={() => handleItemClick(item, index)}
                            ref={el => (navButtons.current[index] = el)}
                        >
                            {item.hasNotification ? (
                                <div
                                    className={classNames('ds-badge', {
                                        '--dot': !item.notificationCount,
                                        '--circle': item.notificationCount
                                    })}
                                    aria-label={
                                        item.notificationCount
                                            ? item.notificationCount
                                            : 'notification'
                                    }
                                >
                                    {item.notificationCount}
                                </div>
                            ) : null}
                            <span
                                aria-label={item.label}
                                className={item.iconClass}
                            ></span>
                            {item.label}
                        </button>
                    ))}
                </div>

                <div
                    className={classNames('ds-navrail__drawer', {
                        '--opened': showDrawer
                    })}
                >
                    {activeItem?.subItems && (
                        <div menu-group="1">
                            {activeItem.subItems.map((subItem, subIndex) => (
                                <div key={subIndex}>
                                    <button
                                        className={classNames(
                                            'ds-navrail__sub-item',
                                            {
                                                '--expandable':
                                                    subItem.expandedSubItems,
                                                '--opened':
                                                    activeSubItem === subItem
                                            }
                                        )}
                                        aria-label={subItem.label}
                                        onClick={() =>
                                            handleSubItemClick(subItem)
                                        }
                                    >
                                        {subItem.label}
                                    </button>

                                    {subItem.expandedSubItems && (
                                        <div
                                            className={classNames(
                                                'ds-navrail__sub-drawer',
                                                {
                                                    '--opened':
                                                        activeSubItem ===
                                                        subItem
                                                }
                                            )}
                                        >
                                            {subItem.expandedSubItems.map(
                                                (expandedSubItem, i) => (
                                                    <button
                                                        key={i}
                                                        className="ds-navrail__sub-item"
                                                        aria-label={
                                                            expandedSubItem.label
                                                        }
                                                        onClick={() =>
                                                            handleSubItemClick(
                                                                expandedSubItem
                                                            )
                                                        }
                                                    >
                                                        {expandedSubItem.label}
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {showDrawer && (
                <Overlay
                    opened={showDrawer}
                    transparent
                    clickHandler={handleOverlayClick}
                />
            )}
        </>
    );
};

QDSNavRail.propTypes = {
    navItems: PropTypes.array.isRequired,
    noHeader: PropTypes.bool
};

export default QDSNavRail;
