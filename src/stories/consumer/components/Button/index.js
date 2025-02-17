'use client';

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Toast from '../Toast';

const Button = ({
    clickHandler,
    customClasses = [],
    iconClass,
    iconRight,
    isDisabled,
    isInverse,
    isDestructive,
    isDownload,
    label,
    size = 'large',
    type = 'primary'
}) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);

    const dlBtnClicked = event => {
        setIsDownloading(true);

        setTimeout(() => {
            setIsDownloading(false);
            setToastOpen(true);
        }, 3000);
    };

    return (
        <>
            {isDownload ? (
                <>
                    <button
                        className={classNames(
                            'ds-button --primary',
                            customClasses,
                            {
                                '--downloading': isDownloading
                            }
                        )}
                        onClick={dlBtnClicked}
                    >
                        <span
                            className="ds-icon--download-simple --left"
                            aria-label="download-simple"
                        ></span>
                        <div className="ds-icon--loading --left">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span>
                            Download<ins>ing</ins>
                        </span>
                    </button>

                    <Toast
                        duration={5000}
                        message="Report successfully downloaded"
                        onClose={() => {
                            setToastOpen(false);
                        }}
                        opened={toastOpen}
                        status="informative"
                    />
                </>
            ) : (
                <button
                    className={classNames('ds-button', customClasses, {
                        [`--${type}`]: type,
                        [`--${size}`]: size && size !== 'large',
                        '--primary':
                            type !== 'ghost' &&
                            type !== 'secondary' &&
                            type !== 'inverse' &&
                            type !== 'icon',
                        '--disabled': isDisabled,
                        '--download-btn': isDownload,
                        '--inverse': isInverse,
                        '--warning': isDestructive
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
                            {iconClass && (
                                <span
                                    className={`${iconClass} --left`}
                                    aria-label={iconClass}
                                    role="img"
                                ></span>
                            )}
                            <span>{label}</span>
                            {iconRight && (
                                <span
                                    className={`${iconRight} --right`}
                                    aria-label={iconRight}
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
    iconRight: PropTypes.string,
    isDisabled: PropTypes.bool,
    isInverse: PropTypes.bool,
    isDestructive: PropTypes.bool,
    isDownload: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'icon'])
};

export default Button;
