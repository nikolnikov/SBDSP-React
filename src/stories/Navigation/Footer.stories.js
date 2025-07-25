import { QDSFooter } from './Footer';

export default {
    title: 'Components/Navigation/Page footer',
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
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
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
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
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
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
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
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};
