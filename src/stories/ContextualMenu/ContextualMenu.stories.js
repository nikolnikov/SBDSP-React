import { ContextualMenu } from './ContextualMenu';

export default {
    title: 'Components/Contextual menu',
    component: ContextualMenu,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

const menuItemData = [
    {
        title: 'Menu item 1',
        action: () => {
            console.log('Menu item 1 clicked');
        }
    },
    {
        title: 'Menu item 2',
        action: () => {
            console.log('Menu item 2 clicked');
        }
    },
    {
        title: 'Menu item 3',
        action: () => {
            console.log('Menu item 3 clicked');
        }
    }
];

export const DefaultContextualMenu = {
    args: {
        closeMenu: () => console.log('Close menu'),
        menuItems: menuItemData
    },
    argTypes: {
        closeMenu: { table: { disable: true } },
        menuItems: { table: { disable: true } },
        openMenu: { table: { disable: true } },
        children: { table: { disable: true } },
        menuClass: { table: { disable: true } }
    }
};

export const RightAlignedContextualMenu = {
    args: {
        ...DefaultContextualMenu.args,
        menuRight: true
    },
    argTypes: {
        ...DefaultContextualMenu.argTypes
    }
};
