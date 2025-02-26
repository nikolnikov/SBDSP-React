import { Message } from './Message';

export default {
    title: 'Components/Message',
    component: Message,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const InformativeMessage = {
    args: {
        actions: [
            { title: 'Yes', action: null },
            { title: 'No', action: null }
        ],
        closeHandler: () => {
            console.log('Message closed');
        },
        hideX: false,
        message:
            "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
        noIcon: false,
        title: 'Heading',
        type: 'informative'
    },
    argTypes: {
        closeHandler: { table: { disable: true } }
    }
};

export const SuccessMessage = {
    args: {
        ...InformativeMessage.args,
        type: 'success'
    },
    argTypes: {
        ...InformativeMessage.argTypes
    }
};

export const ErrorMessage = {
    args: {
        ...InformativeMessage.args,
        type: 'error'
    },
    argTypes: {
        ...InformativeMessage.argTypes
    }
};

export const WarningMessage = {
    args: {
        ...InformativeMessage.args,
        type: 'warning'
    },
    argTypes: {
        ...InformativeMessage.argTypes
    }
};
