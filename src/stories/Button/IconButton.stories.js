import React from 'react';
import { IconButton } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: IconButton,
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

const Button = props => <IconButton {...props} />;

const Template = args => <Button {...args} />;

export const PrimaryIconButton = Template.bind({});
PrimaryIconButton.args = {
    iconClass: 'ds-icon--gear',
    size: 'large',
    type: 'icon'
};
PrimaryIconButton.argTypes = {
    customClasses: { table: { disable: true } },
    clickHandler: { table: { disable: true } }
};

export const InverseIconButton = Template.bind({});
InverseIconButton.args = {
    ...PrimaryIconButton.args,
    isInverse: true
};
InverseIconButton.argTypes = {
    ...PrimaryIconButton.argTypes
};
