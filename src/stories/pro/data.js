import React from 'react';
import Avatar from './components/Avatar';

export const headerNavData = [
    {
        label: 'Notifications',
        icon: 'ds-icon--bell',
        route: 'https://www.google.com',
        hasDropdown: false,
        dropdownContents: null
    },
    {
        label: 'Account',
        icon: 'ds-icon--user-circle',
        route: null,
        hasDropdown: true,
        dropdownContents: 'Dropdown content goes here.'
    }
];

export const avatarMenuContent = (
    <div className="ds-ptb-16 ds-flex --column">
        <div className="ds-plr-12 ds-flex --row --start-center">
            <Avatar size="small">E</Avatar>

            <h4 className="ds-m-0 ds-ml-8">Edward, Blake</h4>
        </div>

        <hr className="ds-mtb-12 ds-gray__100--bg" />

        <button className="ds-menu__item">Sign out</button>
    </div>
);

export const inputSelectOptions = [
    'Last 1 day',
    'Last 2 days',
    'Last 3 days',
    'Last 4 days',
    'Last 5 days'
];

export const menuItemData = [
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

export const nameOptions = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];

export const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];
