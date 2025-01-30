import React from 'react';
import { InputSelectMulti } from './InputSelectMulti';
import { nameOptions } from '../data';
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
    title: 'Professional/Input Select Multi/Code',
    component: InputSelectMulti,
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

const Template = args => <InputSelectMulti {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    onChange: value => console.log(value),
    options: nameOptions,
    placeholder: 'Select options'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.args = {
    ...Primary.args,
    inputId: 'input-2',
    isRequired: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    ...Primary.args,
    inputId: 'input-3',
    isDisabled: true
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    ...Primary.args,
    inputId: 'input-4',
    hasError: true,
    errorMessage: 'Error message goes here.'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.args = {
    ...Primary.args,
    inputId: 'input-5',
    hintMessage: 'Hint message goes here.'
};

export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.args = {
    ...Primary.args,
    inputId: 'input-6',
    tooltipMessage: 'Tooltip message goes here.'
};

const storyData = [
    {
        title: 'Input select multi',
        template: Primary,
        reactCode: `
import InputMultiSelect from '@ds-react/pro/InputMultiSelect';

<InputMultiSelect
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Blake, Edward',
        'Jupiter, Sally',
        'Kovachs, Walter',
        'Mason, Hollis',
        'Osterman, Jon'
    ]}
    placeholder="Select options"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select options" disableOptionCentering panelClass="ds-dropdown" [formControl]="selectItems" multiple>
        <mat-select-trigger class="ds-dropdown__trigger">
            <div class="ds-dropdown__selected-container">
                <span class="ds-dropdown__selected" *ngFor="let item of selectItems.value | slice:0:2">{{ item }}</span>
            </div>

            <span class="ds-dropdown__selected-plus" *ngIf="(selectItems.value?.length || 0) > 2">
                +{{(selectItems.value?.length || 0) - 2}}
            </span>
        </mat-select-trigger>

        <mat-option class="ds-dropdown__item" *ngFor="let item of selectItem" [value]="item">
            {{ item }}
        </mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: `
selectItems = new FormControl('');

selectItem: string[] = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];
        `,
        htmlCode: ''
    },
    {
        title: 'Input select multi required',
        template: PrimaryRequired,
        reactCode: `
import InputMultiSelect from '@ds-react/pro/InputMultiSelect';

<InputMultiSelect
    inputId="input"
    isRequired
    label="Input label"
    onChange={() => {}}
    options={[
        'Blake, Edward',
        'Jupiter, Sally',
        'Kovachs, Walter',
        'Mason, Hollis',
        'Osterman, Jon'
    ]}
    placeholder="Select options"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select options" disableOptionCentering panelClass="ds-dropdown" [formControl]="selectItems" multiple>
        <mat-select-trigger class="ds-dropdown__trigger">
            <div class="ds-dropdown__selected-container">
                <span class="ds-dropdown__selected" *ngFor="let item of selectItems.value | slice:0:2">{{ item }}</span>
            </div>

            <span class="ds-dropdown__selected-plus" *ngIf="(selectItems.value?.length || 0) > 2">
                +{{(selectItems.value?.length || 0) - 2}}
            </span>
        </mat-select-trigger>

        <mat-option class="ds-dropdown__item" *ngFor="let item of selectItem" [value]="item">
            {{ item }}
        </mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: `
selectItems = new FormControl('', [Validators.required]);

selectItem: string[] = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];
        `,
        htmlCode: ''
    },
    {
        title: 'Input select multi disabled',
        template: PrimaryDisabled,
        reactCode: `
import InputMultiSelect from '@ds-react/pro/InputMultiSelect';

<InputMultiSelect
    inputId="input"
    isDisabled
    label="Input label"
    onChange={() => {}}
    options={[
        'Blake, Edward',
        'Jupiter, Sally',
        'Kovachs, Walter',
        'Mason, Hollis',
        'Osterman, Jon'
    ]}
    placeholder="Select options"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select options" disableOptionCentering panelClass="ds-dropdown" [formControl]="selectItems" multiple disabled>
        <mat-select-trigger class="ds-dropdown__trigger">
            <div class="ds-dropdown__selected-container">
                <span class="ds-dropdown__selected" *ngFor="let item of selectItems.value | slice:0:2">{{ item }}</span>
            </div>

            <span class="ds-dropdown__selected-plus" *ngIf="(selectItems.value?.length || 0) > 2">
                +{{(selectItems.value?.length || 0) - 2}}
            </span>
        </mat-select-trigger>

        <mat-option class="ds-dropdown__item" *ngFor="let item of selectItem" [value]="item">
            {{ item }}
        </mat-option>
    </mat-select>
</mat-form-field>
        `,
        tsCode: `
selectItems = new FormControl('');

selectItem: string[] = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];
        `,
        htmlCode: ''
    },
    {
        title: 'Input select multi with error',
        template: PrimaryError,
        reactCode: `
import InputMultiSelect from '@ds-react/pro/InputMultiSelect';

<InputMultiSelect
    errorMessage="Error message goes here."
    hasError
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Blake, Edward',
        'Jupiter, Sally',
        'Kovachs, Walter',
        'Mason, Hollis',
        'Osterman, Jon'
    ]}
    placeholder="Select options"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select options" disableOptionCentering panelClass="ds-dropdown" [formControl]="selectItems" multiple>
        <mat-select-trigger class="ds-dropdown__trigger">
            <div class="ds-dropdown__selected-container">
                <span class="ds-dropdown__selected" *ngFor="let item of selectItems.value | slice:0:2">{{ item }}</span>
            </div>

            <span class="ds-dropdown__selected-plus" *ngIf="(selectItems.value?.length || 0) > 2">
                +{{(selectItems.value?.length || 0) - 2}}
            </span>
        </mat-select-trigger>

        <mat-option class="ds-dropdown__item" *ngFor="let item of selectItem" [value]="item">
            {{ item }}
        </mat-option>
    </mat-select>
    <div class="ds-input__error">
        Error message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: `
selectItems = new FormControl('');

selectItem: string[] = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];
        `,
        htmlCode: ''
    },
    {
        title: 'Input select multi with hint',
        template: PrimaryHint,
        reactCode: `
import InputMultiSelect from '@ds-react/pro/InputMultiSelect';

<InputMultiSelect
    hintMessage="Hint message goes here."
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Blake, Edward',
        'Jupiter, Sally',
        'Kovachs, Walter',
        'Mason, Hollis',
        'Osterman, Jon'
    ]}
    placeholder="Select options"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <mat-select placeholder="Select options" disableOptionCentering panelClass="ds-dropdown" [formControl]="selectItems" multiple>
        <mat-select-trigger class="ds-dropdown__trigger">
            <div class="ds-dropdown__selected-container">
                <span class="ds-dropdown__selected" *ngFor="let item of selectItems.value | slice:0:2">{{ item }}</span>
            </div>

            <span class="ds-dropdown__selected-plus" *ngIf="(selectItems.value?.length || 0) > 2">
                +{{(selectItems.value?.length || 0) - 2}}
            </span>
        </mat-select-trigger>

        <mat-option class="ds-dropdown__item" *ngFor="let item of selectItem" [value]="item">
            {{ item }}
        </mat-option>
    </mat-select>
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: `
selectItems = new FormControl('');

selectItem: string[] = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];
        `,
        htmlCode: ''
    },
    {
        title: 'Input select multi with tooltip',
        template: PrimaryTooltip,
        reactCode: `
import InputMultiSelect from '@ds-react/pro/InputMultiSelect';

<InputMultiSelect
    hasError
    inputId="input"
    label="Input label"
    onChange={() => {}}
    options={[
        'Blake, Edward',
        'Jupiter, Sally',
        'Kovachs, Walter',
        'Mason, Hollis',
        'Osterman, Jon'
    ]}
    placeholder="Select options"
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
    <mat-select placeholder="Select options" disableOptionCentering panelClass="ds-dropdown" [formControl]="selectItems" multiple>
        <mat-select-trigger class="ds-dropdown__trigger">
            <div class="ds-dropdown__selected-container">
                <span class="ds-dropdown__selected" *ngFor="let item of selectItems.value | slice:0:2">{{ item }}</span>
            </div>

            <span class="ds-dropdown__selected-plus" *ngIf="(selectItems.value?.length || 0) > 2">
                +{{(selectItems.value?.length || 0) - 2}}
            </span>
        </mat-select-trigger>

        <mat-option class="ds-dropdown__item" *ngFor="let item of selectItem" [value]="item">
            {{ item }}
        </mat-option>
    </mat-select>
    <div class="ds-input__error">
        Error message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: `
selectItems = new FormControl('');

selectItem: string[] = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];
        `,
        htmlCode: ''
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
    'selectedValue: PropTypes.arrayOf(PropTypes.string),',
    'tooltipMessage: PropTypes.string'
];
