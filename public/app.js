/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./resources/js/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Collection.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Collection.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['title', 'coverImg', 'coverImgPath', 'link'],\n  data: function data() {\n    return {\n      Globals: Globals\n    };\n  },\n  computed: {\n    fullImgPath: function fullImgPath() {\n      return \"\".concat(this.Globals.apiUrl).concat(this.coverImgPath);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/components/Collection.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GalleryImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GalleryImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['title', 'description', 'imgPath'],\n  data: function data() {\n    return {\n      Globals: Globals,\n      shareText: 'Check this out!'\n    };\n  },\n  computed: {\n    fullImgPath: function fullImgPath() {\n      return \"\".concat(this.Globals.apiUrl).concat(this.imgPath);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/components/GalleryImage.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/FooterTemplate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templates/FooterTemplate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {\n    getCurrentYear: function getCurrentYear() {\n      return new Date().getFullYear();\n    }\n  },\n  mounted: function mounted() {\n    //run when all initialization is done\n    this.$emit('initialized', 'footerTemplate');\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/templates/FooterTemplate.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/HeaderTemplate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templates/HeaderTemplate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      Globals: Globals,\n      collections: []\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    axios.get(\"\".concat(this.Globals.apiUrl, \"/api/collections\")).then(function (_ref) {\n      var data = _ref.data;\n      _this.collections = data; //run when all initialization is done\n\n      _this.$emit('initialized', 'headerTemplate');\n    });\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/templates/HeaderTemplate.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/about.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/about.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  created: function created() {\n    //run when all initialization is done\n    this.$emit('initialized', 'routerView');\n  },\n  data: function data() {\n    return {\n      Globals: Globals\n    };\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/views/about.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/contact.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/contact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  created: function created() {\n    //run when all initialization is done\n    this.$emit('initialized', 'routerView');\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/views/contact.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/gallery.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/gallery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_GalleryImage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/GalleryImage.vue */ \"./resources/js/components/GalleryImage.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    'gallery-image': _components_GalleryImage_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      Globals: Globals,\n      collection: {}\n    };\n  },\n  watch: {\n    '$route.params.collection': 'getCollectionData'\n  },\n  created: function created() {\n    var _this = this;\n\n    this.getCollectionData();\n    /**\n     * lightgallery.js Sharer\n     */\n    //delegated on click, so only run once, no need to refresh\n\n    $('body').on('click', '#lg-share-facebook, #lg-share-twitter, #lg-share-pinterest', function (e) {\n      e.preventDefault();\n      var details = $('.lg-sub-html');\n      var imageLink = $('#lg-download').prop('href');\n\n      _this.Globals.customMethods.openNewWindow(e.currentTarget.href, null, 0.5, 0.3);\n    });\n  },\n  methods: {\n    getCollectionData: function getCollectionData() {\n      var _this2 = this;\n\n      axios.get(\"\".concat(this.Globals.apiUrl, \"/api/collections/\").concat(this.$route.params.collection)).then(function (_ref) {\n        var data = _ref.data;\n        _this2.collection = data; //run when all initialization is done\n\n        _this2.$emit('initialized', 'routerView');\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/views/gallery.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Collection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Collection.vue */ \"./resources/js/components/Collection.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    'collection': _components_Collection_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      Globals: Globals,\n      collections: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    axios.get(\"\".concat(this.Globals.apiUrl, \"/api/collections\")).then(function (_ref) {\n      var data = _ref.data;\n      _this.collections = data; //run when all initialization is done\n\n      _this.$emit('initialized', 'routerView');\n    });\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/views/index.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/services.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/services.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  created: function created() {\n    //run when all initialization is done\n    this.$emit('initialized', 'routerView');\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/views/services.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Collection.vue?vue&type=template&id=c3aa476e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Collection.vue?vue&type=template&id=c3aa476e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"swiper-slide\" }, [\n    _c(\"div\", { staticClass: \"image-wrap\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"image-info\" },\n        [\n          _c(\"h2\", { staticClass: \"mb-3\" }, [_vm._v(_vm._s(this.title))]),\n          _vm._v(\" \"),\n          _c(\n            \"router-link\",\n            {\n              staticClass: \"btn btn-outline-white py-2 px-4\",\n              attrs: { to: \"/collections/\" + _vm.link }\n            },\n            [_vm._v(\"More Photos\")]\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"img\", {\n        staticClass: \"swiper-lazy\",\n        attrs: { \"data-src\": _vm.fullImgPath, alt: _vm.coverImg }\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"swiper-lazy-preloader\" })\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/components/Collection.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GalleryImage.vue?vue&type=template&id=3235bc94&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GalleryImage.vue?vue&type=template&id=3235bc94& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass:\n        \"col-sm-6 col-md-6 col-lg-4 col-xl-3 item d-flex justify-content-between align-items-center px-4\",\n      attrs: {\n        \"data-tweet-text\": _vm.shareText,\n        \"data-pinterest-text\": _vm.shareText,\n        \"data-aos\": \"fade\",\n        \"data-src\": \"\" + _vm.fullImgPath,\n        \"data-sub-html\":\n          \"<h4>\" + _vm.title + \"</h4><p>\" + _vm.description + \"</p>\"\n      }\n    },\n    [\n      _c(\n        \"a\",\n        {\n          staticClass:\n            \"w-100 d-flex align-items-center justify-content-between\",\n          attrs: { href: _vm.fullImgPath }\n        },\n        [\n          _c(\"img\", {\n            staticClass: \"img-thumbnail mx-auto p-2\",\n            staticStyle: {\n              \"border-width\": \"0.5em\",\n              \"border-color\": \"#141414\",\n              \"background-color\": \"#353535\"\n            },\n            attrs: { src: _vm.fullImgPath, alt: \"IMage\" }\n          })\n        ]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/components/GalleryImage.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/FooterTemplate.vue?vue&type=template&id=408b6de9&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templates/FooterTemplate.vue?vue&type=template&id=408b6de9& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"footer py-4\" }, [\n    _c(\"div\", { staticClass: \"container-fluid\" }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Copyright ©\" +\n            _vm._s(_vm.getCurrentYear) +\n            \" All rights reserved | This template is made with \"\n        ),\n        _c(\"i\", {\n          staticClass: \"icon-heart-o\",\n          attrs: { \"aria-hidden\": \"true\" }\n        }),\n        _vm._v(\" by \"),\n        _c(\"a\", { attrs: { href: \"https://colorlib.com\", target: \"_blank\" } }, [\n          _vm._v(\"Colorlib\")\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/templates/FooterTemplate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/HeaderTemplate.vue?vue&type=template&id=a148804a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/templates/HeaderTemplate.vue?vue&type=template&id=a148804a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\n      \"header\",\n      { staticClass: \"site-navbar py-3\", attrs: { role: \"banner\" } },\n      [\n        _c(\"div\", { staticClass: \"container-fluid\" }, [\n          _c(\"div\", { staticClass: \"row align-items-center\" }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-6 col-xl-2\",\n                attrs: { \"data-aos\": \"fade-down\" }\n              },\n              [\n                _c(\n                  \"h1\",\n                  { staticClass: \"mb-0\" },\n                  [\n                    _c(\n                      \"router-link\",\n                      {\n                        staticClass: \"text-black h2 mb-0\",\n                        attrs: { to: \"/\", exact: \"\" }\n                      },\n                      [_vm._v(\"PhotoBlog\")]\n                    )\n                  ],\n                  1\n                )\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-10 col-md-8 d-none d-xl-block\",\n                attrs: { \"data-aos\": \"fade-down\" }\n              },\n              [\n                _c(\n                  \"nav\",\n                  {\n                    staticClass:\n                      \"site-navigation position-relative text-right text-lg-center\",\n                    attrs: { role: \"navigation\" }\n                  },\n                  [\n                    _c(\n                      \"ul\",\n                      {\n                        staticClass:\n                          \"site-menu js-clone-nav mx-auto d-none d-lg-block\"\n                      },\n                      [\n                        _c(\n                          \"router-link\",\n                          { attrs: { tag: \"li\", to: \"/\", exact: \"\" } },\n                          [_c(\"a\", [_vm._v(\"Home\")])]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"li\", { staticClass: \"has-children\" }, [\n                          _c(\"a\", [_vm._v(\"Gallery\")]),\n                          _vm._v(\" \"),\n                          _c(\n                            \"ul\",\n                            { staticClass: \"dropdown\" },\n                            _vm._l(_vm.collections, function(\n                              collection,\n                              index\n                            ) {\n                              return _c(\n                                \"li\",\n                                { key: index },\n                                [\n                                  _c(\n                                    \"router-link\",\n                                    {\n                                      attrs: {\n                                        to: \"/collections/\" + collection.link\n                                      }\n                                    },\n                                    [_vm._v(_vm._s(collection.title))]\n                                  )\n                                ],\n                                1\n                              )\n                            }),\n                            0\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\n                          \"router-link\",\n                          { attrs: { tag: \"li\", to: \"/about\" } },\n                          [_c(\"a\", [_vm._v(\"About\")])]\n                        )\n                      ],\n                      1\n                    )\n                  ]\n                )\n              ]\n            ),\n            _vm._v(\" \"),\n            _vm._m(1)\n          ])\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"site-mobile-menu\" }, [\n      _c(\"div\", { staticClass: \"site-mobile-menu-header\" }, [\n        _c(\"div\", { staticClass: \"site-mobile-menu-close mt-3\" }, [\n          _c(\"span\", { staticClass: \"icon-close2 js-menu-toggle\" })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"site-mobile-menu-body\" })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass: \"col-6 col-xl-2 text-right\",\n        attrs: { \"data-aos\": \"fade-down\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"d-none d-xl-inline-block\" }),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"d-inline-block d-xl-none ml-md-0 mr-auto py-3\",\n            staticStyle: { position: \"relative\", top: \"3px\" }\n          },\n          [\n            _c(\n              \"a\",\n              {\n                staticClass: \"site-menu-toggle js-menu-toggle text-black\",\n                attrs: { href: \"#\" }\n              },\n              [_c(\"span\", { staticClass: \"icon-menu h3\" })]\n            )\n          ]\n        )\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/templates/HeaderTemplate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/about.vue?vue&type=template&id=9bb8c8c4&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/about.vue?vue&type=template&id=9bb8c8c4& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { \"data-aos\": \"fade\" } }, [\n    _c(\"div\", { staticClass: \"container-fluid\" }, [\n      _c(\"div\", { staticClass: \"row justify-content-center\" }, [\n        _c(\"div\", { staticClass: \"col-md-7\" }, [\n          _vm._m(0),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row mb-5\" }, [\n            _c(\"div\", { staticClass: \"col-md-7\" }, [\n              _c(\"img\", {\n                staticClass: \"img-fluid\",\n                attrs: {\n                  src: _vm.Globals.apiUrl + \"/images/about-me-display-img.png\",\n                  alt: \"Images\"\n                }\n              })\n            ]),\n            _vm._v(\" \"),\n            _vm._m(1)\n          ])\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row mb-5 site-section\" }, [\n      _c(\"div\", { staticClass: \"col-12 \" }, [\n        _c(\"h2\", { staticClass: \"site-section-heading text-center\" }, [\n          _vm._v(\"About Me\")\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-md-4 ml-auto\" }, [\n      _c(\"h3\", { staticClass: \"display-4 text-dark\" }, [_vm._v(\"Mj Tapiru\")]),\n      _vm._v(\" \"),\n      _c(\"div\", {}, [\n        _c(\"p\", { staticClass: \"text-justify\" }, [\n          _vm._v(\"A Developer and Photography Hobbyist.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"text-justify\" }, [\n          _vm._v(\n            \"I like taking candid shots. It is where you can capture the purest \\n                            form of people's emotions. The moment when they show their most naked feelings.\"\n          )\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/views/about.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/contact.vue?vue&type=template&id=8bafff1e&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/contact.vue?vue&type=template&id=8bafff1e& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"site-section\", attrs: { \"data-aos\": \"fade\" } },\n      [\n        _c(\"div\", { staticClass: \"container-fluid\" }, [\n          _c(\"div\", { staticClass: \"row justify-content-center\" }, [\n            _c(\"div\", { staticClass: \"col-md-7\" }, [\n              _c(\"div\", { staticClass: \"row mb-5\" }, [\n                _c(\"div\", { staticClass: \"col-12 \" }, [\n                  _c(\n                    \"h2\",\n                    { staticClass: \"site-section-heading text-center\" },\n                    [_vm._v(\"Contact Us\")]\n                  )\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\"div\", { staticClass: \"col-lg-8 mb-5\" }, [\n                  _c(\"form\", { attrs: { action: \"#\" } }, [\n                    _c(\"div\", { staticClass: \"row form-group\" }, [\n                      _c(\"div\", { staticClass: \"col-md-6 mb-3 mb-md-0\" }, [\n                        _c(\n                          \"label\",\n                          {\n                            staticClass: \"text-black\",\n                            attrs: { for: \"fname\" }\n                          },\n                          [_vm._v(\"First Name\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"input\", {\n                          staticClass: \"form-control\",\n                          attrs: { type: \"text\", id: \"fname\" }\n                        })\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"div\", { staticClass: \"col-md-6\" }, [\n                        _c(\n                          \"label\",\n                          {\n                            staticClass: \"text-black\",\n                            attrs: { for: \"lname\" }\n                          },\n                          [_vm._v(\"Last Name\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"input\", {\n                          staticClass: \"form-control\",\n                          attrs: { type: \"text\", id: \"lname\" }\n                        })\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"row form-group\" }, [\n                      _c(\"div\", { staticClass: \"col-md-12\" }, [\n                        _c(\n                          \"label\",\n                          {\n                            staticClass: \"text-black\",\n                            attrs: { for: \"email\" }\n                          },\n                          [_vm._v(\"Email\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"input\", {\n                          staticClass: \"form-control\",\n                          attrs: { type: \"email\", id: \"email\" }\n                        })\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"row form-group\" }, [\n                      _c(\"div\", { staticClass: \"col-md-12\" }, [\n                        _c(\n                          \"label\",\n                          {\n                            staticClass: \"text-black\",\n                            attrs: { for: \"subject\" }\n                          },\n                          [_vm._v(\"Subject\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"input\", {\n                          staticClass: \"form-control\",\n                          attrs: { type: \"subject\", id: \"subject\" }\n                        })\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"row form-group\" }, [\n                      _c(\"div\", { staticClass: \"col-md-12\" }, [\n                        _c(\n                          \"label\",\n                          {\n                            staticClass: \"text-black\",\n                            attrs: { for: \"message\" }\n                          },\n                          [_vm._v(\"Message\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"textarea\", {\n                          staticClass: \"form-control\",\n                          attrs: {\n                            name: \"message\",\n                            id: \"message\",\n                            cols: \"30\",\n                            rows: \"7\",\n                            placeholder: \"Write your notes or questions here...\"\n                          }\n                        })\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"div\", { staticClass: \"row form-group\" }, [\n                      _c(\"div\", { staticClass: \"col-md-12\" }, [\n                        _c(\"input\", {\n                          staticClass: \"btn btn-primary py-2 px-4 text-white\",\n                          attrs: { type: \"submit\", value: \"Send Message\" }\n                        })\n                      ])\n                    ])\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"col-lg-3 ml-auto\" }, [\n                  _c(\"div\", { staticClass: \"mb-3 bg-white\" }, [\n                    _c(\"p\", { staticClass: \"mb-0 font-weight-bold\" }, [\n                      _vm._v(\"Address\")\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"p\", { staticClass: \"mb-4\" }, [\n                      _vm._v(\n                        \"203 Fake St. Mountain View, San Francisco, California, USA\"\n                      )\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"p\", { staticClass: \"mb-0 font-weight-bold\" }, [\n                      _vm._v(\"Phone\")\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"p\", { staticClass: \"mb-4\" }, [\n                      _c(\"a\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"+1 232 3235 324\")\n                      ])\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"p\", { staticClass: \"mb-0 font-weight-bold\" }, [\n                      _vm._v(\"Email Address\")\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"p\", { staticClass: \"mb-0\" }, [\n                      _c(\"a\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"youremail@domain.com\")\n                      ])\n                    ])\n                  ])\n                ])\n              ])\n            ])\n          ])\n        ])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/views/contact.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/gallery.vue?vue&type=template&id=379c6aa3&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/gallery.vue?vue&type=template&id=379c6aa3& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"site-section\", attrs: { \"data-aos\": \"fade\" } },\n    [\n      _c(\"div\", { staticClass: \"container-fluid\" }, [\n        _c(\"div\", { staticClass: \"row justify-content-center\" }, [\n          _c(\"div\", { staticClass: \"col-md-7\" }, [\n            _c(\"div\", { staticClass: \"row mb-5\" }, [\n              _c(\"div\", { staticClass: \"col-12 \" }, [\n                _c(\"h2\", { staticClass: \"site-section-heading text-center\" }, [\n                  _vm._v(_vm._s(_vm.collection.title))\n                ])\n              ])\n            ])\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"row py-4 d-flex\",\n            staticStyle: { \"background-color\": \"#353535\" },\n            attrs: { id: \"lightgallery\" }\n          },\n          _vm._l(_vm.collection.gallery, function(galleryImg, index) {\n            return _c(\"gallery-image\", {\n              key: index,\n              attrs: {\n                title: galleryImg.title,\n                description: galleryImg.description,\n                imgPath: galleryImg.imgPath\n              }\n            })\n          }),\n          1\n        )\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/views/gallery.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/index.vue?vue&type=template&id=5c49133a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/index.vue?vue&type=template&id=5c49133a& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"container-fluid\",\n      attrs: { \"data-aos\": \"fade\", \"data-aos-delay\": \"500\" }\n    },\n    [\n      _c(\"div\", { staticClass: \"swiper-container images-carousel\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"swiper-wrapper\" },\n          _vm._l(_vm.collections, function(collection, index) {\n            return _c(\"collection\", {\n              key: index,\n              attrs: {\n                title: collection.title,\n                coverImg: collection.coverImg,\n                coverImgPath: collection.coverImgPath,\n                link: collection.link\n              }\n            })\n          }),\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"swiper-pagination\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"swiper-button-prev\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"swiper-button-next\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"swiper-scrollbar\" })\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/views/index.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/services.vue?vue&type=template&id=57ce615d&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/services.vue?vue&type=template&id=57ce615d& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"site-section\", attrs: { \"data-aos\": \"fade\" } },\n      [\n        _c(\"div\", { staticClass: \"container-fluid\" }, [\n          _c(\"div\", { staticClass: \"row justify-content-center\" }, [\n            _c(\"div\", { staticClass: \"col-md-7\" }, [\n              _c(\"div\", { staticClass: \"row mb-5\" }, [\n                _c(\"div\", { staticClass: \"col-12 \" }, [\n                  _c(\n                    \"h2\",\n                    { staticClass: \"site-section-heading text-center\" },\n                    [_vm._v(\"Our Services\")]\n                  )\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5\"\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"h-100 p-4 p-lg-5 bg-light site-block-feature-7\"\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass:\n                            \"icon flaticon-camera display-3 text-primary mb-4 d-block\"\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"h3\", { staticClass: \"text-black h4\" }, [\n                          _vm._v(\"Camera\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.\"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\n                            \"strong\",\n                            { staticClass: \"font-weight-bold text-primary\" },\n                            [_vm._v(\"$29\")]\n                          )\n                        ])\n                      ]\n                    )\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5\"\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"h-100 p-4 p-lg-5 bg-light site-block-feature-7\"\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass:\n                            \"icon flaticon-picture display-3 text-primary mb-4 d-block\"\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"h3\", { staticClass: \"text-black h4\" }, [\n                          _vm._v(\"Wedding Photography\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.\"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\n                            \"strong\",\n                            { staticClass: \"font-weight-bold text-primary\" },\n                            [_vm._v(\"$46\")]\n                          )\n                        ])\n                      ]\n                    )\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5\"\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"h-100 p-4 p-lg-5 bg-light site-block-feature-7\"\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass:\n                            \"icon flaticon-sheep display-3 text-primary mb-4 d-block\"\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"h3\", { staticClass: \"text-black h4\" }, [\n                          _vm._v(\"Animal\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.\"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\n                            \"strong\",\n                            { staticClass: \"font-weight-bold text-primary\" },\n                            [_vm._v(\"$24\")]\n                          )\n                        ])\n                      ]\n                    )\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5\"\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"h-100 p-4 p-lg-5 bg-light site-block-feature-7\"\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass:\n                            \"icon flaticon-frame display-3 text-primary mb-4 d-block\"\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"h3\", { staticClass: \"text-black h4\" }, [\n                          _vm._v(\"Portrait\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.\"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\n                            \"strong\",\n                            { staticClass: \"font-weight-bold text-primary\" },\n                            [_vm._v(\"$40\")]\n                          )\n                        ])\n                      ]\n                    )\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5\"\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"h-100 p-4 p-lg-5 bg-light site-block-feature-7\"\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass:\n                            \"icon flaticon-eiffel-tower display-3 text-primary mb-4 d-block\"\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"h3\", { staticClass: \"text-black h4\" }, [\n                          _vm._v(\"Travel\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.\"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\n                            \"strong\",\n                            { staticClass: \"font-weight-bold text-primary\" },\n                            [_vm._v(\"$35\")]\n                          )\n                        ])\n                      ]\n                    )\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5\"\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"h-100 p-4 p-lg-5 bg-light site-block-feature-7\"\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass:\n                            \"icon flaticon-video-play display-3 text-primary mb-4 d-block\"\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"h3\", { staticClass: \"text-black h4\" }, [\n                          _vm._v(\"Video Editing\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.\"\n                          )\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\n                            \"strong\",\n                            { staticClass: \"font-weight-bold text-primary\" },\n                            [_vm._v(\"$15\")]\n                          )\n                        ])\n                      ]\n                    )\n                  ]\n                )\n              ])\n            ])\n          ])\n        ])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./resources/js/views/services.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./resources/js/Globals.js":
/*!*********************************!*\
  !*** ./resources/js/Globals.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Globals = {\n  /**\r\n   * Globals\r\n   */\n  apiUrl: 'https://photography-blog-api.herokuapp.com',\n  //apiUrl: 'http://localhost:5000',\n\n  /**\r\n   * Globals end\r\n   */\n\n  /**\r\n   * Custom Methods\r\n   */\n  customMethods: {\n    openNewWindow: function openNewWindow() {\n      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '_blank';\n      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Blank Page';\n      var heightPercentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;\n      var widthPercentage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.3;\n      var selectedMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';\n      var iNewWindowHeight = screen.height * heightPercentage;\n      var iNewWindowWidth = screen.width * widthPercentage;\n      var modes = {\n        'default': {\n          left: 25,\n          top: 100\n        },\n        'centered': {\n          left: (screen.height - iNewWindowHeight) / 2,\n          top: (screen.width - iNewWindowWidth) / 2\n        }\n      };\n      var mode = modes[selectedMode];\n      var aWindowFeatures = ['top=' + mode.left, 'left=' + mode.height, 'height=' + iNewWindowHeight, 'width=' + iNewWindowWidth];\n      window.open(url, title, aWindowFeatures.join(','));\n    }\n  },\n\n  /**\r\n   * Template\r\n   */\n  template: {\n    initialize: function initialize() {\n      AOS.init({\n        duration: 800,\n        easing: 'slide',\n        once: true\n      });\n      jQuery(document).ready(function ($) {\n        \"use strict\";\n\n        var siteMenuClone = function siteMenuClone() {\n          $('.js-clone-nav').each(function () {\n            var $this = $(this);\n            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');\n          });\n          setTimeout(function () {\n            var counter = 0;\n            $('.site-mobile-menu .has-children').each(function () {\n              var $this = $(this);\n              $this.prepend('<span class=\"arrow-collapse collapsed\">');\n              $this.find('.arrow-collapse').attr({\n                'data-toggle': 'collapse',\n                'data-target': '#collapseItem' + counter\n              });\n              $this.find('> ul').attr({\n                'class': 'collapse',\n                'id': 'collapseItem' + counter\n              });\n              counter++;\n            });\n          }, 1000);\n          $('body').on('click', '.arrow-collapse', function (e) {\n            var $this = $(this);\n\n            if ($this.closest('li').find('.collapse').hasClass('show')) {\n              $this.removeClass('active');\n            } else {\n              $this.addClass('active');\n            }\n\n            e.preventDefault();\n          });\n          $(window).resize(function () {\n            var $this = $(this),\n                w = $this.width();\n\n            if (w > 768) {\n              if ($('body').hasClass('offcanvas-menu')) {\n                $('body').removeClass('offcanvas-menu');\n              }\n            }\n          });\n          $('body').on('click', '.js-menu-toggle', function (e) {\n            var $this = $(this);\n            e.preventDefault();\n\n            if ($('body').hasClass('offcanvas-menu')) {\n              $('body').removeClass('offcanvas-menu');\n              $this.removeClass('active');\n            } else {\n              $('body').addClass('offcanvas-menu');\n              $this.addClass('active');\n            }\n          }); // click outisde offcanvas\n\n          $(document).mouseup(function (e) {\n            var container = $(\".site-mobile-menu\");\n\n            if (!container.is(e.target) && container.has(e.target).length === 0) {\n              if ($('body').hasClass('offcanvas-menu')) {\n                $('body').removeClass('offcanvas-menu');\n              }\n            }\n          });\n        };\n\n        siteMenuClone();\n\n        var sitePlusMinus = function sitePlusMinus() {\n          $('.js-btn-minus').on('click', function (e) {\n            e.preventDefault();\n\n            if ($(this).closest('.input-group').find('.form-control').val() != 0) {\n              $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);\n            } else {\n              $(this).closest('.input-group').find('.form-control').val(parseInt(0));\n            }\n          });\n          $('.js-btn-plus').on('click', function (e) {\n            e.preventDefault();\n            $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);\n          });\n        }; // sitePlusMinus();\n\n\n        var siteSliderRange = function siteSliderRange() {\n          $(\"#slider-range\").slider({\n            range: true,\n            min: 0,\n            max: 500,\n            values: [75, 300],\n            slide: function slide(event, ui) {\n              $(\"#amount\").val(\"$\" + ui.values[0] + \" - $\" + ui.values[1]);\n            }\n          });\n          $(\"#amount\").val(\"$\" + $(\"#slider-range\").slider(\"values\", 0) + \" - $\" + $(\"#slider-range\").slider(\"values\", 1));\n        }; // siteSliderRange();\n\n\n        var siteMagnificPopup = function siteMagnificPopup() {\n          $('.image-popup').magnificPopup({\n            type: 'image',\n            closeOnContentClick: true,\n            closeBtnInside: false,\n            fixedContentPos: true,\n            mainClass: 'mfp-no-margins mfp-with-zoom',\n            // class to remove default margin from left and right side\n            gallery: {\n              enabled: true,\n              navigateByImgClick: true,\n              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image\n\n            },\n            image: {\n              verticalFit: true\n            },\n            zoom: {\n              enabled: true,\n              duration: 300 // don't foget to change the duration also in CSS\n\n            }\n          });\n          $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({\n            disableOn: 700,\n            type: 'iframe',\n            mainClass: 'mfp-fade',\n            removalDelay: 160,\n            preloader: false,\n            fixedContentPos: false\n          });\n        };\n\n        siteMagnificPopup();\n\n        var siteCarousel = function siteCarousel() {\n          if ($('.nonloop-block-13').length > 0) {\n            $('.nonloop-block-13').owlCarousel({\n              center: false,\n              items: 1,\n              loop: false,\n              stagePadding: 0,\n              margin: 20,\n              nav: true,\n              navText: ['<span class=\"icon-arrow_back\">', '<span class=\"icon-arrow_forward\">'],\n              responsive: {\n                600: {\n                  margin: 20,\n                  items: 2\n                },\n                1000: {\n                  margin: 20,\n                  stagePadding: 0,\n                  items: 2\n                },\n                1200: {\n                  margin: 20,\n                  stagePadding: 0,\n                  items: 3\n                }\n              }\n            });\n          }\n\n          $('.slide-one-item').owlCarousel({\n            center: false,\n            items: 1,\n            loop: true,\n            stagePadding: 0,\n            margin: 0,\n            autoplay: true,\n            pauseOnHover: false,\n            nav: true,\n            navText: ['<span class=\"icon-keyboard_arrow_left\">', '<span class=\"icon-keyboard_arrow_right\">']\n          });\n        };\n\n        siteCarousel();\n\n        var siteStellar = function siteStellar() {\n          $(window).stellar({\n            responsive: false,\n            parallaxBackgrounds: true,\n            parallaxElements: true,\n            horizontalScrolling: false,\n            hideDistantElements: false,\n            scrollProperty: 'scroll'\n          });\n        };\n\n        siteStellar();\n\n        var siteCountDown = function siteCountDown() {\n          $('#date-countdown').countdown('2020/10/10', function (event) {\n            var $this = $(this).html(event.strftime('' + '<span class=\"countdown-block\"><span class=\"label\">%w</span> weeks </span>' + '<span class=\"countdown-block\"><span class=\"label\">%d</span> days </span>' + '<span class=\"countdown-block\"><span class=\"label\">%H</span> hr </span>' + '<span class=\"countdown-block\"><span class=\"label\">%M</span> min </span>' + '<span class=\"countdown-block\"><span class=\"label\">%S</span> sec</span>'));\n          });\n        };\n\n        siteCountDown();\n\n        var siteDatePicker = function siteDatePicker() {\n          if ($('.datepicker').length > 0) {\n            $('.datepicker').datepicker();\n          }\n        };\n\n        siteDatePicker();\n\n        var swiperSetting = function swiperSetting() {\n          var _ref;\n\n          var mySwiper = new Swiper('.swiper-container', (_ref = {\n            /**\r\n             * For Preloading\r\n             */\n            preloadImages: false,\n            //Disable preloading of all images\n            lazy: true,\n            //Enable lazy loading\n            autoplay: {\n              delay: 5000,\n              disableOnInteraction: false\n            },\n            // Optional parameters\n            // direction: 'horizontal',\n            // loop: true,\n            // If we need pagination\n            pagination: {\n              el: '.swiper-pagination'\n            },\n            // Navigation arrows\n            navigation: {\n              nextEl: '.swiper-button-next',\n              prevEl: '.swiper-button-prev'\n            },\n            mousewheel: {\n              invert: false,\n              forceToAxis: true,\n              releaseOnEdges: true\n            },\n            // direction: 'vertical',\n            freeMode: true,\n            // slidesPerView: 'auto',\n            spaceBetween: 30\n          }, _defineProperty(_ref, \"mousewheel\", true), _defineProperty(_ref, \"pagination\", {\n            el: '.swiper-pagination',\n            clickable: true\n          }), _defineProperty(_ref, \"slidesPerView\", 3), _defineProperty(_ref, \"breakpoints\", {\n            668: {\n              slidesPerView: 1\n            },\n            1024: {\n              slidesPerView: 2\n            }\n          }), _defineProperty(_ref, \"spaceBetween\", 20), _defineProperty(_ref, \"watchSlidesVisibility\", true), _ref));\n          /**\r\n           * PATCH, to enable mousewheel scrolling on mySwiper Immediately\r\n           * without the need to leave and enter the mySwiper area after route mount\r\n           */\n\n          if (mySwiper.mousewheel !== undefined) {\n            mySwiper.mousewheel.handleMouseEnter();\n          }\n        };\n\n        swiperSetting();\n      });\n      this.refreshLightGallery();\n    },\n    refreshLightGallery: function refreshLightGallery() {\n      $(document).ready(function () {\n        lightGallery(document.getElementById('lightgallery'), {\n          thumbnail: true,\n          googlePlus: false,\n          //Google plus is deleted\n          twitter: false //does not accept two hash('#') parameters\n\n        });\n      });\n    }\n  }\n  /**\r\n   * template end\r\n   */\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globals);\n\n//# sourceURL=webpack:///./resources/js/Globals.js?");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ \"./resources/js/Globals.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _templates_FooterTemplate_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/FooterTemplate.vue */ \"./resources/js/templates/FooterTemplate.vue\");\n/* harmony import */ var _templates_HeaderTemplate_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/HeaderTemplate.vue */ \"./resources/js/templates/HeaderTemplate.vue\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./resources/js/routes.js\");\n\n\n\n\nwindow.Globals = _Globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.axios = axios__WEBPACK_IMPORTED_MODULE_3___default.a;\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // /**\n//  * Components\n//  */\n\n\n\n\nnew vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  el: '#app',\n  router: _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  components: {\n    'header-template': _templates_HeaderTemplate_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    'footer-template': _templates_FooterTemplate_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: {\n    Globals: _Globals__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    componentsToCheckInitialization: {\n      headerTemplate: false,\n      routerView: false,\n      footerTemplate: false\n    }\n  },\n  mounted: function mounted() {},\n  methods: {\n    onComponentInitialized: function onComponentInitialized(componentName) {\n      this.componentsToCheckInitialization[componentName] = true;\n\n      if (this.isComponentsInitialized === true) {\n        //if all are already initialized(true), run initialize method.\n        this.Globals.template.initialize();\n      }\n    }\n  },\n  computed: {\n    isComponentsInitialized: function isComponentsInitialized() {\n      for (var component in this.componentsToCheckInitialization) {\n        if (this.componentsToCheckInitialization[component] === false) {\n          return false;\n        }\n      }\n\n      return true;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/app.js?");

/***/ }),

