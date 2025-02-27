import { Input } from './Input';

export default {
    title: 'Components/Input',
    component: Input,
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

export const BasicInput = {
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
        onChange: { table: { disable: true } }
    }
};

export const RequiredInput = {
    args: {
        ...BasicInput.args,
        inputId: 'input-2',
        isRequired: true
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const DisabledInput = {
    args: {
        ...BasicInput.args,
        inputId: 'input-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithLeftIcon = {
    args: {
        ...BasicInput.args,
        inputId: 'input-4',
        iconLeft: 'search'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithRightIcon = {
    args: {
        ...BasicInput.args,
        inputId: 'input-5',
        iconRight: 'location'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithBothIcons = {
    args: {
        ...BasicInput.args,
        inputId: 'input-6',
        iconLeft: 'search',
        iconRight: 'location'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithError = {
    args: {
        ...BasicInput.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithHintText = {
    args: {
        ...BasicInput.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithLoader = {
    args: {
        ...BasicInput.args,
        inputId: 'input-9',
        isLoading: true
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};

export const InputWithTooltip = {
    args: {
        ...BasicInput.args,
        inputId: 'input-10',
        tooltipMessage: 'Tooltip message goes here.'
    },
    argTypes: {
        ...BasicInput.argTypes
    }
};
