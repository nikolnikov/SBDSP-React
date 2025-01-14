import React from 'react';
import PropTypes from 'prop-types';

export const Badge = ({ 
    children,
    customClasses = [],
    hasNotification,
    isCircle,
    color,
    secondary,
    status,
    ...props
}) => {
    const badgeClass = ['ds-badge'];

    if (customClasses) {
        badgeClass.push(customClasses);
    }

    if (status === 'error') {
        badgeClass.push('--error');
    } else if (status === 'informative') {
        badgeClass.push('--informative');
    } else if (status === 'new') {
        badgeClass.push('--new');
    } else if (status === 'success') {
        badgeClass.push('--success');
    } else if (status === 'warning') {
        badgeClass.push('--warning');
    }

    if (isCircle) {
        badgeClass.push('--circle');
    }

    if (hasNotification) {
        badgeClass.push('--dot');
    }

    if (color) {
        badgeClass.push(`--${color}`);
    }

    if (secondary) {
        badgeClass.push('--secondary');
    }

    return (
        <div 
            className={badgeClass.join(' ')}
            role={status || 'status'}
            {...props}
        >
            {children}
        </div>
    );
};

Badge.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.array,
    hasNotification: PropTypes.bool,
    isCircle: PropTypes.bool,
    color: PropTypes.string,
    secondary: PropTypes.bool,
    status: PropTypes.string,
};