import React from 'react';
import { DSCBadge } from './Badge';
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
    title: 'Consumer/Badge/Code',
    component: DSCBadge,
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

const Template = args => <DSCBadge {...args} />;

export const NeutralBadge = Template.bind({});
NeutralBadge.args = {
    label: 'Status'
};

export const InformativeBadge = Template.bind({});
InformativeBadge.args = {
    label: 'Status',
    status: 'informative'
};

export const SuccessBadge = Template.bind({});
SuccessBadge.args = {
    label: 'Status',
    status: 'success'
};

export const WarningBadge = Template.bind({});
WarningBadge.args = {
    label: 'Status',
    status: 'warning'
};

export const ErrorBadge = Template.bind({});
ErrorBadge.args = {
    label: 'Status',
    status: 'critical'
};

export const NeutralSecondaryBadge = Template.bind({});
NeutralSecondaryBadge.args = {
    label: 'Status',
    secondary: true
};

export const InformativeSecondaryBadge = Template.bind({});
InformativeSecondaryBadge.args = {
    label: 'Status',
    secondary: true,
    status: 'informative'
};

export const SuccessSecondaryBadge = Template.bind({});
SuccessSecondaryBadge.args = {
    label: 'Status',
    secondary: true,
    status: 'success'
};

export const WarningSecondaryBadge = Template.bind({});
WarningSecondaryBadge.args = {
    label: 'Status',
    secondary: true,
    status: 'warning'
};

export const ErrorSecondaryBadge = Template.bind({});
ErrorSecondaryBadge.args = {
    label: 'Status',
    secondary: true,
    status: 'critical'
};

const storyData = [
    {
        title: 'Neutral badge',
        template: NeutralBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" />
        `,
        angularCode: `
<div class="ds-badge" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Informative badge',
        template: InformativeBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="informative" />
        `,
        angularCode: `
<div class="ds-badge --informative" aria-label="Status" role="status">
    <span class="ds-icon--info" aria-label=""></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative" aria-label="Status" role="status">
    <span class="ds-icon--info" aria-label=""></span>
    Status
</div>
        `
    },
    {
        title: 'Success badge',
        template: SuccessBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="success" />
        `,
        angularCode: `
<div class="ds-badge --success" aria-label="Status" role="status">
    <span class="ds-icon--check-circle" aria-label=""></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success" aria-label="Status" role="status">
    <span class="ds-icon--check-circle" aria-label=""></span>
    Status
</div>
        `
    },
    {
        title: 'Warning badge',
        template: WarningBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="warning" />
        `,
        angularCode: `
<div class="ds-badge --warning" aria-label="Status" role="status">
    <span class="ds-icon--warning" aria-label=""></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning" aria-label="Status" role="status">
    <span class="ds-icon--warning" aria-label=""></span>
    Status
</div>
        `
    },
    {
        title: 'Critical badge',
        template: ErrorBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="critical" />
        `,
        angularCode: `
<div class="ds-badge --critical" aria-label="Status" role="status">
    <span class="ds-icon--warning-octagon" aria-label="Critical"></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --critical" aria-label="Status" role="status">
    <span class="ds-icon--warning-octagon" aria-label="Critical"></span>
    Status
</div>
        `
    },
    {
        title: 'Neutral secondary badge',
        template: NeutralSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" secondary />
        `,
        angularCode: `
<div class="ds-badge --secondary" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --secondary" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Informative secondary badge',
        template: InformativeSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="informative" secondary />
        `,
        angularCode: `
<div class="ds-badge --informative --secondary" aria-label="Status" role="status">
    <span class="ds-icon--info" aria-label=""></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative --secondary" aria-label="Status" role="status">
    <span class="ds-icon--info" aria-label=""></span>
    Status
</div>
        `
    },
    {
        title: 'Success secondary badge',
        template: SuccessSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="success" secondary />
        `,
        angularCode: `
<div class="ds-badge --success --secondary" aria-label="Status" role="status">
    <span class="ds-icon--check-circle" aria-label=""></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success --secondary" aria-label="Status" role="status">
    <span class="ds-icon--check-circle" aria-label=""></span>
    Status
</div>
        `
    },
    {
        title: 'Warning secondary badge',
        template: WarningSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="warning" secondary />
        `,
        angularCode: `
<div class="ds-badge --warning --secondary" aria-label="Status" role="status">
    <span class="ds-icon--warning" aria-label=""></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning --secondary" aria-label="Status" role="status">
    <span class="ds-icon--warning" aria-label=""></span>
    Status
</div>
        `
    },
    {
        title: 'Critical secondary badge',
        template: ErrorSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/consumer/Badge';

<Badge label="Status" status="critical" secondary />
        `,
        angularCode: `
<div class="ds-badge --critical --secondary" aria-label="Status" role="status">
    <span class="ds-icon--warning-octagon" aria-label="Critical"></span>
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --critical --secondary" aria-label="Status" role="status">
    <span class="ds-icon--warning-octagon" aria-label="Critical"></span>
    Status
</div>
        `
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'label: PropTypes.string,',
    'isSecondary: PropTypes.bool,',
    "status: PropTypes.oneOf(['neutral', 'informative', 'success', 'warning', 'critical']),"
];
