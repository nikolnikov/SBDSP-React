"use client";
import React, { useState } from "react";
import classNames from "classnames";
import Overlay from "../../Overlay";

const HeaderNav = ({ navData }) => {
  const [menuOpen, setMenuOpen] = useState(Array(navData.length).fill(false));

  const menuToggle = (idx) => {
    setMenuOpen(menuOpen.map((open, index) => (index === idx ? !open : false)));
  };

  return (
    <>
      {navData.map((navItem, idx) => (
        <div
          key={idx}
          className={classNames("ds-header__nav-item", {
            "--active": menuOpen[idx],
          })}
        >
          <button onClick={() => menuToggle(idx)}>
            <span className={navItem.icon} aria-label={navItem.label}></span>
            {navItem.label}
            {navItem.hasDropdown && (
              <span
                className="ds-icon--caret-down"
                aria-label="Dropdown"
              ></span>
            )}
          </button>

          {navItem.hasDropdown && (
            <>
              <div className="ds-header__dropdown">
                {navItem.dropdownContents}
              </div>

              <Overlay
                clickHandler={() => menuToggle(idx)}
                opened={menuOpen[idx]}
                transparent
              />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default HeaderNav;
