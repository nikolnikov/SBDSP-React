import { QDSInputMultiSelect } from './InputSelectMulti';

export default {
    title: 'Components/Input multi select',
    component: QDSInputMultiSelect,
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

const nameOptions = [
    'Blake, Edward',
    'Jupiter, Sally',
    'Kovachs, Walter',
    'Mason, Hollis',
    'Osterman, Jon'
];

export const BasicInputMultiSelect = {
    args: {
        inputId: 'input-1',
        label: 'Input label',
        onChange: value => console.log(value),
        options: nameOptions,
        placeholder: 'Select options'
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

export const RequiredInputMultiSelect = {
    args: {
        ...BasicInputMultiSelect.args,
        inputId: 'input-2',
        isRequired: true
    },
    argTypes: {
        ...BasicInputMultiSelect.argTypes
    }
};

export const DisabledInputMultiSelect = {
    args: {
        ...BasicInputMultiSelect.args,
        inputId: 'input-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicInputMultiSelect.argTypes
    }
};

export const InputMultiSelectWithError = {
    args: {
        ...BasicInputMultiSelect.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-4'
    },
    argTypes: {
        ...BasicInputMultiSelect.argTypes
    }
};

export const InputMultiSelectWithHintText = {
    args: {
        ...BasicInputMultiSelect.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-5'
    },
    argTypes: {
        ...BasicInputMultiSelect.argTypes
    }
};

export const InputMultiSelectWithTooltip = {
    args: {
        ...BasicInputMultiSelect.args,
        inputId: 'input-6',
        tooltip: 'Tooltip message goes here.'
    },
    argTypes: {
        ...BasicInputMultiSelect.argTypes
    }
};
