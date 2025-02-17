import React from 'react';
import { NavHeader } from './NavHeader';
import { StoriesTemplate } from '../../Stories.template';
import { headerNavData, avatarMenuContent } from '../data';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Navigation: Header/Code',
    component: NavHeader,
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

const Template = args => <NavHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    logo: 'https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg',
    logoSize: 'small',
    hasNav: false,
    margins: true,
    maxWidth: true
};

export const PrimaryAvatar = Template.bind({});
PrimaryAvatar.args = {
    ...Primary.args,
    userAvatarInitial: 'E',
    userMenuContent: avatarMenuContent
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    ...Primary.args,
    buttonClickHandler: () => console.log('Button clicked'),
    buttonLabel: 'Sign In'
};

export const PrimaryButtonSecondary = Template.bind({});
PrimaryButtonSecondary.args = {
    ...Primary.args,
    buttonClickHandler: () => console.log('Button clicked'),
    buttonLabel: 'Sign In',
    secondaryButton: true
};

const storyData = [
    {
        title: 'Header',
        template: Primary,
        reactCode: `
import Header from '@ds-react/pro/Header';

<Header
    logo="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg"
    logoSize="medium"
    margins
    maxWidth
/>
        `,
        angularCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>
    </div>
</header>
        `,
        tsCode: '',
        htmlCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>
    </div>
</header>
`
    },
    {
        title: 'Header with avatar',
        template: PrimaryAvatar,
        reactCode: `
import Header from '@ds-react/pro/Header';

const avatarMenuContent = (
    <div className="ds-ptb-16 ds-flex --column">
        <div className="ds-plr-12 ds-flex --row --start-center">
            <Avatar size="small" initial="E" />

            <h4 className="ds-m-0 ds-ml-8">Edward, Blake</h4>
        </div>

        <hr className="ds-mtb-12 ds-gray__100--bg" />

        <button className="ds-menu__item">Sign out</button>
    </div>
);

<Header
    logo="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg"
    logoSize="medium"
    margins
    maxWidth
    userAvatarInitial="E"
    userMenuContent={avatarMenuContent}
/>
        `,
        angularCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>
    </div>
</header>
        `,
        tsCode: '',
        htmlCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>
    </div>
</header>
`
    },
    {
        title: 'Header with button',
        template: PrimaryButton,
        reactCode: `
import Header from '@ds-react/pro/Header';

<Header
    logo="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg"
    logoSize="medium"
    margins
    maxWidth
    buttonClickHandler={() => console.log('Button clicked')}
    buttonLabel="Sign in"
/>
        `,
        angularCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>

        <nav class="ds-header__nav">
            <button class="ds-button --primary --small ds-ml-16">
                Sign in
            </button>
        </nav>
    </div>
</header>
        `,
        tsCode: '',
        htmlCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>

        <nav class="ds-header__nav">
            <button class="ds-button --primary --small ds-ml-16">
                Sign in
            </button>
        </nav>
    </div>
</header>
`
    },
    {
        title: 'Header with secondary button',
        template: PrimaryButtonSecondary,
        reactCode: `
import Header from '@ds-react/pro/Header';

<Header
    logo="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg"
    logoSize="medium"
    margins
    maxWidth
    buttonClickHandler={() => console.log('Button clicked')}
    buttonLabel="Sign in"
    secondaryButton
/>
        `,
        angularCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>

        <nav class="ds-header__nav">
            <button class="ds-button --secondary --small ds-ml-16">
                Sign in
            </button>
        </nav>
    </div>
</header>
        `,
        tsCode: '',
        htmlCode: `
<header class="ds-header">
    <div class="ds-grid --max-width --margins">
        <button class="ds-brand-wrapper --medium">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--horizontal--green.svg" alt="Quest Diagnostics" />
        </button>

        <nav class="ds-header__nav">
            <button class="ds-button --secondary --small ds-ml-16">
                Sign in
            </button>
        </nav>
    </div>
</header>
`
    }
];

const storyPropTypes = [
    'buttonClickHandler: PropTypes.func,',
    'buttonLabel: PropTypes.string,',
    'customClasses: PropTypes.array,',
    'customContent: PropTypes.node,',
    'hasNav: PropTypes.bool,',
    'logo: PropTypes.string,',
    'logoSize: PropTypes.string,',
    'margins: PropTypes.bool,',
    'navData: PropTypes.array,',
    'secondaryButton: PropTypes.bool,',
    'maxWidth: PropTypes.bool,',
    'userAvatarInitial: PropTypes.string,',
    'userMenuContent: PropTypes.node,',
    'userName: PropTypes.string'
];
