"use client";

import React, { useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Overlay from "../Overlay";

const SideSheet = ({
  children,
  customClasses = [],
  onClose,
  opened,
  title,
}) => {
  const sidesheetHeaderRef = useRef(null);

  const onSidesheetScroll = (e) => {
    const sidesheetScrollTop = e.currentTarget.scrollTop;

    sidesheetScrollTop > 0
      ? sidesheetHeaderRef.current.classList.add("--scrolled")
      : sidesheetHeaderRef.current?.classList.remove("--scrolled");
  };

  return (
    <>
      <div
        className={classNames("ds-sidesheet", customClasses, {
          "--opened": opened,
        })}
        onScroll={(e) => {
          onSidesheetScroll(e);
        }}
      >
        <div className="ds-sidesheet__header" ref={sidesheetHeaderRef}>
          <span>{title}</span>

          <button className="ds-button --icon" onClick={onClose}>
            <span className="ds-icon--close" aria-label="close"></span>
          </button>
        </div>

        <div className="ds-sidesheet__content">{children}</div>
      </div>

      <Overlay clickHandler={onClose} noScroll opened={opened} />
    </>
  );
};

SideSheet.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default SideSheet;
