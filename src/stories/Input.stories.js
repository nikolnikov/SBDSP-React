import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Input } from './Input';

export default {
    title: 'Components/Input/React',
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
                                <li>isLoading: PropTypes.bool,</li>
                                <li>isRequired: PropTypes.bool,</li>
                                <li>label: PropTypes.string,</li>
                                <li>leftIcon: PropTypes.string,</li>
                                <li>name: PropTypes.string,</li>
                                <li>onChange: PropTypes.func,</li>
                                <li>placeholder: PropTypes.string,</li>
                                <li>rightIcon: PropTypes.string,</li>
                                <li>tooltipMessage: PropTypes.string,</li>
                                <li>type: PropTypes.string</li>
                            </ul>
                        </div>
                    </Subtitle>
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
