webpackHotUpdate("the-happy-programmer",{

/***/ "./packages/thp-theme/src/components /Handlers/dataManager.js":
/*!********************************************************************!*\
  !*** ./packages/thp-theme/src/components /Handlers/dataManager.js ***!
  \********************************************************************/
/*! exports provided: getPostAuthor, getSrcSet, getMediaAttributes, getCategories, dataPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostAuthor\", function() { return getPostAuthor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSrcSet\", function() { return getSrcSet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMediaAttributes\", function() { return getMediaAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataPost\", function() { return dataPost; });\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);\nconst getPostAuthor=(state,post)=>{const author=state.source.author[post.author];return{id:author.id,name:author.name,link:author.link,description:author.description,avatar:author.avatar_urls[\"96\"]};};const getSrcSet=media=>{const srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(`${current.join(\" \")}w${index!==array.length-1?\", \":\"\"}`),\"\")||null;return srcset;};const getMediaAttributes=(state,id)=>{const media=state.source.attachment[id];if(!media)return{};const srcSet=getSrcSet(media);return{id,alt:media.title.rendered,src:media.source_url,srcSet};};const getCategories=()=>{const allTax=state.source[taxonomy];console.log(\"all tax\",allTax);};const dataPost=(state,post)=>{return{id:post.id,date:post.date,title:post.title&&post.title.rendered,link:post.link,content:post.content&&post.content.rendered,categories:getCategories(),excerpt:post.excerpt&&post.excerpt.rendered,author:getPostAuthor(state,post),img:getMediaAttributes(state,post.featured_media)};};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aHAtdGhlbWUvc3JjL2NvbXBvbmVudHMgL0hhbmRsZXJzL2RhdGFNYW5hZ2VyLmpzPzM4MzgiXSwibmFtZXMiOlsiZ2V0UG9zdEF1dGhvciIsInN0YXRlIiwicG9zdCIsImF1dGhvciIsInNvdXJjZSIsImlkIiwibmFtZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsImF2YXRhciIsImF2YXRhcl91cmxzIiwiZ2V0U3JjU2V0IiwibWVkaWEiLCJzcmNzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJtYXAiLCJpdGVtIiwic291cmNlX3VybCIsIndpZHRoIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImNvbmNhdCIsImpvaW4iLCJsZW5ndGgiLCJnZXRNZWRpYUF0dHJpYnV0ZXMiLCJhdHRhY2htZW50Iiwic3JjU2V0IiwiYWx0IiwidGl0bGUiLCJyZW5kZXJlZCIsInNyYyIsImdldENhdGVnb3JpZXMiLCJhbGxUYXgiLCJ0YXhvbm9teSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhUG9zdCIsImRhdGUiLCJjb250ZW50IiwiY2F0ZWdvcmllcyIsImV4Y2VycHQiLCJpbWciLCJmZWF0dXJlZF9tZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLEtBQU1BLGNBQWEsQ0FBRyxDQUFDQyxLQUFELENBQVFDLElBQVIsR0FBaUIsQ0FDNUMsS0FBTUMsT0FBTSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsTUFBYixDQUFvQkQsSUFBSSxDQUFDQyxNQUF6QixDQUFmLENBQ0EsTUFBTyxDQUNMRSxFQUFFLENBQUVGLE1BQU0sQ0FBQ0UsRUFETixDQUVMQyxJQUFJLENBQUVILE1BQU0sQ0FBQ0csSUFGUixDQUdMQyxJQUFJLENBQUVKLE1BQU0sQ0FBQ0ksSUFIUixDQUlMQyxXQUFXLENBQUVMLE1BQU0sQ0FBQ0ssV0FKZixDQUtMQyxNQUFNLENBQUVOLE1BQU0sQ0FBQ08sV0FBUCxDQUFtQixJQUFuQixDQUxILENBQVAsQ0FPRCxDQVRNLENBV0EsS0FBTUMsVUFBUyxDQUFJQyxLQUFELEVBQVcsQ0FDbEMsS0FBTUMsT0FBTSxDQUNWQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFsQyxDQUNFO0FBREYsQ0FFR0MsR0FGSCxDQUVRQyxJQUFELEVBQVUsQ0FBQ0EsSUFBSSxDQUFDQyxVQUFOLENBQWtCRCxJQUFJLENBQUNFLEtBQXZCLENBRmpCLENBR0U7QUFIRixDQUlHQyxNQUpILENBS0ksQ0FBQ0MsS0FBRCxDQUFRQyxPQUFSLENBQWlCQyxLQUFqQixDQUF3QkMsS0FBeEIsR0FDRUgsS0FBSyxDQUFDSSxNQUFOLENBQ0csR0FBRUgsT0FBTyxDQUFDSSxJQUFSLENBQWEsR0FBYixDQUFrQixJQUFHSCxLQUFLLEdBQUtDLEtBQUssQ0FBQ0csTUFBTixDQUFlLENBQXpCLENBQTZCLElBQTdCLENBQW9DLEVBQUcsRUFEakUsQ0FOTixDQVNJLEVBVEosR0FVTyxJQVhULENBWUEsTUFBT2hCLE9BQVAsQ0FDRCxDQWRNLENBZ0JBLEtBQU1pQixtQkFBa0IsQ0FBRyxDQUFDN0IsS0FBRCxDQUFRSSxFQUFSLEdBQWUsQ0FDL0MsS0FBTU8sTUFBSyxDQUFHWCxLQUFLLENBQUNHLE1BQU4sQ0FBYTJCLFVBQWIsQ0FBd0IxQixFQUF4QixDQUFkLENBQ0EsR0FBSSxDQUFDTyxLQUFMLENBQVksTUFBTyxFQUFQLENBRVosS0FBTW9CLE9BQU0sQ0FBR3JCLFNBQVMsQ0FBQ0MsS0FBRCxDQUF4QixDQUVBLE1BQU8sQ0FDTFAsRUFESyxDQUVMNEIsR0FBRyxDQUFFckIsS0FBSyxDQUFDc0IsS0FBTixDQUFZQyxRQUZaLENBR0xDLEdBQUcsQ0FBRXhCLEtBQUssQ0FBQ1EsVUFITixDQUlMWSxNQUpLLENBQVAsQ0FNRCxDQVpNLENBY0EsS0FBTUssY0FBYSxDQUFHLElBQU0sQ0FDakMsS0FBTUMsT0FBTSxDQUFHckMsS0FBSyxDQUFDRyxNQUFOLENBQWFtQyxRQUFiLENBQWYsQ0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixDQUF1QkgsTUFBdkIsRUFDRCxDQUhNLENBS0EsS0FBTUksU0FBUSxDQUFHLENBQUN6QyxLQUFELENBQVFDLElBQVIsR0FBaUIsQ0FDdkMsTUFBTyxDQUNMRyxFQUFFLENBQUVILElBQUksQ0FBQ0csRUFESixDQUVMc0MsSUFBSSxDQUFFekMsSUFBSSxDQUFDeUMsSUFGTixDQUdMVCxLQUFLLENBQUVoQyxJQUFJLENBQUNnQyxLQUFMLEVBQWNoQyxJQUFJLENBQUNnQyxLQUFMLENBQVdDLFFBSDNCLENBSUw1QixJQUFJLENBQUVMLElBQUksQ0FBQ0ssSUFKTixDQUtMcUMsT0FBTyxDQUFFMUMsSUFBSSxDQUFDMEMsT0FBTCxFQUFnQjFDLElBQUksQ0FBQzBDLE9BQUwsQ0FBYVQsUUFMakMsQ0FNTFUsVUFBVSxDQUFFUixhQUFhLEVBTnBCLENBT0xTLE9BQU8sQ0FBRTVDLElBQUksQ0FBQzRDLE9BQUwsRUFBZ0I1QyxJQUFJLENBQUM0QyxPQUFMLENBQWFYLFFBUGpDLENBUUxoQyxNQUFNLENBQUVILGFBQWEsQ0FBQ0MsS0FBRCxDQUFRQyxJQUFSLENBUmhCLENBU0w2QyxHQUFHLENBQUVqQixrQkFBa0IsQ0FBQzdCLEtBQUQsQ0FBUUMsSUFBSSxDQUFDOEMsY0FBYixDQVRsQixDQUFQLENBV0QsQ0FaTSIsImZpbGUiOiIuL3BhY2thZ2VzL3RocC10aGVtZS9zcmMvY29tcG9uZW50cyAvSGFuZGxlcnMvZGF0YU1hbmFnZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0UG9zdEF1dGhvciA9IChzdGF0ZSwgcG9zdCkgPT4ge1xuICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW3Bvc3QuYXV0aG9yXTtcbiAgcmV0dXJuIHtcbiAgICBpZDogYXV0aG9yLmlkLFxuICAgIG5hbWU6IGF1dGhvci5uYW1lLFxuICAgIGxpbms6IGF1dGhvci5saW5rLFxuICAgIGRlc2NyaXB0aW9uOiBhdXRob3IuZGVzY3JpcHRpb24sXG4gICAgYXZhdGFyOiBhdXRob3IuYXZhdGFyX3VybHNbXCI5NlwiXSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTcmNTZXQgPSAobWVkaWEpID0+IHtcbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuICByZXR1cm4gc3Jjc2V0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1lZGlhQXR0cmlidXRlcyA9IChzdGF0ZSwgaWQpID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG4gIGlmICghbWVkaWEpIHJldHVybiB7fTtcblxuICBjb25zdCBzcmNTZXQgPSBnZXRTcmNTZXQobWVkaWEpO1xuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgYWx0OiBtZWRpYS50aXRsZS5yZW5kZXJlZCxcbiAgICBzcmM6IG1lZGlhLnNvdXJjZV91cmwsXG4gICAgc3JjU2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFRheCA9IHN0YXRlLnNvdXJjZVt0YXhvbm9teV07XG4gIGNvbnNvbGUubG9nKFwiYWxsIHRheFwiLCBhbGxUYXgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRhdGFQb3N0ID0gKHN0YXRlLCBwb3N0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHBvc3QuaWQsXG4gICAgZGF0ZTogcG9zdC5kYXRlLFxuICAgIHRpdGxlOiBwb3N0LnRpdGxlICYmIHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgbGluazogcG9zdC5saW5rLFxuICAgIGNvbnRlbnQ6IHBvc3QuY29udGVudCAmJiBwb3N0LmNvbnRlbnQucmVuZGVyZWQsXG4gICAgY2F0ZWdvcmllczogZ2V0Q2F0ZWdvcmllcygpLFxuICAgIGV4Y2VycHQ6IHBvc3QuZXhjZXJwdCAmJiBwb3N0LmV4Y2VycHQucmVuZGVyZWQsXG4gICAgYXV0aG9yOiBnZXRQb3N0QXV0aG9yKHN0YXRlLCBwb3N0KSxcbiAgICBpbWc6IGdldE1lZGlhQXR0cmlidXRlcyhzdGF0ZSwgcG9zdC5mZWF0dXJlZF9tZWRpYSksXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/thp-theme/src/components /Handlers/dataManager.js\n");

/***/ })

})