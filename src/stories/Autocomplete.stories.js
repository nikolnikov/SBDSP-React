import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
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
    title: 'Components/Autocomplete/React',
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
                    <Stories />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available props</h4>
                            <ul className="ds-list">
                                <li>customClasses: PropTypes.string,</li>
                                <li>errorMessage: PropTypes.string,</li>
                                <li>hasError: PropTypes.bool,</li>
                                <li>hintMessage: PropTypes.string,</li>
                                <li>inputId: PropTypes.string,</li>
                                <li>isDisabled: PropTypes.bool,</li>
                                <li>searchIcon: PropTypes.bool,</li>
                                <li>label: PropTypes.string,</li>
                                <li>placeholder: PropTypes.string,</li>
                                <li>isRequired: PropTypes.bool,</li>
                                <li>maxWidth: PropTypes.number,</li>
                                <li>getSelection: PropTypes.func,</li>
                                <li>optionList: PropTypes.array</li>
                            </ul>
                        </div>
                    </Subtitle>
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
    ...Primary.args,
    isRequired: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Autocomplete disabled';
PrimaryDisabled.args = {
    ...Primary.args,
    isDisabled: true
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.storyName = 'Autocomplete with search icon';
PrimaryWithIcon.args = {
    ...Primary.args,
    searchIcon: true
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.storyName = 'Autocomplete with error';
PrimaryWithError.args = {
    ...Primary.args,
    errorMessage: 'Error message goes here.',
    hasError: true
};

export const PrimaryWithHint = Template.bind({});
PrimaryWithHint.storyName = 'Autocomplete with hint';
PrimaryWithHint.args = {
    ...Primary.args,
    hintMessage: 'Hint message goes here.'
};
