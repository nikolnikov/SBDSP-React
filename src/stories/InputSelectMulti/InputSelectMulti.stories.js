import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { InputSelectMulti } from './InputSelectMulti';
import { nameOptions } from '../data';

export default {
    title: 'Components/Input Select Multi',
    component: InputSelectMulti,
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

const Template = args => <InputSelectMulti {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    onChange: value => console.log(value),
    options: nameOptions,
    placeholder: 'Select options'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    onChange: { table: { disable: true } },
    options: { table: { disable: true } },
    menuClass: { table: { disable: true } },
    selectedValue: { table: { disable: true } }
};
