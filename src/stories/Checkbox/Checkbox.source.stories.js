import React from 'react';
import { Checkbox } from './Checkbox';
import { StoriesTemplate } from '../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Components/Checkbox/Code',
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
            page: StoryDocs
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'checkbox-1',
    label: 'Checkbox label',
    name: 'checkbox',
    onChange: () => {},
    value: 'checkbox'
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
    ...Primary.args,
    inputId: 'checkbox-2',
    isChecked: true
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    ...Primary.args,
    inputId: 'checkbox-3',
    isDisabled: true
};

export const PrimaryIndeterminate = Template.bind({});
PrimaryIndeterminate.args = {
    ...Primary.args,
    inputId: 'checkbox-4',
    isIndeterminate: true
};

const storyData = [
    {
        title: 'Checkbox',
        template: Primary,
        reactCode: `
import Checkbox from '@ds-react/pro/Checkbox';

<Checkbox
    inputId="checkbox"
    label="Checkbox label"
    name="checkbox"
    onChange={() => {}}
    value="checkbox"
/>
        `,
        angularCode: `
<mat-checkbox class="ds-input__checkbox">
    Checkbox label
</mat-checkbox>
        `,
        tsCode: '',
        htmlCode: `
<label class="ds-input__checkbox" for="checkbox">
    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
    <span></span>
    Label
</label>
        `
    },
    {
        title: 'Checkbox checked',
        template: PrimaryChecked,
        reactCode: `
import Checkbox from '@ds-react/pro/Checkbox';

<Checkbox
    inputId="checkbox"
    isChecked
    label="Checkbox label"
    name="checkbox"
    onChange={() => {}}
    value="checkbox"
/>
        `,
        angularCode: `
<mat-checkbox class="ds-input__checkbox" checked>
    Checkbox label
</mat-checkbox>
        `,
        tsCode: '',
        htmlCode: `
<label class="ds-input__checkbox" for="checkbox">
    <input type="checkbox" id="checkbox" name="checkbox" value="value" checked />
    <span></span>
    Label
</label>
        `
    },
    {
        title: 'Checkbox disabled',
        template: PrimaryDisabled,
        reactCode: `
import Checkbox from '@ds-react/pro/Checkbox';

<Checkbox
    inputId="checkbox"
    isDisabled
    label="Checkbox label"
    name="checkbox"
    onChange={() => {}}
    value="checkbox"
/>
        `,
        angularCode: `
<mat-checkbox class="ds-input__checkbox" disabled>
    Checkbox label
</mat-checkbox>
        `,
        tsCode: '',
        htmlCode: `
<label class="ds-input__checkbox --disabled" for="checkbox">
    <input type="checkbox" id="checkbox" name="checkbox" value="value" disabled />
    <span></span>
    Label
</label>
        `
    },
    {
        title: 'Checkbox indeterminate',
        template: PrimaryIndeterminate,
        reactCode: `
import Checkbox from '@ds-react/pro/Checkbox';

<Checkbox
    inputId="checkbox"
    isIndeterminate
    label="Checkbox label"
    name="checkbox"
    onChange={() => {}}
    value="checkbox"
/>
        `,
        angularCode: `
<mat-checkbox class="ds-input__checkbox mat-checkbox-indeterminate">
    Checkbox label
</mat-checkbox>
        `,
        tsCode: '',
        htmlCode: `
<label class="ds-input__checkbox --indeterminate" for="checkbox">
    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
    <span></span>
    Label
</label>
        `
    }
];

const storyPropTypes = [
    'inputId: PropTypes.string.isRequired,',
    'label: PropTypes.string.isRequired,',
    'name: PropTypes.string.isRequired,',
    'isChecked: PropTypes.bool,',
    'customClasses: PropTypes.string,',
    'isDisabled: PropTypes.bool,',
    'isIndeterminate: PropTypes.bool,',
    'onChange: PropTypes.func,',
    'value: PropTypes.string'
];
