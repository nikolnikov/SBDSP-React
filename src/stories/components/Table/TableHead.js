import React from 'react';
import PropTypes from 'prop-types';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableSortLabel from '@mui/material/TableSortLabel';

const TableHead = ({ order, orderBy, onRequestSort, tableHeadData }) => {
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <MuiTableHead>
            <MuiTableRow className="ds-table__head">
                {tableHeadData.map(headCell => (
                    <MuiTableCell
                        className={`ds-table__head-th ${
                            headCell.noSort ? '--no-sort' : ''
                        }`}
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                        direction={orderBy === headCell.id ? order : 'asc'}
                    >
                        <MuiTableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            tabIndex={headCell.noSort ? -1 : 0}
                            aria-label="sort"
                        >
                            {headCell.label}
                        </MuiTableSortLabel>
                    </MuiTableCell>
                ))}
            </MuiTableRow>
        </MuiTableHead>
    );
};

TableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']),
    orderBy: PropTypes.string.isRequired,
    tableHeadData: PropTypes.array.isRequired
};

export default TableHead;
