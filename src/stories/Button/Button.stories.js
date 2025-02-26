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

export const DisabledPrimaryButton = {
    args: {
        ...PrimaryButton.args,
        isDisabled: true
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const PrimaryButtonWithLeftIcon = {
    args: {
        ...PrimaryButton.args,
        iconClass: 'ds-icon--plus-circle'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const PrimaryButtonWithRightIcon = {
    args: {
        ...PrimaryButton.args,
        iconRight: 'ds-icon--plus-circle'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const PrimaryButtonWithBothIcons = {
    args: {
        ...PrimaryButton.args,
        iconClass: 'ds-icon--info',
        iconRight: 'ds-icon--caret-right'
    },
    argTypes: {
        ...PrimaryButton.argTypes
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

export const DisabledSecondaryButton = {
    args: {
        ...PrimaryButton.args,
        isDisabled: true,
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

export const DestructiveButton = {
    args: {
        ...PrimaryButton.args,
        isDestructive: true
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

export const DisabledGhostButton = {
    args: {
        ...PrimaryButton.args,
        isDisabled: true,
        type: 'ghost'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};

export const DestructiveGhostButton = {
    args: {
        ...PrimaryButton.args,
        isDestructive: true,
        type: 'ghost'
    },
    argTypes: {
        ...PrimaryButton.argTypes
    }
};
