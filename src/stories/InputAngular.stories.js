import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Input } from './Input';

export default {
    title: 'Components/Input/Angular',
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
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Input</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput />
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input required</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRequired}
                        source={{
                            code: `
<mat-form-field class="ds-input --required">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput />
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `
<mat-form-field class="ds-input --disabled">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput disabled />
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with left icon</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryIconLeft}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <span class="ds-icon--search" aria-label="ds-icon--search" matPrefix></span>
    <input matInput />
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with right icon</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryIconRight}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput />
    <span class="ds-icon--location" aria-label="ds-icon--location" matSuffix></span>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with both icons</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryBothIcons}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <span class="ds-icon--search" aria-label="ds-icon--search" matPrefix></span>
    <input matInput />
    <span class="ds-icon--location" aria-label="ds-icon--location" matSuffix></span>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input loading</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryLoading}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput />
    <mat-spinner class="ds-loading --small" matSuffix></mat-spinner>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with error</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryError}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput />
    <div class="ds-input__error">
        Error message goes here.
    </div>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with hint</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryHint}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
    </mat-label>
    <input matInput />
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</mat-form-field>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with tooltip</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryTooltip}
                        source={{
                            code: `
<mat-form-field class="ds-input">
    <mat-label class="ds-input__label">
        <span>Input label</span>
        <button class="ds-button --icon --sm" aria-label="button text" matTooltip="Tooltip message goes here" matTooltipPosition="above">
            <span class="ds-icon--info" aria-label="ds-icon--info"></span>
        </button>
    </mat-label>
    <input matInput />
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
