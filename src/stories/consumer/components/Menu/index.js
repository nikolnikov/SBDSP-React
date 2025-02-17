'use client';

import React from 'react';
import MuiMenu from '@mui/material/Menu';
import PropTypes from 'prop-types';

const Menu = ({
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
            PaperProps={{ sx: { width: menuWidth } }}
        >
            {children
                ? children
                : menuItems.map((item, idx) => {
                      return (
                          <button
                              aria-label={item.title}
                              key={idx}
                              className="ds-menu__item"
                              onClick={() => {
                                  item.action(() => {});
                                  closeMenu();
                              }}
                              tabIndex={0}
                          >
                              <span className="ds-menu__item-label">
                                  {item.title}
                              </span>
                          </button>
                      );
                  })}
        </MuiMenu>
    );
};

Menu.propTypes = {
    children: PropTypes.node,
    closeMenu: PropTypes.func,
    menuItems: PropTypes.array,
    menuRight: PropTypes.bool,
    menuWidth: PropTypes.number,
    menuClass: PropTypes.string,
    openMenu: PropTypes.object
};

export default Menu;
