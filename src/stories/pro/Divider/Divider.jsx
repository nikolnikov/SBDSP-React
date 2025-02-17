import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

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