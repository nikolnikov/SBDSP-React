import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

export const QDSDivider = ({ 
    color, 
    customClasses
}) => {
    return (
        <hr
            className={classNames("ds-divider", customClasses, {
                [`ds-${color}--bg`]: color,
            })}
        />
    );
};

QDSDivider.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string,
};