import React from 'react';
import { Textarea } from './Textarea';
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
    title: 'Professional/Textarea/Code',
    component: Textarea,
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

const Template = args => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    inputId: 'textarea-1',
    label: 'Textarea label',
    onChange: () => console.log('Textarea changed')
};

export const PrimaryRequired = Template.bind({});
PrimaryRequired.args = {
    inputId: 'textarea-2',
    isRequired: true,
    label: 'Textarea label',
    onChange: () => console.log('Textarea changed')
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    inputId: 'textarea-3',
    isDisabled: true,
    label: 'Textarea label',
    onChange: () => console.log('Textarea changed')
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    errorMessage: 'Error message goes here.',
    hasError: true,
    inputId: 'textarea-4',
    label: 'Textarea label',
    onChange: () => console.log('Textarea changed')
};

export const PrimaryHint = Template.bind({});
PrimaryHint.args = {
    hintMessage: 'Hint message goes here.',
    inputId: 'textarea-5',
    label: 'Textarea label',
    onChange: () => console.log('Textarea changed')
};

const storyData = [
    {
        title: 'Textarea',
        template: Primary,
        reactCode: `
import Textarea from '@ds-react/pro/Textarea';

<Textarea
    inputId="textarea"
    label="Textarea label"
    onChange={onChange}
/>
        `,
        angularCode: `
<mat-form-field class="ds-textarea">
    <mat-label class="ds-input__label">
        <span>Message</span>
    </mat-label>
    <textarea matInput></textarea>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --textarea">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    <textarea class="ds-textarea" id="textarea"></textarea>
</div>
`
    },
    {
        title: 'Textarea required',
        template: PrimaryRequired,
        reactCode: `
import Textarea from '@ds-react/pro/Textarea';

<Textarea
    isRequired
    inputId="textarea"
    label="Textarea label"
    onChange={onChange}
/>
        `,
        angularCode: `
<mat-form-field class="ds-textarea --required">
    <mat-label class="ds-input__label">
        <span>Message</span>
    </mat-label>
    <textarea matInput></textarea>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --textarea --required">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    <textarea class="ds-textarea" id="textarea"></textarea>
</div>
`
    },
    {
        title: 'Textarea disabled',
        template: PrimaryDisabled,
        reactCode: `
import Textarea from '@ds-react/pro/Textarea';

<Textarea
    isDisabled
    inputId="textarea"
    label="Textarea label"
    onChange={onChange}
/>
        `,
        angularCode: `
<mat-form-field class="ds-textarea --disabled">
    <mat-label class="ds-input__label">
        <span>Message</span>
    </mat-label>
    <textarea matInput disabled></textarea>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --textarea --disabled">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    <textarea class="ds-textarea" id="textarea" disabled></textarea>
</div>
`
    },
    {
        title: 'Textarea with error',
        template: PrimaryError,
        reactCode: `
import Textarea from '@ds-react/pro/Textarea';

<Textarea
    errorMessage="Error message goes here."
    hasError
    inputId="textarea"
    label="Textarea label"
    onChange={onChange}
/>
        `,
        angularCode: `
<mat-form-field class="ds-textarea">
    <mat-label class="ds-input__label">
        <span>Message</span>
    </mat-label>
    <textarea matInput></textarea>
    <div class="ds-input__error">
        Error message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --textarea --error">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    <textarea class="ds-textarea" id="textarea"></textarea>
    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>
`
    },
    {
        title: 'Textarea with hint',
        template: PrimaryHint,
        reactCode: `
import Textarea from '@ds-react/pro/Textarea';

<Textarea
    hintMessage="Hint message goes here."
    inputId="textarea"
    label="Textarea label"
    onChange={onChange}
/>
        `,
        angularCode: `
<mat-form-field class="ds-textarea">
    <mat-label class="ds-input__label">
        <span>Message</span>
    </mat-label>
    <textarea matInput></textarea>
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</mat-form-field>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-input --textarea">
    <label class="ds-input__label" for="textarea">
        <span>Textarea label</span>
    </label>
    <textarea class="ds-textarea" id="textarea"></textarea>
    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'customClasses: PropTypes.string,',
    'errorMessage: PropTypes.string,',
    'hasError: PropTypes.bool,',
    'hintMessage: PropTypes.string,',
    'inputId: PropTypes.string.isRequired,',
    'isDisabled: PropTypes.bool,',
    'isRequired: PropTypes.bool,',
    'label: PropTypes.string,',
    'name: PropTypes.string,',
    'onChange: PropTypes.func,',
    'placeholder: PropTypes.string'
];
