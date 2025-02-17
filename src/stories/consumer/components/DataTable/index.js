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
    hasDarkHeader,
    isData,
    isSortable,
    tableHeadData,
    tableCellData,
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
        <TableContainer
            className={`${isData ? 'ds-data-table__container' : 'ds-table'}`}
        >
            <Table
                className={classNames(
                    `${isData ? 'ds-data-table' : 'ds-table__table'}`,
                    {
                        '--sortable': isSortable && isData,
                        '--dark-header': hasDarkHeader
                    }
                )}
                aria-label="table"
            >
                <DataTableHead
                    key={tableHeadData.key}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    isData={isData}
                    isSortable={isSortable}
                    tableHeadData={tableHeadData}
                    tableCellData={tableCellData}
                />
                <TableBody>
                    {visibleRows.map((tableCellData, index) => (
                        <DataTableRow
                            isData={isData}
                            key={tableCellData.key || index}
                            tableCellData={tableCellData}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

DataTableHead.propTypes = {
    hasDarkHeader: PropTypes.bool,
    isData: PropTypes.bool,
    isSortable: PropTypes.bool,
    tableHeadData: PropTypes.array.isRequired,
    tableCellData: PropTypes.array.isRequired
};

export default DataTable;
