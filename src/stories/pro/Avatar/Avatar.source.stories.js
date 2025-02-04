import React from 'react';
import { Avatar } from './Avatar';
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
    title: 'Professional/Avatar/Code',
    component: Avatar,
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

const Template = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    initial: 'B',
    size: 'medium'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    ...Primary.args,
    isDisabled: true
};

export const PrimaryNotification = Template.bind({});
PrimaryNotification.args = {
    ...Primary.args,
    hasNotification: true
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    ...Primary.args,
    outlined: true
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    ...Primary.args,
    button: true
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
    ...Primary.args,
    isDisabled: true,
    button: true
};

export const PrimaryButtonNotification = Template.bind({});
PrimaryButtonNotification.args = {
    ...Primary.args,
    hasNotification: true,
    button: true
};

export const PrimaryButtonOutline = Template.bind({});
PrimaryButtonOutline.args = {
    ...Primary.args,
    outlined: true,
    button: true
};

const storyData = [
    {
        title: 'Avatar',
        template: Primary,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" size="medium" />
        `,
        angularCode: `
<div class="ds-avatar --solid --medium">
    B
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-avatar --solid --medium">
    B
</div>
`
    },
    {
        title: 'Avatar disabled',
        template: PrimaryDisabled,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" isDisabled size="medium" />
        `,
        angularCode: `
<div class="ds-avatar --solid --medium --disabled">
    B
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-avatar --solid --medium --disabled">
    B
</div>
`
    },
    {
        title: 'Avatar with notification',
        template: PrimaryNotification,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" hasNotification size="medium" />
        `,
        angularCode: `
<div class="ds-avatar --solid --medium --notification">
    B
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-avatar --solid --medium --notification">
    B
</div>
`
    },
    {
        title: 'Avatar outlined',
        template: PrimaryOutline,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" outlined size="medium" />
        `,
        angularCode: `
<div class="ds-avatar --solid --medium --outlined">
    B
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-avatar --solid --medium --outlined">
    B
</div>
`
    },
    {
        title: 'Avatar button',
        template: PrimaryButton,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" button size="medium" />
        `,
        angularCode: `
<button class="ds-avatar --solid --medium">
    B
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-avatar --solid --medium">
    B
</button>
`
    },
    {
        title: 'Avatar button disabled',
        template: PrimaryButtonDisabled,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" button isDisabled size="medium" />
        `,
        angularCode: `
<button class="ds-avatar --solid --medium --disabled">
    B
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-avatar --solid --medium --disabled">
    B
</button>
`
    },
    {
        title: 'Avatar button with notification',
        template: PrimaryButtonNotification,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" button hasNotification size="medium" />
        `,
        angularCode: `
<button class="ds-avatar --solid --medium --notification">
    B
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-avatar --solid --medium --notification">
    B
</button>
`
    },
    {
        title: 'Avatar button outlined',
        template: PrimaryButtonOutline,
        reactCode: `
import Avatar from '@ds-react/pro/Avatar';

<Avatar initial="B" button outlined size="medium" />
        `,
        angularCode: `
<button class="ds-avatar --solid --medium --outlined">
    B
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-avatar --solid --medium --outlined">
    B
</button>
`
    }
];

const storyPropTypes = [
    'button: PropTypes.bool,',
    'clickHandler: PropTypes.func,',
    'customClasses: PropTypes.string,',
    'isDisabled: PropTypes.bool,',
    'hasNotification: PropTypes.bool,',
    'initial: PropTypes.string,',
    'outlined: PropTypes.bool,',
    "size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])"
];
