import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { DSCButton } from './Button';

export default {
    title: 'Consumer/Button',
    component: DSCButton,
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

const Template = args => <DSCButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button label',
    type: 'primary',
    size: 'large'
};
Primary.argTypes = {
    ariaLabel: { table: { disable: true } },
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};
