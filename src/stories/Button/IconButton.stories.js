import { QDSIconButton } from './IconButton';

export default {
    title: 'Components/Button/Icon',
    component: QDSIconButton,
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
        icon: 'gear',
        size: 'lg'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};

export const DisabledPrimaryIconButton = {
    args: {
        ...PrimaryIconButton.args,
        isDisabled: true
    },
    argTypes: {
        ...PrimaryIconButton.argTypes
    }
};

export const DestructivePrimaryIconButton = {
    args: {
        ...PrimaryIconButton.args,
        isDestructive: true
    },
    argTypes: {
        ...PrimaryIconButton.argTypes
    }
};

export const InverseIconButton = {
    args: {
        ...PrimaryIconButton.args,
        isInverse: true
    },
    argTypes: {
        ...PrimaryIconButton.argTypes
    }
};

export const IconButtonWithTooltip = {
    args: {
        ...PrimaryIconButton.args,
        tooltip: 'Tooltip goes here.'
    },
    argTypes: {
        ...PrimaryIconButton.argTypes
    }
};
