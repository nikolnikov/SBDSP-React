'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
    clickHandler,
    customClasses = [],
    icon,
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
                        '--destructive': isDestructive,
                        '--disabled': isDisabled,
                        '--inverse': isInverse,
                        '--save': isSave
                    })}
                    aria-label={type === 'icon' ? icon : label}
                    onClick={clickHandler}
                    type="button"
                >
                    <div className="step1">
                        <span>Save</span>
                    </div>
                    <div className="step2">
                        <div
                            className="ds-loading --small ds-mr-4"
                            role="progressbar"
                            aria-label="Saving"
                        >
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
                        '--primary': type !== 'ghost' && type !== 'secondary',
                        [`--${size}`]: size,
                        '--destructive': isDestructive,
                        '--disabled': isDisabled,
                        '--inverse': isInverse,
                        '--save': isSave
                    })}
                    aria-label={label}
                    onClick={clickHandler}
                >
                    <>
                        {icon && (
                            <span
                                className={`ds-icon--${icon} --left`}
                                aria-label={icon}
                                role="img"
                            ></span>
                        )}
                        <span>{label}</span>
                        {iconRight && (
                            <span
                                className={`ds-icon--${iconRight} --right`}
                                aria-label={iconRight}
                                role="img"
                            ></span>
                        )}
                    </>
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    clickHandler: PropTypes.func,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    iconRight: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isSave: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost'])
};

export default Button;
