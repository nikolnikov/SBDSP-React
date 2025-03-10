import { QDSFooter } from './Footer';

export default {
    title: 'Components/Navigation/Footer',
    component: QDSFooter,
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

export const CorportateFooter = {
    args: {},
    argTypes: {
        customClasses: { table: { disable: true } },
        margins: { table: { disable: true } },
        maxWidth: { table: { disable: true } }
    }
};

export const CorportateFooterWithNoLogo = {
    args: {
        hideLogo: true
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        margins: { table: { disable: true } },
        maxWidth: { table: { disable: true } }
    }
};

export const LightCorportateFooter = {
    args: {
        hideNav: true
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        margins: { table: { disable: true } },
        maxWidth: { table: { disable: true } }
    }
};

export const LightCorportateFooterWithNoLogo = {
    args: {
        hideNav: true,
        hideLogo: true
    },
    argTypes: {
        customClasses: { table: { disable: true } },
        margins: { table: { disable: true } },
        maxWidth: { table: { disable: true } }
    }
};