/***/ "./resources/js/components/Collection.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Collection.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Collection_vue_vue_type_template_id_c3aa476e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=c3aa476e& */ \"./resources/js/components/Collection.vue?vue&type=template&id=c3aa476e&\");\n/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ \"./resources/js/components/Collection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Collection_vue_vue_type_template_id_c3aa476e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Collection_vue_vue_type_template_id_c3aa476e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/Collection.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/Collection.vue?");

/***/ }),

/***/ "./resources/js/components/Collection.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Collection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Collection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/components/Collection.vue?");

/***/ }),

/***/ "./resources/js/components/Collection.vue?vue&type=template&id=c3aa476e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Collection.vue?vue&type=template&id=c3aa476e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_c3aa476e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=template&id=c3aa476e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Collection.vue?vue&type=template&id=c3aa476e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_c3aa476e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_c3aa476e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/components/Collection.vue?");

/***/ }),

/***/ "./resources/js/components/GalleryImage.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/GalleryImage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GalleryImage_vue_vue_type_template_id_3235bc94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryImage.vue?vue&type=template&id=3235bc94& */ \"./resources/js/components/GalleryImage.vue?vue&type=template&id=3235bc94&\");\n/* harmony import */ var _GalleryImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryImage.vue?vue&type=script&lang=js& */ \"./resources/js/components/GalleryImage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _GalleryImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _GalleryImage_vue_vue_type_template_id_3235bc94___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _GalleryImage_vue_vue_type_template_id_3235bc94___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/components/GalleryImage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/components/GalleryImage.vue?");

