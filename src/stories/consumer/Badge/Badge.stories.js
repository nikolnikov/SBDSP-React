import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { DSCBadge } from './Badge';

export default {
    title: 'Consumer/Badge',
    component: DSCBadge,
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
                    <Canvas of={NeutralBadge} sourceState="none" />
                    <Controls />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <DSCBadge {...args} />;

export const NeutralBadge = Template.bind({});
NeutralBadge.args = {
    label: 'Status',
    status: 'neutral'
};
NeutralBadge.argTypes = {
    customClasses: { table: { disable: true } }
};
