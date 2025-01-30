import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { NavFooter } from './NavFooter';

export default {
    title: 'Components/Navigation: Footer',
    component: NavFooter,
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

const Template = args => <NavFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: true,
    hasNav: true,
    margins: true,
    maxWidth: true
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    margins: { table: { disable: true } }
};
