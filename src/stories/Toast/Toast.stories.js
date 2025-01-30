import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Toast } from './Toast';

export default {
    title: 'Components/Toast Notification',
    component: Toast,
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

const Template = args => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    message: 'New results are available. '
};
Primary.argTypes = {
    onClose: { table: { disable: true } },
    opened: { table: { disable: true } }
};
