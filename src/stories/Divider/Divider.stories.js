import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Divider } from './Divider';

export default {
    title: 'Components/Divider',
    component: Divider,
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

const Template = args => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Divider';
Primary.args = {};
Primary.argTypes = {
    customClasses: { table: { disable: true } }
};
