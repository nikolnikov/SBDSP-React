import { QDSTag } from './Tag';

export default {
    title: 'Components/Tag',
    component: QDSTag,
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

export const PrimaryTag = {
    args: {
        label: 'Label'
    },
    argTypes: {
        clickHandler: { table: { disable: true } },
        customClasses: { table: { disable: true } },
        hideHandler: { table: { disable: true } }
    }
};

export const DisabledPrimaryTag = {
    args: {
        ...PrimaryTag.args,
        isDisabled: true
    },
    argTypes: {
        ...PrimaryTag.argTypes
    }
};

export const SecondaryTag = {
    args: {
        ...PrimaryTag.args,
        isSecondary: true
    },
    argTypes: {
        ...PrimaryTag.argTypes
    }
};
