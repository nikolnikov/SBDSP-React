import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { ContextualMenu } from './ContextualMenu';
import { menuItemData } from './data';

export default {
    title: 'Components/Contextual Menu/Angular',
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
<button class="ds-button --icon ds-menu__trigger" aria-label="menu trigger" [matMenuTriggerFor]="iconMenu">
    <span class="ds-icon--user-circle" aria-label="ds-icon--user-circle"></span>
</button>

<mat-menu class="ds-dropdown" #iconMenu="matMenu">
    <button class="ds-dropdown__item" mat-menu-item>Menu item 1</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 2</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 3</button>
</mat-menu>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Contextual menu right</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRight}
                        source={{
                            code: `
<button class="ds-button --icon ds-menu__trigger" aria-label="menu trigger" [matMenuTriggerFor]="iconMenu">
    <span class="ds-icon--user-circle" aria-label="ds-icon--user-circle"></span>
</button>

<mat-menu class="ds-dropdown" #iconMenu="matMenu" xPosition="before">
    <button class="ds-dropdown__item" mat-menu-item>Menu item 1</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 2</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 3</button>
</mat-menu>
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

export const PrimaryRight = Template.bind({});
PrimaryRight.storyName = 'Contextual menu right';
PrimaryRight.args = {
    ...Primary.args,
    menuRight: true
};
