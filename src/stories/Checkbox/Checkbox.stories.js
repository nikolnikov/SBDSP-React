import { QDSCheckbox } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: QDSCheckbox,
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

export const DefaultCheckbox = {
    args: {
        inputId: 'checkbox-1',
        label: 'Default checkbox',
        name: 'checkbox-1',
        onChange: () => {},
        value: 'checkbox-1'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } },
        value: { table: { disable: true } }
    }
};

export const DisabledCheckbox = {
    args: {
        inputId: 'checkbox-2',
        isDisabled: true,
        label: 'Default checkbox',
        name: 'checkbox-2',
        onChange: () => {},
        value: 'checkbox-2'
    },
    argTypes: {
        ...DefaultCheckbox.argTypes
    }
};

export const CheckedCheckbox = {
    args: {
        inputId: 'checkbox-3',
        isChecked: true,
        label: 'Default checkbox',
        name: 'checkbox-3',
        onChange: () => {},
        value: 'checkbox-3'
    },
    argTypes: {
        ...DefaultCheckbox.argTypes
    }
};

export const IndeterminateCheckbox = {
    args: {
        inputId: 'checkbox-4',
        isIndeterminate: true,
        label: 'Default checkbox',
        name: 'checkbox-4',
        onChange: () => {},
        value: 'checkbox-4'
    },
    argTypes: {
        ...DefaultCheckbox.argTypes
    }
};
