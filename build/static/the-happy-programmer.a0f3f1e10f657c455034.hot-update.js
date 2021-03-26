webpackHotUpdate("the-happy-programmer",{

/***/ "./packages/thp-theme/src/components /Archive/Archive.js":
/*!***************************************************************!*\
  !*** ./packages/thp-theme/src/components /Archive/Archive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArchiveItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArchiveItem */ \"./packages/thp-theme/src/components /Archive/ArchiveItem.js\");\n/* harmony import */ var _reusableComponents_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusableComponents/inputs */ \"./packages/thp-theme/src/components /reusableComponents/inputs.js\");\n/* harmony import */ var _reusableComponents_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusableComponents/container */ \"./packages/thp-theme/src/components /reusableComponents/container.js\");\n/* harmony import */ var _Handlers_dataManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Handlers/dataManager */ \"./packages/thp-theme/src/components /Handlers/dataManager.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Archive=({state})=>{const data=Object(_Handlers_dataManager__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])(state);const breakpoints=state.theme.breakpoints;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(_reusableComponents_container__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDiv\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(InputContainer,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_reusableComponents_inputs__WEBPACK_IMPORTED_MODULE_3__[\"MyInput\"],{}),data.taxonomy&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"p\",{children:state.source[data.taxonomy][data.id].name})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(ArchiveContainer,{breakpoints:breakpoints,children:data.items.map(({type,id})=>{const item=state.source[type][id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_ArchiveItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{item:item},item.id);})})]});};const ArchiveContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e8izkh71\",label:\"ArchiveContainer\"})(\"@media screen and (min-width: \",props=>props.breakpoints.tablet,\"){padding:0em 1em;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:2em;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm1DIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5jb25zdCBBcmNoaXZlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzdGF0ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gc3RhdGUudGhlbWUuYnJlYWtwb2ludHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRpdj5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPE15SW5wdXQgLz5cbiAgICAgICAge2RhdGEudGF4b25vbXkgJiYgPHA+e3N0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lfTwvcD59XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgPEFyY2hpdmVDb250YWluZXIgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfT5cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICByZXR1cm4gPEFyY2hpdmVJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9BcmNoaXZlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyRGl2PlxuICApO1xufTtcblxuY29uc3QgQXJjaGl2ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZzogMGVtIDFlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBpbmhlcml0O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl19 */\"));const InputContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e8izkh70\",label:\"InputContainer\"})( false?undefined:{name:\"1iqat8d\",styles:\"width:inherit;input{width:100%;margin-left:0;margin-right:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2lDIiwiZmlsZSI6Ii9Vc2Vycy90b255L0RvY3VtZW50cy90aGUtaGFwcHktcHJvZ3JhbW1lci9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5jb25zdCBBcmNoaXZlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzdGF0ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gc3RhdGUudGhlbWUuYnJlYWtwb2ludHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRpdj5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPE15SW5wdXQgLz5cbiAgICAgICAge2RhdGEudGF4b25vbXkgJiYgPHA+e3N0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lfTwvcD59XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgPEFyY2hpdmVDb250YWluZXIgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfT5cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICByZXR1cm4gPEFyY2hpdmVJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9BcmNoaXZlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyRGl2PlxuICApO1xufTtcblxuY29uc3QgQXJjaGl2ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZzogMGVtIDFlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBpbmhlcml0O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Archive));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcz8xYTI3Il0sIm5hbWVzIjpbIkFyY2hpdmUiLCJzdGF0ZSIsImRhdGEiLCJnZXREYXRhIiwiYnJlYWtwb2ludHMiLCJ0aGVtZSIsInRheG9ub215Iiwic291cmNlIiwiaWQiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwiaXRlbSIsIkFyY2hpdmVDb250YWluZXIiLCJwcm9wcyIsInRhYmxldCIsIklucHV0Q29udGFpbmVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztxUkFNQSxLQUFNQSxRQUFPLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUM3QixLQUFNQyxLQUFJLENBQUdDLHFFQUFPLENBQUNGLEtBQUQsQ0FBcEIsQ0FDQSxLQUFNRyxZQUFXLENBQUdILEtBQUssQ0FBQ0ksS0FBTixDQUFZRCxXQUFoQyxDQUNBLE1BQ0UseUVBQUMsMEVBQUQsWUFDRSx3RUFBQyxjQUFELFlBQ0UsdUVBQUMsa0VBQUQsSUFERixDQUVHRixJQUFJLENBQUNJLFFBQUwsRUFBaUIscUZBQUlMLEtBQUssQ0FBQ00sTUFBTixDQUFhTCxJQUFJLENBQUNJLFFBQWxCLEVBQTRCSixJQUFJLENBQUNNLEVBQWpDLEVBQXFDQyxJQUF6QyxFQUZwQixHQURGLENBS0UsdUVBQUMsZ0JBQUQsRUFBa0IsV0FBVyxDQUFFTCxXQUEvQixVQUNHRixJQUFJLENBQUNRLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLENBQUMsQ0FBRUMsSUFBRixDQUFRSixFQUFSLENBQUQsR0FBa0IsQ0FDaEMsS0FBTUssS0FBSSxDQUFHWixLQUFLLENBQUNNLE1BQU4sQ0FBYUssSUFBYixFQUFtQkosRUFBbkIsQ0FBYixDQUNBLE1BQU8sd0VBQUMsb0RBQUQsRUFBMkIsSUFBSSxDQUFFSyxJQUFqQyxFQUFrQkEsSUFBSSxDQUFDTCxFQUF2QixDQUFQLENBQ0QsQ0FIQSxDQURILEVBTEYsR0FERixDQWNELENBakJELENBbUJBLEtBQU1NLGlCQUFnQiwrSkFDYUMsS0FBRCxFQUFXQSxLQUFLLENBQUNYLFdBQU4sQ0FBa0JZLE1BRHpDLG10RUFBdEIsQ0FVQSxLQUFNQyxlQUFjLDYzRUFBcEIsQ0FTZUMsdUhBQU8sQ0FBQ2xCLE9BQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0FyY2hpdmUvQXJjaGl2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gXCIuL0FyY2hpdmVJdGVtXCI7XG5pbXBvcnQgeyBNeUlucHV0IH0gZnJvbSBcIi4uL3JldXNhYmxlQ29tcG9uZW50cy9pbnB1dHNcIjtcbmltcG9ydCB7IENvbnRhaW5lckRpdiB9IGZyb20gXCIuLi9yZXVzYWJsZUNvbXBvbmVudHMvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4uL0hhbmRsZXJzL2RhdGFNYW5hZ2VyXCI7XG5jb25zdCBBcmNoaXZlID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShzdGF0ZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gc3RhdGUudGhlbWUuYnJlYWtwb2ludHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lckRpdj5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPE15SW5wdXQgLz5cbiAgICAgICAge2RhdGEudGF4b25vbXkgJiYgPHA+e3N0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lfTwvcD59XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgPEFyY2hpdmVDb250YWluZXIgYnJlYWtwb2ludHM9e2JyZWFrcG9pbnRzfT5cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICByZXR1cm4gPEFyY2hpdmVJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9BcmNoaXZlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyRGl2PlxuICApO1xufTtcblxuY29uc3QgQXJjaGl2ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5icmVha3BvaW50cy50YWJsZXR9KSB7XG4gICAgcGFkZGluZzogMGVtIDFlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBpbmhlcml0O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEFyY2hpdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/thp-theme/src/components /Archive/Archive.js\n");

/***/ })

})