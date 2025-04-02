import React from 'react';
import DSTag from '../components/Tag';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSTag = ({ 
    clickHandler,
    customClasses = [],
    isDisabled = false,
    isSecondary = false,
    label,
    showClose = false
}) => {
    return (
        <DSTag
            customClasses={classNames(customClasses)}
            clickHandler={clickHandler}
            isDisabled={isDisabled}
            isSecondary={isSecondary}
            label={label}
            showClose={showClose}
        />
    );
};

QDSTag.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    label: PropTypes.string.isRequired,
    showClose: PropTypes.bool
};