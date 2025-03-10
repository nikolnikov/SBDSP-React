import { QDSRail } from './Rail';

export default {
    title: 'Components/Navigation/Rail',
    component: QDSRail,
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

const navItems = [
    {
        label: 'Home',
        iconClass: 'ds-icon--house',
        hasNotification: false,
        notificationCount: '',
        route: ''
    },
    {
        label: 'Tests',
        iconClass: 'ds-icon--test-tube-label',
        hasNotification: true,
        notificationCount: '#',
        route: '',
        subItems: [
            {
                label: 'Tests sub menu label',
                route: '',
                expandedSubItems: [
                    {
                        label: 'Sub menu label'
                    },
                    {
                        label: 'Sub menu label'
                    }
                ]
            },
            {
                label: 'Tests sub menu label',
                route: ''
            }
        ]
    },
    {
        label: 'Results',
        iconClass: 'ds-icon--notepad',
        hasNotification: true,
        notificationCount: '',
        route: '',
        subItems: [
            {
                label: 'Results sub menu label',
                route: '',
                expandedSubItems: [
                    {
                        label: 'Sub menu label'
                    },
                    {
                        label: 'Sub menu label'
                    }
                ]
            },
            {
                label: 'Results sub menu label',
                route: ''
            }
        ]
    }
];

export const BasicRail = {
    args: {
        navItems: navItems,
        noHeader: false
    },
    argTypes: {}
};

export const RailWithNoHeader = {
    args: {
        navItems: navItems,
        noHeader: true
    },
    argTypes: {}
};
