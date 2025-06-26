import { QDSInput } from './Input';

export default {
    title: 'Components/Inputs/Text Input',
    component: QDSInput,
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

export const BasicTextInput = {
    args: {
        inputId: 'input-1',
        label: 'Input label',
        type: 'text'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        type: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } },
        value: { table: { disable: true } }
    }
};

export const RequiredTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-2',
        isRequired: true
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const DisabledTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithLeftIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-4',
        iconLeft: 'search'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithRightIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-5',
        iconRight: 'location'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithBothIcons = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-6',
        iconLeft: 'search',
        iconRight: 'location'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithError = {
    args: {
        ...BasicTextInput.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithHintText = {
    args: {
        ...BasicTextInput.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithLoader = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-9',
        isLoading: true
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};

export const TextInputWithTooltip = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-10',
        tooltip: 'Tooltip message goes here.'
    },
    argTypes: {
        ...BasicTextInput.argTypes
    }
};
