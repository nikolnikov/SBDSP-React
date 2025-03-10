'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSBadge = ({
    customClasses = [],
    hasNotification,
    isCircle,
    color,
    label,
    secondary,
    status
}) => {
    return (
        <div
            className={classNames('ds-badge', customClasses, {
                '--circle': isCircle,
                '--secondary': secondary,
                '--dot': hasNotification,
                '--neutral': !status,
                [`--${color}`]: color,
                [`--${status}`]: status
            })}
            role={'status'}
        >
            {label}
        </div>
    );
};

QDSBadge.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    hasNotification: PropTypes.bool,
    isCircle: PropTypes.bool,
    label: PropTypes.string,
    secondary: PropTypes.bool,
    status: PropTypes.string
};

export default QDSBadge;
