import React from 'react';
import Button from '../components/Button';
import { Header } from './Header';

export default {
    title: 'Components/Navigation/Header',
    component: Header,
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

const headerNavData = [
    {
        label: 'Text button',
        icon: 'user-circle',
        route: null
    },
    {
        label: 'Text button',
        icon: 'user-circle',
        route: null
    },
    {
        label: 'Text button',
        icon: 'user-circle',
        subNav: [
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            }
        ]
    }
];

const headerSubNavData = [
    {
        label: 'Text button',
        route: null
    },
    {
        label: 'Text button',
        subNav: [
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            }
        ]
    }
];

const userMenuContent = (
    <div className="ds-flex --column">
        <Button
            customClasses="ds-header__dropdown-item"
            icon="user-circle"
            label="Edit profile"
        />

        <Button
            customClasses="ds-header__dropdown-item"
            icon="lock-simple-open"
            label="Settings and privacy"
        />

        <Button
            customClasses="ds-header__dropdown-item"
            icon="arrow-square-up-right"
            label="Logout"
        />
    </div>
);

export const HeaderWithNavigationSubnavAndUserMenu = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium',
        navData: headerNavData,
        subNavData: headerSubNavData,
        userAvatarInitial: 'E',
        userMenuContent: userMenuContent
    },
    argTypes: {
        button: { table: { disable: true } },
        customClasses: { table: { disable: true } },
        noMargins: { table: { disable: true } },
        noMaxWidth: { table: { disable: true } },
        userName: { table: { disable: true } }
    },
    name: 'Header with navigation, subnav and user menu'
};

export const HeaderWithNavigationAndButton = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium',
        button: (
            <Button
                label="Sign on"
                icon="plus-circle"
                iconRight="caret-right"
                onClick={() => {}}
                size="small"
            />
        ),
        navData: headerNavData
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const HeaderWithNavigation = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium',
        navData: headerNavData
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const HeaderWithButton = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium',
        button: (
            <Button
                label="Sign on"
                icon="plus-circle"
                iconRight="caret-right"
                onClick={() => {}}
                size="small"
            />
        )
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const HeaderWithAvatar = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium',
        userAvatarInitial: 'E',
        userMenuContent: userMenuContent
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium'
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};
