import { Avatar } from './Avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
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

export const SolidAvatar = {
    args: {
        initial: 'A',
        size: 'large'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};

export const OutlinedAvatar = {
    args: {
        ...SolidAvatar.args,
        outlined: true
    },
    argTypes: {
        ...SolidAvatar.argTypes
    }
};
