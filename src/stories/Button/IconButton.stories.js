import { Button } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: Button,
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

export const PrimaryIconButton = {
    args: {
        iconClass: 'ds-icon--gear',
        size: 'large',
        type: 'icon'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};

// const Button = props => <IconButton {...props} />;

// const Template = args => <Button {...args} />;

// export const PrimaryIconButton = Template.bind({});
// PrimaryIconButton.args = {
// iconClass: 'ds-icon--gear',
// size: 'large',
// type: 'icon'
// };
// PrimaryIconButton.argTypes = {
//     customClasses: { table: { disable: true } },
//     clickHandler: { table: { disable: true } }
// };

// export const DisabledPrimaryIconButton = Template.bind({});
// DisabledPrimaryIconButton.args = {
//     ...PrimaryIconButton.args,
//     isDisabled: true
// };
// DisabledPrimaryIconButton.argTypes = {
//     ...PrimaryIconButton.argTypes
// };

// export const DestructivePrimaryIconButton = Template.bind({});
// DestructivePrimaryIconButton.args = {
//     ...PrimaryIconButton.args,
//     isDestructive: true
// };
// DestructivePrimaryIconButton.argTypes = {
//     ...PrimaryIconButton.argTypes
// };

// export const InverseIconButton = Template.bind({});
// InverseIconButton.args = {
//     ...PrimaryIconButton.args,
//     isInverse: true
// };
// InverseIconButton.argTypes = {
//     ...PrimaryIconButton.argTypes
// };
