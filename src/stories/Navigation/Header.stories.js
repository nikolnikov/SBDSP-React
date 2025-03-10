import React from 'react';
import Button from '../components/Button';
import { QDSHeader } from './Header';
import {
    headerNavData,
    headerSubNavData,
    userMenuContent,
    userNotifications
} from './Header.data';

export default {
    title: 'Components/Navigation/Header',
    component: QDSHeader,
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

export const HeaderWithNavigationSubnavAndUserMenu = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md',
        navData: headerNavData,
        subNavData: headerSubNavData,
        userAvatarInitial: 'E',
        userMenuContent: userMenuContent
    },
    argTypes: {
        button: { table: { disable: true } },
        customClasses: { table: { disable: true } },
        navData: { table: { disable: true } },
        noMargins: { table: { disable: true } },
        noMaxWidth: { table: { disable: true } },
        notificationsTitle: { table: { disable: true } },
        subNavData: { table: { disable: true } },
        userName: { table: { disable: true } },
        userMenuContent: { table: { disable: true } },
        userNotifications: { table: { disable: true } }
    },
    name: 'Header with navigation, subnav and user menu'
};

export const HeaderWithNavigationAndButton = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md',
        button: (
            <Button
                label="Sign on"
                icon="plus-circle"
                iconRight="caret-right"
                onClick={() => {}}
                size="sm"
            />
        ),
        navData: headerNavData
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const HeaderWithNavigationAndNotifications = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md',
        navData: headerNavData,
        notificationsTitle: 'Notifications',
        userNotifications: userNotifications
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const HeaderWithNavigation = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md',
        navData: headerNavData
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};

export const HeaderWithButton = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'md',
        button: (
            <Button
                label="Sign on"
                icon="plus-circle"
                iconRight="caret-right"
                onClick={() => {}}
                size="sm"
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
        logoSize: 'md',
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
        logoSize: 'md'
    },
    argTypes: {
        ...HeaderWithNavigationSubnavAndUserMenu.argTypes
    }
};
