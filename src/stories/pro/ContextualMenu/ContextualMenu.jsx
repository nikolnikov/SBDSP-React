import React, { useState } from 'react';
import DSMenu from '../components/Menu';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.css';

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
            <button
                aria-haspopup="true"
                onClick={handleClick}
                className="ds-button --icon"
            >
                <span aria-label="icon" className="ds-icon--user-circle"></span>
            </button>

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