/***/ }),

/***/ "./resources/js/components/GalleryImage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/GalleryImage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryImage.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GalleryImage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/components/GalleryImage.vue?");

/***/ }),

/***/ "./resources/js/components/GalleryImage.vue?vue&type=template&id=3235bc94&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/GalleryImage.vue?vue&type=template&id=3235bc94& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryImage_vue_vue_type_template_id_3235bc94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryImage.vue?vue&type=template&id=3235bc94& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GalleryImage.vue?vue&type=template&id=3235bc94&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryImage_vue_vue_type_template_id_3235bc94___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryImage_vue_vue_type_template_id_3235bc94___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/components/GalleryImage.vue?");

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Globals */ \"./resources/js/Globals.js\");\n\n\nvar routes = [{\n  path: \"/\",\n  component: __webpack_require__(/*! ./views/index.vue */ \"./resources/js/views/index.vue\").default\n}, {\n  path: \"/about\",\n  component: __webpack_require__(/*! ./views/about.vue */ \"./resources/js/views/about.vue\").default\n}, {\n  path: \"/contact\",\n  component: __webpack_require__(/*! ./views/contact.vue */ \"./resources/js/views/contact.vue\").default\n}, {\n  path: \"/services\",\n  component: __webpack_require__(/*! ./views/services.vue */ \"./resources/js/views/services.vue\").default\n}, {\n  path: \"/collections/:collection\",\n  component: __webpack_require__(/*! ./views/gallery.vue */ \"./resources/js/views/gallery.vue\").default\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  routes: routes,\n  linkActiveClass: 'active'\n}));\n\n//# sourceURL=webpack:///./resources/js/routes.js?");

