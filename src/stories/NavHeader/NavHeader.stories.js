import React from 'react';
import { Canvas, Controls } from '@storybook/blocks';
import { NavHeader } from './NavHeader';
import { headerNavData, avatarMenuContent } from '../data';

export default {
    title: 'Components/Navigation: Header',
    component: NavHeader,
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
                    <Canvas of={Primary} sourceState="none" />
                    <Controls />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <NavHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
    logoSize: 'small',
    margins: true,
    maxWidth: true,
    hasNav: true,
    navData: headerNavData,
    buttonClickHandler: () => {},
    buttonLabel: 'Sign In',
    secondaryButton: false,
    userAvatarInitial: 'E',
    userMenuContent: avatarMenuContent
};
Primary.argTypes = {
    buttonClickHandler: { table: { disable: true } },
    customClasses: { table: { disable: true } },
    customContent: { table: { disable: true } },
    logoSize: { table: { disable: true } },
    margins: { table: { disable: true } },
    userMenuContent: { table: { disable: true } }
};
