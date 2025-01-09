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
    title: 'Components/Autocomplete/HTML',
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
                            code: `<div class="ds-input">
    <label class="ds-input__label" for="labelname1" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="labelname1" />
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete required</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryRequired}
                        source={{
                            code: `<div class="ds-input --required">
    <label class="ds-input__label" for="labelname1" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="labelname1" />
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `<div class="ds-input --disabled">
    <label class="ds-input__label" for="labelname1" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="labelname1" disabled />
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete with search icon</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryWithIcon}
                        source={{
                            code: `<div class="ds-input --icons --icon-left">
    <label class="ds-input__label" for="labelname1" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="search"></span>                                
        <input type="text" id="labelname1" />
    </div>
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete with error</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryWithError}
                        source={{
                            code: `<div class="ds-input --error">
    <label class="ds-input__label" for="labelname1" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="labelname1" />

    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Autocomplete with hint</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryWithHint}
                        source={{
                            code: `<div class="ds-input">
    <label class="ds-input__label" for="labelname1" aria-label="Static Input">
        <span>Input label</span>
    </label>
    <input type="text" id="labelname1" />

    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>

<div class="ds-dropdown">
    <div class="ds-dropdown__item">Item 1</div>
    <div class="ds-dropdown__item">Item 2</div>
    <div class="ds-dropdown__item">Item 3</div>
</div>`
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
