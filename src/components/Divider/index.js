"use client";

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Divider = ({ color, customClasses }) => {
  return (
    <hr
      className={classNames("", customClasses, {
        [`${color}`]: color,
      })}
    />
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  customClasses: PropTypes.string,
};

export default Divider;
