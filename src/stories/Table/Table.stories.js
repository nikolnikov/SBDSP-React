import React from 'react';
import { QDSTable } from './Table';
import {
    tableHeadDataOne,
    tableCellDataOne,
    tableCellDataTwo,
    tableHeadDataTwo
} from './data';

export default {
    title: 'Components/Table',
    component: QDSTable,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => {
    const tableCellData = args.isExpandable
        ? tableCellDataTwo
        : tableCellDataOne;
    const tableHeadData = args.isExpandable
        ? tableHeadDataTwo
        : tableHeadDataOne;

    return (
        <QDSTable
            {...args}
            tableHeadData={tableHeadData}
            tableCellData={tableCellData}
        />
    );
};

export const BasicTable = Template.bind({});
BasicTable.args = {};
BasicTable.argTypes = {
    customClasses: { table: { disable: true } },
    sortOrder: { table: { disable: true } },
    sortProperty: { table: { disable: true } },
    tableCellData: { table: { disable: true } },
    tableHeadData: { table: { disable: true } }
};

export const SortableTable = Template.bind({});
SortableTable.args = {
    isSortable: true,
    sortOrder: 'asc',
    sortProperty: 'name'
};
SortableTable.argTypes = {
    ...BasicTable.argTypes
};

export const ExpandableSortableTableWithActions = Template.bind({});
ExpandableSortableTableWithActions.args = {
    ...SortableTable.args,
    isExpandable: true
};
ExpandableSortableTableWithActions.argTypes = {
    ...BasicTable.argTypes
};

export const FlatTransparentTable = Template.bind({});
FlatTransparentTable.args = {
    isFlat: true,
    isTransparent: true
};
FlatTransparentTable.argTypes = {
    ...BasicTable
};
