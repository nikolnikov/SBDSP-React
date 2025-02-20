'use client';

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Loader = ({
    customClasses = [],
    isDeterminate,
    isCentered,
    isFixed,
    progress,
    small
}) => {
    return (
        <CircularProgress
            thickness={5}
            variant={isDeterminate ? 'determinate' : 'indeterminate'}
            value={progress}
            aria-label="loading"
            className={classNames('ds-loading', customClasses, {
                '--centered': isCentered,
                '--fixed': isFixed,
                '--small': small
            })}
        />
    );
};

Loader.propTypes = {
    customClasses: PropTypes.string,
    isCentered: PropTypes.bool,
    isDeterminate: PropTypes.bool,
    isFixed: PropTypes.bool,
    progress: PropTypes.number,
    small: PropTypes.bool
};

export default Loader;
