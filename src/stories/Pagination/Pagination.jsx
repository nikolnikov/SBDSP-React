import React from 'react';
import DSPagination from '../components/Pagination';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSPagination = ({ 
    customClasses,
    totalItemCount,
    itemCountSelectionArray,
}) => {
    return (
        <DSPagination
            customClasses={classNames(customClasses)}
            totalItemCount={totalItemCount}
            itemCountSelectionArray={itemCountSelectionArray}
        />
    );
};

QDSPagination.propTypes = {
    customClasses: PropTypes.string,
    totalItemCount: PropTypes.number,
    itemCountSelectionArray: PropTypes.array
};