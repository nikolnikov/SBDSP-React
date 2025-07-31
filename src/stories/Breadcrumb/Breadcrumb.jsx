import React from 'react';
import DSBreadcrumb from '../components/Breadcrumb';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSBreadcrumb = ({ 
    breadcrumbs = [],
    customClasses = [],
}) => {
    return (
        <DSBreadcrumb
            breadcrumbs={breadcrumbs}
            customClasses={classNames(customClasses)}
        />
    );
};

QDSBreadcrumb.propTypes = {
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
        })
    ),
    customClasses: PropTypes.string,
};