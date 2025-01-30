import React, { Children } from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Tooltip } from './Tooltip';

export default {
    title: 'Professional/Tooltip',
    component: Tooltip,
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

const Template = args => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <span>Hover me</span>,
    placement: 'top',
    title: 'Tooltip goes here.'
};
Primary.argTypes = {
    children: { table: { disable: true } }
};
