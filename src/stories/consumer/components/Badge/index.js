'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Badge = ({
    customClasses = [],
    label,
    isSecondary,
    status = 'neutral'
}) => {
    const icons = {
        success: 'ds-icon--check-circle',
        informative: 'ds-icon--info',
        warning: 'ds-icon--warning',
        critical: 'ds-icon--warning-octagon'
    };
    return (
        <div
            className={classNames('ds-badge', customClasses, {
                '--secondary': isSecondary,
                [`--${status}`]: status
            })}
            role={status || 'status'}
        >
            {status !== 'neutral' && (
                <span className={icons[status]} aria-label={status}></span>
            )}
            {label}
        </div>
    );
};

Badge.propTypes = {
    customClasses: PropTypes.string,
    isSecondary: PropTypes.bool,
    label: PropTypes.string,
    status: PropTypes.oneOf([
        'neutral',
        'informative',
        'success',
        'warning',
        'critical'
    ])
};

export default Badge;
