import React from 'react';
import classNames from 'classnames';
import DSTable from '../components/Table';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!./table.scss';

export const QDSTable = ({ 
    customClasses,
    isExpandable = false,
    isFlat = false,
    isSortable = false,
    isTransparent = false,
    sortOrder = 'asc',
    sortProperty = 'name',
    tableHeadData,
    tableCellData
}) => {
    return (
        <DSTable
            customClasses={classNames(customClasses)}
            isExpandable={isExpandable}
            isFlat={isFlat}
            isSortable={isSortable}
            isTransparent={isTransparent}
            sortOrder={sortOrder}
            sortProperty={sortProperty}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
        />
    );
};

QDSTable.propTypes = {
    customClasses: PropTypes.string,
    isExpandable: PropTypes.bool,
    isFlat: PropTypes.bool,
    isSortable: PropTypes.bool,
    isTransparent: PropTypes.bool,
    sortOrder: PropTypes.oneOf(['asc', 'desc']),
    sortProperty: PropTypes.string,
    tableHeadData: PropTypes.array.isRequired,
    tableCellData: PropTypes.array.isRequired
};