/***/ }),

/***/ "./resources/js/templates/FooterTemplate.vue":
/*!***************************************************!*\
  !*** ./resources/js/templates/FooterTemplate.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FooterTemplate_vue_vue_type_template_id_408b6de9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterTemplate.vue?vue&type=template&id=408b6de9& */ \"./resources/js/templates/FooterTemplate.vue?vue&type=template&id=408b6de9&\");\n/* harmony import */ var _FooterTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterTemplate.vue?vue&type=script&lang=js& */ \"./resources/js/templates/FooterTemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _FooterTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FooterTemplate_vue_vue_type_template_id_408b6de9___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _FooterTemplate_vue_vue_type_template_id_408b6de9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/templates/FooterTemplate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/templates/FooterTemplate.vue?");

/***/ }),

/***/ "./resources/js/templates/FooterTemplate.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/templates/FooterTemplate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTemplate.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/FooterTemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/templates/FooterTemplate.vue?");

/***/ }),

/***/ "./resources/js/templates/FooterTemplate.vue?vue&type=template&id=408b6de9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/templates/FooterTemplate.vue?vue&type=template&id=408b6de9& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTemplate_vue_vue_type_template_id_408b6de9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTemplate.vue?vue&type=template&id=408b6de9& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/FooterTemplate.vue?vue&type=template&id=408b6de9&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTemplate_vue_vue_type_template_id_408b6de9___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTemplate_vue_vue_type_template_id_408b6de9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/templates/FooterTemplate.vue?");

