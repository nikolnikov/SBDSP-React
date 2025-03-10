'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSCard = ({ children, customClasses = [], title }) => {
    return (
        <div className={classNames('ds-card', customClasses, {})}>
            <div className="ds-card__content">
                {title && <h3>{title}</h3>}
                {children}
            </div>
        </div>
    );
};

QDSCard.propTypes = {
    children: PropTypes.node,
    customClasses: PropTypes.string,
    title: PropTypes.string
};

export default QDSCard;
