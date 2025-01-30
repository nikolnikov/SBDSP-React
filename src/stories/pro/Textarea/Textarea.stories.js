import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Textarea } from './Textarea';
import { on } from 'npm';
import { name } from 'file-loader';

export default {
    title: 'Professional/Textarea',
    component: Textarea,
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

const Template = args => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'textarea',
    label: 'Textarea label',
    onChange: () => console.log('Textarea changed')
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    name: { table: { disable: true } },
    onChange: { table: { disable: true } }
};
