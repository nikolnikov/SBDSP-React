import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
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

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button label',
    type: 'primary'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};
