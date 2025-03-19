import React from 'react';
import DSAvatar from '../components/Avatar';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSAvatar = ({ 
    clickHandler,
    customClasses,
    isButton = false,
    isDisabled = false,
    isOutlined = false,
    initial = 'A',
    hasNotification = false,
    size = 'lg'
}) => {
    return (
        <DSAvatar
            clickHandler={clickHandler}
            customClasses={classNames(customClasses)}
            isButton={isButton}
            isDisabled={isDisabled}
            isOutlined={isOutlined}
            initial={initial}
            hasNotification={hasNotification}
            size={size}
        />
    );
};

QDSAvatar.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isButton: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isOutlined: PropTypes.bool,
    hasNotification: PropTypes.bool,
    initial: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};