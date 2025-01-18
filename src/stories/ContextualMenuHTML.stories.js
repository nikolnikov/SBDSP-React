import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { ContextualMenu } from './ContextualMenu';
import { menuItemData } from './data';

export default {
    title: 'Components/Contextual Menu/HTML',
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
                    <Unstyled>
                        <h3 className="title">Contextual menu</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<button class="ds-button --icon" aria-haspopup="true">
    <span class="ds-icon--user-circle" aria-label="ds-icon--user-circle"></span>
</button>

<div class="ds-menu" role="menu">
    <div class="ds-menu__item">Item 1</div>
    <div class="ds-menu__item">Item 2</div>
    <div class="ds-menu__item">Item 3</div>
</div>
`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <ContextualMenu {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Contextual menu';
Primary.args = {
    closeMenu: () => console.log('Close menu'),
    menuItems: menuItemData,
    openMenu: { current: 'menu' }
};
