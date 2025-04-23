import { QDSInputMultiSelect } from './InputSelectMulti';

export default {
    title: 'Components/Select/Multi',
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

export const BasicMultiSelect = {
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

export const RequiredMultiSelect = {
    args: {
        ...BasicMultiSelect.args,
        inputId: 'input-2',
        isRequired: true
    },
    argTypes: {
        ...BasicMultiSelect.argTypes
    }
};

export const DisabledMultiSelect = {
    args: {
        ...BasicMultiSelect.args,
        inputId: 'input-3',
        isDisabled: true
    },
    argTypes: {
        ...BasicMultiSelect.argTypes
    }
};

export const MultiSelectWithError = {
    args: {
        ...BasicMultiSelect.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-4'
    },
    argTypes: {
        ...BasicMultiSelect.argTypes
    }
};

export const MultiSelectWithHintText = {
    args: {
        ...BasicMultiSelect.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-5'
    },
    argTypes: {
        ...BasicMultiSelect.argTypes
    }
};

export const MultiSelectWithTooltip = {
    args: {
        ...BasicMultiSelect.args,
        inputId: 'input-6',
        tooltip: 'Tooltip message goes here.'
    },
    argTypes: {
        ...BasicMultiSelect.argTypes
    }
};
