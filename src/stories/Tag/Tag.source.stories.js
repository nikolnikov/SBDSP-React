import React from 'react';
import { Tag } from './Tag';
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
    title: 'Components/Tag/Code',
    component: Tag,
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

const Template = args => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Tag label'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    isDisabled: true,
    label: 'Tag label'
};

export const PrimarySelected = Template.bind({});
PrimarySelected.args = {
    isSelected: true,
    label: 'Tag label'
};

export const PrimaryClose = Template.bind({});
PrimaryClose.args = {
    label: 'Tag label',
    showClose: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    isSecondary: true,
    label: 'Tag label'
};

export const SecondarySelected = Template.bind({});
SecondarySelected.args = {
    isSecondary: true,
    isSelected: true,
    label: 'Tag label'
};

const storyData = [
    {
        title: 'Tag',
        template: Primary,
        reactCode: `
import Tag from '@ds-react/pro/Tag';

<Tag label="Tag label" />
        `,
        angularCode: `
<button class="ds-tag" aria-label="label">
    Tag Label
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-tag" aria-label="label">
    Tag Label
</button>
`
    },
    {
        title: 'Tag disabled',
        template: PrimaryDisabled,
        reactCode: `
import Tag from '@ds-react/pro/Tag';

<Tag label="Tag label" isDisabled />
        `,
        angularCode: `
<button class="ds-tag --disabled" aria-label="label">
    Tag Label
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-tag --disabled" aria-label="label">
    Tag Label
</button>
`
    },
    {
        title: 'Tag selected',
        template: PrimarySelected,
        reactCode: `
import Tag from '@ds-react/pro/Tag';

<Tag label="Tag label" isSelected />
        `,
        angularCode: `
<button class="ds-tag --selected" aria-label="label">
    Tag Label
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-tag --selected" aria-label="label">
    Tag Label
</button>
`
    },
    {
        title: 'Tag with close button',
        template: PrimaryClose,
        reactCode: `
import Tag from '@ds-react/pro/Tag';

<Tag label="Tag label" showClose />
        `,
        angularCode: `
<button class="ds-tag" aria-label="label">
    Tag Label
    <span class="ds-icon--close" aria-label="close"></span>
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-tag" aria-label="label">
    Tag Label
    <span class="ds-icon--close" aria-label="close"></span>
</button>
`
    },
    {
        title: 'Tag secondary',
        template: Secondary,
        reactCode: `
import Tag from '@ds-react/pro/Tag';

<Tag isSecondary label="Tag label" />
        `,
        angularCode: `
<button class="ds-tag --secondary" aria-label="label">
    Tag Label
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-tag --secondary" aria-label="label">
    Tag Label
</button>
`
    },
    {
        title: 'Tag secondary selected',
        template: SecondarySelected,
        reactCode: `
import Tag from '@ds-react/pro/Tag';

<Tag isSecondary isSelected label="Tag label" />
        `,
        angularCode: `
<button class="ds-tag --secondary --selected" aria-label="label">
    Tag Label
</button>
        `,
        tsCode: '',
        htmlCode: `
<button class="ds-tag --secondary --selected" aria-label="label">
    Tag Label
</button>
`
    }
];

const storyPropTypes = [
    'clickHandler: PropTypes.func,',
    'customClasses: PropTypes.string,',
    'isDisabled: PropTypes.bool,',
    'isSecondary: PropTypes.bool,',
    'isSelected: PropTypes.bool,',
    'label: PropTypes.string.isRequired,',
    'showClose: PropTypes.bool'
];
