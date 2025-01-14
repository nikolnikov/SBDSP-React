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
    inputId: 'input-2',
    label: 'Input label',
    isRequired: true,
    type: 'text'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Input disabled';
PrimaryDisabled.args = {
    inputId: 'input-3',
    label: 'Input label',
    isDisabled: true,
    type: 'text'
};

export const PrimaryIconLeft = Template.bind({});
PrimaryIconLeft.storyName = 'Input with left icon';
PrimaryIconLeft.args = {
    inputId: 'input-4',
    label: 'Input label',
    leftIcon: 'ds-icon--search',
    type: 'text'
};

export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.storyName = 'Input with right icon';
PrimaryIconRight.args = {
    inputId: 'input-5',
    label: 'Input label',
    rightIcon: 'ds-icon--location',
    type: 'text'
};

export const PrimaryBothIcons = Template.bind({});
PrimaryBothIcons.storyName = 'Input with both icons';
PrimaryBothIcons.args = {
    inputId: 'input-6',
    label: 'Input label',
    leftIcon: 'ds-icon--search',
    rightIcon: 'ds-icon--location',
    type: 'text'
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.storyName = 'Input loading';
PrimaryLoading.args = {
    inputId: 'input-7',
    label: 'Input label',
    isLoading: true,
    type: 'text'
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Input with error';
PrimaryError.args = {
    inputId: 'input-8',
    label: 'Input label',
    hasError: true,
    errorMessage: 'Error message goes here.',
    type: 'text'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Input with hint';
PrimaryHint.args = {
    inputId: 'input-9',
    label: 'Input label',
    hintMessage: 'Hint message goes here.',
    type: 'text'
};

export const PrimaryTooltip = Template.bind({});
PrimaryTooltip.storyName = 'Input with tooltip';
PrimaryTooltip.args = {
    inputId: 'input-10',
    label: 'Input label',
    tooltipMessage: 'Tooltip message goes here.',
    type: 'text'
};
