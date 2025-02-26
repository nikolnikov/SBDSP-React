import React from 'react';
import DSAvatar from '../components/Avatar';
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
        label: 'Menu item',
        icon: 'ds-icon--user-circle',
        route: null,
        hasDropdown: false,
        dropdownContents: null
    },
    {
        label: 'Menu item',
        icon: 'ds-icon--user-circle',
        route: null,
        hasDropdown: true,
        dropdownContents: 'Dropdown content goes here.'
    }
];

const avatarMenuContent = (
    <div className="ds-ptb-16 ds-flex --column">
        <div className="ds-plr-12 ds-flex --row --start-center">
            <DSAvatar size="small" initial="E" />

            <h4 className="ds-m-0 ds-ml-8">Edward, Blake</h4>
        </div>

        <hr className="ds-mtb-12 ds-gray__100--bg" />

        <button className="ds-menu__item">Sign out</button>
    </div>
);

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
        logoSize: 'medium'
    },
    argTypes: {
        buttonClickHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } },
        customContent: { table: { disable: true } },
        logoSize: { table: { disable: true } },
        noMargins: { table: { disable: true } },
        noMaxWidth: { table: { disable: true } },
        userMenuContent: { table: { disable: true } }
    }
};

export const HeaderWithAvatar = {
    args: {
        ...BasicHeader.args,
        userAvatarInitial: 'E',
        userMenuContent: avatarMenuContent
    },
    argTypes: {
        ...BasicHeader.argTypes
    }
};

export const HeaderWithButton = {
    args: {
        ...BasicHeader.args,
        buttonClickHandler: () => {},
        buttonLabel: 'Sign in'
    },
    argTypes: {
        ...BasicHeader.argTypes
    }
};

export const HeaderWithSecondaryButton = {
    args: {
        ...BasicHeader.args,
        buttonClickHandler: () => {},
        buttonLabel: 'Sign in',
        secondaryButton: true
    },
    argTypes: {
        ...BasicHeader.argTypes
    }
};

export const HeaderWithNavigation = {
    args: {
        ...BasicHeader.args,
        navData: headerNavData
    },
    argTypes: {
        ...BasicHeader.argTypes
    }
};
