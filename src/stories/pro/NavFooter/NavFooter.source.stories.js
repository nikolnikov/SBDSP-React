import React from 'react';
import { NavFooter } from './NavFooter';
import { StoriesTemplate } from '../../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Navigation: Footer/Code',
    component: NavFooter,
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

const Template = args => <NavFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: true,
    hasNav: true,
    margins: true,
    maxWidth: true
};

export const PrimaryNoLogo = Template.bind({});
PrimaryNoLogo.args = {
    logo: false,
    hasNav: true,
    margins: true,
    maxWidth: true
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    logo: true,
    hasNav: false,
    margins: true,
    maxWidth: true
};

export const PrimaryLightNoLogo = Template.bind({});
PrimaryLightNoLogo.args = {
    logo: false,
    hasNav: false,
    margins: true,
    maxWidth: true
};

const storyData = [
    {
        title: 'Corporate footer',
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
    },
    {
        title: 'Corporate footer with no logo',
        template: PrimaryNoLogo,
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
    },
    {
        title: 'Corporate footer light',
        template: PrimaryLight,
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
    },
    {
        title: 'Corporate footer light with no logo',
        template: PrimaryLightNoLogo,
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
    'customClasses: PropTypes.string,',
    'logo: PropTypes.bool,',
    'hasNav: PropTypes.bool,',
    'margins: PropTypes.bool,',
    'maxWidth: PropTypes.bool,'
];
