import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import InputSelect from '../InputSelect';
import Tooltip from '../Tooltip';

function Pagination({
    customClasses,
    totalItemCount,
    itemCountSelectionArray
}) {
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [totalItems, setTotalItems] = useState();
    const [startingItem, setStartingItem] = useState(1);
    const [endingItem, setEndingItem] = useState(0);
    const [groupCount, setGroupCount] = useState(1);
    const [value, setValue] = useState('');

    const paginationReset = e => {
        const selection = e.target.value;
        setValue(e.target.value);
        setEndingItem(selection);
        setStartingItem(1);
        setItemsPerPage(selection);
        setItemsPerPage(selection);
        setGroupCount(1);
    };

    const groupNextHandler = () => {
        if (endingItem < totalItems) {
            setGroupCount(groupCount + 1);
        }
    };

    const groupPreviousHandler = () => {
        if (groupCount > 1) {
            setGroupCount(groupCount - 1);
        }
    };

    useEffect(() => {
        setStartingItem(itemsPerPage * groupCount - itemsPerPage + 1);
        setEndingItem(itemsPerPage * groupCount);
    }, [groupCount, itemsPerPage]);

    useEffect(() => {
        setEndingItem(itemCountSelectionArray[0]);
        setStartingItem(
            itemCountSelectionArray[0] - itemCountSelectionArray[0] + 1
        );
        setItemsPerPage(itemCountSelectionArray[0]);
        setTotalItems(totalItemCount);
        setGroupCount(1);
    }, [itemCountSelectionArray, totalItemCount]);

    return (
        <div className={classNames('ds-pagination', customClasses)}>
            <div className="ds-pagination__content">
                <div className="ds-pagination__size">
                    <span>Items per page:</span>

                    <InputSelect
                        menuClass="ds-dropdown--pagination"
                        onChange={e => {
                            paginationReset(e);
                        }}
                        inputId="itemsPerPage"
                        placeholder={`${itemCountSelectionArray[0]}`}
                        options={itemCountSelectionArray}
                        selectedValue={value}
                    />
                </div>

                <div className="ds-pagination__range">
                    <span className="--range-label">{`${startingItem} - ${endingItem} of ${totalItems}`}</span>
                </div>

                <div className="ds-pagination__actions">
                    <button
                        className={classNames('ds-button', '--icon', {
                            '--disabled': groupCount === 1
                        })}
                        onClick={groupPreviousHandler}
                    >
                        <Tooltip title="Previous page">
                            <span
                                className="ds-icon--caret-left"
                                aria-label="Previous"
                                role="img"
                            ></span>
                        </Tooltip>
                    </button>

                    <button
                        className={classNames('ds-button', '--icon', {
                            '--disabled': endingItem >= totalItems
                        })}
                        onClick={groupNextHandler}
                    >
                        <Tooltip title="Next page">
                            <span
                                className="ds-icon--caret-right"
                                aria-label="Next"
                                role="img"
                            ></span>
                        </Tooltip>
                    </button>
                </div>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    customClasses: PropTypes.string,
    nextHandler: PropTypes.func,
    prevHandler: PropTypes.func,
    totalItemCount: PropTypes.number,
    itemCountSelectionArray: PropTypes.array
};

export default Pagination;
