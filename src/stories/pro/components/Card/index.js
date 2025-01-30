"use client";

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Card = ({ children, customClasses = [] }) => {
  return (
    <div className={classNames("ds-card", customClasses, {})}>
      <div className="ds-card__content">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
};

export default Card;
