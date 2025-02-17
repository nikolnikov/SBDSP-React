import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const DataTableRow = ({ isData, tableCellData }) => {
    return (
        <>
            <TableRow
                className={`${
                    isData ? 'ds-data-table__row' : 'ds-table__table-tr'
                }`}
            >
                {Object.keys(tableCellData).map((cellKey, index) => (
                    <TableCell
                        className={`${
                            isData
                                ? 'ds-data-table__row-td'
                                : 'ds-table__table-td'
                        } --flexed-content-row`}
                        key={`${tableCellData.id}-${cellKey}-${index}`}
                    >
                        <div
                            className="ds-row --flex-wrap"
                            dangerouslySetInnerHTML={{
                                __html: tableCellData[cellKey]
                            }}
                        ></div>
                    </TableCell>
                ))}
            </TableRow>
        </>
    );
};

export default DataTableRow;
