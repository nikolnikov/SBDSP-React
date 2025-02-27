import React, { useState } from 'react';
import Button from '../Button';
import IconButton from '../Button/IconButton.index';
import Collapse from '@mui/material/Collapse';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import ContextualMenu from '../ContextualMenu';
import PropTypes from 'prop-types';

const TableRow = ({ expandable, tableCellData }) => {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState();
    const openMenu = e => {
        setMenu(e.currentTarget);
    };

    const closeMenu = () => {
        setMenu();
    };

    const handleRowClick = () => {
        setOpen(!open);
    };

    const columnCount =
        Object.keys(tableCellData).length -
        (tableCellData.expansionContent ? 1 : 1) -
        (tableCellData.action ? 1 : 1);

    return (
        <>
            <MuiTableRow className="ds-table__row" key={tableCellData.id}>
                {expandable && (
                    <MuiTableCell className="ds-table__row-td expansion-tab">
                        <IconButton
                            customClasses={open ? '--expanded' : ''}
                            icon="expand"
                            size="large"
                            clickHandler={handleRowClick}
                        />
                    </MuiTableCell>
                )}

                {Object.entries(tableCellData).map(([key, value]) => {
                    if (
                        key === 'id' ||
                        key === 'toggle' ||
                        key === 'action' ||
                        key === 'expansionContent'
                    ) {
                        return null;
                    }

                    return (
                        <MuiTableCell
                            className="ds-table__row-td"
                            key={`${tableCellData.id}-${key}`}
                        >
                            <span>{value}</span>
                        </MuiTableCell>
                    );
                })}

                {tableCellData.action && (
                    <MuiTableCell
                        className="ds-table__row-td"
                        key={`${tableCellData.id}-action`}
                    >
                        {tableCellData.action.menuItems ? (
                            <>
                                <IconButton
                                    clickHandler={openMenu}
                                    icon="legacy--overflow"
                                    size="large"
                                />
                                <ContextualMenu
                                    closeMenu={closeMenu}
                                    menuItems={tableCellData.action.menuItems}
                                    menuRight
                                    openMenu={menu}
                                />
                            </>
                        ) : (
                            <Button
                                clickHandler={tableCellData.action.action}
                                label={tableCellData.action.title}
                                ariaLabel={tableCellData.action.title}
                                type="secondary"
                                size="small"
                            />
                        )}
                    </MuiTableCell>
                )}
            </MuiTableRow>
            {expandable && (
                <MuiTableRow
                    className="ds-table__row --expandable"
                    key={`${tableCellData.id}-expansion`}
                >
                    <MuiTableCell
                        className="ds-table__expansion"
                        colSpan={columnCount}
                    >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <div className="ds-table__expansion-content">
                                {tableCellData.expansionContent}
                            </div>
                        </Collapse>
                    </MuiTableCell>
                </MuiTableRow>
            )}
        </>
    );
};

TableRow.propTypes = {
    expandable: PropTypes.bool,
    tableCellData: PropTypes.object.isRequired
};

export default TableRow;
