webpackHotUpdate("the-happy-programmer",{

/***/ "./packages/thp-theme/src/components /Archive/Archive.js":
/*!***************************************************************!*\
  !*** ./packages/thp-theme/src/components /Archive/Archive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArchiveItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArchiveItem */ \"./packages/thp-theme/src/components /Archive/ArchiveItem.js\");\n/* harmony import */ var _reusableComponents_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusableComponents/inputs */ \"./packages/thp-theme/src/components /reusableComponents/inputs.js\");\n/* harmony import */ var _reusableComponents_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/container */ \"./packages/thp-theme/src/components /reusableComponents/container.js\");\n/* harmony import */ var _Handlers_dataManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Handlers/dataManager */ \"./packages/thp-theme/src/components /Handlers/dataManager.js\");\n/* harmony import */ var _constants_searchIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/searchIcon.svg */ \"./packages/thp-theme/src/components /constants/searchIcon.svg\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Archive=({state})=>{const data=Object(_Handlers_dataManager__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])(state);const breakpoints=state.theme.breakpoints;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(_reusableComponents_container__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDiv\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(InputContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"img\",{src:_constants_searchIcon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_reusableComponents_inputs__WEBPACK_IMPORTED_MODULE_3__[\"MyInput\"],{placeholder:\"Search\"})]}),data.taxonomy&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(\"p\",{children:state.source[data.taxonomy][data.id].name}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(ArchiveContainer,{breakpoints:breakpoints,children:data.items.map(({type,id})=>{const item=state.source[type][id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_ArchiveItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{item:item},item.id);})})]});};const ArchiveContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e8izkh71\",label:\"ArchiveContainer\"})(\"@media screen and (min-width: \",props=>props.breakpoints.tablet,\"){padding:0em 1em;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:2em;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm1DIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlYXJjaEljb24uc3ZnXCI7XG5jb25zdCBBcmNoaXZlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzdGF0ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gc3RhdGUudGhlbWUuYnJlYWtwb2ludHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRpdj5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e3NlYXJjaEljb259IC8+XG4gICAgICAgIDxNeUlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICB7ZGF0YS50YXhvbm9teSAmJiA8cD57c3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWV9PC9wPn1cbiAgICAgIDxBcmNoaXZlQ29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgcmV0dXJuIDxBcmNoaXZlSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQXJjaGl2ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lckRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFyY2hpdmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuYnJlYWtwb2ludHMudGFibGV0fSkge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDJlbTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMXJlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gM2VtO1xuICAgIG1hcmdpbjogMmVtIDFlbSAxZW0gMWVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl19 */\"));const InputContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"span\", false?undefined:{target:\"e8izkh70\",label:\"InputContainer\"})( false?undefined:{name:\"ucj65j\",styles:\"display:flex;width:100%;position:relative;svg{position:relative;left:1rem;}input{display:block;width:100%;padding:1em 1em 1em 3em;margin:2em 1em 1em 1em;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tDIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlYXJjaEljb24uc3ZnXCI7XG5jb25zdCBBcmNoaXZlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzdGF0ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gc3RhdGUudGhlbWUuYnJlYWtwb2ludHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRpdj5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e3NlYXJjaEljb259IC8+XG4gICAgICAgIDxNeUlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICB7ZGF0YS50YXhvbm9teSAmJiA8cD57c3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWV9PC9wPn1cbiAgICAgIDxBcmNoaXZlQ29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgcmV0dXJuIDxBcmNoaXZlSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQXJjaGl2ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lckRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFyY2hpdmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuYnJlYWtwb2ludHMudGFibGV0fSkge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDJlbTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMXJlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gM2VtO1xuICAgIG1hcmdpbjogMmVtIDFlbSAxZW0gMWVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Archive));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcz8xYTI3Il0sIm5hbWVzIjpbIkFyY2hpdmUiLCJzdGF0ZSIsImRhdGEiLCJnZXREYXRhIiwiYnJlYWtwb2ludHMiLCJ0aGVtZSIsInNlYXJjaEljb24iLCJ0YXhvbm9teSIsInNvdXJjZSIsImlkIiwibmFtZSIsIml0ZW1zIiwibWFwIiwidHlwZSIsIml0ZW0iLCJBcmNoaXZlQ29udGFpbmVyIiwicHJvcHMiLCJ0YWJsZXQiLCJJbnB1dENvbnRhaW5lciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3FSQU9BLEtBQU1BLFFBQU8sQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQzdCLEtBQU1DLEtBQUksQ0FBR0MscUVBQU8sQ0FBQ0YsS0FBRCxDQUFwQixDQUNBLEtBQU1HLFlBQVcsQ0FBR0gsS0FBSyxDQUFDSSxLQUFOLENBQVlELFdBQWhDLENBQ0EsTUFDRSx5RUFBQywwRUFBRCxZQUNFLHdFQUFDLGNBQUQsWUFDRSw4RUFBSyxHQUFHLENBQUVFLGlFQUFWLEVBREYsQ0FFRSx1RUFBQyxrRUFBRCxFQUFTLFdBQVcsQ0FBQyxRQUFyQixFQUZGLEdBREYsQ0FLR0osSUFBSSxDQUFDSyxRQUFMLEVBQWlCLHFGQUFJTixLQUFLLENBQUNPLE1BQU4sQ0FBYU4sSUFBSSxDQUFDSyxRQUFsQixFQUE0QkwsSUFBSSxDQUFDTyxFQUFqQyxFQUFxQ0MsSUFBekMsRUFMcEIsQ0FNRSx1RUFBQyxnQkFBRCxFQUFrQixXQUFXLENBQUVOLFdBQS9CLFVBQ0dGLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxHQUFYLENBQWUsQ0FBQyxDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBRCxHQUFrQixDQUNoQyxLQUFNSyxLQUFJLENBQUdiLEtBQUssQ0FBQ08sTUFBTixDQUFhSyxJQUFiLEVBQW1CSixFQUFuQixDQUFiLENBQ0EsTUFBTyx3RUFBQyxvREFBRCxFQUEyQixJQUFJLENBQUVLLElBQWpDLEVBQWtCQSxJQUFJLENBQUNMLEVBQXZCLENBQVAsQ0FDRCxDQUhBLENBREgsRUFORixHQURGLENBZUQsQ0FsQkQsQ0FvQkEsS0FBTU0saUJBQWdCLCtKQUNhQyxLQUFELEVBQVdBLEtBQUssQ0FBQ1osV0FBTixDQUFrQmEsTUFEekMsK2lGQUF0QixDQVVBLEtBQU1DLGVBQWMsc3pGQUFwQixDQWdCZUMsdUhBQU8sQ0FBQ25CLE9BQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNlYXJjaEljb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzL3NlYXJjaEljb24uc3ZnXCI7XG5jb25zdCBBcmNoaXZlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzdGF0ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gc3RhdGUudGhlbWUuYnJlYWtwb2ludHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRpdj5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e3NlYXJjaEljb259IC8+XG4gICAgICAgIDxNeUlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICB7ZGF0YS50YXhvbm9teSAmJiA8cD57c3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWV9PC9wPn1cbiAgICAgIDxBcmNoaXZlQ29udGFpbmVyIGJyZWFrcG9pbnRzPXticmVha3BvaW50c30+XG4gICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgcmV0dXJuIDxBcmNoaXZlSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQXJjaGl2ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lckRpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEFyY2hpdmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuYnJlYWtwb2ludHMudGFibGV0fSkge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDJlbTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMXJlbTtcbiAgfVxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gM2VtO1xuICAgIG1hcmdpbjogMmVtIDFlbSAxZW0gMWVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/thp-theme/src/components /Archive/Archive.js\n");

/***/ })

})