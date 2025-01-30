import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Message } from './Message';

export default {
    title: 'Professional/Message',
    component: Message,
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
                    <Canvas of={Informative} sourceState="none" />
                    <Controls />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Message {...args} />;

export const Informative = Template.bind({});
Informative.args = {
    actions: [
        { title: 'Yes', action: null },
        { title: 'No', action: null }
    ],
    closeHandler: () => {
        console.log('Message closed');
    },
    hideX: false,
    message:
        "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
    noIcon: false,
    title: 'Heading',
    type: 'informative'
};
Informative.argTypes = {
    closeHandler: { table: { disable: true } }
};
