import React, { useState } from 'react';
import DSToast from '../components/Toast';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const Toast = ({ 
    duration,
    message,
    noIcon = false,
    status,
    textLinkLabel
}) => {
    const [toastOpen, setToastOpen] = useState(false);

    const showToast = () => {
        setToastOpen(true);
    };

    return (
        <>
            <button
                className="ds-button --primary"
                onClick={showToast}
            >
                Open toast
            </button>

            <DSToast
                duration={duration}
                message={message}
                noIcon={noIcon}
                onClose={() => {
                    setToastOpen(false);
                }}
                opened={toastOpen}
                status={status}
                textLinkLabel={textLinkLabel}
            />
        </>
    );
};

Toast.propTypes = {
    duration: PropTypes.number,
    message: PropTypes.string.isRequired,
    noIcon: PropTypes.bool,
    onClose: PropTypes.func,
    opened: PropTypes.bool,
    status: PropTypes.oneOf(['success', 'error', 'alert', 'informative']),
    textLinkLabel: PropTypes.string
};