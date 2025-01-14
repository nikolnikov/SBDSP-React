import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Datepicker } from './Datepicker';

export default {
    title: 'Components/Datepicker/Angular',
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
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Datepicker</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker required</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRequired}
                        source={{
                            code: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker" disabled>
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker with hint text</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryHint}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>

    <div class="ds-input__hint">mm/dd/yyyy</div>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker with error text</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryError}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>

    <div class="ds-input__error">Error message goes here.</div>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Datepicker with unselectable days
                        </h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryUnselectableDays}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Datepicker</span>
    </mat-label>
    <input matInput placeholder="mm/dd/yyyy" value="" [matDatepicker]="picker" [min]="minDate">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker range</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRange}
                        source={{
                            code: `
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
`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Datepicker';
Primary.args = {
    inputId: 'datepicker-1',
    label: 'Datepicker'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Datepicker required';
PrimaryRequired.args = {
    inputId: 'datepicker-2',
    isRequired: true,
    label: 'Datepicker'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Datepicker disabled';
PrimaryDisabled.args = {
    inputId: 'datepicker-3',
    isDisabled: true,
    label: 'Datepicker'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Datepicker with hint text';
PrimaryHint.args = {
    inputId: 'datepicker-4',
    hintMessage: 'mm/dd/yyyy',
    label: 'Datepicker'
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Datepicker with error text';
PrimaryError.args = {
    inputId: 'datepicker-5',
    hasError: true,
    errorMessage: 'Error message goes here.',
    label: 'Datepicker'
};

export const PrimaryUnselectableDays = Template.bind({});
PrimaryUnselectableDays.storyName = 'Datepicker with unselectable days';
PrimaryUnselectableDays.args = {
    disabledDays: 'past',
    inputId: 'datepicker-6',
    label: 'Datepicker'
};

export const PrimaryRange = Template.bind({});
PrimaryRange.storyName = 'Datepicker range';
PrimaryRange.args = {
    inputId: 'datepicker-7',
    isRange: true,
    label: 'Datepicker'
};
