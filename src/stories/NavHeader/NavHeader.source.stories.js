import React from 'react';
import { NavHeader } from './NavHeader';
import { StoriesTemplate } from '../Stories.template';
import { headerNavData, avatarMenuContent } from '../data';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Components/Navigation: Header/Code',
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
            page: StoryDocs
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <NavHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
    logoSize: 'small',
    hasNav: false,
    margins: true,
    maxWidth: true
};

export const PrimaryNavButtonAvatar = Template.bind({});
PrimaryNavButtonAvatar.args = {
    logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
    logoSize: 'small',
    margins: true,
    maxWidth: true,
    hasNav: true,
    navData: headerNavData,
    buttonClickHandler: () => {},
    buttonLabel: 'Sign In',
    secondaryButton: true,
    userAvatarInitial: 'E',
    userMenuContent: avatarMenuContent,
    userName: 'Edward Blake'
};

const storyData = [
    {
        title: 'Header',
        template: Primary,
        reactCode: `
Contact DesignSystem team for code.
        `,
        angularCode: `
Contact DesignSystem team for code.
        `,
        tsCode: '',
        htmlCode: `
Contact DesignSystem team for code.
`
    }
];

const storyPropTypes = [
    'buttonClickHandler: PropTypes.func,',
    'buttonLabel: PropTypes.string,',
    'customClasses: PropTypes.array,',
    'customContent: PropTypes.node,',
    'hasNav: PropTypes.bool,',
    'logo: PropTypes.string,',
    'logoSize: PropTypes.string,',
    'margins: PropTypes.bool,',
    'navData: PropTypes.array,',
    'secondaryButton: PropTypes.bool,',
    'maxWidth: PropTypes.bool,',
    'userAvatarInitial: PropTypes.string,',
    'userMenuContent: PropTypes.node,',
    'userName: PropTypes.string'
];
