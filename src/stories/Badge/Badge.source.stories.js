import React from 'react';
import { Badge } from './Badge';
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
    title: 'Components/Badge/Code',
    component: Badge,
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

const Template = args => <Badge {...args} />;

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
    status: 'error'
};

export const NewBadge = Template.bind({});
NewBadge.args = {
    label: 'Status',
    status: 'new'
};

export const NeutralCircleBadge = Template.bind({});
NeutralCircleBadge.args = {
    label: '#',
    isCircle: true
};

export const InformativeCircleBadge = Template.bind({});
InformativeCircleBadge.args = {
    label: '#',
    isCircle: true,
    status: 'informative'
};

export const SuccessCircleBadge = Template.bind({});
SuccessCircleBadge.args = {
    label: '#',
    isCircle: true,
    status: 'success'
};

export const WarningCircleBadge = Template.bind({});
WarningCircleBadge.args = {
    label: '#',
    isCircle: true,
    status: 'warning'
};

export const ErrorCircleBadge = Template.bind({});
ErrorCircleBadge.args = {
    label: '#',
    isCircle: true,
    status: 'error'
};

export const NewCircleBadge = Template.bind({});
NewCircleBadge.args = {
    label: '#',
    isCircle: true,
    status: 'new'
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
    status: 'error'
};

export const NewSecondaryBadge = Template.bind({});
NewSecondaryBadge.args = {
    label: 'Status',
    secondary: true,
    status: 'new'
};

export const NeutralSecondaryCircleBadge = Template.bind({});
NeutralSecondaryCircleBadge.args = {
    label: '#',
    isCircle: true,
    secondary: true
};

export const InformativeSecondaryCircleBadge = Template.bind({});
InformativeSecondaryCircleBadge.args = {
    label: '#',
    isCircle: true,
    secondary: true,
    status: 'informative'
};

export const SuccessSecondaryCircleBadge = Template.bind({});
SuccessSecondaryCircleBadge.args = {
    label: '#',
    isCircle: true,
    secondary: true,
    status: 'success'
};

export const WarningSecondaryCircleBadge = Template.bind({});
WarningSecondaryCircleBadge.args = {
    label: '#',
    isCircle: true,
    secondary: true,
    status: 'warning'
};

export const ErrorSecondaryCircleBadge = Template.bind({});
ErrorSecondaryCircleBadge.args = {
    label: '#',
    isCircle: true,
    secondary: true,
    status: 'error'
};

export const NewSecondaryCircleBadge = Template.bind({});
NewSecondaryCircleBadge.args = {
    label: '#',
    isCircle: true,
    secondary: true,
    status: 'new'
};

export const NeutralNotificationBadge = Template.bind({});
NeutralNotificationBadge.args = {
    hasNotification: true
};

export const InformativeNotificationBadge = Template.bind({});
InformativeNotificationBadge.args = {
    hasNotification: true,
    status: 'informative'
};

export const SuccessNotificationBadge = Template.bind({});
SuccessNotificationBadge.args = {
    hasNotification: true,
    status: 'success'
};

export const WarningNotificationBadge = Template.bind({});
WarningNotificationBadge.args = {
    hasNotification: true,
    status: 'warning'
};

export const ErrorNotificationBadge = Template.bind({});
ErrorNotificationBadge.args = {
    hasNotification: true,
    status: 'error'
};

export const NewNotificationBadge = Template.bind({});
NewNotificationBadge.args = {
    hasNotification: true,
    status: 'new'
};

export const Blue700Badge = Template.bind({});
Blue700Badge.args = {
    label: 'Status',
    color: 'blue-700'
};

export const Blue300Badge = Template.bind({});
Blue300Badge.args = {
    label: 'Status',
    color: 'blue-300'
};

export const Purple700Badge = Template.bind({});
Purple700Badge.args = {
    label: 'Status',
    color: 'purple-700'
};

export const Purple300Badge = Template.bind({});
Purple300Badge.args = {
    label: 'Status',
    color: 'purple-300'
};

export const Salmon900Badge = Template.bind({});
Salmon900Badge.args = {
    label: 'Status',
    color: 'salmon-900'
};

export const Salmon700Badge = Template.bind({});
Salmon700Badge.args = {
    label: 'Status',
    color: 'salmon-700'
};

