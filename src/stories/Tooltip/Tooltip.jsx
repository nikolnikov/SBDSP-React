import React from 'react';
import DSTooltip from '../components/Tooltip';
import PropTypes from 'prop-types';

export const QDSTooltip = ({ 
    children, 
    message,
    placement = "top"
}) => {
    return (
        <DSTooltip
            placement={placement}
            message={message}
        >
            {children}
        </DSTooltip>
    );
};

QDSTooltip.propTypes = {
    children: PropTypes.node,
    message: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};