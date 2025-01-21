import React from 'react';
import { Datepicker } from './Datepicker';
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
    title: 'Components/Datepicker/Code',
    component: Datepicker,
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

const Template = args => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Datepicker';
Primary.args = {
    inputId: 'datepicker-1',
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Datepicker required';
PrimaryRequired.args = {
    inputId: 'datepicker-2',
    isRequired: true,
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Datepicker disabled';
PrimaryDisabled.args = {
    inputId: 'datepicker-3',
    isDisabled: true,
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Datepicker with error text';
PrimaryError.args = {
    inputId: 'datepicker-5',
    hasError: true,
    errorMessage: 'Error message goes here.',
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Datepicker with hint text';
PrimaryHint.args = {
    inputId: 'datepicker-4',
    hintMessage: 'mm/dd/yyyy',
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryUnselectableDays = Template.bind({});
PrimaryUnselectableDays.storyName = 'Datepicker with unselectable days';
PrimaryUnselectableDays.args = {
    disabledDays: 'past',
    inputId: 'datepicker-6',
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryRange = Template.bind({});
PrimaryRange.storyName = 'Datepicker range';
PrimaryRange.args = {
    inputId: 'datepicker-7',
    isRange: true,
    label: 'Datepicker',
    placeholder: 'mm/dd/yyyy'
};

export const PrimaryBasic = () => {
    return (
        <div className="ds-input">
            <label
                className="ds-input__label"
                htmlFor="input"
                aria-label="Datepicker"
            >
                <span>Datepicker</span>
            </label>
            <input type="date" id="input" />
        </div>
    );
};

const storyData = [
    {
        title: 'Datepicker',
        template: Primary,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    inputId="datepicker"
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker required',
        template: PrimaryRequired,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    inputId="datepicker"
    isRequired
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker disabled',
        template: PrimaryDisabled,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    inputId="datepicker"
    isDisabled
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker" disabled>
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker with error',
        template: PrimaryError,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    errorMessage="Error message goes here."
    hasError
    inputId="datepicker"
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>

    <div class="ds-input__error">Error message goes here.</div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker with hint',
        template: PrimaryHint,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    hintMessage="mm/dd/yyyy"
    inputId="datepicker"
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>

    <div class="ds-input__hint">mm/dd/yyyy</div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker with unselectable days',
        template: PrimaryUnselectableDays,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    disabledDays="past"
    inputId="datepicker"
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker" [min]="minDate">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker range',
        template: PrimaryRange,
        reactCode: `
import Datepicker from '@ds-react/pro/Datepicker';

<Datepicker
    inputId="datepicker"
    isRange
    label="Datepicker"
    placeholder="mm/dd/yyyy"
/>
        `,
        angularCode: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <mat-date-range-input [rangePicker]="pickerRange">
        <input placeholder="mm/dd/yyyy" matStartDate>
        <input placeholder="mm/dd/yyyy" matEndDate>
    </mat-date-range-input>
    <mat-datepicker-toggle matSuffix [for]="pickerRange"></mat-datepicker-toggle>
    <mat-date-range-picker #pickerRange></mat-date-range-picker>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: ''
    },
    {
        title: 'Datepicker basic',
        template: PrimaryBasic,
        reactCode: '',
        angularCode: '',
        tsCode: '',
        htmlCode: `
<div class="ds-input">
    <label class="ds-input__label" for="input" aria-label="Datepicker">
        <span>Datepicker</span>
    </label>
    <input type="date" id="input" />
</div>
        `
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'errorMessage: PropTypes.string,',
    'hasError: PropTypes.bool,',
    'hintMessage: PropTypes.string,',
    "disabledDays: PropTypes.oneOf(['past', 'future']),",
    'inputId: PropTypes.string.isRequired,',
    'isDisabled: PropTypes.bool,',
    'isRange: PropTypes.bool,',
    'isRequired: PropTypes.bool,',
    'label: PropTypes.string.isRequired,',
    'offset: PropTypes.number,',
    'placeholder: PropTypes.string,',
    'showOnTop: PropTypes.bool'
];
