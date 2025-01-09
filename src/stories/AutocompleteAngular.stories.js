import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Autocomplete } from './Autocomplete';

const options = [
    'Adrian Veidt',
    'Dan Dreiberg',
    'Edward Blake',
    'Hollis Mason',
    'Jon Osterman',
    'Laurie Juspeczyk',
    'Sally Jupiter',
    'Walter Kovacs'
];

export default {
    title: 'Components/Autocomplete/Angular',
    component: Autocomplete,
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
                        <h3 className="title">Autocomplete</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete required</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRequired}
                        source={{
                            code: `<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" disabled />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete with search icon</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryWithIcon}
                        source={{
                            code: `<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <span class="ds-icon--search" matPrefix></span>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete with error</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryWithError}
                        source={{
                            code: `<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <div class="ds-input__error" *ngIf="input.hasError('required')">
        Error message goes here.
    </div>

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete with hint</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryWithHint}
                        source={{
                            code: `<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input type="text" matInput [formControl]="autocomplete" [matAutocomplete]="auto" />

    <div class="ds-input__hint">
        Hint goes here
    </div>

    <mat-autocomplete class="ds-dropdown" autoActiveFirstOption #auto="matAutocomplete">
        <mat-option class="ds-dropdown__item" *ngFor="let option of filteredOptions | async" [value]="option">
            {{ option }}
        </mat-option>
    </mat-autocomplete>
</mat-form-field>`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Autocomplete {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Autocomplete';
Primary.args = {
    label: 'Input label',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    optionList: options
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Autocomplete required';
PrimaryRequired.args = {
    label: 'Input label',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    isRequired: true,
    optionList: options
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Autocomplete disabled';
PrimaryDisabled.args = {
    label: 'Input label',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    isDisabled: true,
    optionList: options
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.storyName = 'Autocomplete with search icon';
PrimaryWithIcon.args = {
    label: 'Input label',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    optionList: options,
    searchIcon: true
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.storyName = 'Autocomplete with error';
PrimaryWithError.args = {
    label: 'Input label',
    errorMessage: 'Error message goes here.',
    getSelection: selection => {
        console.log(selection);
    },
    hasError: true,
    inputId: 'input-id',
    optionList: options
};

export const PrimaryWithHint = Template.bind({});
PrimaryWithHint.storyName = 'Autocomplete with hint';
PrimaryWithHint.args = {
    label: 'Input label',
    hintMessage: 'Hint message goes here.',
    getSelection: selection => {
        console.log(selection);
    },
    inputId: 'input-id',
    optionList: options
};
