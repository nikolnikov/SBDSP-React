import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { InputSelect } from './InputSelect';
import { inputSelectOptions } from './data';

export default {
    title: 'Components/Input Select/React',
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
                    <Stories />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available props</h4>
                            <ul className="ds-list">
                                <li>customClasses: PropTypes.string</li>
                                <li>errorMessage: PropTypes.string</li>
                                <li>hasError: PropTypes.bool</li>
                                <li>hintMessage: PropTypes.string</li>
                                <li>inputId: PropTypes.string.isRequired</li>
                                <li>isDisabled: PropTypes.bool</li>
                                <li>isRequired: PropTypes.bool</li>
                                <li>label: PropTypes.string</li>
                                <li>menuClass: PropTypes.string</li>
                                <li>onChange: PropTypes.func.isRequired</li>
                                <li>options: PropTypes.array.isRequired</li>
                                <li>placeholder: PropTypes.string</li>
                                <li>selectedValue: PropTypes.string</li>
                                <li>tooltipMessage: PropTypes.string</li>
                            </ul>
                        </div>
                    </Subtitle>
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
    inputId: 'input-2',
    label: 'Input label',
    isRequired: true,
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Input select disabled';
PrimaryDisabled.args = {
    inputId: 'input-3',
    label: 'Input label',
    isDisabled: true,
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Input select with error';
PrimaryError.args = {
    inputId: 'input-8',
    label: 'Input label',
    hasError: true,
    errorMessage: 'Error message goes here.',
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Input select with hint';
PrimaryHint.args = {
    inputId: 'input-9',
    label: 'Input label',
    hintMessage: 'Hint message goes here.',
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};

export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.storyName = 'Input select with tooltip';
PrimaryTooltip.args = {
    inputId: 'input-10',
    label: 'Input label',
    tooltipMessage: 'Tooltip message goes here.',
    onChange: value => console.log(value),
    options: inputSelectOptions,
    placeholder: 'Select an option'
};
