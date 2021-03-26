webpackHotUpdate("the-happy-programmer",{

/***/ "./packages/thp-theme/src/components /Archive/Archive.js":
/*!***************************************************************!*\
  !*** ./packages/thp-theme/src/components /Archive/Archive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArchiveItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArchiveItem */ \"./packages/thp-theme/src/components /Archive/ArchiveItem.js\");\n/* harmony import */ var _reusableComponents_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusableComponents/inputs */ \"./packages/thp-theme/src/components /reusableComponents/inputs.js\");\n/* harmony import */ var _reusableComponents_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/container */ \"./packages/thp-theme/src/components /reusableComponents/container.js\");\n/* harmony import */ var _Handlers_dataManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Handlers/dataManager */ \"./packages/thp-theme/src/components /Handlers/dataManager.js\");\n/* harmony import */ var _constants_searchIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/searchIcon.svg */ \"./packages/thp-theme/src/components /constants/searchIcon.svg\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Category */ \"./packages/thp-theme/src/components /Archive/Category.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Archive=({state})=>{const data=Object(_Handlers_dataManager__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])(state);const breakpoints=state.theme.breakpoints;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxs\"])(_reusableComponents_container__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDiv\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxs\"])(InputContainer,{breakpoints:breakpoints,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(\"img\",{src:_constants_searchIcon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_reusableComponents_inputs__WEBPACK_IMPORTED_MODULE_3__[\"MyInput\"],{placeholder:\"Search\"})]}),data.taxonomy&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(CategoryText,{children:state.source[data.taxonomy][data.id].name}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(ArchiveContainer,{breakpoints:breakpoints,children:data.items.map(({type,id})=>{const item=state.source[type][id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_ArchiveItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{item:item},item.id);})})]});};const CategoryText=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"p\", false?undefined:{target:\"e8izkh72\",label:\"CategoryText\"})( false?undefined:{name:\"lyg5f9\",styles:\"padding:0em 1em\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjZCIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlYXJjaEljb24uc3ZnXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmNvbnN0IEFyY2hpdmUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKHN0YXRlKTtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBzdGF0ZS50aGVtZS5icmVha3BvaW50cztcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyRGl2PlxuICAgICAgPElucHV0Q29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIDxpbWcgc3JjPXtzZWFyY2hJY29ufSAvPlxuICAgICAgICA8TXlJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAge2RhdGEudGF4b25vbXkgJiYgKFxuICAgICAgICA8Q2F0ZWdvcnlUZXh0PntzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF0ubmFtZX08L0NhdGVnb3J5VGV4dD5cbiAgICAgICl9XG4gICAgICA8QXJjaGl2ZUNvbnRhaW5lciBicmVha3BvaW50cz17YnJlYWtwb2ludHN9PlxuICAgICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAgIHJldHVybiA8QXJjaGl2ZUl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L0FyY2hpdmVDb250YWluZXI+XG4gICAgPC9Db250YWluZXJEaXY+XG4gICk7XG59O1xuXG5jb25zdCBDYXRlZ29yeVRleHQgPSBzdHlsZWQucGBcbiAgcGFkZGluZzogMGVtIDFlbTtcbmA7XG5cbmNvbnN0IEFyY2hpdmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuYnJlYWtwb2ludHMudGFibGV0fSkge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgfVxuICBwYWRkaW5nLXRvcDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxLjZlbTtcbiAgICB0b3A6IDIuNjVlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDMuNWVtO1xuICAgIG1hcmdpbjogMmVtIDFlbSAxZW0gLTFlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChBcmNoaXZlKTtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const ArchiveContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e8izkh71\",label:\"ArchiveContainer\"})(\"@media screen and (min-width: \",props=>props.breakpoints.tablet,\"){padding:0em 1em;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:2em;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ21DIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlYXJjaEljb24uc3ZnXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmNvbnN0IEFyY2hpdmUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKHN0YXRlKTtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBzdGF0ZS50aGVtZS5icmVha3BvaW50cztcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyRGl2PlxuICAgICAgPElucHV0Q29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIDxpbWcgc3JjPXtzZWFyY2hJY29ufSAvPlxuICAgICAgICA8TXlJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAge2RhdGEudGF4b25vbXkgJiYgKFxuICAgICAgICA8Q2F0ZWdvcnlUZXh0PntzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF0ubmFtZX08L0NhdGVnb3J5VGV4dD5cbiAgICAgICl9XG4gICAgICA8QXJjaGl2ZUNvbnRhaW5lciBicmVha3BvaW50cz17YnJlYWtwb2ludHN9PlxuICAgICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAgIHJldHVybiA8QXJjaGl2ZUl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L0FyY2hpdmVDb250YWluZXI+XG4gICAgPC9Db250YWluZXJEaXY+XG4gICk7XG59O1xuXG5jb25zdCBDYXRlZ29yeVRleHQgPSBzdHlsZWQucGBcbiAgcGFkZGluZzogMGVtIDFlbTtcbmA7XG5cbmNvbnN0IEFyY2hpdmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuYnJlYWtwb2ludHMudGFibGV0fSkge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgfVxuICBwYWRkaW5nLXRvcDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxLjZlbTtcbiAgICB0b3A6IDIuNjVlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDMuNWVtO1xuICAgIG1hcmdpbjogMmVtIDFlbSAxZW0gLTFlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChBcmNoaXZlKTtcbiJdfQ== */\"));const InputContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"span\", false?undefined:{target:\"e8izkh70\",label:\"InputContainer\"})(\"@media screen and (min-width: \",props=>props.breakpoints.tablet,\"){padding-top:5em;}padding-top:2em;display:flex;width:100%;img{height:1.8em;position:relative;left:1.6em;top:2.65em;}input{flex-grow:1;display:block;width:100%;padding:1em 1em 1em 3.5em;margin:2em 1em 1em -1em;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tDIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlYXJjaEljb24uc3ZnXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmNvbnN0IEFyY2hpdmUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKHN0YXRlKTtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBzdGF0ZS50aGVtZS5icmVha3BvaW50cztcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyRGl2PlxuICAgICAgPElucHV0Q29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIDxpbWcgc3JjPXtzZWFyY2hJY29ufSAvPlxuICAgICAgICA8TXlJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAge2RhdGEudGF4b25vbXkgJiYgKFxuICAgICAgICA8Q2F0ZWdvcnlUZXh0PntzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF0ubmFtZX08L0NhdGVnb3J5VGV4dD5cbiAgICAgICl9XG4gICAgICA8QXJjaGl2ZUNvbnRhaW5lciBicmVha3BvaW50cz17YnJlYWtwb2ludHN9PlxuICAgICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAgIHJldHVybiA8QXJjaGl2ZUl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L0FyY2hpdmVDb250YWluZXI+XG4gICAgPC9Db250YWluZXJEaXY+XG4gICk7XG59O1xuXG5jb25zdCBDYXRlZ29yeVRleHQgPSBzdHlsZWQucGBcbiAgcGFkZGluZzogMGVtIDFlbTtcbmA7XG5cbmNvbnN0IEFyY2hpdmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuYnJlYWtwb2ludHMudGFibGV0fSkge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgfVxuICBwYWRkaW5nLXRvcDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxLjZlbTtcbiAgICB0b3A6IDIuNjVlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDMuNWVtO1xuICAgIG1hcmdpbjogMmVtIDFlbSAxZW0gLTFlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChBcmNoaXZlKTtcbiJdfQ== */\"));/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Archive));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcz8xYTI3Il0sIm5hbWVzIjpbIkFyY2hpdmUiLCJzdGF0ZSIsImRhdGEiLCJnZXREYXRhIiwiYnJlYWtwb2ludHMiLCJ0aGVtZSIsInNlYXJjaEljb24iLCJ0YXhvbm9teSIsInNvdXJjZSIsImlkIiwibmFtZSIsIml0ZW1zIiwibWFwIiwidHlwZSIsIml0ZW0iLCJDYXRlZ29yeVRleHQiLCJBcmNoaXZlQ29udGFpbmVyIiwicHJvcHMiLCJ0YWJsZXQiLCJJbnB1dENvbnRhaW5lciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztxUkFRQSxLQUFNQSxRQUFPLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUM3QixLQUFNQyxLQUFJLENBQUdDLHFFQUFPLENBQUNGLEtBQUQsQ0FBcEIsQ0FDQSxLQUFNRyxZQUFXLENBQUdILEtBQUssQ0FBQ0ksS0FBTixDQUFZRCxXQUFoQyxDQUNBLE1BQ0UseUVBQUMsMEVBQUQsWUFDRSx3RUFBQyxjQUFELEVBQWdCLFdBQVcsQ0FBRUEsV0FBN0IsV0FDRSw4RUFBSyxHQUFHLENBQUVFLGlFQUFWLEVBREYsQ0FFRSx1RUFBQyxrRUFBRCxFQUFTLFdBQVcsQ0FBQyxRQUFyQixFQUZGLEdBREYsQ0FLR0osSUFBSSxDQUFDSyxRQUFMLEVBQ0MsdUVBQUMsWUFBRCxXQUFlTixLQUFLLENBQUNPLE1BQU4sQ0FBYU4sSUFBSSxDQUFDSyxRQUFsQixFQUE0QkwsSUFBSSxDQUFDTyxFQUFqQyxFQUFxQ0MsSUFBcEQsRUFOSixDQVFFLHVFQUFDLGdCQUFELEVBQWtCLFdBQVcsQ0FBRU4sV0FBL0IsVUFDR0YsSUFBSSxDQUFDUyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxDQUFDLENBQUVDLElBQUYsQ0FBUUosRUFBUixDQUFELEdBQWtCLENBQ2hDLEtBQU1LLEtBQUksQ0FBR2IsS0FBSyxDQUFDTyxNQUFOLENBQWFLLElBQWIsRUFBbUJKLEVBQW5CLENBQWIsQ0FDQSxNQUFPLHdFQUFDLG9EQUFELEVBQTJCLElBQUksQ0FBRUssSUFBakMsRUFBa0JBLElBQUksQ0FBQ0wsRUFBdkIsQ0FBUCxDQUNELENBSEEsQ0FESCxFQVJGLEdBREYsQ0FpQkQsQ0FwQkQsQ0FzQkEsS0FBTU0sYUFBWSwwbEdBQWxCLENBSUEsS0FBTUMsaUJBQWdCLCtKQUNhQyxLQUFELEVBQVdBLEtBQUssQ0FBQ2IsV0FBTixDQUFrQmMsTUFEekMsbStGQUF0QixDQVNBLEtBQU1DLGVBQWMsOEpBQ2VGLEtBQUQsRUFBV0EsS0FBSyxDQUFDYixXQUFOLENBQWtCYyxNQUQzQyxvbUdBQXBCLENBc0JlRSx1SEFBTyxDQUFDcEIsT0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL3RocC10aGVtZS9zcmMvY29tcG9uZW50cyAvQXJjaGl2ZS9BcmNoaXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgQXJjaGl2ZUl0ZW0gZnJvbSBcIi4vQXJjaGl2ZUl0ZW1cIjtcbmltcG9ydCB7IE15SW5wdXQgfSBmcm9tIFwiLi4vcmV1c2FibGVDb21wb25lbnRzL2lucHV0c1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyRGl2IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9jb250YWluZXJcIjtcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi4vSGFuZGxlcnMvZGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgc2VhcmNoSWNvbiB9IGZyb20gXCIuLi9jb25zdGFudHMvc2VhcmNoSWNvbi5zdmdcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xuY29uc3QgQXJjaGl2ZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGdldERhdGEoc3RhdGUpO1xuICBjb25zdCBicmVha3BvaW50cyA9IHN0YXRlLnRoZW1lLmJyZWFrcG9pbnRzO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJEaXY+XG4gICAgICA8SW5wdXRDb250YWluZXIgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfT5cbiAgICAgICAgPGltZyBzcmM9e3NlYXJjaEljb259IC8+XG4gICAgICAgIDxNeUlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICB7ZGF0YS50YXhvbm9teSAmJiAoXG4gICAgICAgIDxDYXRlZ29yeVRleHQ+e3N0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lfTwvQ2F0ZWdvcnlUZXh0PlxuICAgICAgKX1cbiAgICAgIDxBcmNoaXZlQ29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgcmV0dXJuIDxBcmNoaXZlSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQXJjaGl2ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lckRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENhdGVnb3J5VGV4dCA9IHN0eWxlZC5wYFxuICBwYWRkaW5nOiAwZW0gMWVtO1xuYDtcblxuY29uc3QgQXJjaGl2ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZzogMGVtIDFlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDJlbTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLmJyZWFrcG9pbnRzLnRhYmxldH0pIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICB9XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBpbWcge1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEuNmVtO1xuICAgIHRvcDogMi42NWVtO1xuICB9XG4gIGlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMy41ZW07XG4gICAgbWFyZ2luOiAyZW0gMWVtIDFlbSAtMWVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/thp-theme/src/components /Archive/Archive.js\n");

/***/ })

})