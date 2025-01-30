import React from 'react';
import DSTooltip from '../../components/Tooltip';
import PropTypes from 'prop-types';

export const Tooltip = ({ 
    children, 
    placement = "top",
    title
}) => {
    return (
        <DSTooltip
            placement={placement}
            title={title}
        >
            {children}
        </DSTooltip>
    );
};

Tooltip.propTypes = {
    children: PropTypes.node,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    title: PropTypes.string,
};