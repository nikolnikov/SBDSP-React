import { QDSInputSelect } from './InputSelect';

export default {
    title: 'Components/Select/Single',
    component: QDSInputSelect,
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

export const BasicSelect = {
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

export const RequiredSelect = {
    args: {
        ...BasicSelect.args,
        inputId: 'input-2',
        isRequired: true
    },
    argTypes: {
        ...BasicSelect.argTypes
    }
};

export const DisabledSelect = {
    args: {
        ...BasicSelect.args,
        inputId: 'input-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicSelect.argTypes
    }
};

export const SelectWithError = {
    args: {
        ...BasicSelect.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-4'
    },
    argTypes: {
        ...BasicSelect.argTypes
    }
};

export const SelectWithHintText = {
    args: {
        ...BasicSelect.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-5'
    },
    argTypes: {
        ...BasicSelect.argTypes
    }
};

export const SelectWithTooltip = {
    args: {
        ...BasicSelect.args,
        inputId: 'input-6',
        tooltip: 'Tooltip message goes here.'
    },
    argTypes: {
        ...BasicSelect.argTypes
    }
};
