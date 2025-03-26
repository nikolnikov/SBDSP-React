'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSIcon = ({ color, customClasses, name, size }) => {
    const spanClass = classNames(
        `ds-icon--${name}`,
        { [`ds-font-${size}`]: size },
        { [`ds-${color}`]: color },
        customClasses
    );

    return <span className={spanClass} aria-label={name} role="img"></span>;
};

QDSIcon.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string
};

export default QDSIcon;
