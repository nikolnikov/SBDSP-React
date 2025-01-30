import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DSBadge from '../../components/Badge'

export const Badge = ({ 
    customClasses = [],
    hasNotification = false,
    isCircle = false,
    color,
    label,
    secondary = false,
    status = 'neutral',
}) => {
    return (
        <DSBadge
            customClasses={classNames(customClasses)}
            hasNotification={hasNotification}
            isCircle={isCircle}
            color={color}
            label={label}
            secondary={secondary}
            status={status}
        />
    );
};

Badge.propTypes = {
    customClasses: PropTypes.array,
    hasNotification: PropTypes.bool,
    isCircle: PropTypes.bool,
    color: PropTypes.string,
    label: PropTypes.string,
    secondary: PropTypes.bool,
    status: PropTypes.oneOf(['neutral', 'informative', 'success', 'warning', 'error', 'new']),
};