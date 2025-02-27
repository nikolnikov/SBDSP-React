import React from 'react';
import DSCard from '../components/Card';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Card = ({ 
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

Card.propTypes = {
    customClasses: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string
};