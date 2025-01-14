(self.webpackChunkds_pro_react = self.webpackChunkds_pro_react || []).push([
    [811],
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
        './src/stories/Autocomplete.stories.js': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Primary: () => Primary,
                    PrimaryDisabled: () => PrimaryDisabled,
                    PrimaryRequired: () => PrimaryRequired,
                    PrimaryWithError: () => PrimaryWithError,
                    PrimaryWithHint: () => PrimaryWithHint,
                    PrimaryWithIcon: () => PrimaryWithIcon,
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
                _Autocomplete__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__('./src/stories/Autocomplete.jsx');
            const options = [
                    'Adrian Veidt',
                    'Dan Dreiberg',
                    'Edward Blake',
                    'Hollis Mason',
                    'Jon Osterman',
                    'Laurie Juspeczyk',
                    'Sally Jupiter',
                    'Walter Kovacs'
                ],
                __WEBPACK_DEFAULT_EXPORT__ = {
                    title: 'Components/Autocomplete/React',
                    component: _Autocomplete__WEBPACK_IMPORTED_MODULE_1__.j,
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
                                                    'customClasses: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'errorMessage: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'hasError: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'hintMessage: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'inputId: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isDisabled: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'searchIcon: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'label: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'placeholder: PropTypes.string,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'isRequired: PropTypes.bool,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'maxWidth: PropTypes.number,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'getSelection: PropTypes.func,'
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                                    'li',
                                                    null,
                                                    'optionList: PropTypes.array'
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
                        _Autocomplete__WEBPACK_IMPORTED_MODULE_1__.j,
                        args
                    ),
                Primary = Template.bind({});
            (Primary.storyName = 'Autocomplete'),
                (Primary.args = {
                    label: 'Input label',
                    getSelection: selection => {
                        console.log(selection);
                    },
                    inputId: 'input-id',
                    optionList: options
                });
            const PrimaryRequired = Template.bind({});
            (PrimaryRequired.storyName = 'Autocomplete required'),
                (PrimaryRequired.args = {
                    label: 'Input label',
                    getSelection: selection => {
                        console.log(selection);
                    },
                    inputId: 'input-id',
                    isRequired: !0,
                    optionList: options
                });
            const PrimaryDisabled = Template.bind({});
            (PrimaryDisabled.storyName = 'Autocomplete disabled'),
                (PrimaryDisabled.args = {
                    label: 'Input label',
                    getSelection: selection => {
                        console.log(selection);
                    },
                    inputId: 'input-id',
                    isDisabled: !0,
                    optionList: options
                });
            const PrimaryWithIcon = Template.bind({});
            (PrimaryWithIcon.storyName = 'Autocomplete with search icon'),
                (PrimaryWithIcon.args = {
                    label: 'Input label',
                    getSelection: selection => {
                        console.log(selection);
                    },
                    inputId: 'input-id',
                    optionList: options,
                    searchIcon: !0
                });
            const PrimaryWithError = Template.bind({});
            (PrimaryWithError.storyName = 'Autocomplete with error'),
                (PrimaryWithError.args = {
                    label: 'Input label',
                    errorMessage: 'Error message goes here.',
                    getSelection: selection => {
                        console.log(selection);
                    },
                    hasError: !0,
                    inputId: 'input-id',
                    optionList: options
                });
            const PrimaryWithHint = Template.bind({});
            (PrimaryWithHint.storyName = 'Autocomplete with hint'),
                (PrimaryWithHint.args = {
                    label: 'Input label',
                    hintMessage: 'Hint message goes here.',
                    getSelection: selection => {
                        console.log(selection);
                    },
                    inputId: 'input-id',
                    optionList: options
                });
            const __namedExportsOrder = [
                'Primary',
                'PrimaryRequired',
                'PrimaryDisabled',
                'PrimaryWithIcon',
                'PrimaryWithError',
                'PrimaryWithHint'
            ];
            (Primary.parameters = {
                ...Primary.parameters,
                docs: {
                    ...Primary.parameters?.docs,
                    source: {
                        originalSource: 'args => <Autocomplete {...args} />',
                        ...Primary.parameters?.docs?.source
                    }
                }
            }),
                (PrimaryRequired.parameters = {
                    ...PrimaryRequired.parameters,
                    docs: {
                        ...PrimaryRequired.parameters?.docs,
                        source: {
                            originalSource:
                                'args => <Autocomplete {...args} />',
                            ...PrimaryRequired.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryDisabled.parameters = {
                    ...PrimaryDisabled.parameters,
                    docs: {
                        ...PrimaryDisabled.parameters?.docs,
                        source: {
                            originalSource:
                                'args => <Autocomplete {...args} />',
                            ...PrimaryDisabled.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryWithIcon.parameters = {
                    ...PrimaryWithIcon.parameters,
                    docs: {
                        ...PrimaryWithIcon.parameters?.docs,
                        source: {
                            originalSource:
                                'args => <Autocomplete {...args} />',
                            ...PrimaryWithIcon.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryWithError.parameters = {
                    ...PrimaryWithError.parameters,
                    docs: {
                        ...PrimaryWithError.parameters?.docs,
                        source: {
                            originalSource:
                                'args => <Autocomplete {...args} />',
                            ...PrimaryWithError.parameters?.docs?.source
                        }
                    }
                }),
                (PrimaryWithHint.parameters = {
                    ...PrimaryWithHint.parameters,
                    docs: {
                        ...PrimaryWithHint.parameters?.docs,
                        source: {
                            originalSource:
                                'args => <Autocomplete {...args} />',
                            ...PrimaryWithHint.parameters?.docs?.source
                        }
                    }
                });
        },
        './src/stories/Autocomplete.jsx': (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.d(__webpack_exports__, {
                j: () => Autocomplete
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/react/index.js'
                ),
                prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './node_modules/prop-types/index.js'
                ),
                prop_types__WEBPACK_IMPORTED_MODULE_4___default =
                    __webpack_require__.n(
                        prop_types__WEBPACK_IMPORTED_MODULE_4__
                    ),
                classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './node_modules/classnames/index.js'
                ),
                classnames__WEBPACK_IMPORTED_MODULE_1___default =
                    __webpack_require__.n(
                        classnames__WEBPACK_IMPORTED_MODULE_1__
                    ),
                _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        './node_modules/@mui/material/Autocomplete/Autocomplete.js'
                    ),
                _mui_material_Popper__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        './node_modules/@mui/material/Popper/Popper.js'
                    );
            const Autocomplete = ({
                customClasses = [],
                errorMessage,
                hasError,
                hintMessage,
                inputId,
                isDisabled,
                searchIcon,
                label,
                placeholder,
                isRequired,
                maxWidth,
                getSelection,
                optionList,
                ...props
            }) => {
                const [value, setValue] = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                    [inputValue, setInputValue] = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
                if (!optionList)
                    throw new Error(
                        'You must provide an array list of options'
                    );
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                    getSelection(inputValue);
                }, [getSelection, inputValue]);
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.A,
                    {
                        disabled: isDisabled,
                        id: inputId,
                        onInputChange: (e, newInputValue) => {
                            setInputValue(newInputValue);
                        },
                        onChange: (e, newValue) => {
                            setValue(newValue);
                        },
                        options: optionList,
                        sx: maxWidth && { width: maxWidth },
                        PopperComponent: props =>
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                _mui_material_Popper__WEBPACK_IMPORTED_MODULE_3__.A,
                                { ...props, className: 'ds-menu' }
                            ),
                        value,
                        renderInput: params =>
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                'div',
                                {
                                    className:
                                        classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                                            'ds-input',
                                            customClasses,
                                            {
                                                '--disabled': isDisabled,
                                                '--error': hasError,
                                                '--icons --icon-left':
                                                    searchIcon,
                                                '--required': isRequired
                                            }
                                        ),
                                    ref: params.InputProps.ref
                                },
                                label &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'label',
                                        {
                                            'aria-label': label,
                                            className: 'ds-input__label',
                                            htmlFor: inputId
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                            'span',
                                            null,
                                            label
                                        )
                                    ),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                    'div',
                                    {
                                        className:
                                            'ds-flex --start-center --row'
                                    },
                                    searchIcon &&
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                            'span',
                                            {
                                                className:
                                                    'ds-icon--search --left'
                                            }
                                        ),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'input',
                                        {
                                            placeholder,
                                            type: 'text',
                                            ...params.inputProps
                                        }
                                    )
                                ),
                                errorMessage &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'div',
                                        { className: 'ds-input__error' },
                                        errorMessage
                                    ),
                                hintMessage &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                                        'div',
                                        { className: 'ds-input__hint' },
                                        hintMessage
                                    )
                            )
                    }
                );
            };
            (Autocomplete.propTypes = {
                customClasses:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
                errorMessage:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
                hasError:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
                hintMessage:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
                inputId:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
                isDisabled:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
                searchIcon:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
                label: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
                placeholder:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
                isRequired:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
                maxWidth:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().number,
                getSelection:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,
                optionList:
                    prop_types__WEBPACK_IMPORTED_MODULE_4___default().array
            }),
                (Autocomplete.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'Autocomplete',
                    props: {
                        customClasses: {
                            defaultValue: { value: '[]', computed: !1 },
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        errorMessage: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        hasError: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        hintMessage: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        inputId: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        isDisabled: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        searchIcon: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        label: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        placeholder: {
                            description: '',
                            type: { name: 'string' },
                            required: !1
                        },
                        isRequired: {
                            description: '',
                            type: { name: 'bool' },
                            required: !1
                        },
                        maxWidth: {
                            description: '',
                            type: { name: 'number' },
                            required: !1
                        },
                        getSelection: {
                            description: '',
                            type: { name: 'func' },
                            required: !1
                        },
                        optionList: {
                            description: '',
                            type: { name: 'array' },
                            required: !1
                        }
                    }
                });
        }
    }
]);