/***/ }),

/***/ "./resources/js/templates/HeaderTemplate.vue":
/*!***************************************************!*\
  !*** ./resources/js/templates/HeaderTemplate.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HeaderTemplate_vue_vue_type_template_id_a148804a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderTemplate.vue?vue&type=template&id=a148804a& */ \"./resources/js/templates/HeaderTemplate.vue?vue&type=template&id=a148804a&\");\n/* harmony import */ var _HeaderTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderTemplate.vue?vue&type=script&lang=js& */ \"./resources/js/templates/HeaderTemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _HeaderTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _HeaderTemplate_vue_vue_type_template_id_a148804a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _HeaderTemplate_vue_vue_type_template_id_a148804a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/templates/HeaderTemplate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/templates/HeaderTemplate.vue?");

/***/ }),

/***/ "./resources/js/templates/HeaderTemplate.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/templates/HeaderTemplate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderTemplate.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/HeaderTemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/templates/HeaderTemplate.vue?");

/***/ }),

/***/ "./resources/js/templates/HeaderTemplate.vue?vue&type=template&id=a148804a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/templates/HeaderTemplate.vue?vue&type=template&id=a148804a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTemplate_vue_vue_type_template_id_a148804a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderTemplate.vue?vue&type=template&id=a148804a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/templates/HeaderTemplate.vue?vue&type=template&id=a148804a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTemplate_vue_vue_type_template_id_a148804a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTemplate_vue_vue_type_template_id_a148804a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/templates/HeaderTemplate.vue?");

