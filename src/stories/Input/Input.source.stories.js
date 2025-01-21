import React from 'react';
import { Input } from './Input';
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
    title: 'Components/Input/Code',
    component: Input,
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

const Template = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Input';
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    type: 'text'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Input required';
PrimaryRequired.args = {
    ...Primary.args,
    inputId: 'input-2',
    isRequired: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Input disabled';
PrimaryDisabled.args = {
    ...Primary.args,
    inputId: 'input-3',
    isDisabled: true
};

export const PrimaryIconLeft = Template.bind({});
PrimaryIconLeft.storyName = 'Input with left icon';
PrimaryIconLeft.args = {
    ...Primary.args,
    inputId: 'input-4',
    leftIcon: 'ds-icon--search'
};

export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.storyName = 'Input with right icon';
PrimaryIconRight.args = {
    ...Primary.args,
    inputId: 'input-5',
    rightIcon: 'ds-icon--location'
};

export const PrimaryBothIcons = Template.bind({});
PrimaryBothIcons.storyName = 'Input with both icons';
PrimaryBothIcons.args = {
    ...Primary.args,
    inputId: 'input-6',
    leftIcon: 'ds-icon--search',
    rightIcon: 'ds-icon--location'
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.storyName = 'Input loading';
PrimaryLoading.args = {
    ...Primary.args,
    inputId: 'input-7',
    isLoading: true
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Input with error';
PrimaryError.args = {
    ...Primary.args,
    inputId: 'input-8',
    hasError: true,
    errorMessage: 'Error message goes here.'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Input with hint';
PrimaryHint.args = {
    ...Primary.args,
    inputId: 'input-9',
    hintMessage: 'Hint message goes here.'
};

export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.storyName = 'Input with tooltip';
PrimaryTooltip.args = {
    ...Primary.args,
    inputId: 'input-10',
    tooltipMessage: 'Tooltip message goes here.'
};

const storyData = [
    {
        title: 'Input',
        template: Primary,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    label="Input label"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput />
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />
</div>
`
    },
    {
        title: 'Input required',
        template: PrimaryRequired,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    isRequired
    label="Input label"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput />
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --required">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />
</div>
`
    },
    {
        title: 'Input disabled',
        template: PrimaryDisabled,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    isDisabled
    label="Input label"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput disabled />
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --disabled">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" disabled />
</div>
`
    },
    {
        title: 'Input with left icon',
        template: PrimaryIconLeft,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    label="Input label"
    leftIcon="ds-icon--search"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <span class="ds-icon--search" aria-label="ds-icon--search" matPrefix></span>
    <input type="text" matInput />
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --icons --icon-left">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="ds-icon--search"></span>
        <input type="text" id="input" />
    </div>
</div>
`
    },
    {
        title: 'Input with right icon',
        template: PrimaryIconRight,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    label="Input label"
    rightIcon="ds-icon--location"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput />
    <span class="ds-icon--location" aria-label="ds-icon--location" matSuffix></span>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --icons --icon-right">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <input type="text" id="input" />
        <span class="ds-icon--location --right" aria-label="ds-icon--location"></span>
    </div>
</div>
`
    },
    {
        title: 'Input with both icons',
        template: PrimaryBothIcons,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    label="Input label"
    leftIcon="ds-icon--search"
    rightIcon="ds-icon--location"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <span class="ds-icon--search" aria-label="ds-icon--search" matPrefix></span>
    <input type="text" matInput />
    <span class="ds-icon--location" aria-label="ds-icon--location" matSuffix></span>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --icons --icon-left --icon-right">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="ds-icon--search"></span>
        <input type="text" id="input" />
        <span class="ds-icon--location --right" aria-label="ds-icon--location"></span>
    </div>
</div>
`
    },
    {
        title: 'Input loading',
        template: PrimaryLoading,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    isLoading
    label="Input label"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput />
    <mat-spinner class="ds-loading --small" matSuffix></mat-spinner>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --icons --icon-right">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <input id="input" type="text" />
        <div class="ds-loading --small --right" role="progressbar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
`
    },
    {
        title: 'Input with error',
        template: PrimaryError,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    errorMessage="Error message goes here."
    hasError
    inputId="input"
    label="Input label"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput />
    <div class="ds-input__error">
        Error message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --error">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />
    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>
`
    },
    {
        title: 'Input with hint',
        template: PrimaryHint,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    hintMessage="Hint message goes here."
    inputId="input"
    label="Input label"
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput />
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>
    <input type="text" id="input" />
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
`
    },
    {
        title: 'Input with tooltip',
        template: PrimaryTooltip,
        reactCode: `
import Input from '@ds-react/pro/Input';

<Input
    inputId="input"
    label="Input label"
    tooltipMessage="Tooltip message goes here."
    type="text"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
        <button class="ds-button --icon --sm" aria-label="button text" matTooltip="Tooltip message goes here" matTooltipPosition="above">
            <span class="ds-icon--info" aria-label="ds-icon--info"></span>
        </button>
    </mat-label>
    <input type="text" matInput />
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
        <div class="ds-tooltip">
            <div class="--top" data-tip="Tooltip message goes here.">
                <button class="ds-button --icon --sm" aria-label="button text">
                    <span class="ds-icon--info" aria-label="ds-icon--info"></span>
                </button>
            </div>
        </div>
    </label>
    <input type="text" id="input" />
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'errorMessage: PropTypes.string,',
    'hasError: PropTypes.bool,',
    'hintMessage: PropTypes.string,',
    'inputId: PropTypes.string,',
    'isDisabled: PropTypes.bool,',
    'isLoading: PropTypes.bool,',
    'isRequired: PropTypes.bool,',
    'label: PropTypes.string,',
    'leftIcon: PropTypes.string,',
    'name: PropTypes.string,',
    'onChange: PropTypes.func,',
    'placeholder: PropTypes.string,',
    'rightIcon: PropTypes.string,',
    'tooltipMessage: PropTypes.string,',
    'type: PropTypes.string'
];
