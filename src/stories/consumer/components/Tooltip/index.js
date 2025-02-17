'use client';

import React, { forwardRef } from 'react';
import MUITooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const Tooltip = forwardRef(
    ({ children, placement = 'top', isWhite, message }, ref) => {
        return (
            <MUITooltip
                classes={{ popper: `ds-tooltip ${isWhite ? '--white' : ''}` }}
                title={message}
                placement={placement}
                ref={ref}
            >
                {children}
            </MUITooltip>
        );
    }
);

Tooltip.propTypes = {
    children: PropTypes.node,
    isWhite: PropTypes.bool,
    message: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
