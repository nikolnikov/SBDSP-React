import { QDSAvatar } from './Avatar';

export default {
    title: 'Components/Avatar',
    component: QDSAvatar,
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
        size: 'lg'
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        clickHandler: { table: { disable: true } }
    }
};

export const OutlinedAvatar = {
    args: {
        ...SolidAvatar.args,
        isOutlined: true
    },
    argTypes: {
        ...SolidAvatar.argTypes
    }
};
