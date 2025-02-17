import React, { useState } from 'react';
import DSModal from '../components/Modal';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

export const Modal = ({ 
    backdropClickable = true,
    buttonHandler,
    buttonLabel,
    children,
    ghostButtonHandler,
    ghostButtonLabel,
    hideX = false,
    secondaryButtonHandler,
    secondaryButtonLabel,
    status,
    title
}) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button
                className="ds-button --primary"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Open modal
            </button>

            <DSModal
                backdropClickable={backdropClickable}
                buttonHandler={buttonHandler}
                buttonLabel={buttonLabel}
                children={children}
                ghostButtonLabel={ghostButtonLabel}
                ghostButtonHandler={ghostButtonHandler}
                hideX={hideX}
                linkLabel={secondaryButtonLabel}
                opened={showModal}
                modalClose={closeModal}
                secondaryButtonHandler={secondaryButtonHandler}
                secondaryButtonLabel={secondaryButtonLabel}
                status={status}
                title={title}
            />
        </>
    );
};

Modal.propTypes = {
    backdropClickable: PropTypes.bool,
    buttonHandler: PropTypes.func,
    buttonLabel: PropTypes.string,
    children: PropTypes.node,
    ghostButtonHandler: PropTypes.func,
    ghostButtonLabel: PropTypes.string,
    hideX: PropTypes.bool,
    modalClose: PropTypes.func,
    opened: PropTypes.bool,
    secondaryButtonHandler: PropTypes.func,
    secondaryButtonLabel: PropTypes.string,
    status: PropTypes.oneOf(['alert', 'error', 'informative']),
    title: PropTypes.string
};