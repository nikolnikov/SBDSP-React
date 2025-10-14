'use client';

import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import QDSTooltip from '../Tooltip';
import QDSIconButton from '../Button/IconButton.index';

const QDSBreadcrumb = ({ customClasses = [], breadcrumbs = [] }) => {
    const textRefs = useRef([]);
    const [truncatedItems, setTruncatedItems] = useState([]);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const menuTextRefs = useRef([]);
    const [truncatedMenuItems, setTruncatedMenuItems] = useState([]);

    useEffect(() => {
        const checkTruncation = () => {
            const truncated = [];
            textRefs.current.forEach((ref, index) => {
                if (ref && ref.scrollWidth > ref.clientWidth) {
                    truncated.push(index);
                }
            });
            setTruncatedItems(truncated);
        };

        const checkMenuTruncation = () => {
            if (menuAnchor) {
                const truncated = [];
                menuTextRefs.current.forEach((ref, index) => {
                    if (ref && ref.scrollWidth > ref.clientWidth) {
                        truncated.push(index);
                    }
                });
                setTruncatedMenuItems(truncated);
            }
        };

        checkTruncation();
        checkMenuTruncation();
        window.addEventListener('resize', checkTruncation);
        window.addEventListener('resize', checkMenuTruncation);

        return () => {
            window.removeEventListener('resize', checkTruncation);
            window.removeEventListener('resize', checkMenuTruncation);
        };
    }, [breadcrumbs, menuAnchor]);

    const handleMenuOpen = event => {
        setMenuAnchor(event.currentTarget);
        setTimeout(() => {
            const truncated = [];
            menuTextRefs.current.forEach((ref, index) => {
                if (ref && ref.scrollWidth > ref.clientWidth) {
                    truncated.push(index);
                }
            });
            setTruncatedMenuItems(truncated);
        }, 0);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const renderBreadcrumbContent = (breadcrumb, index, isInMenu = false) => {
        const refs = isInMenu ? menuTextRefs : textRefs;
        const truncatedList = isInMenu ? truncatedMenuItems : truncatedItems;
        const actualIndex = isInMenu ? index : index;

        const content = breadcrumb.href ? (
            <a
                href={breadcrumb.href}
                ref={el => (refs.current[actualIndex] = el)}
            >
                {breadcrumb.label}
            </a>
        ) : (
            <span ref={el => (refs.current[actualIndex] = el)}>
                {breadcrumb.label}
            </span>
        );

        if (truncatedList.includes(actualIndex)) {
            return (
                <QDSTooltip message={breadcrumb.label}>{content}</QDSTooltip>
            );
        }

        return content;
    };

    const renderMenuItems = () => {
        const middleBreadcrumbs = breadcrumbs.slice(1, -1);
        return middleBreadcrumbs.map((breadcrumb, index) => {
            const content = breadcrumb.href ? (
                <a
                    href={breadcrumb.href}
                    ref={el => (menuTextRefs.current[index] = el)}
                >
                    {breadcrumb.label}
                </a>
            ) : (
                breadcrumb.label
            );

            if (truncatedMenuItems.includes(index)) {
                return (
                    <MuiMenuItem
                        key={index}
                        className="ds-menu__item"
                        onClick={() => {
                            window.location.href = breadcrumb.href;
                            handleMenuClose();
                        }}
                    >
                        <QDSTooltip
                            key={index}
                            message={breadcrumb.label}
                            placement="right"
                        >
                            {content}
                        </QDSTooltip>
                    </MuiMenuItem>
                );
            }

            return (
                <button key={index} className="ds-menu__item">
                    {content}
                </button>
            );
        });
    };

    return (
        <div className={classNames('ds-breadcrumbs', customClasses)}>
            {breadcrumbs.length <= 3 ? (
                breadcrumbs.map((breadcrumb, index) => (
                    <div key={index} className="ds-breadcrumbs__item">
                        {renderBreadcrumbContent(breadcrumb, index)}
                    </div>
                ))
            ) : (
                <>
                    <div className="ds-breadcrumbs__item">
                        {renderBreadcrumbContent(breadcrumbs[0], 0)}
                    </div>

                    <div className="ds-breadcrumbs__item">
                        <QDSIconButton
                            icon="dots-three"
                            clickHandler={handleMenuOpen}
                            size="md"
                            tooltip="View more"
                        />
                        <MuiMenu
                            anchorEl={menuAnchor}
                            open={Boolean(menuAnchor)}
                            onClose={handleMenuClose}
                            classes={{
                                paper: 'ds-menu ds-breadcrumbs__menu'
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                        >
                            {renderMenuItems()}
                        </MuiMenu>
                    </div>

                    <div className="ds-breadcrumbs__item">
                        {renderBreadcrumbContent(
                            breadcrumbs[breadcrumbs.length - 1],
                            breadcrumbs.length - 1
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

QDSBreadcrumb.propTypes = {
    customClasses: PropTypes.string,
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string
        })
    )
};

export default QDSBreadcrumb;
