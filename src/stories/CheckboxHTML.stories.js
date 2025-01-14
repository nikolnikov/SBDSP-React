import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Checkbox/HTML',
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
<label class="ds-input__checkbox" for="checkbox1">
    <input type="checkbox" id="checkbox1" name="checkbox" value="value">
    <span></span>
    Label
</label>
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
<label class="ds-input__checkbox" for="checkbox1">
    <input type="checkbox" id="checkbox1" name="checkbox" value="value" checked>
    <span></span>
    Label
</label>
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
<label class="ds-input__checkbox --disbaled" for="checkbox1">
    <input type="checkbox" id="checkbox1" name="checkbox" value="value" disabled>
    <span></span>
    Label
</label>
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
<label class="ds-input__checkbox --indeterminate" for="checkbox1">
    <input type="checkbox" id="checkbox1" name="checkbox" value="value">
    <span></span>
    Label
</label>
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
    inputId: 'checkbox-2',
    isChecked: true,
    label: 'Checkbox label',
    name: 'checkbox',
    onChange: () => {},
    value: 'checkbox'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.storyName = 'Checkbox disabled';
PrimaryDisabled.args = {
    inputId: 'checkbox-3',
    isDisabled: true,
    label: 'Checkbox label',
    name: 'checkbox',
    onChange: () => {},
    value: 'checkbox'
};

export const PrimaryIndeterminate = Template.bind({});
PrimaryIndeterminate.storyName = 'Checkbox indeterminate';
PrimaryIndeterminate.args = {
    inputId: 'checkbox-4',
    isIndeterminate: true,
    label: 'Checkbox label',
    name: 'checkbox',
    onChange: () => {},
    value: 'checkbox'
};
