import { Button } from './Button';

export default {
    title: 'Components/Button/Standard',
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

export const PrimaryButton = {
    args: {
        label: 'Button label',
        size: 'large',
        type: 'primary'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};

export const InversePrimaryButton = {
    args: {
        ...PrimaryButton.args,
        isInverse: true
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const SecondaryButton = {
    args: {
        ...PrimaryButton.args,
        type: 'secondary'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const InverseSecondaryButton = {
    args: {
        ...PrimaryButton.args,
        isInverse: true,
        type: 'secondary'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const GhostButton = {
    args: {
        ...PrimaryButton.args,
        type: 'ghost'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};
