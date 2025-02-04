import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Table } from './Table';
import {
    tableHeadDataOne,
    tableCellDataOne,
    tableCellDataTwo,
    tableHeadDataTwo
} from '../data';

export default {
    title: 'Professional/Table',
    component: Table,
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: () => (
                <>
                    <Canvas of={Primary} sourceState="none" />
                    <Controls />
                </>
            )
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
        <Table
            {...args}
            tableCellData={tableCellData}
            tableHeadData={tableHeadData}
        />
    );
};

export const Primary = Template.bind({});
Primary.args = {
    isSortable: true,
    sortOrder: 'asc',
    sortProperty: 'name'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    sortOrder: { table: { disable: true } },
    sortProperty: { table: { disable: true } },
    tableCellData: { table: { disable: true } },
    tableHeadData: { table: { disable: true } }
};
