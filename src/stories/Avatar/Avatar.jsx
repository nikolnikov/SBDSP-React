import React from 'react';
import DSAvatar from '../components/Avatar';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSAvatar = ({ 
    button = false,
    clickHandler,
    customClasses = [],
    isDisabled = false,
    initial = 'A',
    hasNotification = false,
    outlined = false,
    size = 'lg'
}) => {
    return (
        <DSAvatar
            button={button}
            clickHandler={clickHandler}
            customClasses={classNames(customClasses)}
            isDisabled={isDisabled}
            initial={initial}
            hasNotification={hasNotification}
            outlined={outlined}
            size={size}
        />
    );
};

QDSAvatar.propTypes = {
    button: PropTypes.bool,
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    hasNotification: PropTypes.bool,
    initial: PropTypes.string,
    outlined: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};