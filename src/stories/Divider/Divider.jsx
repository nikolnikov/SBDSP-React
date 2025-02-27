import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

export const Divider = ({ 
    color, 
    customClasses
}) => {
    return (
        <hr
            className={classNames("ds-divider", customClasses, {
                [`${color}`]: color,
            })}
        />
    );
};

Divider.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
};