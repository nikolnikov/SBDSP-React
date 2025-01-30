import React from 'react';
import { Link } from './Link';
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
    title: 'Professional/Link/Code',
    component: Link,
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

const Template = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Link example',
    url: 'https://www.google.com'
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
    isInverse: true,
    label: 'Link example',
    url: 'https://www.google.com'
};

export const PrimaryDestructive = Template.bind({});
PrimaryDestructive.args = {
    isDestructive: true,
    label: 'Link example',
    url: 'https://www.google.com'
};

export const PrimaryIconLeft = Template.bind({});
PrimaryIconLeft.args = {
    label: 'Link example',
    iconLeft: 'ds-icon--info',
    url: 'https://www.google.com'
};

export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.args = {
    label: 'Link example',
    iconRight: 'ds-icon--info',
    url: 'https://www.google.com'
};

const storyData = [
    {
        title: 'Link',
        template: Primary,
        reactCode: `
import Link from '@ds-react/pro/Link';

<Link label="Link" url="https://questdiagnostics.com" />
        `,
        angularCode: `
<a href="https://questdiagnostics.com" class="ds-link">
    Link example
</a>
        `,
        tsCode: '',
        htmlCode: `
<a href="https://questdiagnostics.com" class="ds-link">
    Link example
</a>
`
    },
    {
        title: 'Link inverse',
        template: PrimaryInverse,
        theme: 'dark-bg',
        reactCode: `
import Link from '@ds-react/pro/Link';

<Link 
    isInverse
    label="Link example"
    url="https://questdiagnostics.com"
/>
        `,
        angularCode: `
<a href="https://questdiagnostics.com" class="ds-link --inverse">
    Link example
</a>
        `,
        tsCode: '',
        htmlCode: `
<a href="https://questdiagnostics.com" class="ds-link --inverse">
    Link example
</a>
`
    },
    {
        title: 'Link destructive',
        template: PrimaryDestructive,
        reactCode: `
import Link from '@ds-react/pro/Link';

<Link 
    isDestructive
    label="Link example"
    url="https://questdiagnostics.com"
/>
        `,
        angularCode: `
<a href="https://questdiagnostics.com" class="ds-link --destructive">
    Link example
</a>
        `,
        tsCode: '',
        htmlCode: `
<a href="https://questdiagnostics.com" class="ds-link --destructive">
    Link example
</a>
`
    },
    {
        title: 'Link with left icon',
        template: PrimaryIconLeft,
        reactCode: `
import Link from '@ds-react/pro/Link';

<Link 
    iconLeft="ds-icon--info"
    label="Link example"
    url="https://questdiagnostics.com"
/>
        `,
        angularCode: `
<a href="https://questdiagnostics.com" class="ds-link --icons">
    <span class="ds-icon ds-icon--info"></span>
    <span>Link example</span>
</a>
        `,
        tsCode: '',
        htmlCode: `
<a href="https://questdiagnostics.com" class="ds-link --icons">
    <span class="ds-icon ds-icon--info"></span>
    <span>Link example</span>
</a>
`
    },
    {
        title: 'Link with right icon',
        template: PrimaryIconRight,
        reactCode: `
import Link from '@ds-react/pro/Link';

<Link 
    iconRight="ds-icon--info"
    label="Link example"
    url="https://questdiagnostics.com"
/>
        `,
        angularCode: `
<a href="https://questdiagnostics.com" class="ds-link --icons">
    <span>Link example</span>
    <span class="ds-icon ds-icon--info"></span>
</a>
        `,
        tsCode: '',
        htmlCode: `
<a href="https://questdiagnostics.com" class="ds-link --icons">
    <span>Link example</span>
    <span class="ds-icon ds-icon--info"></span>
</a>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'iconLeft: PropTypes.string,',
    'iconRight: PropTypes.string,',
    'isDestructive: PropTypes.bool,',
    'isInverse: PropTypes.bool,',
    'label: PropTypes.string.isRequired,',
    'newWindow: PropTypes.bool,',
    'url: PropTypes.string'
];
