(self.webpackChunkds_pro_react = self.webpackChunkds_pro_react || []).push([
    [544],
    {
        './node_modules/@storybook/blocks/dist sync recursive': module => {
            function webpackEmptyContext(req) {
                var e = new Error("Cannot find module '" + req + "'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
            }
            (webpackEmptyContext.keys = () => []),
                (webpackEmptyContext.resolve = webpackEmptyContext),
                (webpackEmptyContext.id =
                    './node_modules/@storybook/blocks/dist sync recursive'),
                (module.exports = webpackEmptyContext);
        },
        './node_modules/@storybook/core/dist/components sync recursive':
            module => {
                function webpackEmptyContext(req) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                }
                (webpackEmptyContext.keys = () => []),
                    (webpackEmptyContext.resolve = webpackEmptyContext),
                    (webpackEmptyContext.id =
                        './node_modules/@storybook/core/dist/components sync recursive'),
                    (module.exports = webpackEmptyContext);
            },
        './node_modules/@storybook/core/dist/theming sync recursive':
            module => {
                function webpackEmptyContext(req) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                }
                (webpackEmptyContext.keys = () => []),
                    (webpackEmptyContext.resolve = webpackEmptyContext),
                    (webpackEmptyContext.id =
                        './node_modules/@storybook/core/dist/theming sync recursive'),
                    (module.exports = webpackEmptyContext);
            },
        './src/stories/Badge.stories.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Amethyst500Badge: () => Amethyst500Badge,
                    Amethyst700Badge: () => Amethyst700Badge,
                    Blue300Badge: () => Blue300Badge,
                    Blue700Badge: () => Blue700Badge,
                    Chestnut300Badge: () => Chestnut300Badge,
                    Chestnut700Badge: () => Chestnut700Badge,
                    ErrorBadge: () => ErrorBadge,
                    ErrorCircleBadge: () => ErrorCircleBadge,
                    ErrorNotificationBadge: () => ErrorNotificationBadge,
                    ErrorSecondaryBadge: () => ErrorSecondaryBadge,
                    ErrorSecondaryCircleBadge: () => ErrorSecondaryCircleBadge,
                    Gold700Badge: () => Gold700Badge,
                    Gold900Badge: () => Gold900Badge,
                    InformativeBadge: () => InformativeBadge,
                    InformativeCircleBadge: () => InformativeCircleBadge,
                    InformativeNotificationBadge: () =>
                        InformativeNotificationBadge,
                    InformativeSecondaryBadge: () => InformativeSecondaryBadge,
                    InformativeSecondaryCircleBadge: () =>
                        InformativeSecondaryCircleBadge,
                    Mint900Badge: () => Mint900Badge,
                    NeutralBadge: () => NeutralBadge,
                    NeutralCircleBadge: () => NeutralCircleBadge,
                    NeutralNotificationBadge: () => NeutralNotificationBadge,
                    NeutralSecondaryBadge: () => NeutralSecondaryBadge,
                    NeutralSecondaryCircleBadge: () =>
                        NeutralSecondaryCircleBadge,
                    NewBadge: () => NewBadge,
                    NewCircleBadge: () => NewCircleBadge,
                    NewNotificationBadge: () => NewNotificationBadge,
                    NewSecondaryBadge: () => NewSecondaryBadge,
                    NewSecondaryCircleBadge: () => NewSecondaryCircleBadge,
                    Purple300Badge: () => Purple300Badge,
                    Purple700Badge: () => Purple700Badge,
                    Salmon700Badge: () => Salmon700Badge,
                    Salmon900Badge: () => Salmon900Badge,
                    SuccessBadge: () => SuccessBadge,
                    SuccessCircleBadge: () => SuccessCircleBadge,
                    SuccessNotificationBadge: () => SuccessNotificationBadge,
                    SuccessSecondaryBadge: () => SuccessSecondaryBadge,
                    SuccessSecondaryCircleBadge: () =>
                        SuccessSecondaryCircleBadge,
                    WarningBadge: () => WarningBadge,
                    WarningCircleBadge: () => WarningCircleBadge,
                    WarningNotificationBadge: () => WarningNotificationBadge,
                    WarningSecondaryBadge: () => WarningSecondaryBadge,
                    WarningSecondaryCircleBadge: () =>
                        WarningSecondaryCircleBadge,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => __WEBPACK_DEFAULT_EXPORT__
                });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/react/index.js'
                ),
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@storybook/blocks/dist/index.mjs'
                    ),
                _Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './src/stories/Badge.jsx'
                );
            const __WEBPACK_DEFAULT_EXPORT__ = {
                    title: 'Components/Badge/React',
                    component: _Badge__WEBPACK_IMPORTED_MODULE_1__.E,
                    parameters: {
                        layout: 'centered',
                        controls: { disable: !0 },
                        actions: { disable: !0 },
                        docs: {
                            page: () =>
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,
                                        null
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                            'div',
                                            { className: 'props-card' },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                'h4',
                                                null,
                                                'Available props'
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                'ul',
                                                { className: 'ds-list' },
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'children: PropTypes.node,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'color: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'customClasses: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'hasNotification: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isCircle: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'secondary: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'status: PropTypes.string'
                                                )
                                            )
                                        )
                                    )
                                )
                        }
                    },
                    tags: ['autodocs', '!dev']
                },
                Template = args =>
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        _Badge__WEBPACK_IMPORTED_MODULE_1__.E,
                        args
                    ),
                NeutralBadge = Template.bind({});
            NeutralBadge.args = { children: 'Status' };
            const InformativeBadge = Template.bind({});
            InformativeBadge.args = {
                children: 'Status',
                status: 'informative'
            };
            const SuccessBadge = Template.bind({});
            SuccessBadge.args = { children: 'Status', status: 'success' };
            const WarningBadge = Template.bind({});
            WarningBadge.args = { children: 'Status', status: 'warning' };
            const ErrorBadge = Template.bind({});
            ErrorBadge.args = { children: 'Status', status: 'error' };
            const NewBadge = Template.bind({});
            NewBadge.args = { children: 'Status', status: 'new' };
            const NeutralCircleBadge = Template.bind({});
            NeutralCircleBadge.args = { children: '#', isCircle: !0 };
            const InformativeCircleBadge = Template.bind({});
            InformativeCircleBadge.args = {
                children: '#',
                isCircle: !0,
                status: 'informative'
            };
            const SuccessCircleBadge = Template.bind({});
            SuccessCircleBadge.args = {
                children: '#',
                isCircle: !0,
                status: 'success'
            };
            const WarningCircleBadge = Template.bind({});
            WarningCircleBadge.args = {
                children: '#',
                isCircle: !0,
                status: 'warning'
            };
            const ErrorCircleBadge = Template.bind({});
            ErrorCircleBadge.args = {
                children: '#',
                isCircle: !0,
                status: 'error'
            };
            const NewCircleBadge = Template.bind({});
            NewCircleBadge.args = {
                children: '#',
                isCircle: !0,
                status: 'new'
            };
            const NeutralSecondaryBadge = Template.bind({});
            NeutralSecondaryBadge.args = { children: 'Status', secondary: !0 };
            const InformativeSecondaryBadge = Template.bind({});
            InformativeSecondaryBadge.args = {
                children: 'Status',
                secondary: !0,
                status: 'informative'
            };
            const SuccessSecondaryBadge = Template.bind({});
            SuccessSecondaryBadge.args = {
                children: 'Status',
                secondary: !0,
                status: 'success'
            };
            const WarningSecondaryBadge = Template.bind({});
            WarningSecondaryBadge.args = {
                children: 'Status',
                secondary: !0,
                status: 'warning'
            };
            const ErrorSecondaryBadge = Template.bind({});
            ErrorSecondaryBadge.args = {
                children: 'Status',
                secondary: !0,
                status: 'error'
            };
            const NewSecondaryBadge = Template.bind({});
            NewSecondaryBadge.args = {
                children: 'Status',
                secondary: !0,
                status: 'new'
            };
            const NeutralSecondaryCircleBadge = Template.bind({});
            NeutralSecondaryCircleBadge.args = {
                children: '#',
                isCircle: !0,
                secondary: !0
            };
            const InformativeSecondaryCircleBadge = Template.bind({});
            InformativeSecondaryCircleBadge.args = {
                children: '#',
                isCircle: !0,
                secondary: !0,
                status: 'informative'
            };
            const SuccessSecondaryCircleBadge = Template.bind({});
            SuccessSecondaryCircleBadge.args = {
                children: '#',
                isCircle: !0,
                secondary: !0,
                status: 'success'
            };
            const WarningSecondaryCircleBadge = Template.bind({});
            WarningSecondaryCircleBadge.args = {
                children: '#',
                isCircle: !0,
                secondary: !0,
                status: 'warning'
            };
            const ErrorSecondaryCircleBadge = Template.bind({});
            ErrorSecondaryCircleBadge.args = {
                children: '#',
                isCircle: !0,
                secondary: !0,
                status: 'error'
            };
            const NewSecondaryCircleBadge = Template.bind({});
            NewSecondaryCircleBadge.args = {
                children: '#',
                isCircle: !0,
                secondary: !0,
                status: 'new'
            };
            const NeutralNotificationBadge = Template.bind({});
            NeutralNotificationBadge.args = { hasNotification: !0 };
            const InformativeNotificationBadge = Template.bind({});
            InformativeNotificationBadge.args = {
                hasNotification: !0,
                status: 'informative'
            };
            const SuccessNotificationBadge = Template.bind({});
            SuccessNotificationBadge.args = {
                hasNotification: !0,
                status: 'success'
            };
            const WarningNotificationBadge = Template.bind({});
            WarningNotificationBadge.args = {
                hasNotification: !0,
                status: 'warning'
            };
            const ErrorNotificationBadge = Template.bind({});
            ErrorNotificationBadge.args = {
                hasNotification: !0,
                status: 'error'
            };
            const NewNotificationBadge = Template.bind({});
            NewNotificationBadge.args = { hasNotification: !0, status: 'new' };
            const Blue700Badge = Template.bind({});
            Blue700Badge.args = { children: 'Status', color: 'blue-700' };
            const Blue300Badge = Template.bind({});
            Blue300Badge.args = { children: 'Status', color: 'blue-300' };
            const Purple700Badge = Template.bind({});
            Purple700Badge.args = { children: 'Status', color: 'purple-700' };
            const Purple300Badge = Template.bind({});
            Purple300Badge.args = { children: 'Status', color: 'purple-300' };
            const Salmon900Badge = Template.bind({});
            Salmon900Badge.args = { children: 'Status', color: 'salmon-900' };
            const Salmon700Badge = Template.bind({});
            Salmon700Badge.args = { children: 'Status', color: 'salmon-700' };
            const Gold900Badge = Template.bind({});
            Gold900Badge.args = { children: 'Status', color: 'gold-900' };
            const Gold700Badge = Template.bind({});
            Gold700Badge.args = { children: 'Status', color: 'gold-700' };
            const Mint900Badge = Template.bind({});
            Mint900Badge.args = { children: 'Status', color: 'mint-900' };
            const Chestnut700Badge = Template.bind({});
            Chestnut700Badge.args = {
                children: 'Status',
                color: 'chestnut-700'
            };
            const Chestnut300Badge = Template.bind({});
            Chestnut300Badge.args = {
                children: 'Status',
                color: 'chestnut-300'
            };
            const Amethyst700Badge = Template.bind({});
            Amethyst700Badge.args = {
                children: 'Status',
                color: 'amethyst-700'
            };
            const Amethyst500Badge = Template.bind({});
            Amethyst500Badge.args = {
                children: 'Status',
                color: 'amethyst-500'
            };
            const __namedExportsOrder = [
                'NeutralBadge',
                'InformativeBadge',
                'SuccessBadge',
                'WarningBadge',
                'ErrorBadge',
                'NewBadge',
                'NeutralCircleBadge',
                'InformativeCircleBadge',
                'SuccessCircleBadge',
                'WarningCircleBadge',
                'ErrorCircleBadge',
                'NewCircleBadge',
                'NeutralSecondaryBadge',
                'InformativeSecondaryBadge',
                'SuccessSecondaryBadge',
                'WarningSecondaryBadge',
                'ErrorSecondaryBadge',
                'NewSecondaryBadge',
                'NeutralSecondaryCircleBadge',
                'InformativeSecondaryCircleBadge',
                'SuccessSecondaryCircleBadge',
                'WarningSecondaryCircleBadge',
                'ErrorSecondaryCircleBadge',
                'NewSecondaryCircleBadge',
                'NeutralNotificationBadge',
                'InformativeNotificationBadge',
                'SuccessNotificationBadge',
                'WarningNotificationBadge',
                'ErrorNotificationBadge',
                'NewNotificationBadge',
                'Blue700Badge',
                'Blue300Badge',
                'Purple700Badge',
                'Purple300Badge',
                'Salmon900Badge',
                'Salmon700Badge',
                'Gold900Badge',
                'Gold700Badge',
                'Mint900Badge',
                'Chestnut700Badge',
                'Chestnut300Badge',
                'Amethyst700Badge',
                'Amethyst500Badge'
            ];
            (NeutralBadge.parameters = {
                ...NeutralBadge.parameters,
                docs: {
                    ...NeutralBadge.parameters?.docs,
                    source: {
                        originalSource: 'args => <Badge {...args} />',
                        ...NeutralBadge.parameters?.docs?.source
                    }
                }
            }),
                (InformativeBadge.parameters = {
                    ...InformativeBadge.parameters,
                    docs: {
                        ...InformativeBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...InformativeBadge.parameters?.docs?.source
                        }
                    }
                }),
                (SuccessBadge.parameters = {
                    ...SuccessBadge.parameters,
                    docs: {
                        ...SuccessBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...SuccessBadge.parameters?.docs?.source
                        }
                    }
                }),
                (WarningBadge.parameters = {
                    ...WarningBadge.parameters,
                    docs: {
                        ...WarningBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...WarningBadge.parameters?.docs?.source
                        }
                    }
                }),
                (ErrorBadge.parameters = {
                    ...ErrorBadge.parameters,
                    docs: {
                        ...ErrorBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...ErrorBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NewBadge.parameters = {
                    ...NewBadge.parameters,
                    docs: {
                        ...NewBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NewBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NeutralCircleBadge.parameters = {
                    ...NeutralCircleBadge.parameters,
                    docs: {
                        ...NeutralCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NeutralCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (InformativeCircleBadge.parameters = {
                    ...InformativeCircleBadge.parameters,
                    docs: {
                        ...InformativeCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...InformativeCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (SuccessCircleBadge.parameters = {
                    ...SuccessCircleBadge.parameters,
                    docs: {
                        ...SuccessCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...SuccessCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (WarningCircleBadge.parameters = {
                    ...WarningCircleBadge.parameters,
                    docs: {
                        ...WarningCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...WarningCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (ErrorCircleBadge.parameters = {
                    ...ErrorCircleBadge.parameters,
                    docs: {
                        ...ErrorCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...ErrorCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NewCircleBadge.parameters = {
                    ...NewCircleBadge.parameters,
                    docs: {
                        ...NewCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NewCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NeutralSecondaryBadge.parameters = {
                    ...NeutralSecondaryBadge.parameters,
                    docs: {
                        ...NeutralSecondaryBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NeutralSecondaryBadge.parameters?.docs?.source
                        }
                    }
                }),
                (InformativeSecondaryBadge.parameters = {
                    ...InformativeSecondaryBadge.parameters,
                    docs: {
                        ...InformativeSecondaryBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...InformativeSecondaryBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (SuccessSecondaryBadge.parameters = {
                    ...SuccessSecondaryBadge.parameters,
                    docs: {
                        ...SuccessSecondaryBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...SuccessSecondaryBadge.parameters?.docs?.source
                        }
                    }
                }),
                (WarningSecondaryBadge.parameters = {
                    ...WarningSecondaryBadge.parameters,
                    docs: {
                        ...WarningSecondaryBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...WarningSecondaryBadge.parameters?.docs?.source
                        }
                    }
                }),
                (ErrorSecondaryBadge.parameters = {
                    ...ErrorSecondaryBadge.parameters,
                    docs: {
                        ...ErrorSecondaryBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...ErrorSecondaryBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NewSecondaryBadge.parameters = {
                    ...NewSecondaryBadge.parameters,
                    docs: {
                        ...NewSecondaryBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NewSecondaryBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NeutralSecondaryCircleBadge.parameters = {
                    ...NeutralSecondaryCircleBadge.parameters,
                    docs: {
                        ...NeutralSecondaryCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NeutralSecondaryCircleBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (InformativeSecondaryCircleBadge.parameters = {
                    ...InformativeSecondaryCircleBadge.parameters,
                    docs: {
                        ...InformativeSecondaryCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...InformativeSecondaryCircleBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (SuccessSecondaryCircleBadge.parameters = {
                    ...SuccessSecondaryCircleBadge.parameters,
                    docs: {
                        ...SuccessSecondaryCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...SuccessSecondaryCircleBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (WarningSecondaryCircleBadge.parameters = {
                    ...WarningSecondaryCircleBadge.parameters,
                    docs: {
                        ...WarningSecondaryCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...WarningSecondaryCircleBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (ErrorSecondaryCircleBadge.parameters = {
                    ...ErrorSecondaryCircleBadge.parameters,
                    docs: {
                        ...ErrorSecondaryCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...ErrorSecondaryCircleBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (NewSecondaryCircleBadge.parameters = {
                    ...NewSecondaryCircleBadge.parameters,
                    docs: {
                        ...NewSecondaryCircleBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NewSecondaryCircleBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NeutralNotificationBadge.parameters = {
                    ...NeutralNotificationBadge.parameters,
                    docs: {
                        ...NeutralNotificationBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NeutralNotificationBadge.parameters?.docs?.source
                        }
                    }
                }),
                (InformativeNotificationBadge.parameters = {
                    ...InformativeNotificationBadge.parameters,
                    docs: {
                        ...InformativeNotificationBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...InformativeNotificationBadge.parameters?.docs
                                ?.source
                        }
                    }
                }),
                (SuccessNotificationBadge.parameters = {
                    ...SuccessNotificationBadge.parameters,
                    docs: {
                        ...SuccessNotificationBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...SuccessNotificationBadge.parameters?.docs?.source
                        }
                    }
                }),
                (WarningNotificationBadge.parameters = {
                    ...WarningNotificationBadge.parameters,
                    docs: {
                        ...WarningNotificationBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...WarningNotificationBadge.parameters?.docs?.source
                        }
                    }
                }),
                (ErrorNotificationBadge.parameters = {
                    ...ErrorNotificationBadge.parameters,
                    docs: {
                        ...ErrorNotificationBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...ErrorNotificationBadge.parameters?.docs?.source
                        }
                    }
                }),
                (NewNotificationBadge.parameters = {
                    ...NewNotificationBadge.parameters,
                    docs: {
                        ...NewNotificationBadge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...NewNotificationBadge.parameters?.docs?.source
                        }
                    }
                }),
                (Blue700Badge.parameters = {
                    ...Blue700Badge.parameters,
                    docs: {
                        ...Blue700Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Blue700Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Blue300Badge.parameters = {
                    ...Blue300Badge.parameters,
                    docs: {
                        ...Blue300Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Blue300Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Purple700Badge.parameters = {
                    ...Purple700Badge.parameters,
                    docs: {
                        ...Purple700Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Purple700Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Purple300Badge.parameters = {
                    ...Purple300Badge.parameters,
                    docs: {
                        ...Purple300Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Purple300Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Salmon900Badge.parameters = {
                    ...Salmon900Badge.parameters,
                    docs: {
                        ...Salmon900Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Salmon900Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Salmon700Badge.parameters = {
                    ...Salmon700Badge.parameters,
                    docs: {
                        ...Salmon700Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Salmon700Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Gold900Badge.parameters = {
                    ...Gold900Badge.parameters,
                    docs: {
                        ...Gold900Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Gold900Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Gold700Badge.parameters = {
                    ...Gold700Badge.parameters,
                    docs: {
                        ...Gold700Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Gold700Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Mint900Badge.parameters = {
                    ...Mint900Badge.parameters,
                    docs: {
                        ...Mint900Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Mint900Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Chestnut700Badge.parameters = {
                    ...Chestnut700Badge.parameters,
                    docs: {
                        ...Chestnut700Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Chestnut700Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Chestnut300Badge.parameters = {
                    ...Chestnut300Badge.parameters,
                    docs: {
                        ...Chestnut300Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Chestnut300Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Amethyst700Badge.parameters = {
                    ...Amethyst700Badge.parameters,
                    docs: {
                        ...Amethyst700Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Amethyst700Badge.parameters?.docs?.source
                        }
                    }
                }),
                (Amethyst500Badge.parameters = {
                    ...Amethyst500Badge.parameters,
                    docs: {
                        ...Amethyst500Badge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Badge {...args} />',
                            ...Amethyst500Badge.parameters?.docs?.source
                        }
                    }
                });
        },
        './node_modules/prop-types/factoryWithThrowingShims.js': (
            module,
            __unused_webpack_exports,
            __webpack_require__
        ) => {
            'use strict';
            var ReactPropTypesSecret = __webpack_require__(
                './node_modules/prop-types/lib/ReactPropTypesSecret.js'
            );
            function emptyFunction() {}
            function emptyFunctionWithReset() {}
            (emptyFunctionWithReset.resetWarningCache = emptyFunction),
                (module.exports = function () {
                    function shim(
                        props,
                        propName,
                        componentName,
                        location,
                        propFullName,
                        secret
                    ) {
                        if (secret !== ReactPropTypesSecret) {
                            var err = new Error(
                                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                            );
                            throw ((err.name = 'Invariant Violation'), err);
                        }
                    }
                    function getShim() {
                        return shim;
                    }
                    shim.isRequired = shim;
                    var ReactPropTypes = {
                        array: shim,
                        bigint: shim,
                        bool: shim,
                        func: shim,
                        number: shim,
                        object: shim,
                        string: shim,
                        symbol: shim,
                        any: shim,
                        arrayOf: getShim,
                        element: shim,
                        elementType: shim,
                        instanceOf: getShim,
                        node: shim,
                        objectOf: getShim,
                        oneOf: getShim,
                        oneOfType: getShim,
                        shape: getShim,
                        exact: getShim,
                        checkPropTypes: emptyFunctionWithReset,
                        resetWarningCache: emptyFunction
                    };
                    return (
                        (ReactPropTypes.PropTypes = ReactPropTypes),
                        ReactPropTypes
                    );
                });
        },
        './node_modules/prop-types/index.js': (
            module,
            __unused_webpack_exports,
            __webpack_require__
        ) => {
            module.exports = __webpack_require__(
                './node_modules/prop-types/factoryWithThrowingShims.js'
            )();
        },
        './node_modules/prop-types/lib/ReactPropTypesSecret.js': module => {
            'use strict';
            module.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        './src/stories/Badge.jsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.d(__webpack_exports__, { E: () => Badge });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/react/index.js'
                ),
                prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './node_modules/prop-types/index.js'
                ),
                prop_types__WEBPACK_IMPORTED_MODULE_1___default =
                    __webpack_require__.n(
                        prop_types__WEBPACK_IMPORTED_MODULE_1__
                    );
            const Badge = ({
                children,
                customClasses = [],
                hasNotification,
                isCircle,
                color,
                secondary,
                status,
                ...props
            }) => {
                const badgeClass = ['ds-badge'];
                return (
                    customClasses && badgeClass.push(customClasses),
                    'error' === status
                        ? badgeClass.push('--error')
                        : 'informative' === status
                          ? badgeClass.push('--informative')
                          : 'new' === status
                            ? badgeClass.push('--new')
                            : 'success' === status
                              ? badgeClass.push('--success')
                              : 'warning' === status &&
                                badgeClass.push('--warning'),
                    isCircle && badgeClass.push('--circle'),
                    hasNotification && badgeClass.push('--dot'),
                    color && badgeClass.push(`--${color}`),
                    secondary && badgeClass.push('--secondary'),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'div',
                        {
                            className: badgeClass.join(' '),
                            role: status || 'status',
                            ...props
                        },
                        children
                    )
                );
            };
            (Badge.propTypes = {
                children:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,
                customClasses:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,
                hasNotification:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                isCircle:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
                secondary:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                status: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string
            }),
                (Badge.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'Badge',
                    props: {
                        customClasses: {
                            defaultValue: { value: '[]', computed: !1 },
                            description: '',
                            type: { name: 'array' },
                            required: !1
                        },
                        children: {
                            description: '',
                            type: { name: 'node' },
                            required: !1
                        },
                        hasNotification: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        isCircle: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        color: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        secondary: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        status: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        }
                    }
                });
        }
    }
]);
