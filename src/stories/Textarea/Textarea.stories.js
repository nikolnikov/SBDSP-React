import { QDSTextarea } from './Textarea';

export default {
    title: 'Components/Inputs/Text area',
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

export const BasicTextArea = {
    args: {
        inputId: 'textarea-1',
        label: 'Textarea label',
        onChange: () => {}
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } },
        value: { table: { disable: true } }
    }
};

export const RequiredTextArea = {
    args: {
        ...BasicTextArea.args,
        inputId: 'textarea-2',
        isRequired: true
    },
    argTypes: {
        ...BasicTextArea.argTypes
    }
};

export const DisabledTextArea = {
    args: {
        ...BasicTextArea.args,
        inputId: 'textarea-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicTextArea.argTypes
    }
};

export const TextAreaWithError = {
    args: {
        ...BasicTextArea.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'textarea-4'
    },
    argTypes: {
        ...BasicTextArea.argTypes
    }
};

export const TextAreaWithHintText = {
    args: {
        ...BasicTextArea.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'textarea-5'
    },
    argTypes: {
        ...BasicTextArea.argTypes
    }
};
