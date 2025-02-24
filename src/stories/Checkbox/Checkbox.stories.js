import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
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
