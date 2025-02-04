'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ children, customClasses = [], title }) => {
    return (
        <div className={classNames('ds-card', customClasses, {})}>
            <div className="ds-card__content">
                <div className="ds-card__title">{title}</div>
                {children}
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    title: PropTypes.string
};

export default Card;
