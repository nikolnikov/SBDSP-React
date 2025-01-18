import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { InputSelectMulti } from './InputSelectMulti';
import { nameOptions } from './data';

export default {
    title: 'Components/Input Select Multi/Angular',
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
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Input select multi</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select multi required</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRequired}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select multi disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select multi with error</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryError}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select multi with hint</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryHint}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">
                            Input select multi with tooltip
                        </h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryTooltip}
                        source={{
                            code: `
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

const Template = args => <InputSelectMulti {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Input select';
Primary.args = {
    inputId: 'input-1',
    label: 'Input label',
    onChange: value => console.log(value),
    options: nameOptions,
    placeholder: 'Select options'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Input select multi required';
PrimaryRequired.args = {
    ...Primary.args,
    inputId: 'input-2',
    isRequired: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Input select multi disabled';
PrimaryDisabled.args = {
    ...Primary.args,
    inputId: 'input-3',
    isDisabled: true
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Input select multi with error';
PrimaryError.args = {
    ...Primary.args,
    inputId: 'input-4',
    hasError: true,
    errorMessage: 'Error message goes here.'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Input select multi with hint';
PrimaryHint.args = {
    ...Primary.args,
    inputId: 'input-5',
    hintMessage: 'Hint message goes here.'
};

export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.storyName = 'Input select multi with tooltip';
PrimaryTooltip.args = {
    ...Primary.args,
    inputId: 'input-6',
    tooltipMessage: 'Tooltip message goes here.'
};
