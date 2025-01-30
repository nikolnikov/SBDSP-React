import React from 'react';
import { Tooltip } from './Tooltip';
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
    title: 'Professional/Tooltip/Code',
    component: Tooltip,
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

const Template = args => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <span>Hover me</span>,
    placement: 'top',
    title: 'Tooltip goes here.'
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
    ...Primary.args,
    placement: 'right'
};

export const PrimaryBottom = Template.bind({});
PrimaryBottom.args = {
    ...Primary.args,
    placement: 'bottom'
};

export const PrimaryLeft = Template.bind({});
PrimaryLeft.args = {
    ...Primary.args,
    placement: 'left'
};

const storyData = [
    {
        title: 'Tooltip',
        template: Primary,
        reactCode: `
import Tooltip from '@ds-react/pro/Tooltip';

<Tooltip title="Tooltip goes here.">
    <span>Hover me</span>
</Tooltip>
        `,
        angularCode: `
<span matTooltip="Tooltip goes here.">
    Tooltip Trigger
</span>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-tooltip">
    <div class="--top" data-tip="Tooltip goes here.">
        <span>Hover me</span>
    </div>
</div>
`
    },
    {
        title: 'Tooltip right',
        template: PrimaryRight,
        reactCode: `
import Tooltip from '@ds-react/pro/Tooltip';

<Tooltip title="Tooltip goes here." placement="right">
    <span>Hover me</span>
</Tooltip>
        `,
        angularCode: `
<span matTooltip="Tooltip goes here." matTooltipPosition="right">
    Tooltip Trigger
</span>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-tooltip">
    <div class="--right" data-tip="Tooltip goes here.">
        <span>Hover me</span>
    </div>
</div>
`
    },
    {
        title: 'Tooltip bottom',
        template: PrimaryBottom,
        reactCode: `
import Tooltip from '@ds-react/pro/Tooltip';

<Tooltip title="Tooltip goes here." placement="bottom">
    <span>Hover me</span>
</Tooltip>
        `,
        angularCode: `
<span matTooltip="Tooltip goes here." matTooltipPosition="below">
    Tooltip Trigger
</span>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-tooltip">
    <div class="--bottom" data-tip="Tooltip goes here.">
        <span>Hover me</span>
    </div>
</div>
`
    },
    {
        title: 'Tooltip left',
        template: PrimaryLeft,
        reactCode: `
import Tooltip from '@ds-react/pro/Tooltip';

<Tooltip title="Tooltip goes here." placement="left">
    <span>Hover me</span>
</Tooltip>
        `,
        angularCode: `
<span matTooltip="Tooltip goes here." matTooltipPosition="left">
    Tooltip Trigger
</span>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-tooltip">
    <div class="--left" data-tip="Tooltip goes here.">
        <span>Hover me</span>
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'children: PropTypes.node,',
    "placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),",
    'title: PropTypes.string,'
];
