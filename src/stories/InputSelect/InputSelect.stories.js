import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { InputSelect } from './InputSelect';
import { inputSelectOptions } from '../data';

export default {
    title: 'Components/Input Select',
    component: InputSelect,
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

const Template = args => <InputSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    onChange: { table: { disable: true } },
    options: { table: { disable: true } },
    menuClass: { table: { disable: true } },
    selectedValue: { table: { disable: true } }
};
