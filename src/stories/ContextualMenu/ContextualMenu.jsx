import React, { useState } from 'react';
import DSMenu from '../components/ContextualMenu';
import DSIconButton from '../components/Button/IconButton.index';
import PropTypes from 'prop-types';

export const ContextualMenu = ({ 
    menuItems,
    menuRight = false,
    menuWidth,
    menuClass,
}) => {
    const [menu, setMenu] = useState();
    const handleClick = (e) => {
        setMenu(e.currentTarget);
    };

    const handleClose = () => {
        setMenu();
    };
    return (
        <>
            <DSIconButton
                icon="user-circle"
                clickHandler={handleClick}
            />

            <DSMenu
                menuItems={menuItems}
                closeMenu={handleClose}
                menuRight={menuRight}
                menuWidth={menuWidth}
                menuClass={menuClass}
                openMenu={menu}
            />
        </>
    );
};

ContextualMenu.propTypes = {
    children: PropTypes.node,
    closeMenu: PropTypes.func,
    menuItems: PropTypes.array,
    menuRight: PropTypes.bool,
    menuWidth: PropTypes.number,
    menuClass: PropTypes.string,
    openMenu: PropTypes.object,
};