/***/ }),

/***/ "./resources/js/views/about.vue":
/*!**************************************!*\
  !*** ./resources/js/views/about.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_vue_vue_type_template_id_9bb8c8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=9bb8c8c4& */ \"./resources/js/views/about.vue?vue&type=template&id=9bb8c8c4&\");\n/* harmony import */ var _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js& */ \"./resources/js/views/about.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _about_vue_vue_type_template_id_9bb8c8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _about_vue_vue_type_template_id_9bb8c8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/about.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/views/about.vue?");

/***/ }),

/***/ "./resources/js/views/about.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/about.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/about.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/views/about.vue?");

/***/ }),

/***/ "./resources/js/views/about.vue?vue&type=template&id=9bb8c8c4&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/about.vue?vue&type=template&id=9bb8c8c4& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_9bb8c8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=9bb8c8c4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/about.vue?vue&type=template&id=9bb8c8c4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_9bb8c8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_9bb8c8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/views/about.vue?");

/***/ }),

/***/ "./resources/js/views/contact.vue":
/*!****************************************!*\
  !*** ./resources/js/views/contact.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_vue_vue_type_template_id_8bafff1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.vue?vue&type=template&id=8bafff1e& */ \"./resources/js/views/contact.vue?vue&type=template&id=8bafff1e&\");\n/* harmony import */ var _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.vue?vue&type=script&lang=js& */ \"./resources/js/views/contact.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _contact_vue_vue_type_template_id_8bafff1e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _contact_vue_vue_type_template_id_8bafff1e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/contact.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/views/contact.vue?");

