'use client';

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSLoader = ({
    customClasses = [],
    isDeterminate,
    isCentered,
    isFixed,
    progress,
    isSmall
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
                '--small': isSmall
            })}
        />
    );
};

QDSLoader.propTypes = {
    customClasses: PropTypes.string,
    isCentered: PropTypes.bool,
    isDeterminate: PropTypes.bool,
    isFixed: PropTypes.bool,
    progress: PropTypes.number,
    isSmall: PropTypes.bool
};

export default QDSLoader;
