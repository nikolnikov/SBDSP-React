import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Badge } from './Badge';

export default {
    title: 'Components/Badge/React',
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
            page: () => (
                <>
                    <Stories />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available Props:</h4>
                            <ul className="ds-list">
                                <li>children: PropTypes.node,</li>
                                <li>color: PropTypes.string,</li>
                                <li>customClasses: PropTypes.string,</li>
                                <li>hasNotification: PropTypes.bool,</li>
                                <li>isCircle: PropTypes.bool,</li>
                                <li>secondary: PropTypes.bool,</li>
                                <li>status: PropTypes.string</li>
                            </ul>
                        </div>
                    </Subtitle>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Badge {...args} />;

export const NeutralBadge = Template.bind({});
NeutralBadge.args = {
    children: 'Status'
};

export const InformativeBadge = Template.bind({});
InformativeBadge.args = {
    children: 'Status',
    status: 'informative'
};

export const SuccessBadge = Template.bind({});
SuccessBadge.args = {
    children: 'Status',
    status: 'success'
};

export const WarningBadge = Template.bind({});
WarningBadge.args = {
    children: 'Status',
    status: 'warning'
};

export const ErrorBadge = Template.bind({});
ErrorBadge.args = {
    children: 'Status',
    status: 'error'
};

export const NewBadge = Template.bind({});
NewBadge.args = {
    children: 'Status',
    status: 'new'
};

export const NeutralCircleBadge = Template.bind({});
NeutralCircleBadge.args = {
    children: '#',
    isCircle: true
};

export const InformativeCircleBadge = Template.bind({});
InformativeCircleBadge.args = {
    children: '#',
    isCircle: true,
    status: 'informative'
};

export const SuccessCircleBadge = Template.bind({});
SuccessCircleBadge.args = {
    children: '#',
    isCircle: true,
    status: 'success'
};

export const WarningCircleBadge = Template.bind({});
WarningCircleBadge.args = {
    children: '#',
    isCircle: true,
    status: 'warning'
};

export const ErrorCircleBadge = Template.bind({});
ErrorCircleBadge.args = {
    children: '#',
    isCircle: true,
    status: 'error'
};

export const NewCircleBadge = Template.bind({});
NewCircleBadge.args = {
    children: '#',
    isCircle: true,
    status: 'new'
};

export const NeutralSecondaryBadge = Template.bind({});
NeutralSecondaryBadge.args = {
    children: 'Status',
    secondary: true
};

export const InformativeSecondaryBadge = Template.bind({});
InformativeSecondaryBadge.args = {
    children: 'Status',
    secondary: true,
    status: 'informative'
};

export const SuccessSecondaryBadge = Template.bind({});
SuccessSecondaryBadge.args = {
    children: 'Status',
    secondary: true,
    status: 'success'
};

export const WarningSecondaryBadge = Template.bind({});
WarningSecondaryBadge.args = {
    children: 'Status',
    secondary: true,
    status: 'warning'
};

export const ErrorSecondaryBadge = Template.bind({});
ErrorSecondaryBadge.args = {
    children: 'Status',
    secondary: true,
    status: 'error'
};

export const NewSecondaryBadge = Template.bind({});
NewSecondaryBadge.args = {
    children: 'Status',
    secondary: true,
    status: 'new'
};

export const NeutralSecondaryCircleBadge = Template.bind({});
NeutralSecondaryCircleBadge.args = {
    children: '#',
    isCircle: true,
    secondary: true
};

export const InformativeSecondaryCircleBadge = Template.bind({});
InformativeSecondaryCircleBadge.args = {
    children: '#',
    isCircle: true,
    secondary: true,
    status: 'informative'
};

export const SuccessSecondaryCircleBadge = Template.bind({});
SuccessSecondaryCircleBadge.args = {
    children: '#',
    isCircle: true,
    secondary: true,
    status: 'success'
};

export const WarningSecondaryCircleBadge = Template.bind({});
WarningSecondaryCircleBadge.args = {
    children: '#',
    isCircle: true,
    secondary: true,
    status: 'warning'
};

export const ErrorSecondaryCircleBadge = Template.bind({});
ErrorSecondaryCircleBadge.args = {
    children: '#',
    isCircle: true,
    secondary: true,
    status: 'error'
};

export const NewSecondaryCircleBadge = Template.bind({});
NewSecondaryCircleBadge.args = {
    children: '#',
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
    children: 'Status',
    color: 'blue-700'
};

export const Blue300Badge = Template.bind({});
Blue300Badge.args = {
    children: 'Status',
    color: 'blue-300'
};

export const Purple700Badge = Template.bind({});
Purple700Badge.args = {
    children: 'Status',
    color: 'purple-700'
};

export const Purple300Badge = Template.bind({});
Purple300Badge.args = {
    children: 'Status',
    color: 'purple-300'
};

export const Salmon900Badge = Template.bind({});
Salmon900Badge.args = {
    children: 'Status',
    color: 'salmon-900'
};

export const Salmon700Badge = Template.bind({});
Salmon700Badge.args = {
    children: 'Status',
    color: 'salmon-700'
};

export const Gold900Badge = Template.bind({});
Gold900Badge.args = {
    children: 'Status',
    color: 'gold-900'
};

export const Gold700Badge = Template.bind({});
Gold700Badge.args = {
    children: 'Status',
    color: 'gold-700'
};

export const Mint900Badge = Template.bind({});
Mint900Badge.args = {
    children: 'Status',
    color: 'mint-900'
};

export const Chestnut700Badge = Template.bind({});
Chestnut700Badge.args = {
    children: 'Status',
    color: 'chestnut-700'
};

export const Chestnut300Badge = Template.bind({});
Chestnut300Badge.args = {
    children: 'Status',
    color: 'chestnut-300'
};

export const Amethyst700Badge = Template.bind({});
Amethyst700Badge.args = {
    children: 'Status',
    color: 'amethyst-700'
};

export const Amethyst500Badge = Template.bind({});
Amethyst500Badge.args = {
    children: 'Status',
    color: 'amethyst-500'
};
