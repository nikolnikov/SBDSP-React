'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({
    children,
    customClasses = [],
    hasNotification,
    isCircle,
    color,
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
            role={status || 'status'}
        >
            {children}
        </div>
    );
};

Badge.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    customClasses: PropTypes.string,
    hasNotification: PropTypes.bool,
    isCircle: PropTypes.bool,
    secondary: PropTypes.bool,
    status: PropTypes.string
};

export default Badge;
