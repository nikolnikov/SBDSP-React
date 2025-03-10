import React from 'react';
import DSCard from '../components/Card';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSCard = ({ 
    children,
    customClasses = [],
    title
}) => {
    return (
        <DSCard
            customClasses={classNames(customClasses)}
            children={children}
            title={title}
        />
    );
};

QDSCard.propTypes = {
    customClasses: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string
};