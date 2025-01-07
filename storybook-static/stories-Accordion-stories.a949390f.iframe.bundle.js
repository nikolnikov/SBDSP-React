/*! For license information please see stories-Accordion-stories.a949390f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkds_pro_react=self.webpackChunkds_pro_react||[]).push([[71],{"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/Accordion.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiple:()=>Multiple,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Accordion.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Accordion/React",component:_Accordion__WEBPACK_IMPORTED_MODULE_1__.n,parameters:{layout:"centered",controls:{disable:!0},actions:{disable:!0},docs:{page:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.om,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Pd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"props-card"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,"Available Props:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"ds-list"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"customClasses: PropTypes.string,"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"openSingleItem: PropTypes.bool,"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"defaultExpanded: PropTypes.bool,"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"accordionContent: PropTypes.array")))))}},tags:["autodocs","!dev"]},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_1__.n,args),Single=Template.bind({});Single.parameters={docs:{description:{story:"Accordion with single item expanded."}}},Single.args={accordionContent:[{header:"Title 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin."},{header:"Title 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin."}],openSingleItem:!0};const Multiple=Template.bind({});Multiple.parameters={docs:{description:{story:"Accordion with multiple items expanded simultaneously."}}},Multiple.args={accordionContent:[{header:"Title 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin."},{header:"Title 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum imperdiet sollicitudin."}]};const __namedExportsOrder=["Single","Multiple"];Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"args => <Accordion {...args} />",...Single.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"args => <Accordion {...args} />",...Multiple.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./src/stories/Accordion.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>Accordion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);const Accordion=({customClasses,openSingleItem=!1,isExpanded=!1,accordionContent,...props})=>{const[activeIndex,setActiveIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isExpanded?0:-1),[openStates,setOpenStates]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(accordionContent.map((()=>isExpanded))),accordionClass=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-accordion__wrapper",customClasses);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:accordionClass},accordionContent.map(((item,index)=>{const isOpen=openSingleItem?index===activeIndex:openStates[index],ariaExpanded=isOpen?"true":"false";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-accordion",{"--expanded":isOpen})},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"ds-accordion__title","aria-expanded":ariaExpanded,onClick:()=>(index=>{openSingleItem?setActiveIndex(activeIndex===index?-1:index):setOpenStates((prevStates=>{const newStates=[...prevStates];return newStates[index]=!newStates[index],newStates}))})(index),tabIndex:"0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,item.header),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"ds-icon--expand","aria-label":"expand"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-accordion__content",{"--expanded":isOpen})},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,item.content)))})))};Accordion.propTypes={customClasses:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,openSingleItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,isExpanded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,accordionContent:prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({header:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,content:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired})).isRequired},Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{openSingleItem:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isExpanded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},customClasses:{description:"",type:{name:"string"},required:!1},accordionContent:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{header:{name:"string",required:!0},content:{name:"string",required:!0}}}},required:!0}}}}}]);