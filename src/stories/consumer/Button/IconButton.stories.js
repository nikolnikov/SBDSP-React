import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { DSCIconButton } from './IconButton';

export default {
    title: 'Consumer/Button/Icon',
    component: DSCIconButton,
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

const Template = args => <DSCIconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    iconClass: 'ds-icon--gear',
    type: 'icon',
    size: 'large'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};
