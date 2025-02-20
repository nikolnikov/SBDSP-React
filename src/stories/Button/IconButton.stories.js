import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { IconButton } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: IconButton,
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

const Template = args => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    iconClass: 'ds-icon--gear',
    size: 'large',
    type: 'icon'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};
