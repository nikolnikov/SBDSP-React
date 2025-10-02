'use client';

import React, { forwardRef, useState } from 'react';
import MUITooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const QDSTooltip = forwardRef(
    (
        { children, message, placement = 'top', closeOnChildClick = false },
        ref
    ) => {
        const [open, setOpen] = useState(false);

        if (closeOnChildClick) {
            const handleOpen = () => setOpen(true);
            const handleClose = () => setOpen(false);

            const enhancedChild = React.cloneElement(children, {
                onClick: e => {
                    if (children.props.onClick) {
                        children.props.onClick(e);
                    }
                    handleClose();
                }
            });

            return (
                <MUITooltip
                    classes={{ popper: 'ds-tooltip' }}
                    title={message}
                    placement={placement}
                    ref={ref}
                    open={open}
                    onOpen={handleOpen}
                    onClose={handleClose}
                >
                    {enhancedChild}
                </MUITooltip>
            );
        }

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
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    closeOnChildClick: PropTypes.bool
};

export default QDSTooltip;
