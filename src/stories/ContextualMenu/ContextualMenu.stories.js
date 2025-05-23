import { QDSContextualMenu } from './ContextualMenu';

export default {
    title: 'Components/Contextual menu',
    component: QDSContextualMenu,
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
        icon: 'edit',
        label: 'Edit',
        action: () => console.log('Edit clicked!')
    },
    {
        icon: 'trash',
        label: 'Delete',
        action: () => console.log('Delete clicked!')
    },
    {
        icon: 'print',
        label: 'Print',
        action: () => console.log('Print clicked!')
    }
];

export const DefaultContextualMenu = {
    args: {
        closeMenu: () => console.log('Close menu'),
        menuItems: menuItemData
    },
    argTypes: {
        closeMenu: { table: { disable: true } },
        menuItems: {
            table: {
                type: {
                    summary:
                        '[{ icon: string, label: string, action: function }]'
                }
            }
        },
        menuWidth: { table: { disable: true } },
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
