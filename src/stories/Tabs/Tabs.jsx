import React from 'react';
import DSTabs from '../components/Tabs';
import PropTypes from 'prop-types';

export const QDSTabs = ({ 
    children,
    contentClasses = [],
    labels,
    defaultSelectedTab
}) => {
    return (
        <DSTabs
            contentClasses={contentClasses}
            labels={labels}
            defaultSelectedTab={defaultSelectedTab}
        >
            {children}
        </DSTabs>
    );
};

QDSTabs.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.node])
    ).isRequired,
    contentClasses: PropTypes.string,
    labels: PropTypes.arrayOf(
        PropTypes.shape({
            isDisabled: PropTypes.bool,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    defaultSelectedTab: PropTypes.number
};