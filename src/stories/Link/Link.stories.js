import { Link } from './Link';

export default {
    title: 'Components/Link',
    component: Link,
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

export const DefaultLink = {
    args: {
        label: 'Link example',
        url: null
    },
    argTypes: {
        customClasses: { table: { disable: true } }
    }
};

export const InverseLink = {
    args: {
        ...DefaultLink.args,
        isInverse: true
    },
    argTypes: {
        ...DefaultLink.argTypes
    }
};

export const DestructiveLink = {
    args: {
        ...DefaultLink.args,
        isDestructive: true
    },
    argTypes: {
        ...DefaultLink.argTypes
    }
};

export const LinkWithLeftIcon = {
    args: {
        ...DefaultLink.args,
        iconLeft: 'ds-icon--info'
    },
    argTypes: {
        ...DefaultLink.argTypes
    }
};

export const LinkWithRightIcon = {
    args: {
        ...DefaultLink.args,
        iconRight: 'ds-icon--info'
    },
    argTypes: {
        ...DefaultLink.argTypes
    }
};
