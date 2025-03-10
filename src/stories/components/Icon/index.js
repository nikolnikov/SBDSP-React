'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSIcon = ({
    color,
    customClasses,
    name,
    isBilling,
    isBranded,
    isBrandedWhite,
    isIllustrative,
    isLegacy,
    size
}) => {
    const imgSrc = `https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon${isBranded ? '--illustrative-green' : ''}${isBrandedWhite ? '--illustrative-white' : ''}--${name}.svg`;

    const spanClass = classNames(
        `ds-icon--${isIllustrative ? 'ill--' : ''}${isLegacy ? 'legacy--' : ''}${name}`,
        { [`ds-font-${size}`]: size },
        { [`ds-${color}`]: color },
        customClasses
    );

    if (isBranded || isBrandedWhite || isBilling) {
        return (
            <img
                className={customClasses}
                src={imgSrc}
                alt={name}
                style={{ width: size }}
            />
        );
    }

    return <span className={spanClass} aria-label={name} role="img"></span>;
};

QDSIcon.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    name: PropTypes.string,
    isBilling: PropTypes.bool,
    isBranded: PropTypes.bool,
    isBrandedWhite: PropTypes.bool,
    isIllustrative: PropTypes.bool,
    isLegacy: PropTypes.bool,
    size: PropTypes.string
};

export default QDSIcon;
