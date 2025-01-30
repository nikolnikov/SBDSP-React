import React from 'react';
import { Message } from './Message';
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
    title: 'Components/Message/Code',
    component: Message,
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

const Template = args => <Message {...args} />;

export const Informative = Template.bind({});
Informative.args = {
    actions: [
        { title: 'Yes', action: null },
        { title: 'No', action: null }
    ],
    closeHandler: () => {
        console.log('Message closed');
    },
    message:
        "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
    title: 'Heading',
    type: 'informative'
};

export const Success = Template.bind({});
Success.args = {
    ...Informative.args,
    type: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
    ...Informative.args,
    type: 'warning'
};

export const Error = Template.bind({});
Error.args = {
    ...Informative.args,
    type: 'error'
};

const storyData = [
    {
        title: 'Informative',
        template: Informative,
        reactCode: `
import Message from '@ds-react/pro/Message';

<Message
    actions={[
        {
        action: null,
        title: 'Yes'
        },
        {
        action: null,
        title: 'No'
        }
    ]}
    closeHandler={() => {}}
    message="We've sent you an email detailing your recent account changes. Didn't receive an email? Click below."
    title="Heading"
    type="informative"
/>
        `,
        angularCode: `
<div class="ds-message --informative" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--info" aria-label="ds-icon--info"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-message --informative" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--info" aria-label="ds-icon--info"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Success',
        template: Success,
        reactCode: `
import Message from '@ds-react/pro/Message';

<Message
    actions={[
        {
        action: null,
        title: 'Yes'
        },
        {
        action: null,
        title: 'No'
        }
    ]}
    closeHandler={() => {}}
    message="We've sent you an email detailing your recent account changes. Didn't receive an email? Click below."
    title="Heading"
    type="success"
/>
        `,
        angularCode: `
<div class="ds-message --success" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--check-circle" aria-label="ds-icon--check-circle"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-message --success" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--check-circle" aria-label="ds-icon--check-circle"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Warning',
        template: Warning,
        reactCode: `
import Message from '@ds-react/pro/Message';

<Message
    actions={[
        {
        action: null,
        title: 'Yes'
        },
        {
        action: null,
        title: 'No'
        }
    ]}
    closeHandler={() => {}}
    message="We've sent you an email detailing your recent account changes. Didn't receive an email? Click below."
    title="Heading"
    type="success"
/>
        `,
        angularCode: `
<div class="ds-message --warning" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning" aria-label="ds-icon--warning"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-message --warning" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning" aria-label="ds-icon--warning"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    },
    {
        title: 'Error',
        template: Error,
        reactCode: `
import Message from '@ds-react/pro/Message';

<Message
    actions={[
        {
        action: null,
        title: 'Yes'
        },
        {
        action: null,
        title: 'No'
        }
    ]}
    closeHandler={() => {}}
    message="We've sent you an email detailing your recent account changes. Didn't receive an email? Click below."
    title="Heading"
    type="error"
/>
        `,
        angularCode: `
<div class="ds-message --error" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning-octagon" aria-label="ds-icon--warning-octagon"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
        `,
        tsCode: '',
        htmlCode: `
<div class="ds-message --error" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning-octagon" aria-label="ds-icon--warning-octagon"></span>
    </div>
    <div class="ds-message__content">
        <h3>Heading</h3>

        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.

        <div class="ds-message__actions">
            <a class="ds-link" href="">Yes</a>
            <a class="ds-link" href="">No</a>
        </div>
    </div>
    <div class="ds-message__close">
        <button class="ds-button --icon --md" aria-label="close">
            <span class="ds-icon--close" aria-label="close"></span>
        </button>
    </div>
</div>
`
    }
];

const storyPropTypes = [
    'actions: PropTypes.array,',
    'closeHandler: PropTypes.func,',
    'customClasses: PropTypes.string,',
    'hideX: PropTypes.bool,',
    'message: PropTypes.node.isRequired,',
    'noIcon: PropTypes.bool,',
    'title: PropTypes.string,',
    "type: PropTypes.oneOf(['informative', 'success', 'warning', 'error']).isRequired"
];
