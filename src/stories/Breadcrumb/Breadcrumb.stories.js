import { QDSBreadcrumb } from './Breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    component: QDSBreadcrumb,
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

const items = [
    {
        label: 'Back to results',
        href: '/'
    },
    {
        label: 'Sally Jupiter lab results',
        href: '/sally-jupiter-lab-results'
    },
    {
        label: 'CBC with differential test results',
        href: null
    }
];

const itemsExt = [
    {
        label: 'Back to results',
        href: '/'
    },
    {
        label: 'Sally Jupiter lab results',
        href: '/sally-jupiter-lab-results'
    },
    {
        label: 'CBC with differential test results',
        href: '/cbc-with-differential-test-results'
    },
    {
        label: 'CBC extended',
        href: null
    }
];

export const BasicBreadcrumb = {
    args: {
        breadcrumbs: items
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const BreadcrumbWithDropdown = {
    args: {
        breadcrumbs: itemsExt
    },
    argTypes: {
        ...BasicBreadcrumb.argTypes
    }
};
