import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { InputSelect } from './InputSelect';
import { inputSelectOptions } from './data';

export default {
    title: 'Components/Input Select/Angular',
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
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Input select</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select required</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRequired}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select with error</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryError}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select with hint</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryHint}
                        source={{
                            code: `
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
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select with tooltip</h3>
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
    <mat-select placeholder="Select an option" disableOptionCentering panelClass="ds-dropdown">
        <mat-option class="ds-dropdown__item" value="1">Last 1 Day</mat-option>
        <mat-option class="ds-dropdown__item" value="2">Last 2 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="3">Last 3 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="4">Last 4 Days</mat-option>
        <mat-option class="ds-dropdown__item" value="5">Last 5 Days</mat-option>
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