/***/ }),

/***/ "./resources/js/views/contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/contact.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/views/contact.vue?");

/***/ }),

/***/ "./resources/js/views/contact.vue?vue&type=template&id=8bafff1e&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/contact.vue?vue&type=template&id=8bafff1e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_8bafff1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./contact.vue?vue&type=template&id=8bafff1e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/contact.vue?vue&type=template&id=8bafff1e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_8bafff1e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_template_id_8bafff1e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/views/contact.vue?");

/***/ }),

/***/ "./resources/js/views/gallery.vue":
/*!****************************************!*\
  !*** ./resources/js/views/gallery.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery_vue_vue_type_template_id_379c6aa3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=379c6aa3& */ \"./resources/js/views/gallery.vue?vue&type=template&id=379c6aa3&\");\n/* harmony import */ var _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js& */ \"./resources/js/views/gallery.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _gallery_vue_vue_type_template_id_379c6aa3___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _gallery_vue_vue_type_template_id_379c6aa3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/gallery.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/views/gallery.vue?");

/***/ }),

/***/ "./resources/js/views/gallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/gallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/gallery.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/views/gallery.vue?");

/***/ }),

/***/ "./resources/js/views/gallery.vue?vue&type=template&id=379c6aa3&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/gallery.vue?vue&type=template&id=379c6aa3& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_379c6aa3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=template&id=379c6aa3& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/gallery.vue?vue&type=template&id=379c6aa3&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_379c6aa3___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_379c6aa3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/views/gallery.vue?");

