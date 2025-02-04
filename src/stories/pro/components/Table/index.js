'use client';

import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getComparator, stableSort } from './helpers';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableContainer from '@mui/material/TableContainer';
import DSTableHead from './TableHead';
import DSTableRow from './TableRow';

const Table = ({
    customClasses,
    isExpandable,
    isFlat,
    isSortable,
    tableHeadData,
    tableCellData,
    isTransparent,
    sortOrder,
    sortProperty
}) => {
    const [order, setOrder] = useState(sortOrder || 'asc');
    const [orderBy, setOrderBy] = useState(sortProperty || 'name');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const visibleRows = useMemo(
        () => stableSort(tableCellData, getComparator(order, orderBy)).slice(),
        [order, orderBy, tableCellData]
    );

    return (
        <MuiTableContainer className="ds-table__wrapper">
            <MuiTable
                className={classNames('ds-table', customClasses, {
                    '--flat': isFlat,
                    '--expandable': isExpandable,
                    '--sortable': isSortable,
                    '--transparent': isTransparent
                })}
                aria-label="table"
            >
                <DSTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    tableHeadData={tableHeadData}
                    tableCellData={tableCellData}
                />
                <MuiTableBody>
                    {visibleRows.map(tableCellData => (
                        <DSTableRow
                            key={tableCellData.id}
                            expandable={isExpandable}
                            tableCellData={tableCellData}
                        />
                    ))}
                </MuiTableBody>
            </MuiTable>
        </MuiTableContainer>
    );
};

Table.propTypes = {
    customClasses: PropTypes.string,
    isExpandable: PropTypes.bool,
    isFlat: PropTypes.bool,
    isSortable: PropTypes.bool,
    tableHeadData: PropTypes.array.isRequired,
    tableCellData: PropTypes.array.isRequired,
    isTransparent: PropTypes.bool,
    sortOrder: PropTypes.oneOf(['asc', 'desc']),
    sortProperty: PropTypes.string
};

export default Table;
