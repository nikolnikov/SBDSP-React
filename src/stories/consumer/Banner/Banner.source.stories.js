import React from 'react';
import { DSCBanner } from './Banner';
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
    title: 'Consumer/Banner/Code',
    component: DSCBanner,
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

const Template = args => <DSCBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <p>
            Use code <strong>20%WEEK</strong> and take action on the symptoms
            keeping you from feeling your best.{' '}
            <a href="https://www.questhealth.com/">Shop now</a>
        </p>
    )
};

export const PrimaryDismiss = Template.bind({});
PrimaryDismiss.args = {
    ...Primary.args,
    dismissHandler: () => {}
};

export const PrimaryTitleDismiss = Template.bind({});
PrimaryTitleDismiss.args = {
    ...PrimaryDismiss.args,
    dismissHandler: () => {},
    title: 'Enjoy 20% off this test'
};

export const PrimaryIconDismiss = Template.bind({});
PrimaryIconDismiss.args = {
    ...PrimaryDismiss.args,
    dismissHandler: () => {},
    icon: 'ds-icon--face-mask'
};

export const PrimaryTitleBrandedDismiss = Template.bind({});
PrimaryTitleBrandedDismiss.args = {
    ...PrimaryTitleDismiss.args,
    icon: 'ds-icon--illustrative-white--pcp',
    useBrandedIcon: true
};

export const PrimaryCentered = Template.bind({});
PrimaryCentered.args = {
    ...Primary.args,
    isCentered: true
};

export const PrimaryCenteredDismiss = Template.bind({});
PrimaryCenteredDismiss.args = {
    ...PrimaryCentered.args,
    dismissHandler: () => {}
};

export const PrimaryCenteredTitleDismiss = Template.bind({});
PrimaryCenteredTitleDismiss.args = {
    ...PrimaryCenteredDismiss.args,
    dismissHandler: () => {},
    title: 'Enjoy 20% off this test'
};

export const PrimaryCenteredIconDismiss = Template.bind({});
PrimaryCenteredIconDismiss.args = {
    ...PrimaryCenteredDismiss.args,
    dismissHandler: () => {},
    icon: 'ds-icon--face-mask'
};

export const PrimaryCenteredTitleBrandedDismiss = Template.bind({});
PrimaryCenteredTitleBrandedDismiss.args = {
    ...PrimaryCenteredTitleDismiss.args,
    icon: 'ds-icon--illustrative-white--pcp',
    useBrandedIcon: true
};

const storyData = [
    {
        title: 'Banner',
        template: Primary,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>  
</Banner>
        `,
        angularCode: `
<div class="ds-banner">
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner">
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
    </div>
</div>
        `
    },
    {
        title: 'Banner with close button',
        template: PrimaryDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner dismissHandler={() => {}}>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner">
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>

        <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner">
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>

        <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `
    },
    {
        title: 'Banner with title and close button',
        template: PrimaryTitleDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner dismissHandler={() => {}} title="Enjoy 20% off this test">
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner">
    <div class="ds-banner__heading">
        <h3>Enjoy 20% off this test</h3>
        <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner">
    <div class="ds-banner__heading">
        <h3>Enjoy 20% off this test</h3>
        <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
    </div>
</div>
        `
    },
    {
        title: 'Banner with icon and close button',
        template: PrimaryIconDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner dismissHandler={() => {}} icon="ds-icon--face-mask">
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner --icon">
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>

        <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --icon">
    <div class="ds-banner__inner-content">
        <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>

        <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `
    },
    {
        title: 'Banner with branded icon, title and close button',
        template: PrimaryTitleBrandedDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner
    dismissHandler={() => {}}
    icon="ds-icon--illustrative-white--pcp"
    useBrandedIcon
    title="Enjoy 20% off this test"
>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner --icon --branded">
    <div class="ds-banner__banner-icon">
        <img
            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon--illustrative-white--pcp.svg"
            alt="ds-icon--illustrative-white--pcp"
        />
    </div>

    <div>
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code 20%WEEK and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>

        <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --icon --branded">
    <div class="ds-banner__banner-icon">
        <img
            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon--illustrative-white--pcp.svg"
            alt="ds-icon--illustrative-white--pcp"
        />
    </div>

    <div>
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code 20%WEEK and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>

        <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
            <span className="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `
    },
    {
        title: 'Banner centered',
        template: PrimaryCentered,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner isCentered>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>  
</Banner>
        `,
        angularCode: `
<div class="ds-banner --centered">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --centered">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>
</div>
        `
    },
    {
        title: 'Banner centered with close button',
        template: PrimaryCenteredDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner dismissHandler={() => {}} isCentered>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner --centered">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --centered">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `
    },
    {
        title: 'Banner centered with title and close button',
        template: PrimaryCenteredTitleDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner dismissHandler={() => {}} isCentered title="Enjoy 20% off this test">
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner --centered --heading">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --centered --heading">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `
    },
    {
        title: 'Banner centered with icon and close button',
        template: PrimaryCenteredIconDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner dismissHandler={() => {}} icon="ds-icon--face-mask" isCentered>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner --centered --icon">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --centered --icon">
    <div class="ds-banner__center-wrap">
        <div class="ds-banner__inner-content">
            <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `
    },
    {
        title: 'Banner centered with branded icon, title and close button',
        template: PrimaryCenteredTitleBrandedDismiss,
        reactCode: `
import Banner from '@ds-react/consumer/Banner';

<Banner
    dismissHandler={() => {}}
    icon="ds-icon--illustrative-white--pcp"
    isCentered
    useBrandedIcon
    title="Enjoy 20% off this test"
>
    <p>Use code <strong>20%WEEK</strong> and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
</Banner>
        `,
        angularCode: `
<div class="ds-banner --centered --icon --branded --heading">
    <div class="ds-banner__banner-icon">
        <img
            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon--illustrative-white--pcp.svg"
            alt="ds-icon--illustrative-white--pcp"
        />
    </div>

    <div class="ds-banner__center-wrap">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code 20%WEEK and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" (click)="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-banner --centered --icon --branded --heading">
    <div class="ds-banner__banner-icon">
        <img
            src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon--illustrative-white--pcp.svg"
            alt="ds-icon--illustrative-white--pcp"
        />
    </div>

    <div class="ds-banner__center-wrap">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code 20%WEEK and take action on the symptoms keeping you from feeling your best. <a href="https://www.questhealth.com/">Shop now</a></p>
        </div>
    </div>

    <button className="ds-button --icon close" onClick="dismissHandler()" aria-label="Close">
        <span className="ds-icon--close" aria-label="close"></span>
    </button>
</div>
        `
    }
];

const storyPropTypes = [
    'children: PropTypes.node,',
    'dismissHandler: PropTypes.func,',
    'customClasses: PropTypes.string,',
    'hasDismiss: PropTypes.bool,',
    'hasIcon: PropTypes.string,',
    'isBranded: PropTypes.bool,',
    'isCentered: PropTypes.bool,',
    'title: PropTypes.string'
];
