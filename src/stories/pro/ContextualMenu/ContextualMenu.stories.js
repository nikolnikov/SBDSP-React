import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { ContextualMenu } from './ContextualMenu';
import { menuItemData } from './data';

export default {
    title: 'Professional/Contextual Menu',
    component: ContextualMenu,
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

const Template = args => <ContextualMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    closeMenu: () => console.log('Close menu'),
    menuItems: menuItemData,
    openMenu: { current: 'menu' }
};
Primary.argTypes = {
    closeMenu: { table: { disable: true } },
    menuItems: { table: { disable: true } },
    openMenu: { table: { disable: true } },
    children: { table: { disable: true } },
    menuClass: { table: { disable: true } }
};
