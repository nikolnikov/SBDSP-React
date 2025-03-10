import { QDSTextarea } from './Textarea';

export default {
    title: 'Components/Textarea',
    component: QDSTextarea,
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

export const BasicTextarea = {
    args: {
        inputId: 'textarea-1',
        label: 'Textarea label',
        onChange: () => {}
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } }
    }
};

export const RequiredTextarea = {
    args: {
        ...BasicTextarea.args,
        inputId: 'textarea-2',
        isRequired: true
    },
    argTypes: {
        ...BasicTextarea.argTypes
    }
};

export const DisabledTextarea = {
    args: {
        ...BasicTextarea.args,
        inputId: 'textarea-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicTextarea.argTypes
    }
};

export const TextareaWithError = {
    args: {
        ...BasicTextarea.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'textarea-4'
    },
    argTypes: {
        ...BasicTextarea.argTypes
    }
};

export const TextareaWithHintText = {
    args: {
        ...BasicTextarea.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'textarea-5'
    },
    argTypes: {
        ...BasicTextarea.argTypes
    }
};