/***/ }),

/***/ "./resources/js/views/index.vue":
/*!**************************************!*\
  !*** ./resources/js/views/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_5c49133a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5c49133a& */ \"./resources/js/views/index.vue?vue&type=template&id=5c49133a&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./resources/js/views/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_5c49133a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_5c49133a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/views/index.vue?");

/***/ }),

/***/ "./resources/js/views/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/views/index.vue?");

/***/ }),

/***/ "./resources/js/views/index.vue?vue&type=template&id=5c49133a&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/index.vue?vue&type=template&id=5c49133a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c49133a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5c49133a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/index.vue?vue&type=template&id=5c49133a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c49133a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5c49133a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/views/index.vue?");

/***/ }),

/***/ "./resources/js/views/services.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/services.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_vue_vue_type_template_id_57ce615d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.vue?vue&type=template&id=57ce615d& */ \"./resources/js/views/services.vue?vue&type=template&id=57ce615d&\");\n/* harmony import */ var _services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.vue?vue&type=script&lang=js& */ \"./resources/js/views/services.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _services_vue_vue_type_template_id_57ce615d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _services_vue_vue_type_template_id_57ce615d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/views/services.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./resources/js/views/services.vue?");

/***/ }),

/***/ "./resources/js/views/services.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/services.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0!../../../node_modules/vue-loader/lib??vue-loader-options!./services.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/services.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./resources/js/views/services.vue?");

/***/ }),

/***/ "./resources/js/views/services.vue?vue&type=template&id=57ce615d&":
/*!************************************************************************!*\
  !*** ./resources/js/views/services.vue?vue&type=template&id=57ce615d& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_57ce615d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./services.vue?vue&type=template&id=57ce615d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/services.vue?vue&type=template&id=57ce615d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_57ce615d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_template_id_57ce615d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./resources/js/views/services.vue?");

/***/ })

/******/ });