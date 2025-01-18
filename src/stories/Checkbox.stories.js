import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Checkbox/React',
    component: Checkbox,
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
                                <li>inputId: PropTypes.string.isRequired,</li>
                                <li>label: PropTypes.string.isRequired,</li>
                                <li>name: PropTypes.string.isRequired,</li>
                                <li>isChecked: PropTypes.bool,</li>
                                <li>customClasses: PropTypes.string,</li>
                                <li>isDisabled: PropTypes.bool,</li>
                                <li>isIndeterminate: PropTypes.bool,</li>
                                <li>onChange: PropTypes.func,</li>
                                <li>value: PropTypes.string</li>
                            </ul>
                        </div>
                    </Subtitle>
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Checkbox';
Primary.args = {
    inputId: 'checkbox-1',
    label: 'Checkbox label',
    name: 'checkbox',
    onChange: () => {},
    value: 'checkbox'
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.storyName = 'Checkbox checked';
PrimaryChecked.args = {
    ...Primary.args,
    inputId: 'checkbox-2',
    isChecked: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Checkbox disabled';
PrimaryDisabled.args = {
    ...Primary.args,
    inputId: 'checkbox-3',
    isDisabled: true
};

export const PrimaryIndeterminate = Template.bind({});
PrimaryIndeterminate.storyName = 'Checkbox indeterminate';
PrimaryIndeterminate.args = {
    ...Primary.args,
    inputId: 'checkbox-4',
    isIndeterminate: true
};
