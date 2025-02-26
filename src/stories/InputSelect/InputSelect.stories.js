import { InputSelect } from './InputSelect';

export default {
    title: 'Components/Input select',
    component: InputSelect,
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

const inputSelectOptions = [
    'Last 1 day',
    'Last 2 days',
    'Last 3 days',
    'Last 4 days',
    'Last 5 days'
];

export const BasicInputSelect = {
    args: {
        inputId: 'input-1',
        label: 'Input label',
        onChange: value => console.log(value),
        options: inputSelectOptions,
        placeholder: 'Select an option'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        onChange: { table: { disable: true } },
        options: { table: { disable: true } },
        menuClass: { table: { disable: true } },
        selectedValue: { table: { disable: true } }
    }
};

export const RequiredInputSelect = {
    args: {
        ...BasicInputSelect.args,
        inputId: 'input-2',
        isRequired: true
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const DisabledInputSelect = {
    args: {
        ...BasicInputSelect.args,
        inputId: 'input-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const InputSelectWithError = {
    args: {
        ...BasicInputSelect.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-4'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const InputSelectWithHintText = {
    args: {
        ...BasicInputSelect.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-5'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};

export const InputSelectWithTooltip = {
    args: {
        ...BasicInputSelect.args,
        inputId: 'input-6',
        tooltipMessage: 'Tooltip message goes here.'
    },
    argTypes: {
        ...BasicInputSelect.argTypes
    }
};
