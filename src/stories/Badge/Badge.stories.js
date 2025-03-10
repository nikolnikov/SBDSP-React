import { QDSBadge } from './Badge';

export default {
    title: 'Components/Badge',
    component: QDSBadge,
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

export const SolidBadge = {
    args: {
        label: 'Status',
        status: 'neutral'
    },
    argTypes: {
        color: { table: { disable: true } },
        customClasses: { table: { disable: true } }
    }
};

export const SolidCircleBadge = {
    args: {
        isCircle: true,
        label: '#',
        status: 'informative'
    },
    argTypes: {
        ...SolidBadge.argTypes
    }
};

export const SecondaryBadge = {
    args: {
        label: 'Status',
        secondary: true,
        status: 'success'
    },
    argTypes: {
        ...SolidBadge.argTypes
    }
};

export const SecondaryCircleBadge = {
    args: {
        isCircle: true,
        label: '#',
        secondary: true,
        status: 'warning'
    },
    argTypes: {
        ...SolidBadge.argTypes
    }
};

export const NotificationBadge = {
    args: {
        hasNotification: true,
        status: 'error'
    },
    argTypes: {
        ...SolidBadge.argTypes
    }
};
