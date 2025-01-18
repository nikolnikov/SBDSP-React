import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Checkbox/Angular',
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
                    <Unstyled>
                        <h3 className="title">Checkbox</h3>
                    </Unstyled>
                    <Canvas
                        of={Primary}
                        source={{
                            code: `
<mat-checkbox class="ds-input__checkbox">
    Checkbox label
</mat-checkbox>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Checkbox checked</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryChecked}
                        source={{
                            code: `
<mat-checkbox class="ds-input__checkbox" checked>
    Checkbox label
</mat-checkbox>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Checkbox disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryDisabled}
                        source={{
                            code: `
<mat-checkbox class="ds-input__checkbox" disabled>
    Checkbox label
</mat-checkbox>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Checkbox indeterminate</h3>
                    </Unstyled>
                    <Canvas
                        of={PrimaryIndeterminate}
                        source={{
                            code: `
<mat-checkbox class="ds-input__checkbox mat-checkbox-indeterminate">
    Checkbox label
</mat-checkbox>
`
                        }}
                    />
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
