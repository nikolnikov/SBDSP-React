import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Datepicker } from './Datepicker';

export default {
    title: 'Components/Datepicker/React',
    component: Datepicker,
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
                                <li>
                                    disabledDays: PropTypes.oneOf(['past',
                                    'future']),
                                </li>
                                <li>inputId: PropTypes.string.isRequired,</li>
                                <li>isDisabled: PropTypes.bool,</li>
                                <li>isRange: PropTypes.bool,</li>
                                <li>isRequired: PropTypes.bool,</li>
                                <li>label: PropTypes.string.isRequired,</li>
                                <li>offset: PropTypes.number,</li>
                                <li>showOnTop: PropTypes.bool</li>
                            </ul>
                        </div>
                    </Subtitle>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Datepicker';
Primary.args = {
    inputId: 'datepicker-1',
    label: 'Datepicker'
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.storyName = 'Datepicker required';
PrimaryRequired.args = {
    inputId: 'datepicker-2',
    isRequired: true,
    label: 'Datepicker'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Datepicker disabled';
PrimaryDisabled.args = {
    inputId: 'datepicker-3',
    isDisabled: true,
    label: 'Datepicker'
};

export const PrimaryHint = Template.bind({});
PrimaryHint.storyName = 'Datepicker with hint text';
PrimaryHint.args = {
    inputId: 'datepicker-4',
    hintMessage: 'mm/dd/yyyy',
    label: 'Datepicker'
};

export const PrimaryError = Template.bind({});
PrimaryError.storyName = 'Datepicker with error text';
PrimaryError.args = {
    inputId: 'datepicker-5',
    hasError: true,
    errorMessage: 'Error message goes here.',
    label: 'Datepicker'
};

export const PrimaryUnselectableDays = Template.bind({});
PrimaryUnselectableDays.storyName = 'Datepicker with unselectable days';
PrimaryUnselectableDays.args = {
    disabledDays: 'past',
    inputId: 'datepicker-6',
    label: 'Datepicker'
};

export const PrimaryRange = Template.bind({});
PrimaryRange.storyName = 'Datepicker range';
PrimaryRange.args = {
    inputId: 'datepicker-7',
    isRange: true,
    label: 'Datepicker'
};
