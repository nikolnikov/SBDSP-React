import React from 'react';
import { Toggle } from './Toggle';
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
    title: 'Components/Toggle switch/Code',
    component: Toggle,
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

const Template = args => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'toggle-1',
    leftLabel: 'Label'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    inputId: 'toggle-2',
    isDisabled: true,
    leftLabel: 'Label'
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
    inputId: 'toggle-3',
    isChecked: true,
    leftLabel: 'Label'
};

const storyData = [
    {
        title: 'Toggle',
        template: Primary,
        reactCode: `
import Toggle from '@ds-react/pro/Toggle';

<Toggle leftLabel="Label" inputId="toggle" />
        `,
        angularCode: `
<div class="ds-toggle-switch">
    <div class="ds-toggle-switch__label">Label</div>
    <label class="ds-toggle-switch__container" for="toggle">
        <input type="checkbox" id="toggle" />
        <div class="ds-toggle-switch__slider"></div>
    </label>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-toggle-switch">
    <div class="ds-toggle-switch__label">Left label</div>
    <label class="ds-toggle-switch__container" for="toggle">
        <input type="checkbox" id="toggle" />
        <div class="ds-toggle-switch__slider"></div>
    </label>
</div>
`
    },
    {
        title: 'Toggle disabled',
        template: PrimaryDisabled,
        reactCode: `
import Toggle from '@ds-react/pro/Toggle';

<Toggle 
    leftLabel="Label"
    inputId="toggle"
    isDisabled
/>
        `,
        angularCode: `
<div class="ds-toggle-switch --disabled">
    <div class="ds-toggle-switch__label">Label</div>
    <label class="ds-toggle-switch__container" for="toggle">
        <input type="checkbox" id="toggle" />
        <div class="ds-toggle-switch__slider"></div>
    </label>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-toggle-switch --disabled">
    <div class="ds-toggle-switch__label">Left label</div>
    <label class="ds-toggle-switch__container" for=toggle">
        <input type="checkbox" id="toggle" />
        <div class="ds-toggle-switch__slider"></div>
    </label>
</div>
`
    },
    {
        title: 'Toggle checked',
        template: PrimaryChecked,
        reactCode: `
import Toggle from '@ds-react/pro/Toggle';

<Toggle 
    leftLabel="Label"
    inputId="toggle"
    isChecked
/>
        `,
        angularCode: `
<div class="ds-toggle-switch --disabled">
    <div class="ds-toggle-switch__label">Label</div>
    <label class="ds-toggle-switch__container" for="toggle">
        <input type="checkbox" id="toggle" checked />
        <div class="ds-toggle-switch__slider"></div>
    </label>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-toggle-switch --disabled">
    <div class="ds-toggle-switch__label">Left label</div>
    <label class="ds-toggle-switch__container" for="toggle">
        <input type="checkbox" id="toggle" checked />
        <div class="ds-toggle-switch__slider"></div>
    </label>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'isChecked: PropTypes.bool,',
    'isDisabled: PropTypes.bool,',
    'inputId: PropTypes.string.isRequired,',
    'leftLabel: PropTypes.string,',
    'name: PropTypes.string,',
    'onChange: PropTypes.func,',
    'rightLabel: PropTypes.string'
];
