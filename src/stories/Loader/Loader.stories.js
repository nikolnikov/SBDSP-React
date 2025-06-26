import { QDSLoader } from './Loader';

export default {
    title: 'Components/Loader/Spinner',
    component: QDSLoader,
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

export const DefaultLoader = {
    args: {},
    argTypes: {
        customClasses: { table: { disable: true } },
        isCentered: { table: { disable: true } },
        isFixed: { table: { disable: true } },
        progress: { table: { disable: true } }
    }
};

export const SmallLoader = {
    args: {
        isSmall: true
    },
    argTypes: {
        ...DefaultLoader.argTypes
    }
};

export const DeterminateLoader = {
    args: {
        isDeterminate: true
    },
    argTypes: {
        ...DefaultLoader.argTypes
    }
};
