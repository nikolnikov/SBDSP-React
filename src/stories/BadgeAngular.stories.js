import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Badge } from './Badge';

export default {
    title: 'Components/Badge/Angular',
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
                    <Unstyled>
                        <h3 className="title">Neutral badge</h3>
                    </Unstyled>
                    <Canvas
                        of={NeutralBadge}
                        source={{
                            code: `<div class="ds-badge" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Informative badge</h3>
                    </Unstyled>
                    <Canvas
                        of={InformativeBadge}
                        source={{
                            code: `<div class="ds-badge --informative" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Success badge</h3>
                    </Unstyled>

                    <Canvas
                        of={SuccessBadge}
                        source={{
                            code: `<div class="ds-badge --success" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Warning badge</h3>
                    </Unstyled>

                    <Canvas
                        of={WarningBadge}
                        source={{
                            code: `<div class="ds-badge --warning" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Error badge</h3>
                    </Unstyled>

                    <Canvas
                        of={ErrorBadge}
                        source={{
                            code: `<div class="ds-badge --error" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">New badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NewBadge}
                        source={{
                            code: `<div class="ds-badge --new" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Neutral circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NeutralCircleBadge}
                        source={{
                            code: `<div class="ds-badge --circle" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Informative circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={InformativeCircleBadge}
                        source={{
                            code: `<div class="ds-badge --circle --informative" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Success circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={SuccessCircleBadge}
                        source={{
                            code: `<div class="ds-badge --circle --success" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Warning circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={WarningCircleBadge}
                        source={{
                            code: `<div class="ds-badge --circle --warning" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Error circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={ErrorCircleBadge}
                        source={{
                            code: `<div class="ds-badge --circle --error" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">New circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NewCircleBadge}
                        source={{
                            code: `<div class="ds-badge --circle --new" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Neutral secondary badge</h3>
                    </Unstyled>
                    <Canvas
                        of={NeutralSecondaryBadge}
                        source={{
                            code: `<div class="ds-badge --secondary" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Informative secondary badge</h3>
                    </Unstyled>
                    <Canvas
                        of={InformativeSecondaryBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --informative" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Success secondary badge</h3>
                    </Unstyled>

                    <Canvas
                        of={SuccessSecondaryBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --success" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Warning secondary badge</h3>
                    </Unstyled>

                    <Canvas
                        of={WarningSecondaryBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --warning" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Error secondary badge</h3>
                    </Unstyled>

                    <Canvas
                        of={ErrorSecondaryBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --error" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">New secondary badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NewSecondaryBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --new" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Neutral secondary circle badge
                        </h3>
                    </Unstyled>

                    <Canvas
                        of={NeutralSecondaryCircleBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --circle" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Informative secondary circle badge
                        </h3>
                    </Unstyled>

                    <Canvas
                        of={InformativeSecondaryCircleBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --circle --informative" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Success secondary circle badge
                        </h3>
                    </Unstyled>

                    <Canvas
                        of={SuccessSecondaryCircleBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --circle --success" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Warning secondary circle badge
                        </h3>
                    </Unstyled>

                    <Canvas
                        of={WarningSecondaryCircleBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --circle --warning" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Error secondary circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={ErrorSecondaryCircleBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --circle --error" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">New secondary circle badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NewSecondaryCircleBadge}
                        source={{
                            code: `<div class="ds-badge --secondary --circle --new" aria-label="Status" role="status">
    #
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Neutral notification badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NeutralNotificationBadge}
                        source={{
                            code: `<div class="ds-badge --dot" aria-label="Status" role="status"></div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Informative notification badge
                        </h3>
                    </Unstyled>

                    <Canvas
                        of={InformativeNotificationBadge}
                        source={{
                            code: `<div class="ds-badge --dot --informative" aria-label="Status" role="status"></div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Success notification badge</h3>
                    </Unstyled>

                    <Canvas
                        of={SuccessNotificationBadge}
                        source={{
                            code: `<div class="ds-badge --dot --success" aria-label="Status" role="status"></div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Warning notification badge</h3>
                    </Unstyled>

                    <Canvas
                        of={WarningNotificationBadge}
                        source={{
                            code: `<div class="ds-badge --dot --warning" aria-label="Status" role="status"></div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Error notification badge</h3>
                    </Unstyled>

                    <Canvas
                        of={ErrorNotificationBadge}
                        source={{
                            code: `<div class="ds-badge --dot --error" aria-label="Status" role="status"></div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">New notification badge</h3>
                    </Unstyled>

                    <Canvas
                        of={NewNotificationBadge}
                        source={{
                            code: `<div class="ds-badge --dot --new" aria-label="Status" role="status"></div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Blue 700 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Blue700Badge}
                        source={{
                            code: `<div class="ds-badge --blue-700" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Blue 300 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Blue300Badge}
                        source={{
                            code: `<div class="ds-badge --blue-300" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Purple 700 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Purple700Badge}
                        source={{
                            code: `<div class="ds-badge --purple-700" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Purple 300 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Purple300Badge}
                        source={{
                            code: `<div class="ds-badge --purple-300" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Salmon 900 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Salmon900Badge}
                        source={{
                            code: `<div class="ds-badge --salmon-900" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Salmon 700 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Salmon700Badge}
                        source={{
                            code: `<div class="ds-badge --salmon-700" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Gold 900 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Gold900Badge}
                        source={{
                            code: `<div class="ds-badge --gold-900" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Gold 700 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Gold700Badge}
                        source={{
                            code: `<div class="ds-badge --gold-700" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Mint 900 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Mint900Badge}
                        source={{
                            code: `<div class="ds-badge --mint-900" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Chestnut 700 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Chestnut700Badge}
                        source={{
                            code: `<div class="ds-badge --chestnut-700" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Chestnut 300 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Chestnut300Badge}
                        source={{
                            code: `<div class="ds-badge --chestnut-300" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Amethyst 700 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Amethyst700Badge}
                        source={{
                            code: `<div class="ds-badge --amethyst-700" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Amethyst 500 badge</h3>
                    </Unstyled>

                    <Canvas
                        of={Amethyst500Badge}
                        source={{
                            code: `<div class="ds-badge --amethyst-500" aria-label="Status" role="status">
    Status
</div>`
                        }}
                    />
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
