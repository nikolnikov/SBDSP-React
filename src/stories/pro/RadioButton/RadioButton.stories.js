import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { RadioButton } from './RadioButton';
import { name } from 'file-loader';

export default {
    title: 'Professional/Radio Button',
    component: RadioButton,
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

const Template = args => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'radio',
    label: 'Radio button label',
    onChange: () => {},
    name: 'radio',
    value: 'radio'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    name: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } }
};
