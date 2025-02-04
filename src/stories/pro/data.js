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

export const tableHeadDataOne = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    }
];

export const tableCellDataOne = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed'
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest'
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted'
    }
];

export const tableHeadDataTwo = [
    {
        id: 'toggle',
        label: '',
        noSort: true
    },
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status',
        defaultSort: true,
        defaultSortOrder: 'asc'
    }
];

export const tableCellDataTwo = [
    {
        id: 0,
        toggle: true,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        expansionContent: 'Content goes here.'
    },
    {
        id: 1,
        toggle: true,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        expansionContent: 'Content goes here.'
    },
    {
        id: 2,
        toggle: true,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        expansionContent: 'Content goes here.'
    }
];

export const tableHeadDataButton = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataButton = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        action: {
            title: 'Learn more',
            action: () => {
                console.log('Learn more');
            }
        }
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        action: {
            title: 'Learn more',
            action: () => {
                console.log('Learn more');
            }
        }
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        action: {
            title: 'Learn more',
            action: () => {
                console.log('Learn more');
            }
        }
    }
];

export const tableHeadDataMenu = [
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataMenu = [
    {
        id: 0,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        }
    },
    {
        id: 1,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        }
    },
    {
        id: 2,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        }
    }
];

export const tableHeadDataToggle = [
    {
        id: 'toggle',
        label: '',
        noSort: true
    },
    {
        id: 'name',
        label: 'Patient name'
    },
    {
        id: 'test',
        label: 'Test ordered'
    },
    {
        id: 'labRefId',
        label: 'Lab ref ID'
    },
    {
        id: 'orderedBy',
        label: 'Ordered by'
    },
    {
        id: 'status',
        label: 'Status',
        defaultSort: true,
        defaultSortOrder: 'asc'
    },
    {
        id: 'action',
        label: '',
        noSort: true
    }
];

export const tableCellDataToggle = [
    {
        id: 0,
        toggle: true,
        name: 'Blake, Edward',
        test: 'Antibody Screen, RBC with Reflex to Identification, Titer, and Antigen Typing',
        labRefId: '1234',
        orderedBy: 'Osterman, Jon',
        status: 'Input needed',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        },
        expansionContent: 'Content goes here.'
    },
    {
        id: 1,
        toggle: true,
        name: 'Jupiter, Sally',
        test: 'CBC (includes Differential and Platelets) with Automated Differential',
        labRefId: '5678',
        orderedBy: 'Osterman, Jon',
        status: 'Received at Quest',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        },
        expansionContent: 'Content goes here.'
    },
    {
        id: 2,
        toggle: true,
        name: 'Kovachs, Walter',
        test: 'Lipid Panel',
        labRefId: '9012',
        orderedBy: 'Osterman, Jon',
        status: 'Resulted',
        action: {
            menuItems: [
                {
                    title: 'Edit',
                    action: () => {
                        console.log('Edit');
                    }
                },
                {
                    title: 'Print',
                    action: () => {
                        console.log('Print');
                    }
                },
                {
                    title: 'Cancel',
                    action: () => {
                        console.log('Cancel');
                    }
                }
            ]
        },
        expansionContent: 'Content goes here.'
    }
];