export const Gold900Badge = Template.bind({});
Gold900Badge.args = {
    label: 'Status',
    color: 'gold-900'
};

export const Gold700Badge = Template.bind({});
Gold700Badge.args = {
    label: 'Status',
    color: 'gold-700'
};

export const Mint900Badge = Template.bind({});
Mint900Badge.args = {
    label: 'Status',
    color: 'mint-900'
};

export const Chestnut700Badge = Template.bind({});
Chestnut700Badge.args = {
    label: 'Status',
    color: 'chestnut-700'
};

export const Chestnut300Badge = Template.bind({});
Chestnut300Badge.args = {
    label: 'Status',
    color: 'chestnut-300'
};

export const Amethyst700Badge = Template.bind({});
Amethyst700Badge.args = {
    label: 'Status',
    color: 'amethyst-700'
};

export const Amethyst500Badge = Template.bind({});
Amethyst500Badge.args = {
    label: 'Status',
    color: 'amethyst-500'
};

const storyData = [
    {
        title: 'Neutral badge',
        template: NeutralBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

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
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="informative" />
        `,
        angularCode: `
<div class="ds-badge --informative" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Success badge',
        template: SuccessBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="success" />
        `,
        angularCode: `
<div class="ds-badge --success" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Warning badge',
        template: WarningBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="warning" />
        `,
        angularCode: `
<div class="ds-badge --warning" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Error badge',
        template: ErrorBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="error" />
        `,
        angularCode: `
<div class="ds-badge --error" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --error" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'New badge',
        template: NewBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="new" />
        `,
        angularCode: `
<div class="ds-badge --new" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --new" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Neutral circle badge',
        template: NeutralCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" isCircle />
        `,
        angularCode: `
<div class="ds-badge --circle" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --circle" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Informative circle badge',
        template: InformativeCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="informative" isCircle />
        `,
        angularCode: `
<div class="ds-badge --informative --circle" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative --circle" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Success circle badge',
        template: SuccessCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="success" isCircle />
        `,
        angularCode: `
<div class="ds-badge --success --circle" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success --circle" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Warning circle badge',
        template: WarningCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="warning" isCircle />
        `,
        angularCode: `
<div class="ds-badge --warning --circle" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning --circle" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Error circle badge',
        template: ErrorCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="error" isCircle />
        `,
        angularCode: `
<div class="ds-badge --error --circle" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --error --circle" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'New circle badge',
        template: NewCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="new" isCircle />
        `,
        angularCode: `
<div class="ds-badge --new --circle" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --new --circle" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Neutral secondary badge',
        template: NeutralSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

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
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="informative" secondary />
        `,
        angularCode: `
<div class="ds-badge --informative --secondary" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative --secondary" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Success secondary badge',
        template: SuccessSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="success" secondary />
        `,
        angularCode: `
<div class="ds-badge --success --secondary" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success --secondary" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Warning secondary badge',
        template: WarningSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="warning" secondary />
        `,
        angularCode: `
<div class="ds-badge --warning --secondary" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning --secondary" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Error secondary badge',
        template: ErrorSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="error" secondary />
        `,
        angularCode: `
<div class="ds-badge --error --secondary" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --error --secondary" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'New secondary badge',
        template: NewSecondaryBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" status="new" secondary />
        `,
        angularCode: `
<div class="ds-badge --new --secondary" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --new --secondary" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Neutral secondary circle badge',
        template: NeutralSecondaryCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" isCircle secondary />
        `,
        angularCode: `
<div class="ds-badge --circle --secondary" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --circle --secondary" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Informative secondary circle badge',
        template: InformativeSecondaryCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="informative" isCircle secondary />
        `,
        angularCode: `
<div class="ds-badge --informative --circle --secondary" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative --circle --secondary" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Success secondary circle badge',
        template: SuccessSecondaryCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="success" isCircle secondary />
        `,
        angularCode: `
<div class="ds-badge --success --circle --secondary" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success --circle --secondary" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Warning secondary circle badge',
        template: WarningSecondaryCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="warning" isCircle secondary />
        `,
        angularCode: `
<div class="ds-badge --warning --circle --secondary" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning --circle --secondary" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Error secondary circle badge',
        template: ErrorSecondaryCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="error" isCircle secondary />
        `,
        angularCode: `
<div class="ds-badge --error --circle --secondary" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --error --circle --secondary" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'New secondary circle badge',
        template: NewSecondaryCircleBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="#" status="new" isCircle secondary />
        `,
        angularCode: `
<div class="ds-badge --new --circle --secondary" aria-label="#" role="status">
    #
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --new --circle --secondary" aria-label="#" role="status">
    #
</div>
        `
    },
    {
        title: 'Neutral notification badge',
        template: NeutralNotificationBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge hasNotification />
        `,
        angularCode: `
<div class="ds-badge --dot" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --dot" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Informative notification badge',
        template: InformativeNotificationBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge status="informative" hasNotification />
        `,
        angularCode: `
<div class="ds-badge --informative --dot" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --informative --dot" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Success notification badge',
        template: SuccessNotificationBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge status="success" hasNotification />
        `,
        angularCode: `
<div class="ds-badge --success --dot" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --success --dot" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Warning notification badge',
        template: WarningNotificationBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge status="warning" hasNotification />
        `,
        angularCode: `
<div class="ds-badge --warning --dot" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --warning --dot" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Error notification badge',
        template: ErrorNotificationBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge status="error" hasNotification />
        `,
        angularCode: `
<div class="ds-badge --error --dot" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --error --dot" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'New notification badge',
        template: NewNotificationBadge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge status="new" hasNotification />
        `,
        angularCode: `
<div class="ds-badge --new --dot" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --new --dot" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Blue 700 badge',
        template: Blue700Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="blue-700" />
        `,
        angularCode: `
<div class="ds-badge --blue-700" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --blue-700" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Blue 300 badge',
        template: Blue300Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="blue-300" />
        `,
        angularCode: `
<div class="ds-badge --blue-300" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --blue-300" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Purple 700 badge',
        template: Purple700Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="purple-700" />
        `,
        angularCode: `
<div class="ds-badge --purple-700" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --purple-700" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Purple 300 badge',
        template: Purple300Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="purple-300" />
        `,
        angularCode: `
<div class="ds-badge --purple-300" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --purple-300" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Salmon 900 badge',
        template: Salmon900Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="salmon-900" />
        `,
        angularCode: `
<div class="ds-badge --salmon-900" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --salmon-900" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Salmon 700 badge',
        template: Salmon700Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="salmon-700" />
        `,
        angularCode: `
<div class="ds-badge --salmon-700" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --salmon-700" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Gold 900 badge',
        template: Gold900Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="gold-900" />
        `,
        angularCode: `
<div class="ds-badge --gold-900" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --gold-900" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Gold 700 badge',
        template: Gold700Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="gold-700" />
        `,
        angularCode: `
<div class="ds-badge --gold-700" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --gold-700" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Mint 900 badge',
        template: Mint900Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="mint-900" />
        `,
        angularCode: `
<div class="ds-badge --mint-900" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --mint-900" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Chestnut 700 badge',
        template: Chestnut700Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="chestnut-700" />
        `,
        angularCode: `
<div class="ds-badge --chestnut-700" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --chestnut-700" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Chestnut 300 badge',
        template: Chestnut300Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="chestnut-300" />
        `,
        angularCode: `
<div class="ds-badge --chestnut-300" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --chestnut-300" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Amethyst 700 badge',
        template: Amethyst700Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="amethyst-700" />
        `,
        angularCode: `
<div class="ds-badge --amethyst-700" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --amethyst-700" aria-label="Status" role="status">
    Status
</div>
        `
    },
    {
        title: 'Amethyst 500 badge',
        template: Amethyst500Badge,
        reactCode: `
import Badge from '@ds-react/pro/Badge';

<Badge label="Status" color="amethyst-500" />
        `,
        angularCode: `
<div class="ds-badge --amethyst-500" aria-label="Status" role="status">
    Status
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-badge --amethyst-500" aria-label="Status" role="status">
    Status
</div>
        `
    }
];

const storyPropTypes = [
    'color: PropTypes.string,',
    'customClasses: PropTypes.string,',
    'hasNotification: PropTypes.bool,',
    'isCircle: PropTypes.bool,',
    'label: PropTypes.string,',
    'secondary: PropTypes.bool,',
    "status: PropTypes.oneOf(['neutral', 'informative', 'success', 'warning', 'error', 'new']),"
];
