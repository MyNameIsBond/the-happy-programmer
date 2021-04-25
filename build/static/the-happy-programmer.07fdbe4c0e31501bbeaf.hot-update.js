webpackHotUpdate("the-happy-programmer",{

/***/ "./node_modules/frontity-contact-form-7/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/frontity-contact-form-7/src/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _processors_cf7Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processors/cf7Form */ \"./node_modules/frontity-contact-form-7/src/processors/cf7Form.js\");\n/* harmony import */ var _processors_cf7Inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processors/cf7Inputs */ \"./node_modules/frontity-contact-form-7/src/processors/cf7Inputs.js\");\n/* harmony import */ var _processors_cf7Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processors/cf7Textarea */ \"./node_modules/frontity-contact-form-7/src/processors/cf7Textarea.js\");\n/* harmony import */ var _processors_cf7HiddenInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processors/cf7HiddenInputs */ \"./node_modules/frontity-contact-form-7/src/processors/cf7HiddenInputs.js\");\n/* harmony import */ var _processors_cf7Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./processors/cf7Select */ \"./node_modules/frontity-contact-form-7/src/processors/cf7Select.js\");\n/* harmony import */ var _processors_cf7Span__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./processors/cf7Span */ \"./node_modules/frontity-contact-form-7/src/processors/cf7Span.js\");\nconst MyForm={state:{cf7:{forms:{}}},libraries:{html2react:{processors:[_processors_cf7Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"],_processors_cf7Span__WEBPACK_IMPORTED_MODULE_8__[\"default\"],_processors_cf7Inputs__WEBPACK_IMPORTED_MODULE_4__[\"default\"],_processors_cf7HiddenInputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"],_processors_cf7Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"],_processors_cf7Select__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]}},actions:{cf7:{/**\n\t\t\t * Initialize the form input object in the state.\n\t\t\t *\n\t\t\t * @param {Object} state State.\n\t\t\t * @return {Function}\n\t\t\t */initForm:({state})=>id=>{if(!state.cf7.forms[id]){state.cf7.forms[id]={inputVals:{}};}},/**\n\t\t\t * Initialize the input values in the state.\n\t\t\t *\n\t\t\t * @param {Object} state State.\n\t\t\t * @return {Function}\n\t\t\t */initInput:({state})=>({id,inputName})=>{state.cf7.forms[id].inputVals=''!==inputName?{[inputName]:''}:{};},/**\n\t\t\t * Handle on change event when user enters values in the form.\n\t\t\t *\n\t\t\t * Set the input value entered by the user in the state.\n\t\t\t *\n\t\t\t * @param {Object} state State.\n\t\t\t * @return {Function}\n\t\t\t */changeInputValue:({state})=>({id,inputName,value})=>{state.cf7.forms[id].inputVals[inputName]=value;},/**\n\t\t\t * Add hidden input values.\n\t\t\t *\n\t\t\t * @param {Object} state State.\n\t\t\t * @return {Function}\n\t\t\t */addHiddenInputs:({state})=>({id,inputName,value})=>{state.cf7.forms[id].inputVals[inputName]=value;},/**\n\t\t\t * Handle form submit.\n\t\t\t *\n\t\t\t * @param {Object} state State.\n\t\t\t * @return {Function}\n\t\t\t */sendForm:({state})=>async id=>{const myData=state.cf7.forms[id].inputVals;// Create new form data to send the post request with form data.\nlet formData=new FormData();Object.keys(myData).forEach(key=>{formData.append(key,myData[key]);});// CF7 REST API URL.\nconsole.log(\"POST:\",state.source.api);const url=`${state.source.api}contact-form-7/v1/contact-forms/${id}/feedback`;// Post Request.\nconst res=await fetch(url,{method:'POST',body:formData});const body=await res.json();console.log(\"POST:\",body);let invalidFieldsObj=[];// Clear previous message.\nstate.cf7.forms[id].message=[];state.cf7.forms[id].loading=false;// Clear previous errors if any\nif(state.cf7.forms[id].invalidFields){state.cf7.forms[id].invalidFields=[];}/**\n\t\t\t\t * Populate state with the errors, or thank-you message...\n\t\t\t\t */if('mail_sent'===body.status){state.cf7.forms[id].status=\"sent\";state.cf7.forms[id].message=body.message;// Once the email is sent, clear the form fields.\nstate.cf7.forms[id].inputVals=[];}else if('validation_failed'===body.status||'mail_failed'===body.status){if(body.invalidFields){body.invalidFields.forEach(item=>{let errorKey=item.into.replace('span.wpcf7-form-control-wrap.','');if(errorKey){invalidFieldsObj[errorKey]=item.message;}});state.cf7.forms[id].invalidFields=invalidFieldsObj;}state.cf7.forms[id].status=\"failed\";/**\n\t\t\t\t\t * Populate errors from the response so React components\n\t\t\t\t\t * can see them and re-render appropriately\n\t\t\t\t\t */state.cf7.forms[id].validationErrors=body.message;}}}}};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MyForm));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnJvbnRpdHktY29udGFjdC1mb3JtLTcvc3JjL2luZGV4LmpzPzQ0YTMiXSwibmFtZXMiOlsiTXlGb3JtIiwic3RhdGUiLCJjZjciLCJmb3JtcyIsImxpYnJhcmllcyIsImh0bWwycmVhY3QiLCJwcm9jZXNzb3JzIiwiY2Y3Rm9ybSIsImNmN1NwYW4iLCJjZjdJbnB1dHMiLCJjZjdIaWRkZW5JbnB1dHMiLCJjZjdUZXh0YXJlYSIsImNmN1NlbGVjdCIsImFjdGlvbnMiLCJpbml0Rm9ybSIsImlkIiwiaW5wdXRWYWxzIiwiaW5pdElucHV0IiwiaW5wdXROYW1lIiwiY2hhbmdlSW5wdXRWYWx1ZSIsInZhbHVlIiwiYWRkSGlkZGVuSW5wdXRzIiwic2VuZEZvcm0iLCJteURhdGEiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwic291cmNlIiwiYXBpIiwidXJsIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwianNvbiIsImludmFsaWRGaWVsZHNPYmoiLCJtZXNzYWdlIiwibG9hZGluZyIsImludmFsaWRGaWVsZHMiLCJzdGF0dXMiLCJpdGVtIiwiZXJyb3JLZXkiLCJpbnRvIiwicmVwbGFjZSIsInZhbGlkYXRpb25FcnJvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsS0FBTUEsT0FBTSxDQUFHLENBRWRDLEtBQUssQ0FBRSxDQUNOQyxHQUFHLENBQUUsQ0FDSkMsS0FBSyxDQUFFLEVBREgsQ0FEQyxDQUZPLENBUWRDLFNBQVMsQ0FBRSxDQUNWQyxVQUFVLENBQUUsQ0FDWEMsVUFBVSxDQUFFLENBQUNDLDJEQUFELENBQVVDLDJEQUFWLENBQW1CQyw2REFBbkIsQ0FBOEJDLG1FQUE5QixDQUErQ0MsK0RBQS9DLENBQTREQyw2REFBNUQsQ0FERCxDQURGLENBUkcsQ0FjZEMs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RUFBakIsRUFBc0I2QixhQUF0QixDQUFzQ0gsZ0JBQXRDLENBQ0EsQ0FFRHhDLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxLQUFWLENBQWlCWSxFQUFqQixFQUFzQjhCLE1BQXRCLENBQStCLFFBQS9CLENBRUE7QUFDTDtBQUNBO0FBQ0EsUUFDSzVDLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxLQUFWLENBQWlCWSxFQUFqQixFQUFzQm1DLGdCQUF0QixDQUF5Q1gsSUFBSSxDQUFDRyxPQUE5QyxDQUVBLENBRUQsQ0EzSEcsQ0FERyxDQWRLLENBQWYsQ0FnSmVTLHVIQUFPLENBQUVuRCxNQUFGLENBQXRCIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Zyb250aXR5LWNvbnRhY3QtZm9ybS03L3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBjZjdGb3JtIGZyb20gJy4vcHJvY2Vzc29ycy9jZjdGb3JtJztcbmltcG9ydCBjZjdJbnB1dHMgZnJvbSBcIi4vcHJvY2Vzc29ycy9jZjdJbnB1dHNcIjtcbmltcG9ydCBjZjdUZXh0YXJlYSBmcm9tIFwiLi9wcm9jZXNzb3JzL2NmN1RleHRhcmVhXCI7XG5pbXBvcnQgY2Y3SGlkZGVuSW5wdXRzIGZyb20gXCIuL3Byb2Nlc3NvcnMvY2Y3SGlkZGVuSW5wdXRzXCI7XG5pbXBvcnQgY2Y3U2VsZWN0IGZyb20gXCIuL3Byb2Nlc3NvcnMvY2Y3U2VsZWN0XCI7XG5pbXBvcnQgY2Y3U3BhbiBmcm9tIFwiLi9wcm9jZXNzb3JzL2NmN1NwYW5cIjtcblxuY29uc3QgTXlGb3JtID0ge1xuXG5cdHN0YXRlOiB7XG5cdFx0Y2Y3OiB7XG5cdFx0XHRmb3Jtczoge31cblx0XHR9XG5cdH0sXG5cblx0bGlicmFyaWVzOiB7XG5cdFx0aHRtbDJyZWFjdDoge1xuXHRcdFx0cHJvY2Vzc29yczogW2NmN0Zvcm0sIGNmN1NwYW4sIGNmN0lucHV0cywgY2Y3SGlkZGVuSW5wdXRzLCBjZjdUZXh0YXJlYSwgY2Y3U2VsZWN0XVxuXHRcdH1cblx0fSxcblxuXHRhY3Rpb25zOiB7XG5cdFx0Y2Y3OiB7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogSW5pdGlhbGl6ZSB0aGUgZm9ybSBpbnB1dCBvYmplY3QgaW4gdGhlIHN0YXRlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBTdGF0ZS5cblx0XHRcdCAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHRcdFx0ICovXG5cdFx0XHRpbml0Rm9ybTogKCB7IHN0YXRlIH0gKSA9PiAoIGlkICkgPT4ge1xuXG5cdFx0XHRcdGlmICggIXN0YXRlLmNmNy5mb3Jtc1sgaWQgXSApIHtcblx0XHRcdFx0XHRzdGF0ZS5jZjcuZm9ybXNbIGlkIF0gPSB7IGlucHV0VmFsczoge30gfTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbml0aWFsaXplIHRoZSBpbnB1dCB2YWx1ZXMgaW4gdGhlIHN0YXRlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBTdGF0ZS5cblx0XHRcdCAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHRcdFx0ICovXG5cdFx0XHRpbml0SW5wdXQ6ICggeyBzdGF0ZSB9ICkgPT4gKCB7IGlkLCBpbnB1dE5hbWUgfSApID0+IHtcblx0XHRcdFx0c3RhdGUuY2Y3LmZvcm1zWyBpZCBdLmlucHV0VmFscyA9ICggJycgIT09IGlucHV0TmFtZSApID8geyBbIGlucHV0TmFtZSBdOiAnJyB9IDoge307XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhbmRsZSBvbiBjaGFuZ2UgZXZlbnQgd2hlbiB1c2VyIGVudGVycyB2YWx1ZXMgaW4gdGhlIGZvcm0uXG5cdFx0XHQgKlxuXHRcdFx0ICogU2V0IHRoZSBpbnB1dCB2YWx1ZSBlbnRlcmVkIGJ5IHRoZSB1c2VyIGluIHRoZSBzdGF0ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgU3RhdGUuXG5cdFx0XHQgKiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0XHRcdCAqL1xuXHRcdFx0Y2hhbmdlSW5wdXRWYWx1ZTogKCB7IHN0YXRlIH0gKSA9PiAoIHsgaWQsIGlucHV0TmFtZSwgdmFsdWUgfSApID0+IHtcblx0XHRcdFx0c3RhdGUuY2Y3LmZvcm1zWyBpZCBdLmlucHV0VmFsc1sgaW5wdXROYW1lIF0gPSB2YWx1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQWRkIGhpZGRlbiBpbnB1dCB2YWx1ZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIFN0YXRlLlxuXHRcdFx0ICogQHJldHVybiB7RnVuY3Rpb259XG5cdFx0XHQgKi9cblx0XHRcdGFkZEhpZGRlbklucHV0czogKCB7IHN0YXRlIH0gKSA9PiAoIHsgaWQsIGlucHV0TmFtZSwgdmFsdWUgfSApID0+IHtcblx0XHRcdFx0c3RhdGUuY2Y3LmZvcm1zWyBpZCBdLmlucHV0VmFsc1sgaW5wdXROYW1lIF0gPSB2YWx1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogSGFuZGxlIGZvcm0gc3VibWl0LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBTdGF0ZS5cblx0XHRcdCAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHRcdFx0ICovXG5cdFx0XHRzZW5kRm9ybTogKCB7IHN0YXRlIH0gKSA9PiBhc3luYyBpZCA9PiB7XG5cblx0XHRcdFx0Y29uc3QgbXlEYXRhID0gc3RhdGUuY2Y3LmZvcm1zWyBpZCBdLmlucHV0VmFscztcblxuXHRcdFx0XHQvLyBDcmVhdGUgbmV3IGZvcm0gZGF0YSB0byBzZW5kIHRoZSBwb3N0IHJlcXVlc3Qgd2l0aCBmb3JtIGRhdGEuXG5cdFx0XHRcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdFx0XHRcdE9iamVjdC5rZXlzKCBteURhdGEgKS5mb3JFYWNoKCAoIGtleSApID0+IHtcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoIGtleSwgbXlEYXRhWyBrZXkgXSApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gQ0Y3IFJFU1QgQVBJIFVSTC5cblx0XHRcdFx0Y29uc29sZS5sb2coXCJQT1NUOlwiLHN0YXRlLnNvdXJjZS5hcGkpXG5cblx0XHRcdFx0Y29uc3QgdXJsID0gYCR7c3RhdGUuc291cmNlLmFwaX1jb250YWN0LWZvcm0tNy92MS9jb250YWN0LWZvcm1zLyR7IGlkIH0vZmVlZGJhY2tgO1xuXG5cdFx0XHRcdC8vIFBvc3QgUmVxdWVzdC5cblx0XHRcdFx0Y29uc3QgcmVzICA9IGF3YWl0IGZldGNoKCB1cmwsIHtcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRib2R5OiBmb3JtRGF0YVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBPU1Q6XCIsYm9keSlcblx0XHRcdFx0bGV0IGludmFsaWRGaWVsZHNPYmogPSBbXTtcblxuXHRcdFx0XHQvLyBDbGVhciBwcmV2aW91cyBtZXNzYWdlLlxuXHRcdFx0XHRzdGF0ZS5jZjcuZm9ybXNbIGlkIF0ubWVzc2FnZSA9IFtdO1xuXHRcdFx0XHRzdGF0ZS5jZjcuZm9ybXNbIGlkIF0ubG9hZGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIENsZWFyIHByZXZpb3VzIGVycm9ycyBpZiBhbnlcblx0XHRcdFx0aWYgKCBzdGF0ZS5jZjcuZm9ybXNbIGlkIF0uaW52YWxpZEZpZWxkcyApIHtcblx0XHRcdFx0XHRzdGF0ZS5jZjcuZm9ybXNbIGlkIF0uaW52YWxpZEZpZWxkcyA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIFBvcHVsYXRlIHN0YXRlIHdpdGggdGhlIGVycm9ycywgb3IgdGhhbmsteW91IG1lc3NhZ2UuLi5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGlmICggJ21haWxfc2VudCcgPT09IGJvZHkuc3RhdHVzICkge1xuXG5cdFx0XHRcdFx0c3RhdGUuY2Y3LmZvcm1zWyBpZCBdLnN0YXR1cyAgPSBcInNlbnRcIjtcblx0XHRcdFx0XHRzdGF0ZS5jZjcuZm9ybXNbIGlkIF0ubWVzc2FnZSA9IGJvZHkubWVzc2FnZTtcblxuXHRcdFx0XHRcdC8vIE9uY2UgdGhlIGVtYWlsIGlzIHNlbnQsIGNsZWFyIHRoZSBmb3JtIGZpZWxkcy5cblx0XHRcdFx0XHRzdGF0ZS5jZjcuZm9ybXNbIGlkIF0uaW5wdXRWYWxzID0gW107XG5cblx0XHRcdFx0fSBlbHNlIGlmICggJ3ZhbGlkYXRpb25fZmFpbGVkJyA9PT0gYm9keS5zdGF0dXMgfHwgJ21haWxfZmFpbGVkJyA9PT0gYm9keS5zdGF0dXMgKSB7XG5cblx0XHRcdFx0XHRpZihib2R5LmludmFsaWRGaWVsZHMpe1xuXHRcdFx0XHRcdFx0Ym9keS5pbnZhbGlkRmllbGRzLmZvckVhY2goIGl0ZW0gPT4ge1xuXG5cdFx0XHRcdFx0XHRcdGxldCBlcnJvcktleSA9IGl0ZW0uaW50by5yZXBsYWNlKCdzcGFuLndwY2Y3LWZvcm0tY29udHJvbC13cmFwLicsJycpO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGVycm9yS2V5ICkge1xuXHRcdFx0XHRcdFx0XHRcdGludmFsaWRGaWVsZHNPYmpbZXJyb3JLZXldID0gaXRlbS5tZXNzYWdlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0c3RhdGUuY2Y3LmZvcm1zWyBpZCBdLmludmFsaWRGaWVsZHMgPSBpbnZhbGlkRmllbGRzT2JqO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN0YXRlLmNmNy5mb3Jtc1sgaWQgXS5zdGF0dXMgPSBcImZhaWxlZFwiO1xuXG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogUG9wdWxhdGUgZXJyb3JzIGZyb20gdGhlIHJlc3BvbnNlIHNvIFJlYWN0IGNvbXBvbmVudHNcblx0XHRcdFx0XHQgKiBjYW4gc2VlIHRoZW0gYW5kIHJlLXJlbmRlciBhcHByb3ByaWF0ZWx5XG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0c3RhdGUuY2Y3LmZvcm1zWyBpZCBdLnZhbGlkYXRpb25FcnJvcnMgPSBib2R5Lm1lc3NhZ2U7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIE15Rm9ybSApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/frontity-contact-form-7/src/index.js\n");

/***/ })

})