import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
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

const Template = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'checkbox-1',
    label: 'Checkbox label',
    name: 'checkbox',
    onChange: () => {},
    value: 'checkbox'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    inputId: { table: { disable: true } },
    name: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } }
};
