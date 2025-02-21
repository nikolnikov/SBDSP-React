import React from 'react';
import { IconButton } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: IconButton,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'Light',
            values: [
                { name: 'Light', value: '#ffffff' },
                { name: 'Dark', value: '#034C1F' }
            ]
        },
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs']
};

const Button = props => <IconButton {...props} />;

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    iconClass: 'ds-icon--gear',
    size: 'large',
    type: 'icon'
};
Primary.argTypes = {
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};
Primary.displayName = 'Icon Button';

export const Inverse = Template.bind({});
Inverse.args = {
    iconClass: 'ds-icon--gear',
    isInverse: true,
    size: 'large',
    type: 'icon'
};
Inverse.argTypes = {
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};
Inverse.displayName = 'Inverse icon Button';
// Inverse.parameters = {
//     backgrounds: { values: { name: 'Dark' } }
// };
