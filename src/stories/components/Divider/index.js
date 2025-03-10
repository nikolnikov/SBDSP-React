'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSDivider = ({ color, customClasses }) => {
    return (
        <hr
            className={classNames('', customClasses, {
                [`ds-${color}--bg`]: color
            })}
        />
    );
};

QDSDivider.propTypes = {
    color: PropTypes.string,
    customClasses: PropTypes.string
};

export default QDSDivider;
