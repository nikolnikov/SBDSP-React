import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Input } from './Input';

export default {
    title: 'Components/Input/HTML',
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
<div class="ds-input">
    <label class="ds-input__label" for="input-1">
        <span>Input label</span>
    </label>
    <input type="text" id="input-1" />
</div>
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
<div class="ds-input --required">
    <label class="ds-input__label" for="input-2">
        <span>Input label</span>
    </label>
    <input type="text" id="input-2" />
</div>
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
<div class="ds-input --disabled">
    <label class="ds-input__label" for="input-3">
        <span>Input label</span>
    </label>
    <input type="text" id="input-3" disabled />
</div>
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
<div class="ds-input --icons --icon-left">
    <label class="ds-input__label" for="input-4">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="ds-icon--search"></span>
        <input type="text" id="input-4" />
    </div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input with right icon</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryIconLeft}
                        source={{
                            code: `
<div class="ds-input --icons --icon-right">
    <label class="ds-input__label" for="input-5">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <input type="text" id="input-5" />
        <span class="ds-icon--location --right" aria-label="ds-icon--location"></span>
    </div>
</div>
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
<div class="ds-input --icons --icon-left --icon-right">
    <label class="ds-input__label" for="input-6">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="ds-icon--search"></span>
        <input id="input-6" type="text" />
        <span class="ds-icon--location --right" aria-label="ds-icon--location"></span>
    </div>
</div>
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
<div class="ds-input --icons --icon-right">
    <label class="ds-input__label" for="input-7">
        <span>Input label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <input id="input-7" type="text" />
        <div class="ds-loading --small --right" role="progressbar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
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
<div class="ds-input --error">
    <label class="ds-input__label" for="input-8">
        <span>Input label</span>
    </label>
    <input type="text" id="input-8" />
    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>
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
<div class="ds-input">
    <label class="ds-input__label" for="input-9">
        <span>Input label</span>
    </label>
    <input type="text" id="input-9" />
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
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
<div class="ds-input">
    <label class="ds-input__label" for="input-10">
        <span>Input label</span>
        <div class="ds-tooltip">
            <div class="--top" data-tip="Tooltip message goes here.">
                <button class="ds-button --icon --sm" aria-label="button text">
                    <span class="ds-icon--info" aria-label="ds-icon--info"></span>
                </button>
            </div>
        </div>
    </label>
    <input type="text" id="input-10" />
</div>
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
