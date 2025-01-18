import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Message } from './Message';

export default {
    title: 'Components/Message/Angular',
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
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Informative</h3>
                    </Unstyled>
                    <Canvas
                        of={Informative}
                        source={{
                            code: `
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
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Success</h3>
                    </Unstyled>
                    <Canvas
                        of={Success}
                        source={{
                            code: `
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
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Warning</h3>
                    </Unstyled>
                    <Canvas
                        of={Warning}
                        source={{
                            code: `
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
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Error</h3>
                    </Unstyled>
                    <Canvas
                        of={Error}
                        source={{
                            code: `
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
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

const Template = args => <Message {...args} />;

export const Informative = Template.bind({});
Informative.storyName = 'Informative';
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
    showActions: true,
    title: 'Heading',
    type: 'informative'
};

export const Success = Template.bind({});
Success.storyName = 'Success';
Success.args = {
    ...Informative.args,
    type: 'success'
};

export const Warning = Template.bind({});
Warning.storyName = 'Warning';
Warning.args = {
    ...Informative.args,
    type: 'warning'
};

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
    ...Informative.args,
    type: 'error'
};
