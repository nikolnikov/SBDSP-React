import { QDSToast } from './Toast';

export default {
    title: 'Components/Toast',
    component: QDSToast,
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

export const DefaultToast = {
    args: {
        duration: 5000,
        message: 'New results are available.'
    },
    argTypes: {
        conClose: { table: { disable: true } },
        opened: { table: { disable: true } }
    }
};

export const InformativeToast = {
    args: {
        ...DefaultToast.args,
        type: 'informative'
    },
    argTypes: {
        ...DefaultToast.argTypes
    }
};

export const SuccessToast = {
    args: {
        ...DefaultToast.args,
        type: 'success'
    },
    argTypes: {
        ...DefaultToast.argTypes
    }
};

export const ErrorToast = {
    args: {
        ...DefaultToast.args,
        type: 'error'
    },
    argTypes: {
        ...DefaultToast.argTypes
    }
};

export const AlertToast = {
    args: {
        ...DefaultToast.args,
        type: 'alert'
    },
    argTypes: {
        ...DefaultToast.argTypes
    }
};

export const ToastWithCloseButton = {
    args: {
        message: 'New results are available.'
    },
    argTypes: {
        ...DefaultToast.argTypes
    }
};

export const ToastWithTextLink = {
    args: {
        message: 'New results are available.',
        textLinkLabel: 'Undo'
    },
    argTypes: {
        ...DefaultToast.argTypes
    }
};
