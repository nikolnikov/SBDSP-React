'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIcon from '../Icon';

const QDSLink = ({
    customClasses,
    iconLeft,
    iconRight,
    isDestructive,
    isInverse,
    label,
    newWindow,
    url
}) => {
    return iconLeft || iconRight ? (
        <a
            href={url}
            target={newWindow ? '_blank' : '_self'}
            rel={newWindow ? 'noreferrer' : undefined}
            className={classNames('ds-link', customClasses, {
                '--destructive': isDestructive,
                '--inverse': isInverse,
                '--icons': iconLeft || iconRight
            })}
        >
            {iconLeft && <QDSIcon name={iconLeft} />}
            <span>{label}</span>
            {iconRight && <QDSIcon name={iconRight} />}
        </a>
    ) : (
        <a
            href={url}
            target={newWindow ? '_blank' : '_self'}
            rel={newWindow ? 'noreferrer' : undefined}
            className={classNames('ds-link', customClasses, {
                '--destructive': isDestructive,
                '--inverse': isInverse,
                '--icons': iconLeft || iconRight
            })}
        >
            {label}
        </a>
    );
};

QDSLink.propTypes = {
    customClasses: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    isDestructive: PropTypes.bool,
    isInverse: PropTypes.bool,
    label: PropTypes.string.isRequired,
    newWindow: PropTypes.bool,
    url: PropTypes.string
};

export default QDSLink;
