'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Banner = ({
    children,
    dismissHandler,
    customClasses = [],
    icon,
    useBrandedIcon,
    isCentered,
    title
}) => {
    return (
        <div
            className={classNames('ds-banner --react', customClasses, {
                '--branded': useBrandedIcon,
                '--centered': isCentered,
                '--icon': icon
            })}
        >
            {icon && useBrandedIcon && (
                <div className="ds-banner__banner-icon">
                    <img
                        src={`https://ds.cdn.questdiagnostics.com/assets/ds-icons/${icon}.svg`}
                        alt={icon}
                    />
                </div>
            )}

            <div className="ds-flex --row --wrap --start-start">
                {title && (
                    <div className="ds-banner__heading">
                        <h3>{title}</h3>
                    </div>
                )}

                <div className="ds-banner__inner-content">
                    {icon && !useBrandedIcon && (
                        <div className="ds-banner__banner-icon">
                            <span className={icon} aria-label={icon}></span>
                        </div>
                    )}

                    {children}
                </div>
            </div>

            {dismissHandler && (
                <button
                    className="ds-button --icon close"
                    onClick={dismissHandler}
                    aria-label="Close"
                >
                    <span className="ds-icon--close" aria-label="close"></span>
                </button>
            )}
        </div>
    );
};

Banner.propTypes = {
    children: PropTypes.node,
    dismissHandler: PropTypes.func,
    customClasses: PropTypes.string,
    icon: PropTypes.string,
    useBrandedIcon: PropTypes.bool,
    isCentered: PropTypes.bool,
    title: PropTypes.string
};

export default Banner;
