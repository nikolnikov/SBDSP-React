'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';
import QDSTooltip from '../Tooltip';

const QDSIconButton = ({
    clickHandler,
    customClasses = [],
    icon,
    isDestructive,
    isDisabled,
    isInverse,
    size = 'lg',
    tooltip,
    tooltipPlacement = 'top'
}) => {
    return tooltip ? (
        <QDSTooltip message={tooltip} placement={tooltipPlacement}>
            <button
                className={classNames('ds-button --icon', customClasses, {
                    [`--${size}`]: size,
                    '--destructive': isDestructive,
                    '--disabled': isDisabled,
                    '--inverse': isInverse
                })}
                aria-label={icon}
                onClick={clickHandler}
            >
                <QDSIcon name={icon} />
            </button>
        </QDSTooltip>
    ) : (
        <button
            className={classNames('ds-button --icon', customClasses, {
                [`--${size}`]: size,
                '--destructive': isDestructive,
                '--disabled': isDisabled,
                '--inverse': isInverse
            })}
            aria-label={icon}
            onClick={clickHandler}
        >
            <QDSIcon name={icon} />
        </button>
    );
};

QDSIconButton.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    tooltip: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

export default QDSIconButton;
