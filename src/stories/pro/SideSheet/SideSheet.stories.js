import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { SideSheet } from './SideSheet';

export default {
    title: 'Professional/Side Sheet',
    component: SideSheet,
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

const Template = args => <SideSheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Side sheet content.',
    title: 'Title'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } }
};
