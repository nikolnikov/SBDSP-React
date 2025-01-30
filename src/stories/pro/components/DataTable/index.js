'use client';

import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getComparator, stableSort } from './helpers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import DataTableHead from './DataTableHead';
import DataTableRow from './DataTableRows';

const DataTable = ({
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
        [order, orderBy]
    );

    return (
        <TableContainer className="ds-table__wrapper">
            <Table
                className={classNames('ds-table', {
                    '--flat': isFlat,
                    '--expandable': isExpandable,
                    '--sortable': isSortable,
                    '--transparent': isTransparent
                })}
                aria-label="table"
            >
                <DataTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    tableHeadData={tableHeadData}
                    tableCellData={tableCellData}
                />
                <TableBody>
                    {visibleRows.map(tableCellData => (
                        <DataTableRow
                            key={tableCellData}
                            expandable={isExpandable}
                            tableCellData={tableCellData}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

DataTableHead.propTypes = {
    isExpandable: PropTypes.bool,
    isFlat: PropTypes.bool,
    isSortable: PropTypes.bool,
    tableHeadData: PropTypes.array.isRequired,
    tableCellData: PropTypes.array.isRequired,
    isTransparent: PropTypes.bool
};

export default DataTable;
