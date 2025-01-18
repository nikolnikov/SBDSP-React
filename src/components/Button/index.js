'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
    clickHandler,
    customClasses = [],
    iconClass,
    iconRight,
    isDestructive,
    isDisabled,
    isInverse,
    isSave,
    label,
    size = 'large',
    type
}) => {
    return (
        <>
            {isSave ? (
                <button
                    className={classNames('ds-button', customClasses, {
                        [`--${type}`]: type,
                        '--primary': type !== 'secondary',
                        [`--${size}`]: size,
                        '--warning': isDestructive,
                        '--disabled': isDisabled,
                        '--inverse': isInverse,
                        '--save': isSave
                    })}
                    aria-label={label}
                    onClick={clickHandler}
                    type="button"
                >
                    <div className="step1">
                        <span>Save</span>
                    </div>
                    <div className="step2">
                        <div className="ds-loading --small ds-mr-4">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span>Saving</span>
                    </div>
                    <div className="step3">
                        <div className="checkmark animate"></div>
                        <span>Saved</span>
                    </div>
                </button>
            ) : (
                <button
                    className={classNames('ds-button', customClasses, {
                        [`--${type}`]: type,
                        '--primary':
                            type !== 'ghost' &&
                            type !== 'secondary' &&
                            type !== 'icon',
                        [`--${size}`]: size,
                        '--warning': isDestructive,
                        '--disabled': isDisabled,
                        '--inverse': isInverse,
                        '--save': isSave
                    })}
                    aria-label={label}
                    onClick={clickHandler}
                >
                    {type === 'icon' ? (
                        <span
                            className={iconClass}
                            aria-label={iconClass}
                            role="img"
                        ></span>
                    ) : (
                        <>
                            {iconClass && !iconRight && (
                                <span
                                    className={`${iconClass} --left`}
                                    aria-label={iconClass}
                                    role="img"
                                ></span>
                            )}
                            <span>{label}</span>
                            {iconClass && iconRight && (
                                <span
                                    className={`${iconClass} --right`}
                                    aria-label={iconClass}
                                    role="img"
                                ></span>
                            )}
                        </>
                    )}
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    iconClass: PropTypes.string,
    iconRight: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isSave: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['secondary', 'ghost', 'icon'])
};

export default Button;
