"use client";

import React, { useEffect } from "react";
import classNames from "classnames";
import propTypes from "prop-types";

const Overlay = ({ clickHandler, opened, noScroll, transparent, zIndex }) => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  useEffect(() => {
    const body = document.querySelector("body");

    if (opened && noScroll) {
      body.style.paddingRight = scrollBarWidth + "px";
      body.style.overflow = "hidden";
    } else {
      body.style.paddingRight = null;
      body.style.overflow = null;
    }

    return () => {
      body.style.paddingRight = null;
      body.style.overflow = null;
    };
  });
  return (
    <div
      className={classNames("ds-overlay", {
        "--transparent": transparent,
        "--opened": opened,
      })}
      onClick={clickHandler}
      style={{ zIndex: zIndex }}
    ></div>
  );
};

Overlay.propTypes = {
  clickHandler: propTypes.func,
  opened: propTypes.bool,
  noScroll: propTypes.bool,
  transparent: propTypes.bool,
  zIndex: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default Overlay;
