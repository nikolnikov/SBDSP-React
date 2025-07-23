'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';

const QDSBadge = ({
    customClasses = [],
    hasNotification,
    icon,
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
            {icon && !hasNotification && !isCircle && <QDSIcon name={icon} />}
            {label}
        </div>
    );
};

QDSBadge.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
    hasNotification: PropTypes.bool,
    icon: PropTypes.string,
    isCircle: PropTypes.bool,
    label: PropTypes.string,
    secondary: PropTypes.bool,
    status: PropTypes.oneOf([
        'neutral',
        'informative',
        'success',
        'warning',
        'error',
        'new'
    ])
};

export default QDSBadge;
