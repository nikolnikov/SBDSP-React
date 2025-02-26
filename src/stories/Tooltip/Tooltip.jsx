import React from 'react';
import DSTooltip from '../components/Tooltip';
import PropTypes from 'prop-types';

export const Tooltip = ({ 
    children, 
    placement = "top",
    tooltip
}) => {
    return (
        <DSTooltip
            placement={placement}
            tooltip={tooltip}
        >
            {children}
        </DSTooltip>
    );
};

Tooltip.propTypes = {
    children: PropTypes.node,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    tooltip: PropTypes.string,
};