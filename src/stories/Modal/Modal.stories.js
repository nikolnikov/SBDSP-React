import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Modal } from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
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

const Template = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    buttonHandler: () => console.log('Primary button clicked'),
    buttonLabel: 'Button',
    children:
        'Nulla quam senectus id lorem vitae velit quisque varius augue turpis tincidunt sapien, consectetur faucibus ligula volutpat convallis sit et velit risus consectetur mattis vel quisque justo, mi blandit porttitor mauris faucibus diam dolor id nisi, magna sodales ornare mauris convallis dui pellentesque.',
    title: 'Modal title'
};
Primary.argTypes = {
    buttonHandler: { table: { disable: true } },
    ghostButtonHandler: { table: { disable: true } },
    secondaryButtonHandler: { table: { disable: true } },
    modalClose: { table: { disable: true } },
    opened: { table: { disable: true } }
};
