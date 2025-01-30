import React from 'react';
import { RadioButton } from './RadioButton';
import { StoriesTemplate } from '../../Stories.template';

export const StoryDocs = () => {
    return (
        <StoriesTemplate
            storyData={storyData}
            storyPropTypes={storyPropTypes}
        />
    );
};

export default {
    title: 'Professional/Radio Button/Code',
    component: RadioButton,
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

const Template = args => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'radio-1',
    label: 'Radio button label',
    onChange: () => {},
    name: 'radio-1',
    value: 'radio-1'
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
    inputId: 'radio-2',
    isChecked: true,
    label: 'Radio button label',
    onChange: () => {},
    name: 'radio-2',
    value: 'radio-2'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    inputId: 'radio-3',
    isDisabled: true,
    label: 'Radio button label',
    onChange: () => {},
    name: 'radio-3',
    value: 'radio-3'
};

const storyData = [
    {
        title: 'Radio button',
        template: Primary,
        reactCode: `
import RadioButton from '@ds-react/pro/RadioButton';

<RadioButton
    inputId="radio"
    label="Radio button label"
    onChange={() => {}}
    name="radio"
    value="radio"
/>
        `,
        angularCode: `
<mat-radio-group>
    <mat-radio-button class="ds-input__radio" value="">
        Radio button label
    </mat-radio-button>
</mat-radio-group>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__radio">
    <input type="radio" name="radio" id="label" value="label">
    <label for="label">Radio button label</label>
</div>
`
    },
    {
        title: 'Radio button checked',
        template: PrimaryChecked,
        reactCode: `
import RadioButton from '@ds-react/pro/RadioButton';

<RadioButton
    inputId="radio"
    isChecked
    label="Radio button label"
    onChange={() => {}}
    name="radio"
    value="radio"
/>
        `,
        angularCode: `
<mat-radio-group>
    <mat-radio-button class="ds-input__radio" value="" checked>
        Radio button label
    </mat-radio-button>
</mat-radio-group>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__radio">
    <input type="radio" name="radio" id="label" value="label" checked="checked">
    <label for="label">Radio button label</label>
</div>
`
    },
    {
        title: 'Radio button disabled',
        template: PrimaryDisabled,
        reactCode: `
import RadioButton from '@ds-react/pro/RadioButton';

<RadioButton
    inputId="radio"
    isDisabled
    label="Radio button label"
    onChange={() => {}}
    name="radio"
    value="radio"
/>
        `,
        angularCode: `
<mat-radio-group>
    <mat-radio-button class="ds-input__radio" value="" disabled>
        Radio button label
    </mat-radio-button>
</mat-radio-group>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input__radio --disabled">
    <input type="radio" name="radio" id="label" value="label">
    <label for="label">Radio button label</label>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'inputId: PropTypes.string.isRequired,',
    'isChecked: PropTypes.bool,',
    'isDisabled: PropTypes.bool,',
    'label: PropTypes.string.isRequired,',
    'name: PropTypes.string.isRequired,',
    'onChange: PropTypes.func.isRequired,',
    'value: PropTypes.string.isRequired'
];
