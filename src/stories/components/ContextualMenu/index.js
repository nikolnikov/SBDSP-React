'use client';

import React from 'react';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import QDSIcon from '../Icon';
import PropTypes from 'prop-types';

const QDSContextualMenu = ({
    children,
    closeMenu,
    menuItems,
    menuRight,
    menuWidth,
    menuClass,
    openMenu
}) => {
    const open = Boolean(openMenu);

    return (
        <MuiMenu
            anchorEl={openMenu}
            classes={{
                paper: `ds-menu ${menuClass ? menuClass : ''}`
            }}
            anchorOrigin={
                menuRight
                    ? {
                          vertical: 'bottom',
                          horizontal: 'right'
                      }
                    : {
                          vertical: 'bottom',
                          horizontal: 'left'
                      }
            }
            transformOrigin={
                menuRight
                    ? {
                          vertical: 'top',
                          horizontal: 'right'
                      }
                    : {
                          vertical: 'top',
                          horizontal: 'left'
                      }
            }
            onClose={closeMenu}
            open={open}
            autoFocus={true}
            PaperProps={{ sx: { width: menuWidth } }}
        >
            {children
                ? children
                : menuItems.map((item, idx) => {
                      return (
                          <MuiMenuItem
                              aria-label={item.label}
                              key={idx}
                              className="ds-menu__item"
                              onClick={() => {
                                  item.action(() => {});
                                  closeMenu();
                              }}
                              role="menuitem"
                              tabIndex={-1}
                              autoFocus={idx === 0}
                          >
                              {item.icon && <QDSIcon name={item.icon} />}
                              {item.label}
                          </MuiMenuItem>
                      );
                  })}
        </MuiMenu>
    );
};

QDSContextualMenu.propTypes = {
    children: PropTypes.node,
    closeMenu: PropTypes.func,
    menuItems: PropTypes.array,
    menuRight: PropTypes.bool,
    menuWidth: PropTypes.number,
    menuClass: PropTypes.string,
    openMenu: PropTypes.object
};

export default QDSContextualMenu;
