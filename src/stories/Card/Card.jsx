import React from 'react';
import DSCard from '../components/Card';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.scss';

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