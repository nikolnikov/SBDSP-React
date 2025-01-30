import React from 'react';
import { ContextualMenu } from './ContextualMenu';
import { StoriesTemplate } from '../Stories.template';
import { menuItemData } from './data';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Components/Contextual Menu/Code',
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
            page: StoryDocs
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

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
    ...Primary.args,
    menuRight: true
};

const storyData = [
    {
        title: 'Contextual menu',
        template: Primary,
        reactCode: `
import Menu from '@ds-react/pro/Menu';

<ContextualMenu
    closeMenu={() => {}}
    menuItems={[
        {
        action: () => {},
        title: 'Menu item 1'
        },
        {
        action: () => {},
        title: 'Menu item 2'
        },
        {
        action: () => {},
        title: 'Menu item 3'
        }
    ]}
    openMenu={{
        current: '[Circular]'
    }}
/>
        `,
        angularCode: `
<button class="ds-button --icon ds-menu__trigger" aria-label="menu trigger" [matMenuTriggerFor]="iconMenu">
    <span class="ds-icon--user-circle" aria-label="ds-icon--user-circle"></span>
</button>

<mat-menu class="ds-dropdown" #iconMenu="matMenu">
    <button class="ds-dropdown__item" mat-menu-item>Menu item 1</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 2</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 3</button>
</mat-menu>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-button --icon" aria-haspopup="true">
    <span class="ds-icon--user-circle" aria-label="ds-icon--user-circle"></span>
</button>

<div class="ds-menu" role="menu">
    <div class="ds-menu__item">Item 1</div>
    <div class="ds-menu__item">Item 2</div>
    <div class="ds-menu__item">Item 3</div>
</div>
        `
    },
    {
        title: 'Contextual menu right',
        template: PrimaryRight,
        reactCode: `
import Menu from '@ds-react/pro/Menu';

<ContextualMenu
    closeMenu={() => {}}
    menuItems={[
        {
        action: () => {},
        title: 'Menu item 1'
        },
        {
        action: () => {},
        title: 'Menu item 2'
        },
        {
        action: () => {},
        title: 'Menu item 3'
        }
    ]}
    menuRight
    openMenu={{
        current: '[Circular]'
    }}
/>
        `,
        angularCode: `
<button class="ds-button --icon ds-menu__trigger" aria-label="menu trigger" [matMenuTriggerFor]="iconMenu">
    <span class="ds-icon--user-circle" aria-label="ds-icon--user-circle"></span>
</button>

<mat-menu class="ds-dropdown" #iconMenu="matMenu" xPosition="before">
    <button class="ds-dropdown__item" mat-menu-item>Menu item 1</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 2</button>
    <button class="ds-dropdown__item" mat-menu-item>Menu item 3</button>
</mat-menu>
        `,
        tsCode: '',
        htmlCode: ''
    }
];

const storyPropTypes = [
    'children: PropTypes.node,',
    'closeMenu: PropTypes.func,',
    'menuItems: PropTypes.array,',
    'menuRight: PropTypes.bool,',
    'menuWidth: PropTypes.number,',
    'menuClass: PropTypes.string,',
    'openMenu: PropTypes.object,'
];
