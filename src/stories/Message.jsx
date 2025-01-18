import React from 'react';
import PropTypes from 'prop-types';
import DSMessage from '../components/Message';

export const Message = ({
    actions,
    closeHandler,
    message,
    noIcon,
    showActions,
    title,
    type
}) => {
    const closeMessage = () => {
        console.log('Message closed');
    };

    return (
        <DSMessage
            actions={actions}
            closeHandler={closeHandler || closeMessage}
            message={message}
            noIcon={noIcon}
            showActions={showActions}
            title={title}
            type={type}
        />
    );
};

Message.propTypes = {
    actions: PropTypes.array,
    closeHandler: PropTypes.func,
    message: PropTypes.node.isRequired,
    noIcon: PropTypes.bool,
    showActions: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['informative', 'success', 'warning', 'error']).isRequired
};