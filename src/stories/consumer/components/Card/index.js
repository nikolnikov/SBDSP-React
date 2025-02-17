'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ children, customClasses, isInverse, isMedia, isProduct }) => {
    return (
        <div
            className={classNames('ds-card', customClasses, {
                '--inverse': isInverse,
                '--media': isMedia,
                '--product': isProduct || isMedia
            })}
        >
            <div className="--content">{children}</div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    isInverse: PropTypes.bool,
    isMedia: PropTypes.bool,
    isProduct: PropTypes.bool
};

export default Card;
