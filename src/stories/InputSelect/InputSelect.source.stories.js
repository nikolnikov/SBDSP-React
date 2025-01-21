import React from 'react';
import { InputSelect } from './InputSelect';
import { inputSelectOptions } from '../data';
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
    title: 'Components/Input Select/Code',
    component: InputSelect,
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

const Template = args => <InputSelect {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Input select';
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Input select required';
PrimaryRequired.args = {
    ...Primary.args,
    inputId: 'input-2',
    isRequired: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Input select disabled';
PrimaryDisabled.args = {
    ...Primary.args,
    inputId: 'input-3',
    isDisabled: true
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Input select with error';
PrimaryError.args = {
    ...Primary.args,
    inputId: 'input-4',
    hasError: true,
    errorMessage: 'Error message goes here.'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Input select with hint';
PrimaryHint.args = {
    ...Primary.args,
    inputId: 'input-5',
    hintMessage: 'Hint message goes here.'
};

export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.storyName = 'Input select with tooltip';
PrimaryTooltip.args = {
    ...Primary.args,
    inputId: 'input-6',
    tooltipMessage: 'Tooltip message goes here.'
};

const storyData = [
    {
        title: 'Input select',
        template: Primary,
        reactCode: `
import InputSelect from '@ds-react/pro/InputSelect';

<InputSelect
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Last 1 day',
        'Last 2 days',
        'Last 3 days',
        'Last 4 days',
        'Last 5 days'
    ]}
    placeholder="Select an option"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown">
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select name="input">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
    },
    {
        title: 'Input select required',
        template: PrimaryRequired,
        reactCode: `
import InputSelect from '@ds-react/pro/InputSelect';

<InputSelect
    inputId="input"
    isRequired
    label="Input label"
    onChange={() => {}}
    options={[
        'Last 1 day',
        'Last 2 days',
        'Last 3 days',
        'Last 4 days',
        'Last 5 days'
    ]}
    placeholder="Select an option"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown">
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__select --required">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select name="input">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
    },
    {
        title: 'Input select disabled',
        template: PrimaryDisabled,
        reactCode: `
import InputSelect from '@ds-react/pro/InputSelect';

<InputSelect
    inputId="input"
    isDisabled
    label="Input label"
    onChange={() => {}}
    options={[
        'Last 1 day',
        'Last 2 days',
        'Last 3 days',
        'Last 4 days',
        'Last 5 days'
    ]}
    placeholder="Select an option"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown" disabled>
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__select --disabled">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select name="input" disabled>
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
    },
    {
        title: 'Input select with error',
        template: PrimaryError,
        reactCode: `
import InputSelect from '@ds-react/pro/InputSelect';

<InputSelect
    errorMessage="Error message goes here."
    hasError
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Last 1 day',
        'Last 2 days',
        'Last 3 days',
        'Last 4 days',
        'Last 5 days'
    ]}
    placeholder="Select an option"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown">
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
    </mat-select>
    <div class="ds-input__error">
        Error message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__select --error">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select name="input">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>
`
    },
    {
        title: 'Input select with hint',
        template: PrimaryHint,
        reactCode: `
import InputSelect from '@ds-react/pro/InputSelect';

<InputSelect
    hintMessage="Hint message goes here."
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Last 1 day',
        'Last 2 days',
        'Last 3 days',
        'Last 4 days',
        'Last 5 days'
    ]}
    placeholder="Select an option"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown">
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
    </mat-select>
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input">
        <span>Input label</span>
    </label>

    <select name="input">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
`
    },
    {
        title: 'Input select with tooltip',
        template: PrimaryTooltip,
        reactCode: `
import InputSelect from '@ds-react/pro/InputSelect';

<InputSelect
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Last 1 day',
        'Last 2 days',
        'Last 3 days',
        'Last 4 days',
        'Last 5 days'
    ]}
    placeholder="Select an option"
    tooltipMessage="Tooltip message goes here."
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
        <button class="ds-button --icon --sm" aria-label="button text" matTooltip="Tooltip goes here" matTooltipPosition="above">
            <span class="ds-icon--info" aria-label="ds-icon--info"></span>
        </button>
    </mat-label>
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown">
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__select">
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

    <select name="input">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'errorMessage: PropTypes.string,',
    'hasError: PropTypes.bool,',
    'hintMessage: PropTypes.string,',
    'inputId: PropTypes.string.isRequired,',
    'isDisabled: PropTypes.bool,',
    'isRequired: PropTypes.bool,',
    'label: PropTypes.string,',
    'menuClass: PropTypes.string,',
    'onChange: PropTypes.func.isRequired,',
    'options: PropTypes.array.isRequired,',
    'placeholder: PropTypes.string,',
    'selectedValue: PropTypes.string,',
    'tooltipMessage: PropTypes.string'
];
