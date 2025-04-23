'use client';

import React, { forwardRef } from 'react';
import MUITooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const QDSTooltip = forwardRef(
    ({ children, message, placement = 'top' }, ref) => {
        return (
            <MUITooltip
                classes={{ popper: 'ds-tooltip' }}
                title={message}
                placement={placement}
                ref={ref}
            >
                {children}
            </MUITooltip>
        );
    }
);

QDSTooltip.propTypes = {
    children: PropTypes.node,
    message: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

export default QDSTooltip;
