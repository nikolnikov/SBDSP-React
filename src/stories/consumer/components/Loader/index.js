'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Loader = ({ customClasses = [], isCentered, isFixed }) => {
    return (
        <div
            className={classNames('ds-loading', customClasses, {
                '--centered': isCentered,
                '--fixed': isFixed
            })}
            role="progressbar"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

Loader.propTypes = {
    customClasses: PropTypes.string,
    isCentered: PropTypes.bool,
    isFixed: PropTypes.bool
};

export default Loader;
