(self.webpackChunkds_pro_react = self.webpackChunkds_pro_react || []).push([
    [791],
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
        './src/stories/Button.stories.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Ghost: () => Ghost,
                    GhostDestructive: () => GhostDestructive,
                    IconButtonLarge: () => IconButtonLarge,
                    IconButtonLargeInverse: () => IconButtonLargeInverse,
                    IconButtonMedium: () => IconButtonMedium,
                    IconButtonMediumInverse: () => IconButtonMediumInverse,
                    IconButtonSmall: () => IconButtonSmall,
                    IconButtonSmallInverse: () => IconButtonSmallInverse,
                    Primary: () => Primary,
                    PrimaryDestructive: () => PrimaryDestructive,
                    PrimaryDisabled: () => PrimaryDisabled,
                    PrimaryInverse: () => PrimaryInverse,
                    PrimarySave: () => PrimarySave,
                    PrimarySmall: () => PrimarySmall,
                    PrimaryWithIcon: () => PrimaryWithIcon,
                    PrimaryWithIconRight: () => PrimaryWithIconRight,
                    Secondary: () => Secondary,
                    SecondaryDisabled: () => SecondaryDisabled,
                    SecondaryInverse: () => SecondaryInverse,
                    SecondarySmall: () => SecondarySmall,
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
                _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './src/stories/Button.jsx'
                );
            const __WEBPACK_DEFAULT_EXPORT__ = {
                    title: 'Components/Button/React',
                    component: _Button__WEBPACK_IMPORTED_MODULE_1__.$,
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
                                                    'clickHandler: PropTypes.func,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'customClasses: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'iconClass: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'iconRight: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isDestructive: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isDisabled: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isInverse: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isSave: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'label: PropTypes.string.isRequired,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    "size: PropTypes.oneOf(['small', 'medium', 'large']),"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    "type: PropTypes.oneOf(['secondary', 'ghost', 'icon'])"
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
                        _Button__WEBPACK_IMPORTED_MODULE_1__.$,
                        args
                    ),
                Primary = Template.bind({});
            Primary.args = { label: 'Button label', type: 'primary' };
            const PrimaryWithIcon = Template.bind({});
            PrimaryWithIcon.args = {
                iconClass: 'ds-icon--plus-circle',
                label: 'Button label',
                type: 'primary'
            };
            const PrimaryWithIconRight = Template.bind({});
            PrimaryWithIconRight.args = {
                iconClass: 'ds-icon--plus-circle',
                iconRight: !0,
                label: 'Button label',
                type: 'primary'
            };
            const PrimaryDisabled = Template.bind({});
            PrimaryDisabled.args = {
                label: 'Button label',
                isDisabled: !0,
                type: 'primary'
            };
            const PrimaryDestructive = Template.bind({});
            PrimaryDestructive.args = {
                label: 'Button label',
                isDestructive: !0,
                type: 'primary'
            };
            const Secondary = Template.bind({});
            Secondary.args = { label: 'Button label', type: 'secondary' };
            const SecondaryDisabled = Template.bind({});
            SecondaryDisabled.args = {
                label: 'Button label',
                isDisabled: !0,
                type: 'secondary'
            };
            const Ghost = Template.bind({});
            Ghost.args = { label: 'Button label', type: 'ghost' };
            const GhostDestructive = Template.bind({});
            GhostDestructive.args = {
                label: 'Button label',
                isDestructive: !0,
                type: 'ghost'
            };
            const PrimarySave = Template.bind({});
            PrimarySave.args = { isSave: !0 };
            const PrimarySmall = Template.bind({});
            PrimarySmall.args = { label: 'Button label', size: 'small' };
            const SecondarySmall = Template.bind({});
            SecondarySmall.args = {
                label: 'Button label',
                size: 'small',
                type: 'secondary'
            };
            const PrimaryInverse = Template.bind({});
            PrimaryInverse.args = { label: 'Button label', isInverse: !0 };
            const SecondaryInverse = Template.bind({});
            SecondaryInverse.args = {
                label: 'Button label',
                isInverse: !0,
                type: 'secondary'
            };
            const IconButtonLarge = Template.bind({});
            IconButtonLarge.args = { iconClass: 'ds-icon--gear', type: 'icon' };
            const IconButtonMedium = Template.bind({});
            IconButtonMedium.args = {
                iconClass: 'ds-icon--gear',
                type: 'icon',
                size: 'medium'
            };
            const IconButtonSmall = Template.bind({});
            IconButtonSmall.args = {
                iconClass: 'ds-icon--gear',
                type: 'icon',
                size: 'small'
            };
            const IconButtonLargeInverse = Template.bind({});
            IconButtonLargeInverse.args = {
                iconClass: 'ds-icon--gear',
                type: 'icon',
                isInverse: !0
            };
            const IconButtonMediumInverse = Template.bind({});
            IconButtonMediumInverse.args = {
                iconClass: 'ds-icon--gear',
                type: 'icon',
                size: 'medium',
                isInverse: !0
            };
            const IconButtonSmallInverse = Template.bind({});
            IconButtonSmallInverse.args = {
                iconClass: 'ds-icon--gear',
                type: 'icon',
                size: 'small',
                isInverse: !0
            };
            const __namedExportsOrder = [
                'Primary',
                'PrimaryWithIcon',
                'PrimaryWithIconRight',
                'PrimaryDisabled',
                'PrimaryDestructive',
                'Secondary',
                'SecondaryDisabled',
                'Ghost',
                'GhostDestructive',
                'PrimarySave',
                'PrimarySmall',
                'SecondarySmall',
                'PrimaryInverse',
                'SecondaryInverse',
                'IconButtonLarge',
                'IconButtonMedium',
                'IconButtonSmall',
                'IconButtonLargeInverse',
                'IconButtonMediumInverse',
                'IconButtonSmallInverse'
            ];
            (Primary.parameters = {
                ...Primary.parameters,
                docs: {
                    ...Primary.parameters?.docs,
                    source: {
                        originalSource: 'args => <Button {...args} />',
                        ...Primary.parameters?.docs?.source
                    }
                }
            }),
                (PrimaryWithIcon.parameters = {
                    ...PrimaryWithIcon.parameters,
                    docs: {
                        ...PrimaryWithIcon.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimaryWithIcon.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryWithIconRight.parameters = {
                    ...PrimaryWithIconRight.parameters,
                    docs: {
                        ...PrimaryWithIconRight.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimaryWithIconRight.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryDisabled.parameters = {
                    ...PrimaryDisabled.parameters,
                    docs: {
                        ...PrimaryDisabled.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimaryDisabled.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryDestructive.parameters = {
                    ...PrimaryDestructive.parameters,
                    docs: {
                        ...PrimaryDestructive.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimaryDestructive.parameters?.docs?.source
                        }
                    }
                }),
                (Secondary.parameters = {
                    ...Secondary.parameters,
                    docs: {
                        ...Secondary.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...Secondary.parameters?.docs?.source
                        }
                    }
                }),
                (SecondaryDisabled.parameters = {
                    ...SecondaryDisabled.parameters,
                    docs: {
                        ...SecondaryDisabled.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...SecondaryDisabled.parameters?.docs?.source
                        }
                    }
                }),
                (Ghost.parameters = {
                    ...Ghost.parameters,
                    docs: {
                        ...Ghost.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...Ghost.parameters?.docs?.source
                        }
                    }
                }),
                (GhostDestructive.parameters = {
                    ...GhostDestructive.parameters,
                    docs: {
                        ...GhostDestructive.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...GhostDestructive.parameters?.docs?.source
                        }
                    }
                }),
                (PrimarySave.parameters = {
                    ...PrimarySave.parameters,
                    docs: {
                        ...PrimarySave.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimarySave.parameters?.docs?.source
                        }
                    }
                }),
                (PrimarySmall.parameters = {
                    ...PrimarySmall.parameters,
                    docs: {
                        ...PrimarySmall.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimarySmall.parameters?.docs?.source
                        }
                    }
                }),
                (SecondarySmall.parameters = {
                    ...SecondarySmall.parameters,
                    docs: {
                        ...SecondarySmall.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...SecondarySmall.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryInverse.parameters = {
                    ...PrimaryInverse.parameters,
                    docs: {
                        ...PrimaryInverse.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...PrimaryInverse.parameters?.docs?.source
                        }
                    }
                }),
                (SecondaryInverse.parameters = {
                    ...SecondaryInverse.parameters,
                    docs: {
                        ...SecondaryInverse.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...SecondaryInverse.parameters?.docs?.source
                        }
                    }
                }),
                (IconButtonLarge.parameters = {
                    ...IconButtonLarge.parameters,
                    docs: {
                        ...IconButtonLarge.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...IconButtonLarge.parameters?.docs?.source
                        }
                    }
                }),
                (IconButtonMedium.parameters = {
                    ...IconButtonMedium.parameters,
                    docs: {
                        ...IconButtonMedium.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...IconButtonMedium.parameters?.docs?.source
                        }
                    }
                }),
                (IconButtonSmall.parameters = {
                    ...IconButtonSmall.parameters,
                    docs: {
                        ...IconButtonSmall.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...IconButtonSmall.parameters?.docs?.source
                        }
                    }
                }),
                (IconButtonLargeInverse.parameters = {
                    ...IconButtonLargeInverse.parameters,
                    docs: {
                        ...IconButtonLargeInverse.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...IconButtonLargeInverse.parameters?.docs?.source
                        }
                    }
                }),
                (IconButtonMediumInverse.parameters = {
                    ...IconButtonMediumInverse.parameters,
                    docs: {
                        ...IconButtonMediumInverse.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...IconButtonMediumInverse.parameters?.docs?.source
                        }
                    }
                }),
                (IconButtonSmallInverse.parameters = {
                    ...IconButtonSmallInverse.parameters,
                    docs: {
                        ...IconButtonSmallInverse.parameters?.docs,
                        source: {
                            originalSource: 'args => <Button {...args} />',
                            ...IconButtonSmallInverse.parameters?.docs?.source
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
        './src/stories/Button.jsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.d(__webpack_exports__, { $: () => Button });
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
            const Button = ({
                clickHandler = () => {},
                customClasses = null,
                iconClass = null,
                iconRight = !1,
                isDestructive = !1,
                isDisabled = !1,
                isInverse = !1,
                isSave = !1,
                label,
                size = 'large',
                type = 'primary',
                ...props
            }) => {
                const [buttonStatus, setButtonStatus] = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                    let timeoutId;
                    return (
                        'saving' === buttonStatus
                            ? (timeoutId = setTimeout(
                                  () => setButtonStatus('saved'),
                                  3e3
                              ))
                            : 'saved' === buttonStatus &&
                              (timeoutId = setTimeout(
                                  () => setButtonStatus(''),
                                  1500
                              )),
                        () => clearTimeout(timeoutId)
                    );
                }, [buttonStatus]);
                const customSaveClasses =
                        'saving' === buttonStatus
                            ? '--saving'
                            : 'saved' === buttonStatus
                              ? '--saved'
                              : '',
                    buttonClass = ['ds-button'];
                return (
                    customClasses && buttonClass.push(customClasses),
                    'primary' === type
                        ? buttonClass.push('--primary')
                        : 'secondary' === type
                          ? buttonClass.push('--secondary')
                          : 'ghost' === type
                            ? buttonClass.push('--ghost')
                            : 'icon' === type && buttonClass.push('--icon'),
                    'large' === size
                        ? buttonClass.push('')
                        : 'small' === size && 'icon' !== type
                          ? buttonClass.push('--small')
                          : 'small' === size && 'icon' === type
                            ? buttonClass.push('--sm')
                            : 'medium' === size &&
                              'icon' === type &&
                              buttonClass.push('--md'),
                    isDestructive && buttonClass.push('--warning'),
                    isDisabled && buttonClass.push('--disabled'),
                    isInverse && buttonClass.push('--inverse'),
                    isSave && buttonClass.push('--save ' + customSaveClasses),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                        'button',
                        {
                            type: 'button',
                            className: buttonClass.join(' '),
                            'aria-label': label,
                            onClick: isSave
                                ? () => {
                                      '' === buttonStatus &&
                                          setButtonStatus('saving');
                                  }
                                : clickHandler,
                            ...props
                        },
                        isSave
                            ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                  react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                  null,
                                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                      'div',
                                      { className: 'step1' },
                                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                          'span',
                                          null,
                                          'Save'
                                      )
                                  ),
                                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                      'div',
                                      { className: 'step2' },
                                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                          'div',
                                          {
                                              className:
                                                  'ds-loading --small ds-mr-4'
                                          },
                                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                              'div',
                                              null
                                          ),
                                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                              'div',
                                              null
                                          ),
                                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                              'div',
                                              null
                                          ),
                                          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                              'div',
                                              null
                                          )
                                      ),
                                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                          'span',
                                          null,
                                          'Saving'
                                      )
                                  ),
                                  react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                      'div',
                                      { className: 'step3' },
                                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                          'div',
                                          { className: 'checkmark animate' }
                                      ),
                                      react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                          'span',
                                          null,
                                          'Saved'
                                      )
                                  )
                              )
                            : 'icon' === type
                              ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    'span',
                                    {
                                        className: `${iconClass}`,
                                        'aria-label': iconClass,
                                        role: 'img'
                                    }
                                )
                              : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    null,
                                    iconClass &&
                                        !iconRight &&
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                            'span',
                                            {
                                                className: `${iconClass} --left`,
                                                'aria-label': iconClass,
                                                role: 'img'
                                            }
                                        ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'span',
                                        null,
                                        label
                                    ),
                                    iconClass &&
                                        iconRight &&
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                            'span',
                                            {
                                                className: `${iconClass} --right`,
                                                'aria-label': iconClass,
                                                role: 'img'
                                            }
                                        )
                                )
                    )
                );
            };
            (Button.propTypes = {
                label: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
                customClasses:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
                iconClass:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
                iconRight:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                isDestructive:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                isDisabled:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                isInverse:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                isSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,
                clickHandler:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,
                size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
                    'small',
                    'medium',
                    'large'
                ]),
                type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
                    'primary',
                    'secondary',
                    'ghost',
                    'icon'
                ])
            }),
                (Button.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'Button',
                    props: {
                        clickHandler: {
                            defaultValue: { value: '() => {}', computed: !1 },
                            description: '',
                            type: { name: 'func' },
                            required: !1
                        },
                        customClasses: {
                            defaultValue: { value: 'null', computed: !1 },
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        iconClass: {
                            defaultValue: { value: 'null', computed: !1 },
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        iconRight: {
                            defaultValue: { value: 'false', computed: !1 },
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        isDestructive: {
                            defaultValue: { value: 'false', computed: !1 },
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        isDisabled: {
                            defaultValue: { value: 'false', computed: !1 },
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        isInverse: {
                            defaultValue: { value: 'false', computed: !1 },
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        isSave: {
                            defaultValue: { value: 'false', computed: !1 },
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        size: {
                            defaultValue: { value: "'large'", computed: !1 },
                            description: '',
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'small'", computed: !1 },
                                    { value: "'medium'", computed: !1 },
                                    { value: "'large'", computed: !1 }
                                ]
                            },
                            required: !1
                        },
                        type: {
                            defaultValue: { value: "'primary'", computed: !1 },
                            description: '',
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'primary'", computed: !1 },
                                    { value: "'secondary'", computed: !1 },
                                    { value: "'ghost'", computed: !1 },
                                    { value: "'icon'", computed: !1 }
                                ]
                            },
                            required: !1
                        },
                        label: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        }
                    }
                });
        }
    }
]);
