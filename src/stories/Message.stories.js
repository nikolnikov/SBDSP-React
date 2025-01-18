import React from 'react';
import { Stories, Subtitle } from '@storybook/blocks';
import { Message } from './Message';

export default {
    title: 'Components/Message/React',
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
                    <Stories />

                    <Subtitle>
                        <div className="props-card">
                            <h4>Available props</h4>
                            <ul className="ds-list">
                                <li>actions: PropTypes.array,</li>
                                <li>closeHandler: PropTypes.func,</li>
                                <li>customClasses: PropTypes.string,</li>
                                <li>message: PropTypes.node.isRequired,</li>
                                <li>noIcon: PropTypes.bool,</li>
                                <li>showActions: PropTypes.bool,</li>
                                <li>title: PropTypes.string,</li>
                                <li>
                                    type: PropTypes.oneOf(['informative',
                                    'success', 'warning', 'error']).isRequired
                                </li>
                            </ul>
                        </div>
                    </Subtitle>
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
