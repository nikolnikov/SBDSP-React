import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Pagination } from './Pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
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

const Template = args => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    nextHandler: () => console.log('Next'),
    prevHandler: () => console.log('Prev'),
    totalItemCount: 150,
    itemCountSelectionArray: ['10', '25', '50', '75', '100']
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    nextHandler: { table: { disable: true } },
    prevHandler: { table: { disable: true } }
};
