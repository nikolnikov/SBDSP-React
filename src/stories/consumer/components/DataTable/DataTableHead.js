import React from 'react';
// import PropTypes from 'prop-types';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

const DataTableHead = ({
    isData,
    isSortable,
    order,
    orderBy,
    onRequestSort,
    tableHeadData
}) => {
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow
                className={`${
                    isData ? 'ds-data-table__head' : 'ds-table__table-tr'
                }`}
            >
                {tableHeadData.map(headCell => (
                    <TableCell
                        className={`${
                            isData
                                ? 'ds-data-table__head-th'
                                : 'ds-table__table-th'
                        } --flexed-content-row ${
                            headCell.noSort && isSortable ? '--no-sort' : ''
                        }`}
                        key={headCell.id}
                        onClick={
                            isSortable && isData
                                ? createSortHandler(headCell.id)
                                : undefined
                        }
                        sortDirection={orderBy === headCell.id ? order : false}
                        direction={orderBy === headCell.id ? order : 'asc'}
                    >
                        {isSortable && isData ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={
                                    orderBy === headCell.id ? order : 'asc'
                                }
                                tabIndex={headCell.noSort ? -1 : 0}
                            >
                                {headCell.label}
                            </TableSortLabel>
                        ) : (
                            <div className="--flex-wrap">
                                {headCell.label}
                                {headCell.icon && (
                                    <span
                                        className={`${headCell.icon}`}
                                        aria-label={headCell.icon}
                                    ></span>
                                )}
                            </div>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

// DataTableHead.propTypes = {
//     onRequestSort: PropTypes.func.isRequired,
//     order: PropTypes.oneOf(['asc', 'desc']),
//     orderBy: PropTypes.string.isRequired,
//     tableHeadData: PropTypes.array.isRequired
// };

export default DataTableHead;
