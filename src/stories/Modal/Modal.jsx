import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DSModal from '../../components/Modal';

export const Modal = ({ 
    buttonHandler,
    buttonLabel,
    children,
    ghostButtonHandler,
    ghostButtonLabel,
    hideX,
    modalClose,
    opened,
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