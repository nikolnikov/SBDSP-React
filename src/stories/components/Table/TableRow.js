import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSButton from '../Button';
import QDSIconButton from '../Button/IconButton.index';
import Collapse from '@mui/material/Collapse';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import QDSContextualMenu from '../ContextualMenu';
import QDSTooltip from '../Tooltip';

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
        (tableCellData.expandedContent ? 1 : 1) -
        (tableCellData.actions ? 1 : 1);

    const TruncatedCol = ({ content }) => {
        const textRef = useRef(null);
        const containerRef = useRef(null);
        const [isTruncated, setIsTruncated] = useState(false);

        useEffect(() => {
            const checkTruncation = () => {
                if (textRef.current && containerRef.current) {
                    const isOverflowing =
                        textRef.current.scrollWidth >
                        containerRef.current.clientWidth;
                    setIsTruncated(isOverflowing);
                }
            };

            checkTruncation();

            const resizeObserver = new ResizeObserver(checkTruncation);
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }

            return () => {
                if (containerRef.current) {
                    resizeObserver.unobserve(containerRef.current);
                }
                resizeObserver.disconnect();
            };
        }, [content]);

        return (
            <div className="ds-truncate ds-flex --column" ref={containerRef}>
                {isTruncated ? (
                    <QDSTooltip message={content} placement="top">
                        <span ref={textRef}>{content}</span>
                    </QDSTooltip>
                ) : (
                    <span ref={textRef}>{content}</span>
                )}
            </div>
        );
    };

    const renderCellContent = value => {
        if (value === null || value === undefined) {
            return '';
        }

        if (typeof value === 'object' && value !== null) {
            if ('value' in value && 'truncate' in value) {
                return value.truncate ? (
                    <TruncatedCol content={value.value} />
                ) : (
                    <span>{value.value}</span>
                );
            }

            return (
                <span
                    dangerouslySetInnerHTML={{
                        __html: value.value
                    }}
                />
            );
        }

        return (
            <span
                dangerouslySetInnerHTML={{
                    __html: value.value
                }}
            />
        );
    };

    return (
        <>
            <MuiTableRow className="ds-table__row" key={tableCellData.id.value}>
                {expandable && (
                    <MuiTableCell className="ds-table__row-td expansion-tab">
                        <QDSIconButton
                            customClasses={open ? '--expanded' : ''}
                            icon="expand"
                            clickHandler={handleRowClick}
                            size="lg"
                        />
                    </MuiTableCell>
                )}

                {Object.entries(tableCellData).map(([key, value]) => {
                    if (
                        key === 'id' ||
                        key === 'toggle' ||
                        key === 'actions' ||
                        key === 'expandedContent'
                    ) {
                        return null;
                    }

                    return (
                        <MuiTableCell
                            className="ds-table__row-td"
                            key={`${tableCellData.id.value}-${key}`}
                        >
                            {renderCellContent(value)}
                        </MuiTableCell>
                    );
                })}

                {tableCellData.actions && (
                    <MuiTableCell
                        className={classNames('ds-table__row-td', {
                            '--actions': tableCellData.actions.menuItems
                        })}
                        key={`${tableCellData.id.value}-action`}
                    >
                        {tableCellData.actions.menuItems ? (
                            <>
                                <QDSIconButton
                                    clickHandler={openMenu}
                                    icon="legacy--overflow"
                                    size="lg"
                                />
                                <QDSContextualMenu
                                    closeMenu={closeMenu}
                                    menuItems={tableCellData.actions.menuItems}
                                    menuRight
                                    openMenu={menu}
                                />
                            </>
                        ) : (
                            <QDSButton
                                clickHandler={tableCellData.actions.action}
                                label={tableCellData.actions.title}
                                ariaLabel={tableCellData.actions.title}
                                type="secondary"
                                size="sm"
                            />
                        )}
                    </MuiTableCell>
                )}
            </MuiTableRow>
            {expandable && (
                <MuiTableRow
                    className="ds-table__row --expandable"
                    key={`${tableCellData.id.value}-expansion`}
                >
                    <MuiTableCell
                        className="ds-table__expansion"
                        colSpan={columnCount}
                    >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <div className="ds-table__expansion-content">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: tableCellData.expandedContent
                                            .value
                                    }}
                                />
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
