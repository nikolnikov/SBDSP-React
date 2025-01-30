import React from 'react';
import { ProgressStepper } from './ProgressStepper';
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
    title: 'Components/Progress Stepper/Code',
    component: ProgressStepper,
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

const Template = args => <ProgressStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    indexLastCompletedStep: 0
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    indexLastCompletedStep: 0,
    isError: 1
};

export const PrimaryWarning = Template.bind({});
PrimaryWarning.args = {
    indexLastCompletedStep: 1,
    isWarning: 2
};

export const PrimaryCancelled = Template.bind({});
PrimaryCancelled.args = {
    indexLastCompletedStep: 2,
    isCancelled: 3
};

export const PrimaryVertical = Template.bind({});
PrimaryVertical.args = {
    indexLastCompletedStep: 0,
    isVertical: true
};

export const PrimaryVerticalError = Template.bind({});
PrimaryVerticalError.args = {
    indexLastCompletedStep: 0,
    isError: 1,
    isVertical: true
};

export const PrimaryVerticalWarning = Template.bind({});
PrimaryVerticalWarning.args = {
    indexLastCompletedStep: 1,
    isWarning: 2,
    isVertical: true
};

export const PrimaryVerticalCancelled = Template.bind({});
PrimaryVerticalCancelled.args = {
    indexLastCompletedStep: 2,
    isCancelled: 3,
    isVertical: true
};

const storyData = [
    {
        title: 'Progress stepper',
        template: Primary,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={0}
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true"">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper with error step',
        template: PrimaryError,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={0}
    isError={1}
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true" [class.error]="true>
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current error" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper with warning step',
        template: PrimaryWarning,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={1}
    isWarning={2}
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true" [class.warning]="true">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current warning" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper with cancelled step',
        template: PrimaryCancelled,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={2}
    isCancelled={3}
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true" [class.cancelled]="true">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current cancelled" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper vertical',
        template: PrimaryVertical,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={0}
    isVertical
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true"">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper vertical with error step',
        template: PrimaryVerticalError,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={0}
    isError={1}
    isVertical
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true" [class.error]="true>
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current error" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper vertical with warning step',
        template: PrimaryVerticalWarning,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={1}
    isWarning={2}
    isVertical
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true" [class.warning]="true">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current warning" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Progress stepper vertical with cancelled step',
        template: PrimaryVerticalCancelled,
        reactCode: `
import ProgressStepper from '@ds-react/pro/ProgressStepper';

const stepperData = [
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    },
    {
        title: 'Label',
        subTitle: 'Subcategory'
    }
];

<ProgressStepper
    steps={stepperData}
    indexLastCompletedStep={2}
    isCancelled={3}
    isVertical
/>
        `,
        angularCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="true" [class.current]="false">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step" aria-label="step" [class.completed]="false" [class.current]="true" [class.cancelled]="true">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-col-12 ds-progress-stepper --vertical">
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step completed" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
    <div tabindex="-1" class="ds-step current cancelled" aria-label="step">
        <span class="ds-flex --start-center">
            <span class="--dash"></span>
            <span class="--dot"></span>
            <span class="--dash"></span>
        </span>
        <div class="ds-step__label">
            <span class="ds-link">Label</span>

            <div class="--sub-label">
                <span>Subcategory</span>
            </div>
        </div>
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.array,',
    'steps: PropTypes.array,',
    'hideLabels: PropTypes.bool,',
    'isCancelled: PropTypes.number,',
    'isError: PropTypes.number,',
    'isWarning: PropTypes.number,',
    'indexLastCompletedStep: PropTypes.number,',
    'isVertical: PropTypes.bool,',
    'showNumbers: PropTypes.bool'
];
