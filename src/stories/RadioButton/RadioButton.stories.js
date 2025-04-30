import { QDSRadioGroup } from './RadioButton';

export default {
    title: 'Components/Radio button',
    component: QDSRadioGroup,
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

const radioOptions = [
    {
        inputId: 'option1',
        value: 'option1',
        label: 'Option 1',
        isDisabled: false
    },
    {
        inputId: 'option2',
        value: 'option2',
        label: 'Option 2',
        isDisabled: false
    },
    {
        inputId: 'option3',
        value: 'option3',
        label: 'Option 3',
        isDisabled: true
    }
];

const radioOptions2 = [
    {
        inputId: 'option4',
        value: 'option4',
        label: 'Option 1',
        isDisabled: false
    },
    {
        inputId: 'option5',
        value: 'option5',
        label: 'Option 2',
        isDisabled: false
    },
    {
        inputId: 'option6',
        value: 'option6',
        label: 'Option 3',
        isDisabled: true
    }
];

export const HorizontalRadioGroup = {
    args: {
        groupLabel: 'Horizontal group',
        groupName: 'radio-group',
        radioOptions: radioOptions,
        onChange: () => {}
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        onChange: { table: { disable: true } }
    }
};

export const VerticalRadioGroup = {
    args: {
        groupLabel: 'Vertical group',
        groupName: 'radio-group-vertical',
        radioOptions: radioOptions2,
        onChange: () => {},
        isVertical: true
    },
    argTypes: {
        ...HorizontalRadioGroup.argTypes
    }
};
