import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Badge } from './Badge';

export default {
    title: 'Components/Badge',
    component: Badge,
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

const Template = args => <Badge {...args} />;

export const NeutralBadge = Template.bind({});
NeutralBadge.args = {
    label: 'Status'
};
NeutralBadge.argTypes = {
    customClasses: { table: { disable: true } },
    color: { table: { disable: true } }
};
