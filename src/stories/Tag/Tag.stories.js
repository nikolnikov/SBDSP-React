import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { Tag } from './Tag';

export default {
    title: 'Components/Tag',
    component: Tag,
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

const Template = args => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Tag label'
};
Primary.argTypes = {
    clickHandler: { table: { disable: true } },
    customClasses: { table: { disable: true } }
};
