import React, { useRef, useState } from 'react';
import Button from '../Button';
import Collapse from '@mui/material/Collapse';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '../Tooltip';
import PropTypes from 'prop-types';
import useIsTextTruncated from './useIsTextTruncated';

const DataTableRow = ({ expandable, tableCellData }) => {
    const [open, setOpen] = useState(false);

    const nameRef = useRef(null);
    const testRef = useRef(null);
    const labIdRef = useRef(null);
    const orderedByRef = useRef(null);

    const isNameTruncated = useIsTextTruncated(nameRef);
    const isTestTruncated = useIsTextTruncated(testRef);
    const isLabRefTruncated = useIsTextTruncated(labIdRef);
    const isOrderedByTruncated = useIsTextTruncated(orderedByRef);

    const handleRowClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <TableRow className="ds-table__row" key={tableCellData.id}>
                {expandable && (
                    <TableCell className="ds-table__row-td expansion-tab">
                        <Button
                            ariaLabel="Expand row"
                            customClasses={open ? '--expanded' : ''}
                            type="icon"
                            medium
                            clickHandler={handleRowClick}
                        >
                            <span className="ds-icon ds-icon--expand"></span>
                        </Button>
                    </TableCell>
                )}

                <TableCell className="ds-table__row-td">
                    <div className="ds-truncate">
                        <Tooltip
                            title={isNameTruncated ? tableCellData.name : ''}
                        >
                            <span ref={nameRef}>{tableCellData.name}</span>
                        </Tooltip>
                    </div>
                </TableCell>

                <TableCell className="ds-table__row-td">
                    <div className="ds-truncate">
                        <Tooltip
                            title={isTestTruncated ? tableCellData.test : ''}
                        >
                            <span ref={testRef}>{tableCellData.test}</span>
                        </Tooltip>
                    </div>
                </TableCell>

                <TableCell className="ds-table__row-td">
                    <div className="ds-truncate">
                        <Tooltip
                            title={
                                isLabRefTruncated ? tableCellData.labRefId : ''
                            }
                        >
                            <span ref={labIdRef}>{tableCellData.labRefId}</span>
                        </Tooltip>
                    </div>
                </TableCell>

                <TableCell className="ds-table__row-td">
                    <div className="ds-truncate">
                        <Tooltip
                            title={
                                isOrderedByTruncated
                                    ? tableCellData.orderedBy
                                    : ''
                            }
                        >
                            <span ref={orderedByRef}>
                                {tableCellData.orderedBy}
                            </span>
                        </Tooltip>
                    </div>
                </TableCell>

                <TableCell className="ds-table__row-td">
                    {tableCellData.status}
                </TableCell>

                <TableCell className="ds-table__row-td">
                    <Button ariaLabel="View/resolve" type="secondary" small>
                        <span>View/resolve</span>
                    </Button>
                </TableCell>
            </TableRow>
            {expandable && (
                <TableRow className="ds-table__row --expandable">
                    <TableCell className="ds-table__expansion" colSpan={7}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <div className="ds-table__expansion-content">
                                Content goes here.
                            </div>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </>
    );
};

DataTableRow.propTypes = {
    expandable: PropTypes.bool,
    tableCellData: PropTypes.object.isRequired
};

export default DataTableRow;
