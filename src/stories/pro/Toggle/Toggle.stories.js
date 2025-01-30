import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Toggle } from './Toggle';

export default {
    title: 'Professional/Toggle switch',
    component: Toggle,
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

const Template = args => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'toggle',
    leftLabel: 'Off',
    rightLabel: 'On'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    name: { table: { disable: true } },
    onChange: { table: { disable: true } }
};
