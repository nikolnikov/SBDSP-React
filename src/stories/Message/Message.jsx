import React from 'react';
import DSMessage from '../components/Message';
import PropTypes from 'prop-types';

export const Message = ({
    actions,
    closeHandler,
    hideX = false,
    message,
    noIcon = false,
    title,
    type
}) => {
    const closeMessage = () => {
        console.log('Message closed');
    };

    return (
        <DSMessage
            {...(actions && actions.length > 0 && { actions })}
            closeHandler={closeHandler || closeMessage}
            hideX={hideX}
            message={message}
            noIcon={noIcon}
            title={title}
            type={type}
        />
    );
};

Message.propTypes = {
    actions: PropTypes.array,
    closeHandler: PropTypes.func,
    hideX: PropTypes.bool,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error']).isRequired
};