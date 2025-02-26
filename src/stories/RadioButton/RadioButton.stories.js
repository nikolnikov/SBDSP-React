import { RadioButton } from './RadioButton';

export default {
    title: 'Components/Radio buton',
    component: RadioButton,
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

export const DefaultRadioButton = {
    args: {
        inputId: 'radio-1',
        label: 'Radio button label',
        onChange: () => {},
        name: 'radio-1',
        value: 'radio-1'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        inputId: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } },
        value: { table: { disable: true } }
    }
};

export const DisabledRadioButton = {
    args: {
        inputId: 'radio-2',
        isDisabled: true,
        label: 'Radio button label',
        onChange: () => {},
        name: 'radio-2',
        value: 'radio-2'
    },
    argTypes: {
        ...DefaultRadioButton.argTypes
    }
};

export const CheckedRadioButton = {
    args: {
        inputId: 'radio-3',
        isChecked: true,
        label: 'Radio button label',
        onChange: () => {},
        name: 'radio-3',
        value: 'radio-3'
    },
    argTypes: {
        ...DefaultRadioButton.argTypes
    }
};
