'use client';

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';
import QDSIconButton from '../Button/IconButton.index';
import PropTypes from 'prop-types';

const QDSToast = ({
    duration,
    hideDismiss,
    message,
    noIcon,
    onClose,
    opened,
    positionY = 'top',
    positionYOffset,
    positionYOffsetMobile,
    textLinkLabel,
    type
}) => {
    const action = (
        <>
            {textLinkLabel && !hideDismiss && (
                <a href={null} className="ds-link" onClick={onClose}>
                    {textLinkLabel}
                </a>
            )}

            {!textLinkLabel && !hideDismiss && (
                <QDSIconButton icon="close" clickHandler={onClose} />
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
            anchorOrigin={{
                vertical: positionY ? `${positionY}` : 'top',
                horizontal: 'center'
            }}
            sx={{
                ...(positionY === 'top'
                    ? {
                          top: {
                              xs: positionYOffsetMobile
                                  ? `${positionYOffsetMobile}px`
                                  : 40,
                              md: positionYOffset ? `${positionYOffset}px` : 64
                          }
                      }
                    : {
                          bottom: {
                              xs: positionYOffsetMobile
                                  ? `${positionYOffsetMobile}px`
                                  : 40,
                              md: positionYOffset ? `${positionYOffset}px` : 64
                          }
                      }),
                left: '50%',
                transform: 'translateX(-50%)'
            }}
        >
            <SnackbarContent
                action={action}
                classes={{ action: textLinkLabel ? '--link' : '' }}
                message={message}
            />
        </Snackbar>
    );
};

QDSToast.propTypes = {
    duration: PropTypes.number,
    hideDismiss: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    noIcon: PropTypes.bool,
    onClose: PropTypes.func,
    opened: PropTypes.bool,
    positionY: PropTypes.oneOf(['top', 'bottom']),
    positionYOffset: PropTypes.number,
    positionYOffsetMobile: PropTypes.number,
    textLinkLabel: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'alert', 'informative'])
};

export default QDSToast;
