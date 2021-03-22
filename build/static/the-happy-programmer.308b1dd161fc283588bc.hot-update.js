webpackHotUpdate("the-happy-programmer",{

/***/ "./packages/thp-theme/src/components /Handlers/dataManager.js":
/*!********************************************************************!*\
  !*** ./packages/thp-theme/src/components /Handlers/dataManager.js ***!
  \********************************************************************/
/*! exports provided: getPostAuthor, getSrcSet, getMediaAttributes, getCategories, dataPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostAuthor\", function() { return getPostAuthor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSrcSet\", function() { return getSrcSet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMediaAttributes\", function() { return getMediaAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataPost\", function() { return dataPost; });\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);\nconst getPostAuthor=(state,post)=>{const author=state.source.author[post.author];return{id:author.id,name:author.name,link:author.link,description:author.description,avatar:author.avatar_urls[\"96\"]};};const getSrcSet=media=>{const srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(`${current.join(\" \")}w${index!==array.length-1?\", \":\"\"}`),\"\")||null;return srcset;};const getMediaAttributes=(state,id)=>{const media=state.source.attachment[id];if(!media)return{};const srcSet=getSrcSet(media);return{id,alt:media.title.rendered,src:media.source_url,srcSet};};const getCategories=(state,type)=>{const allTax=state.source[type];const w=state.source[\"categories\"];console.log(\"all w\",w);};const dataPost=(state,post)=>{return{id:post.id,date:post.date,title:post.title&&post.title.rendered,link:post.link,content:post.content&&post.content.rendered,categories:getCategories(state,type),excerpt:post.excerpt&&post.excerpt.rendered,author:getPostAuthor(state,post),img:getMediaAttributes(state,post.featured_media)};};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0hhbmRsZXJzL2RhdGFNYW5hZ2VyLmpzPzM4MzgiXSwibmFtZXMiOlsiZ2V0UG9zdEF1dGhvciIsInN0YXRlIiwicG9zdCIsImF1dGhvciIsInNvdXJjZSIsImlkIiwibmFtZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsImF2YXRhciIsImF2YXRhcl91cmxzIiwiZ2V0U3JjU2V0IiwibWVkaWEiLCJzcmNzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJtYXAiLCJpdGVtIiwic291cmNlX3VybCIsIndpZHRoIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImNvbmNhdCIsImpvaW4iLCJsZW5ndGgiLCJnZXRNZWRpYUF0dHJpYnV0ZXMiLCJhdHRhY2htZW50Iiwic3JjU2V0IiwiYWx0IiwidGl0bGUiLCJyZW5kZXJlZCIsInNyYyIsImdldENhdGVnb3JpZXMiLCJ0eXBlIiwiYWxsVGF4IiwidyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhUG9zdCIsImRhdGUiLCJjb250ZW50IiwiY2F0ZWdvcmllcyIsImV4Y2VycHQiLCJpbWciLCJmZWF0dXJlZF9tZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLEtBQU1BLGNBQWEsQ0FBRyxDQUFDQyxLQUFELENBQVFDLElBQVIsR0FBaUIsQ0FDNUMsS0FBTUMsT0FBTSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsTUFBYixDQUFvQkQsSUFBSSxDQUFDQyxNQUF6QixDQUFmLENBQ0EsTUFBTyxDQUNMRSxFQUFFLENBQUVGLE1BQU0sQ0FBQ0UsRUFETixDQUVMQyxJQUFJLENBQUVILE1BQU0sQ0FBQ0csSUFGUixDQUdMQyxJQUFJLENBQUVKLE1BQU0sQ0FBQ0ksSUFIUixDQUlMQyxXQUFXLENBQUVMLE1BQU0sQ0FBQ0ssV0FKZixDQUtMQyxNQUFNLENBQUVOLE1BQU0sQ0FBQ08sV0FBUCxDQUFtQixJQUFuQixDQUxILENBQVAsQ0FPRCxDQVRNLENBV0EsS0FBTUMsVUFBUyxDQUFJQyxLQUFELEVBQVcsQ0FDbEMsS0FBTUMsT0FBTSxDQUNWQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFsQyxDQUNFO0FBREYsQ0FFR0MsR0FGSCxDQUVRQyxJQUFELEVBQVUsQ0FBQ0EsSUFBSSxDQUFDQyxVQUFOLENBQWtCRCxJQUFJLENBQUNFLEtBQXZCLENBRmpCLENBR0U7QUFIRixDQUlHQyxNQUpILENBS0ksQ0FBQ0MsS0FBRCxDQUFRQyxPQUFSLENBQWlCQyxLQUFqQixDQUF3QkMsS0FBeEIsR0FDRUgsS0FBSyxDQUFDSSxNQUFOLENBQ0csR0FBRUgsT0FBTyxDQUFDSSxJQUFSLENBQWEsR0FBYixDQUFrQixJQUFHSCxLQUFLLEdBQUtDLEtBQUssQ0FBQ0csTUFBTixDQUFlLENBQXpCLENBQTZCLElBQTdCLENBQW9DLEVBQUcsRUFEakUsQ0FOTixDQVNJLEVBVEosR0FVTyxJQVhULENBWUEsTUFBT2hCLE9BQVAsQ0FDRCxDQWRNLENBZ0JBLEtBQU1pQixtQkFBa0IsQ0FBRyxDQUFDN0IsS0FBRCxDQUFRSSxFQUFSLEdBQWUsQ0FDL0MsS0FBTU8sTUFBSyxDQUFHWCxLQUFLLENBQUNHLE1BQU4sQ0FBYTJCLFVBQWIsQ0FBd0IxQixFQUF4QixDQUFkLENBQ0EsR0FBSSxDQUFDTyxLQUFMLENBQVksTUFBTyxFQUFQLENBRVosS0FBTW9CLE9BQU0sQ0FBR3JCLFNBQVMsQ0FBQ0MsS0FBRCxDQUF4QixDQUVBLE1BQU8sQ0FDTFAsRUFESyxDQUVMNEIsR0FBRyxDQUFFckIsS0FBSyxDQUFDc0IsS0FBTixDQUFZQyxRQUZaLENBR0xDLEdBQUcsQ0FBRXhCLEtBQUssQ0FBQ1EsVUFITixDQUlMWSxNQUpLLENBQVAsQ0FNRCxDQVpNLENBY0EsS0FBTUssY0FBYSxDQUFHLENBQUNwQyxLQUFELENBQVFxQyxJQUFSLEdBQWlCLENBQzVDLEtBQU1DLE9BQU0sQ0FBR3RDLEtBQUssQ0FBQ0csTUFBTixDQUFha0MsSUFBYixDQUFmLENBQ0EsS0FBTUUsRUFBQyxDQUFHdkMsS0FBSyxDQUFDRyxNQUFOLENBQWEsWUFBYixDQUFWLENBQ0FxQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQXFCRixDQUFyQixFQUNELENBSk0sQ0FNQSxLQUFNRyxTQUFRLENBQUcsQ0FBQzFDLEtBQUQsQ0FBUUMsSUFBUixHQUFpQixDQUN2QyxNQUFPLENBQ0xHLEVBQUUsQ0FBRUgsSUFBSSxDQUFDRyxFQURKLENBRUx1QyxJQUFJLENBQUUxQyxJQUFJLENBQUMwQyxJQUZOLENBR0xWLEtBQUssQ0FBRWhDLElBQUksQ0FBQ2dDLEtBQUwsRUFBY2hDLElBQUksQ0FBQ2dDLEtBQUwsQ0FBV0MsUUFIM0IsQ0FJTDVCLElBQUksQ0FBRUwsSUFBSSxDQUFDSyxJQUpOLENBS0xzQyxPQUFPLENBQUUzQyxJQUFJLENBQUMyQyxPQUFMLEVBQWdCM0MsSUFBSSxDQUFDMkMsT0FBTCxDQUFhVixRQUxqQyxDQU1MVyxVQUFVLENBQUVULGFBQWEsQ0FBQ3BDLEtBQUQsQ0FBUXFDLElBQVIsQ0FOcEIsQ0FPTFMsT0FBTyxDQUFFN0MsSUFBSSxDQUFDNkMsT0FBTCxFQUFnQjdDLElBQUksQ0FBQzZDLE9BQUwsQ0FBYVosUUFQakMsQ0FRTGhDLE1BQU0sQ0FBRUgsYUFBYSxDQUFDQyxLQUFELENBQVFDLElBQVIsQ0FSaEIsQ0FTTDhDLEdBQUcsQ0FBRWxCLGtCQUFrQixDQUFDN0IsS0FBRCxDQUFRQyxJQUFJLENBQUMrQyxjQUFiLENBVGxCLENBQVAsQ0FXRCxDQVpNIiwiZmlsZSI6Ii4vcGFja2FnZXMvdGhwLXRoZW1lL3NyYy9jb21wb25lbnRzIC9IYW5kbGVycy9kYXRhTWFuYWdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRQb3N0QXV0aG9yID0gKHN0YXRlLCBwb3N0KSA9PiB7XG4gIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbcG9zdC5hdXRob3JdO1xuICByZXR1cm4ge1xuICAgIGlkOiBhdXRob3IuaWQsXG4gICAgbmFtZTogYXV0aG9yLm5hbWUsXG4gICAgbGluazogYXV0aG9yLmxpbmssXG4gICAgZGVzY3JpcHRpb246IGF1dGhvci5kZXNjcmlwdGlvbixcbiAgICBhdmF0YXI6IGF1dGhvci5hdmF0YXJfdXJsc1tcIjk2XCJdLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNyY1NldCA9IChtZWRpYSkgPT4ge1xuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG4gIHJldHVybiBzcmNzZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWVkaWFBdHRyaWJ1dGVzID0gKHN0YXRlLCBpZCkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcbiAgaWYgKCFtZWRpYSkgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHNyY1NldCA9IGdldFNyY1NldChtZWRpYSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBhbHQ6IG1lZGlhLnRpdGxlLnJlbmRlcmVkLFxuICAgIHNyYzogbWVkaWEuc291cmNlX3VybCxcbiAgICBzcmNTZXQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IChzdGF0ZSwgdHlwZSkgPT4ge1xuICBjb25zdCBhbGxUYXggPSBzdGF0ZS5zb3VyY2VbdHlwZV07XG4gIGNvbnN0IHcgPSBzdGF0ZS5zb3VyY2VbXCJjYXRlZ29yaWVzXCJdO1xuICBjb25zb2xlLmxvZyhcImFsbCB3XCIsIHcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRhdGFQb3N0ID0gKHN0YXRlLCBwb3N0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHBvc3QuaWQsXG4gICAgZGF0ZTogcG9zdC5kYXRlLFxuICAgIHRpdGxlOiBwb3N0LnRpdGxlICYmIHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgbGluazogcG9zdC5saW5rLFxuICAgIGNvbnRlbnQ6IHBvc3QuY29udGVudCAmJiBwb3N0LmNvbnRlbnQucmVuZGVyZWQsXG4gICAgY2F0ZWdvcmllczogZ2V0Q2F0ZWdvcmllcyhzdGF0ZSwgdHlwZSksXG4gICAgZXhjZXJwdDogcG9zdC5leGNlcnB0ICYmIHBvc3QuZXhjZXJwdC5yZW5kZXJlZCxcbiAgICBhdXRob3I6IGdldFBvc3RBdXRob3Ioc3RhdGUsIHBvc3QpLFxuICAgIGltZzogZ2V0TWVkaWFBdHRyaWJ1dGVzKHN0YXRlLCBwb3N0LmZlYXR1cmVkX21lZGlhKSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/thp-theme/src/components /Handlers/dataManager.js\n");

/***/ })

})