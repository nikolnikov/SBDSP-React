import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Input } from './Input';

export default {
    title: 'Professional/Input',
    component: Input,
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

const Template = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    type: 'text'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    type: { table: { disable: true } },
    name: { table: { disable: true } },
    onChange: { table: { disable: true } }
};
