import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QDSIconButton from '../Button/IconButton.index';
import QDSInputSelect from '../InputSelect';

function QDSPagination({
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

                    <QDSInputSelect
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
                    <QDSIconButton
                        customClasses={groupCount === 1 ? '--disabled' : ''}
                        clickHandler={groupPreviousHandler}
                        icon="caret-left"
                        size="md"
                        tooltip={groupCount === 1 ? '' : 'Previous page'}
                    />

                    <QDSIconButton
                        customClasses={
                            endingItem >= totalItems ? '--disabled' : ''
                        }
                        clickHandler={groupNextHandler}
                        icon="caret-right"
                        size="md"
                        tooltip={endingItem >= totalItems ? '' : 'Next page'}
                    />
                </div>
            </div>
        </div>
    );
}

QDSPagination.propTypes = {
    customClasses: PropTypes.string,
    totalItemCount: PropTypes.number,
    itemCountSelectionArray: PropTypes.array
};

export default QDSPagination;
