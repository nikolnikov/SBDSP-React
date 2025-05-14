import React, { useState } from 'react';
import DSToast from '../components/Toast';
import QDSButton from '../components/Button';
import PropTypes from 'prop-types';

export const QDSToast = ({ 
    duration = 5000,
    hideDismiss,
    message,
    noIcon = false,
    positionY = 'top',
    positionYOffset,
    positionYOffsetMobile,
    textLinkLabel,
    type
}) => {
    const [toastOpen, setToastOpen] = useState(false);

    const showToast = () => {
        setToastOpen(true);
    };

    return (
        <>
            <QDSButton
                clickHandler={showToast}
                label="Open toast"
            />

            <DSToast
                duration={duration}
                hideDismiss={hideDismiss}
                message={message}
                noIcon={noIcon}
                onClose={() => {
                    setToastOpen(false);
                }}
                opened={toastOpen}
                positionY={positionY}
                positionYOffset={positionYOffset}
                positionYOffsetMobile={positionYOffsetMobile}
                textLinkLabel={textLinkLabel}
                type={type}
            />
        </>
    );
};

QDSToast.propTypes = {
    duration: PropTypes.number,
    hideDismiss: PropTypes.bool,
    message: PropTypes.string.isRequired,
    noIcon: PropTypes.bool,
    onClose: PropTypes.func,
    opened: PropTypes.bool,
    positionY: PropTypes.oneOf(['top', 'bottom']),
    positionYOffset: PropTypes.number,
    positionYOffsetMobile: PropTypes.number,
    textLinkLabel: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'alert', 'informative'])
};