import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Avatar } from './Avatar';

export default {
    title: 'Professional/Avatar',
    component: Avatar,
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

const Template = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    initial: 'B',
    size: 'medium'
};
Primary.argTypes = {
    clickHandler: { table: { disable: true } },
    customClasses: { table: { disable: true } }
};
