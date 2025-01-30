import React from 'react';
import { Divider } from './Divider';
import { StoriesTemplate } from '../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Components/Divider/Code',
    component: Divider,
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

const Template = args => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDarkGray = Template.bind({});
PrimaryDarkGray.args = { color: 'ds-gray__300-bg' };

export const PrimaryGray = Template.bind({});
PrimaryGray.args = { color: 'ds-gray__200-bg' };

export const PrimaryWhite = Template.bind({});
PrimaryWhite.args = { color: 'ds-white-bg' };

const storyData = [
    {
        title: 'Divider',
        template: Primary,
        reactCode: `
import Divider from '@ds-react/pro/Divider';

<Divider />
        `,
        angularCode: `
<hr />
        `,
        tsCode: '',
        htmlCode: `
<hr />
`
    },
    {
        title: 'Divider dark gray',
        template: PrimaryDarkGray,
        reactCode: `
import Divider from '@ds-react/pro/Divider';

<Divider color="ds-gray__300-bg" />
        `,
        angularCode: `
<hr class="ds-gray__300-bg" />
        `,
        tsCode: '',
        htmlCode: `
<hr class="ds-gray__300-bg" />
`
    },
    {
        title: 'Divider gray',
        template: PrimaryGray,
        theme: 'dark-bg',
        reactCode: `
import Divider from '@ds-react/pro/Divider';

<Divider color="ds-gray__200-bg" />
        `,
        angularCode: `
<hr class="ds-gray__200-bg" />
        `,
        tsCode: '',
        htmlCode: `
<hr class="ds-gray__200-bg" />
`
    },
    {
        title: 'Divider white',
        template: PrimaryWhite,
        theme: 'dark-bg',
        reactCode: `
import Divider from '@ds-react/pro/Divider';

<Divider color="ds-white-bg" />
        `,
        angularCode: `
<hr class="ds-white-bg" />
        `,
        tsCode: '',
        htmlCode: `
<hr class="ds-white-bg" />
`
    }
];

const storyPropTypes = [
    'color: PropTypes.string,',
    'customClasses: PropTypes.string,'
];
