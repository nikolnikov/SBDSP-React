'use client';

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';
import Button from '../Button';
import PropTypes from 'prop-types';

const Toast = ({
    duration,
    message,
    noIcon,
    onClose,
    opened,
    textLinkLabel,
    type
}) => {
    const action = (
        <>
            {textLinkLabel && (
                <a className="ds-link" href={null} onClick={onClose}>
                    {textLinkLabel}
                </a>
            )}

            {!duration && !textLinkLabel && (
                <Button
                    iconClass="ds-icon--close"
                    type="icon"
                    clickHandler={onClose}
                />
            )}
        </>
    );

    return (
        <Snackbar
            classes={{
                root: `ds-toast ${type ? `--${type}` : ''} ${
                    noIcon ? '--no-icon' : ''
                }`
            }}
            ClickAwayListenerProps={{ onClickAway: () => null }}
            open={opened}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <SnackbarContent
                action={action}
                classes={{ action: textLinkLabel ? '--link' : '' }}
                message={message}
            />
        </Snackbar>
    );
};

Toast.propTypes = {
    duration: PropTypes.number,
    message: PropTypes.string.isRequired,
    noIcon: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired,
    textLinkLabel: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'alert', 'informative'])
};

export default Toast;
