'use client';

import React, { forwardRef } from 'react';
import MUITooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const Tooltip = forwardRef(({ children, placement = 'top', title }, ref) => {
    return (
        <MUITooltip
            classes={{ popper: 'ds-tooltip' }}
            title={title}
            placement={placement}
            ref={ref}
        >
            {children}
        </MUITooltip>
    );
});

Tooltip.propTypes = {
    children: PropTypes.node,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    title: PropTypes.string
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
