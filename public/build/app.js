(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./mychart_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/mychart_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-chartjs/dist/controller.js */ "./node_modules/@symfony/ux-chartjs/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/mychart_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/mychart_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.addEventListener('chartjs:pre-connect', this._onPreConnect);
      this.element.addEventListener('chartjs:connect', this._onConnect);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // You should always remove listeners when the controller is disconnected to avoid side effects
      this.element.removeEventListener('chartjs:pre-connect', this._onPreConnect);
      this.element.removeEventListener('chartjs:connect', this._onConnect);
    }
  }, {
    key: "_onPreConnect",
    value: function _onPreConnect(event) {
      // The chart is not yet created
      // For instance you can format Y axis
      event.detail.options.scales = {
        yAxes: [{
          ticks: {
            callback: function callback(value, index, values) {
              /* ... */
            }
          }
        }]
      };
    }
  }, {
    key: "_onConnect",
    value: function _onConnect(event) {
      // The chart was just created
      // For instance you can listen to additional events
      event.detail.chart.options.onHover = function (mouseEvent) {
        /* ... */
      };

      event.detail.chart.options.onClick = function (mouseEvent) {
        /* ... */
      };
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../public/css/styles.css */ "./public/css/styles.css");
/* harmony import */ var _public_css_backoffice_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../public/css/backoffice.css */ "./public/css/backoffice.css");
/* harmony import */ var _public_css_newsletter_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../public/css/newsletter.css */ "./public/css/newsletter.css");
/* harmony import */ var _public_css_textareaWithHTML_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../public/css/textareaWithHTML.css */ "./public/css/textareaWithHTML.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_bo_order_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/bo_order_form */ "./assets/js/bo_order_form.js");
/* harmony import */ var _js_order_datepicker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/order_datepicker.js */ "./assets/js/order_datepicker.js");
/* harmony import */ var _js_responsive_nav_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/responsive_nav.js */ "./assets/js/responsive_nav.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
// import { startStimulusApp } from '@symfony/stimulus-bridge';




 // export const app = startStimulusApp(require.context(
//     '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
//     true,
//     /\.(j|t)sx?$/
//     ));
// start the Stimulus application






__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

__webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/bo_order_form.js":
/*!************************************!*\
  !*** ./assets/js/bo_order_form.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bo_order_form": () => (/* binding */ bo_order_form)
/* harmony export */ });
var bo_order_form = {
  init: function init() {
    var btnBurgerIcon = document.querySelector('button.dropdown-toggle');

    if (btnBurgerIcon) {
      btnBurgerIcon.addEventListener('click', bo_order_form.handleClickCleanP);
    }

    var btnAddProduct = document.querySelector('#add-product');

    if (btnAddProduct) {
      btnAddProduct.addEventListener('click', bo_order_form.handleClickAddProduct);
    }
  },
  handleClickCleanP: function handleClickCleanP(event) {
    var pElement = document.querySelector('p.elementMissing');

    if (pElement) {
      pElement.remove();
    }
  },
  handleClickAddProduct: function handleClickAddProduct(event) {
    event.preventDefault();
    var selectAddProduct = document.querySelector('select[name=product_add]');
    var inputProductQty = document.querySelector('input.input-add');
    var inputSelectedQty = inputProductQty.value;

    if (selectAddProduct.selectedIndex == 0 || inputSelectedQty <= 0) {
      var pElement = document.createElement('p');
      pElement.setAttribute('class', 'elementMissing');
      pElement.innerHTML = 'Merci de sélectionner un produit et sa quantité';
      var formTag = document.querySelector('form');
      var divDetailsForm = document.querySelector('div.card-details-form');
      formTag.insertBefore(pElement, divDetailsForm);
      return;
    }

    var optionSelectedProduct = selectAddProduct.value;
    var productNames = document.querySelectorAll('option[data-productname]');
    var productName = productNames[selectAddProduct.selectedIndex - 1];
    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'd-flex flex-row text-light justify-content-between option-style');
    var cardDetailsForm = document.querySelector('div.card-details-form');
    cardDetailsForm.append(divRow);
    var divSelect = document.createElement('div');
    divSelect.setAttribute('class', 'w-25 text-start');
    divRow.append(divSelect);
    var selectElement = document.createElement('select');
    selectElement.setAttribute('class', 'select-style');
    selectElement.setAttribute('name', 'product_' + optionSelectedProduct);
    divSelect.append(selectElement);
    var optionElement = document.createElement('option');
    optionElement.setAttribute('class', 'text-start');
    optionElement.value = optionSelectedProduct;
    optionElement.selected = 'selected';
    optionElement.innerHTML = productName.dataset.productname;
    selectElement.append(optionElement);
    var divInput = document.createElement('div');
    divInput.setAttribute('class', 'w-25 text-end');
    divRow.append(divInput);
    var inputTag = document.createElement('input');
    inputTag.setAttribute('class', 'text-center');
    inputTag.setAttribute('min', '0');
    inputTag.setAttribute('max', '10');
    inputTag.setAttribute('type', 'number');
    inputTag.setAttribute('name', 'qty_' + optionSelectedProduct);
    inputTag.setAttribute('value', inputSelectedQty);
    divInput.append(inputTag);
    productNames[selectAddProduct.selectedIndex - 1].remove();
  }
};
document.addEventListener('DOMContentLoaded', bo_order_form.init);

/***/ }),

/***/ "./assets/js/order_datepicker.js":
/*!***************************************!*\
  !*** ./assets/js/order_datepicker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "order_datepicker": () => (/* binding */ order_datepicker)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.string.replace-all.js */ "./node_modules/core-js/modules/esnext.string.replace-all.js");
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);












var order_datepicker = {
  months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
  monthsAbrv: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  fullletterDays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  currentDate: new Date(),
  yearValue: "",
  monthValue: "",
  dayValue: "",
  hourValue: "",
  minuteValue: "",
  selectecDeliveryDate: {},
  copyInput: "",
  construct: function construct() {
    var yearSelect = document.querySelector('select[name=select-annee]');
    var yearValue = yearSelect.value;
    order_datepicker.yearValue = yearValue;
    var monthSelect = document.querySelector('select[name=select-mois]');
    var monthValue = monthSelect.value;
    order_datepicker.monthValue = monthValue;
    var daySelect = document.querySelector('select[name=select-jour]');
    var dayValue = daySelect.value;
    order_datepicker.dayValue = dayValue;
    var hourSelect = document.querySelector('select[name=select-heure]');
    var hourValue = hourSelect.value;
    order_datepicker.hourValue = hourValue;
    var minuteSelect = document.querySelector('select[name=select-minute]');
    var minuteValue = minuteSelect.value;
    order_datepicker.minuteValue = minuteValue;
    var selectecDeliveryDate = new Date(yearValue, monthValue - 1, dayValue);
    order_datepicker.selectecDeliveryDate = selectecDeliveryDate;
  },
  init: function init() {
    var formCustomerOrder = document.querySelector('form[name=order_customer]');
    var formOrder = document.querySelector('form[name=order]');

    if (formCustomerOrder || formOrder) {
      var inputDeliveryDate = document.querySelector('input[name=delivery_date]');
      order_datepicker.copyInput = inputDeliveryDate;
      var deliveryDateParent = inputDeliveryDate.parentElement;

      if (formOrder) {
        var inputValue = inputDeliveryDate.value;
        var newDate = JSON.parse(inputValue);
        var newDateArray = newDate.date.split(' ');
        var hourDate = newDateArray[1];
        hourDate = hourDate.split('.');
        hourDate = hourDate[0];
        newDateArray = newDateArray[0];
        newDateArray = newDateArray.replaceAll('-', ' ');
        var currentDeliveryDate = new Date('' + newDateArray + ' ' + hourDate);
        order_datepicker.currentDate = currentDeliveryDate;
      }

      inputDeliveryDate.remove();
      order_datepicker.createSelectContainer(deliveryDateParent);
      order_datepicker.construct();
      var submitBtn = document.querySelector('button[type=submit]');
      submitBtn.addEventListener('click', order_datepicker.handleClickSubmit);
      var spanDayFullLetter = document.querySelector('#fullletterDay');
      var monthSelect = document.querySelector('select[name=select-mois]');
      var daySelect = document.querySelector('select[name=select-jour]');

      if (order_datepicker.selectecDeliveryDate.getDay() != 0 && order_datepicker.selectecDeliveryDate.getDay() != 1 && order_datepicker.selectecDeliveryDate.getDay() != 6) {
        spanDayFullLetter.setAttribute('class', 'text-secondary');
        spanDayFullLetter.setAttribute('style', 'text-decoration:line-through;');
        spanDayFullLetter.setAttribute('title', 'Nous ne sommes pas ouverts ce jour.');
        monthSelect.classList.add('text-secondary');
        monthSelect.setAttribute('style', 'text-decoration:line-through;');
        daySelect.classList.add('text-secondary');
        daySelect.setAttribute('style', 'text-decoration:line-through;');
      }

      var selectContainer = document.querySelector('.selectContainerStyle');
      var cutOffTimeElt = document.createElement('p');
      cutOffTimeElt.setAttribute('class', 'text-orange fst-italic');
      selectContainer.append(cutOffTimeElt);
      var checkSameDay = order_datepicker.currentDate.getDate() == order_datepicker.dayValue ? true :  false ? 0 : false;

      if (checkSameDay) {
        if (order_datepicker.currentDate.getHours() < 10) {
          var timeLeftElt = document.createElement('span');
          timeLeftElt.setAttribute('id', 'timeLeft');
          timeLeftElt.setAttribute('class', 'countDown');
          var hoursLeftResult = 10 - order_datepicker.currentDate.getHours() - 1;
          var minutesLeftResult = 60 - order_datepicker.currentDate.getMinutes() - 1;
          var secondsLeftResult = 60 - order_datepicker.currentDate.getSeconds() - 1;
          var dataTimeLeft = '{ "hour": 0, "minute": 0, "seconde": 5 }';
          dataTimeLeft = JSON.parse(dataTimeLeft);
          dataTimeLeft.hour = hoursLeftResult;
          dataTimeLeft.minute = minutesLeftResult;
          dataTimeLeft.seconde = secondsLeftResult;
          timeLeftElt.setAttribute('data-timeleft', JSON.stringify(dataTimeLeft)); // timeLeftElt.setAttribute('data-doatend', 'target.innerText = "Les livraisons pour aujourd hui sont closes"');

          timeLeftElt.setAttribute('data-doatend', "alert('Plus de livraison possible pour aujourd hui, sélectionnez une date ultérieure.'); target.innerText = '';");
          cutOffTimeElt.append(timeLeftElt);
          dynamicTime.init();
        } else {
          cutOffTimeElt.innerText = 'Les livraisons pour aujourd\'hui sont closes';
        }
      }
    }
  },
  createSelectContainer: function createSelectContainer(deliveryDateParent) {
    var divSelect = document.createElement('div');
    divSelect.setAttribute('class', 'd-flex flex-column selectContainerStyle');
    deliveryDateParent.append(divSelect);
    var listRowA = [{
      'name': 'annee',
      'optionlist': [order_datepicker.currentDate.getFullYear(), order_datepicker.currentDate.getFullYear() + 1]
    }];
    var listRowB = [{
      'name': 'heure',
      'optionlist': [18 + "h", 19 + "h", 20 + "h", 21 + "h", 22 + "h", 23 + "h"]
    }, {
      'name': 'minute',
      'optionlist': [0, 15, 30, 45]
    }, {
      'name': 'jour',
      'optionlist': order_datepicker.myRange(1, 31)
    }, {
      'name': 'mois',
      'optionlist': order_datepicker.myRange(1, 12)
    }];
    order_datepicker.createRow(divSelect);
    order_datepicker.fillRow(divSelect, listRowA);
    order_datepicker.createRow(divSelect);
    order_datepicker.fillRow(divSelect, listRowB);
  },
  createRow: function createRow(divSelect) {
    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'd-flex flex-row justify-content-center align-content-baseline my-1');
    divSelect.append(divRow);
  },
  fillRow: function fillRow(divSelect, listRow) {
    var divRow = divSelect.lastChild;
    listRow.forEach(function (select, key) {
      if (listRow.length > 1 && key == 0) {
        var spanAtTime = document.createElement('span');
        spanAtTime.setAttribute('class', 'text-dark');
        spanAtTime.innerHTML = "À";
        divRow.append(spanAtTime);
      } else if (listRow.length > 1 && key == 2) {
        var spanOnDay = document.createElement('span');
        spanOnDay.setAttribute('class', 'text-dark mx-2');
        spanOnDay.setAttribute('id', 'fullletterDay');
        spanOnDay.setAttribute('data-bs-toggle', 'tooltip');
        spanOnDay.setAttribute('data-bs-html', 'true');
        spanOnDay.innerHTML = "le " + order_datepicker.fullletterDays[order_datepicker.currentDate.getDay()];
        divRow.append(spanOnDay);
      }

      var selectTag = document.createElement('select');
      selectTag.setAttribute('name', 'select-' + select.name);
      selectTag.addEventListener('change', order_datepicker.handleChangeCheckDate);
      divRow.append(selectTag);
      var optionList = select.optionlist;
      optionList.forEach(function (option) {
        var optionTag = document.createElement('option');
        optionTag.setAttribute('value', option);

        if (selectTag.name == "select-mois") {
          optionTag.innerText = order_datepicker.months[option - 1];
          optionTag.setAttribute('class', "text-center");

          if (option - 1 == order_datepicker.currentDate.getMonth()) {
            optionTag.setAttribute('selected', 'selected');
          }
        } else if (selectTag.name == "select-heure") {
          if (option == order_datepicker.currentDate.getHours() + 'h') {
            optionTag.setAttribute('selected', 'selected');
          }

          optionTag.innerText = option;
        } else if (selectTag.name == "select-minute") {
          if (option == order_datepicker.currentDate.getMinutes()) {
            optionTag.setAttribute('selected', 'selected');
          }

          optionTag.innerText = option < 10 ? "0" + option : "" + option;
        } else if (selectTag.name == "select-jour") {
          if (option == order_datepicker.currentDate.getDate()) {
            optionTag.setAttribute('selected', 'selected');
          }

          optionTag.innerText = option < 10 ? "0" + option : "" + option;
        } else {
          optionTag.innerText = option < 10 ? "0" + option : "" + option;
        }

        selectTag.append(optionTag);
      });
    });
  },
  myRange: function myRange(min, max) {
    var list = [];

    for (var index = min; index <= max; index++) {
      list[index] = index;
    }

    return list;
  },
  handleChangeCheckDate: function handleChangeCheckDate(event) {
    var yearSelect = document.querySelector('select[name=select-annee]');
    var yearValue = yearSelect.value;
    var monthSelect = document.querySelector('select[name=select-mois]');
    var monthValue = monthSelect.value;
    var daySelect = document.querySelector('select[name=select-jour]');
    var dayValue = daySelect.value;
    var hourSelect = document.querySelector('select[name=select-heure]');
    var hourValue = hourSelect.value;
    var minuteSelect = document.querySelector('select[name=select-minute]');
    var minuteValue = minuteSelect.value;
    var spanDayFullLetter = document.querySelector('#fullletterDay');
    var selectecDeliveryDate = new Date(yearValue, monthValue - 1, dayValue);
    var checkIfPInvalid = document.querySelector('p.pInvalidSubmit');

    if (checkIfPInvalid) {
      checkIfPInvalid.remove();
    } // check if selected date exists


    var isDate = order_datepicker.checkIfDateTrue(dayValue, monthValue, yearValue); // design and info of selected value if false

    if (isDate == false) {
      spanDayFullLetter.innerHTML = "le ";

      if (!monthSelect.classList.contains('text-danger')) {
        monthSelect.classList.add('text-danger');
        monthSelect.setAttribute('style', 'text-decoration:line-through;');
      }

      if (!daySelect.classList.contains('text-danger')) {
        daySelect.classList.add('text-danger');
        daySelect.setAttribute('style', 'text-decoration:line-through;');
      }

      if (!daySelect.title) {
        daySelect.setAttribute('data-bs-toggle', 'tooltip');
        daySelect.setAttribute('data-bs-html', 'true');
        daySelect.setAttribute('title', 'La date du ' + dayValue + ' ' + order_datepicker.months[monthValue - 1] + ' n\'existe pas.');
      } else {
        daySelect.setAttribute('title', 'La date du ' + dayValue + ' ' + order_datepicker.months[monthValue - 1] + ' n\'existe pas.');
      }
    } else {
      // Affiche le jour uniquement si la date existe
      if (selectecDeliveryDate.getDay() != 0 && selectecDeliveryDate.getDay() != 1 && selectecDeliveryDate.getDay() != 6) {
        spanDayFullLetter.setAttribute('class', "text-secondary");
        spanDayFullLetter.setAttribute('style', 'text-decoration:line-through;');
        spanDayFullLetter.setAttribute('title', 'Nous ne sommes pas ouverts ce jour.');
        monthSelect.classList.add('text-secondary');
        monthSelect.setAttribute('style', 'text-decoration:line-through;');
        daySelect.classList.add('text-secondary');
        daySelect.setAttribute('style', 'text-decoration:line-through;');
      } else {
        if (spanDayFullLetter.classList.contains('text-secondary')) {
          spanDayFullLetter.classList.replace('text-secondary', 'text-dark');
          spanDayFullLetter.setAttribute('style', 'text-decoration:none;');
          spanDayFullLetter.setAttribute('title', '');
          monthSelect.classList.remove('text-secondary');
          monthSelect.setAttribute('style', 'text-decoration:none;');
          daySelect.classList.remove('text-secondary');
          daySelect.setAttribute('style', 'text-decoration:none;');
        }

        var requestedDeliveryDate = new Date("" + yearValue + " " + monthValue + " " + dayValue);
        var isBeforeNow = requestedDeliveryDate < order_datepicker.currentDate ? false : true;

        if (isBeforeNow == false) {
          if (selectecDeliveryDate.getDay() == 0 || selectecDeliveryDate.getDay() == 1 || selectecDeliveryDate.getDay() == 6) {
            spanDayFullLetter.setAttribute('class', "text-secondary");
            spanDayFullLetter.setAttribute('style', 'text-decoration:line-through;');
            spanDayFullLetter.setAttribute('title', 'La date sélectionnée est dans le passé. Date invalide');
            monthSelect.classList.add('text-secondary');
            monthSelect.setAttribute('style', 'text-decoration:line-through;');
            daySelect.classList.add('text-secondary');
            daySelect.setAttribute('style', 'text-decoration:line-through;');
          }
        }
      }

      spanDayFullLetter.innerHTML = "le " + order_datepicker.fullletterDays[selectecDeliveryDate.getDay()];

      if (monthSelect.classList.contains('text-danger')) {
        monthSelect.classList.remove('text-danger');
        monthSelect.setAttribute('style', 'text-decoration:none;');
      }

      if (daySelect.classList.contains('text-danger')) {
        daySelect.classList.remove('text-danger');
        daySelect.setAttribute('style', 'text-decoration:none;');
      }

      if (daySelect.title) {
        daySelect.setAttribute('title', '');
      }
    }

    var isDeliveryTime = order_datepicker.checkDeliveryTime();
  },
  checkDeliveryTime: function checkDeliveryTime() {
    var hourSelect = document.querySelector('select[name=select-heure]');
    var hourValue = hourSelect.value;
    var minuteSelect = document.querySelector('select[name=select-minute]');
    var minuteValue = minuteSelect.value;

    if (hourValue == "23h" && minuteValue != 0) {
      hourSelect.classList.add('text-secondary');
      hourSelect.setAttribute('style', 'text-decoration:line-through;');
      hourSelect.setAttribute('data-bs-toggle', 'tooltip');
      hourSelect.setAttribute('data-bs-html', 'true');
      hourSelect.setAttribute('title', 'Nous ne sommes pas ouverts à cette heure là.');
      minuteSelect.classList.add('text-secondary');
      minuteSelect.setAttribute('style', 'text-decoration:line-through;');
      minuteSelect.setAttribute('data-bs-toggle', 'tooltip');
      minuteSelect.setAttribute('data-bs-html', 'true');
      minuteSelect.setAttribute('title', 'Nous ne sommes pas ouverts à cette heure là.');
      return false;
    } else {
      if (hourSelect.classList.contains('text-secondary')) {
        hourSelect.classList.remove('text-secondary');
        hourSelect.setAttribute('style', 'text-decoration:none;');
        hourSelect.setAttribute('title', '');
        minuteSelect.classList.remove('text-secondary');
        minuteSelect.setAttribute('style', 'text-decoration:none;');
        minuteSelect.setAttribute('title', '');
      }

      return true;
    }
  },

  /**
   *
   * @param { number | string } day
   * @param { number | string } month
   * @param { number| string } year
   * @returns { boolean }
   */
  checkIfDateTrue: function checkIfDateTrue(day, month, year) {
    day = Number(day);
    month = Number(month) - 1; //bloody 0-indexed month

    year = Number(year);
    var d = new Date(year, month, day);
    var yearMatches = d.getUTCFullYear() === year;
    var monthMatches = d.getMonth() === month;
    var dayMatches = d.getDate() === day;
    var validDate = true;

    if (yearMatches == false) {
      validDate = false;
    }

    if (monthMatches == false) {
      validDate = false;
    }

    if (dayMatches == false) {
      validDate = false;
    }

    return validDate;
  },
  handleClickSubmit: function handleClickSubmit(event) {
    var selectContainer = document.querySelector('.selectContainerStyle');
    var yearSelect = document.querySelector('select[name=select-annee]');
    var yearValue = yearSelect.value;
    var monthSelect = document.querySelector('select[name=select-mois]');
    var monthValue = monthSelect.value < 10 ? '0' + monthSelect.value.toString() : monthSelect.value;
    var daySelect = document.querySelector('select[name=select-jour]');
    var dayValue = daySelect.value < 10 ? '0' + daySelect.value.toString() : daySelect.value;
    var hourSelect = document.querySelector('select[name=select-heure]');
    var hourValue = hourSelect.value.slice(0, -1);
    var minuteSelect = document.querySelector('select[name=select-minute]');
    var minuteValue = minuteSelect.value < 10 ? '0' + minuteSelect.value.toString() : minuteSelect.value;
    var weekday = document.querySelector('span#fullletterDay');
    var weekdayValue = weekday.innerText.substring(3);
    var isWeekday = weekdayValue == "Samedi" || weekdayValue == "Dimanche" || weekdayValue == "Lundi" ? true : false;
    var isDate = order_datepicker.checkIfDateTrue(dayValue, monthValue, yearValue);
    var isDeliveryTime = order_datepicker.checkDeliveryTime();
    var isBeforeCutOffTime = true;

    if (order_datepicker.currentDate.getMonth() + 1 == monthValue && order_datepicker.currentDate.getDate() == dayValue) {
      var dateWhenSubmit = new Date();
      isBeforeCutOffTime = dateWhenSubmit.getHours() < 10 ? true : false;
    }

    var requestedDeliveryDate = new Date("" + yearValue + " " + monthValue + " " + dayValue);
    var isBeforeNow = requestedDeliveryDate < order_datepicker.currentDate ? false : true;
    var isValid = isWeekday + isDate + isDeliveryTime + isBeforeCutOffTime + isBeforeNow == 5 ? true : false;
    var checkIfPInvalid = document.querySelector('p.pInvalidSubmit');

    if (checkIfPInvalid) {
      checkIfPInvalid.remove();
    }

    if (isValid == true) {
      selectContainer.remove();
      var labelDeliveryDate = document.querySelector('label[for=delivery_date]');
      var copyInput = order_datepicker.copyInput;
      var currentDateObject = JSON.parse(copyInput.value);
      var newDate = yearValue + '-' + monthValue + '-' + dayValue + ' ' + hourValue + ':' + minuteValue + ':00';
      currentDateObject.date = newDate;
      var dateToReturn = JSON.stringify(currentDateObject);
      copyInput.setAttribute('value', dateToReturn);
      labelDeliveryDate.parentElement.append(copyInput);
    } else {
      event.preventDefault();
      var pInvalidSubmit = document.createElement('p');
      pInvalidSubmit.setAttribute('class', 'pInvalidSubmit');
      pInvalidSubmit.innerText = 'Votre date de livraison n\'est pas valide.';

      var _labelDeliveryDate = document.querySelector('label[for=delivery_date]');

      _labelDeliveryDate.parentElement.append(pInvalidSubmit);
    }
  }
};
document.addEventListener('DOMContentLoaded', order_datepicker.init);

/***/ }),

/***/ "./assets/js/responsive_nav.js":
/*!*************************************!*\
  !*** ./assets/js/responsive_nav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsive_nav": () => (/* binding */ responsive_nav)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var responsive_nav = {
  clientWidth: 0,
  clientHeight: 0,
  isPortrait: false,
  isLandscape: false,
  copyBurgerMenuBtn: document.querySelector('button#btn-menu'),
  baseUri: window.location.origin,
  construct: function construct() {
    responsive_nav.clientWidth = window.innerWidth;
    responsive_nav.clientHeight = window.innerHeight;
    responsive_nav.isPortrait = window.innerHeight > window.innerWidth ? true : false;
    responsive_nav.isLandscape = window.innerWidth > window.innerHeight ? true : false;
  },
  init: function init() {
    responsive_nav.construct();
    responsive_nav.displayBurgerMenu();

    if (responsive_nav.isPortrait) {
      responsive_nav.displayPortrait();
    } else {
      responsive_nav.displayLandscape();
    }

    window.addEventListener('resize', function (event) {
      responsive_nav.construct();
      responsive_nav.displayBurgerMenu();

      if (responsive_nav.isPortrait) {
        responsive_nav.displayPortrait();
        responsive_nav.clearLandscape();
        responsive_nav.displayBurgerMenu();
      } else {
        responsive_nav.displayLandscape();
        responsive_nav.clearPortrait();
      }
    });
    var burgerMenuBtn = document.querySelector('button#btn-menu');

    if (burgerMenuBtn) {
      burgerMenuBtn.addEventListener('click', responsive_nav.handleClickToggleMenu);
    }
  },
  displayBurgerMenu: function displayBurgerMenu() {
    var burgerMenuBtn = document.querySelector('button#btn-menu');
    var parentBurger = document.querySelector('#divRightSideNav');

    if (responsive_nav.isPortrait == true) {
      if (burgerMenuBtn) {
        burgerMenuBtn.setAttribute('style', 'display:inline-block');
      } else {
        responsive_nav.copyBurgerMenuBtn.addEventListener('click', responsive_nav.handleClickToggleMenu);
        parentBurger.append(responsive_nav.copyBurgerMenuBtn);
      }
    }

    if (responsive_nav.isLandscape == true) {
      if (burgerMenuBtn) {
        burgerMenuBtn.remove();
      }
    }
  },
  handleClickToggleMenu: function handleClickToggleMenu() {
    var divMenuPortrait = document.querySelector('div#menuPortrait');
    divMenuPortrait.classList.toggle('active');
  },
  displayPortrait: function displayPortrait() {
    var divMenuPortrait = document.querySelector('div#menuPortrait');

    if (divMenuPortrait.childElementCount == 0) {
      var divParentBlockNav = document.createElement('div');
      divParentBlockNav.setAttribute('class', 'd-flex flex-column w-50');
      divParentBlockNav.setAttribute('id', 'blockNavA');
      divMenuPortrait.append(divParentBlockNav);
      var divParentBlockNavB = document.createElement('div');
      divParentBlockNavB.setAttribute('class', 'd-flex flex-column w-50');
      divParentBlockNavB.setAttribute('id', 'blockNavB');
      divMenuPortrait.append(divParentBlockNavB);
      responsive_nav.displayNavListLink(divParentBlockNavB);
      var ulBtnActions = document.createElement('ul');
      ulBtnActions.setAttribute('class', 'navbar-nav d-flex flex-column');
      var checkPortrait = responsive_nav.isPortrait;

      if (checkPortrait) {
        divParentBlockNav.prepend(ulBtnActions);
      } else {
        divParentBlockNav.append(ulBtnActions);
      }

      responsive_nav.displayNavActionsBtn(ulBtnActions);
    }
  },
  clearPortrait: function clearPortrait() {
    var divMenuPortrait = document.querySelector('div#menuPortrait');
    divMenuPortrait.innerHTML = "";
    var isActive = divMenuPortrait.classList.contains('active');

    if (isActive) {
      divMenuPortrait.classList.toggle('active');
    }
  },
  displayLandscape: function displayLandscape() {
    var parentBurger = document.querySelector('#divRightSideNav');

    if (parentBurger.childElementCount == 0) {
      var divParentBlockNav = document.createElement('div');
      divParentBlockNav.setAttribute('class', 'd-flex flex-row');
      parentBurger.append(divParentBlockNav);
      responsive_nav.displayNavListLink(divParentBlockNav);
      var ulBtnActions = document.createElement('ul');
      ulBtnActions.setAttribute('class', 'navbar-nav d-flex flex-row position-relative');
      divParentBlockNav.append(ulBtnActions);
      responsive_nav.displayNavActionsBtn(ulBtnActions);
    }
  },
  clearLandscape: function clearLandscape() {
    var parentBurger = document.querySelector('#divRightSideNav');
    parentBurger.innerHTML = "";
  },
  displayNavListLink: function displayNavListLink(parent) {
    var ulElement = document.createElement('ul');

    if (responsive_nav.isPortrait == true) {
      ulElement.setAttribute('class', 'navbar-nav d-flex flex-column');
    } else {
      ulElement.setAttribute('class', 'navbar-nav d-flex flex-row');
    }

    parent.append(ulElement); //! Création des liens de navigation

    var liMonPanier = document.createElement('li');
    liMonPanier.setAttribute('class', 'nav-item');
    ulElement.append(liMonPanier);
    var divCurrentRoute = document.querySelector('#currentRoute');
    var aMonPanier = document.createElement('a');
    aMonPanier.setAttribute('href', responsive_nav.baseUri + "/order");

    if (divCurrentRoute.dataset.data == 'app_order') {
      aMonPanier.setAttribute('class', "nav-link active");
    } else {
      aMonPanier.setAttribute('class', "nav-link");
    }

    liMonPanier.append(aMonPanier);
    var iMonPanier = document.createElement('i');
    iMonPanier.setAttribute('class', 'fas fa-shopping-cart light opacity-75');
    aMonPanier.append(iMonPanier);
    var qtePanier = document.querySelector('#isLoggedIn');
    aMonPanier.append(qtePanier.dataset.countpanier > 0 ? " Mon panier (" + qtePanier.dataset.countpanier + ')' : " Mon panier");
    var liNosProduits = document.createElement('li');
    liNosProduits.setAttribute('class', 'nav-item');
    ulElement.append(liNosProduits);
    var aNosProduits = document.createElement('a');
    aNosProduits.setAttribute('href', responsive_nav.baseUri + "/product");

    if (divCurrentRoute.dataset.data == 'product_list') {
      aNosProduits.setAttribute('class', "nav-link active");
    } else {
      aNosProduits.setAttribute('class', "nav-link");
    }

    liNosProduits.append(aNosProduits);
    var iNosProduits = document.createElement('i');
    iNosProduits.setAttribute('class', 'fas fa-hamburger light opacity-75');
    aNosProduits.append(iNosProduits);
    aNosProduits.append(' Nos produits');
    var isLoggedIn = document.querySelector('#isLoggedIn');
    var dataIsLoggedIn = JSON.parse(isLoggedIn.dataset.data);

    if (dataIsLoggedIn != null) {
      var liMesCommandes = document.createElement('li');
      liMesCommandes.setAttribute('class', 'nav-item');
      ulElement.append(liMesCommandes);
      var aMesCommandes = document.createElement('a');
      aMesCommandes.setAttribute('href', responsive_nav.baseUri + "/order/show/");

      if (divCurrentRoute.dataset.data == 'app_order_show') {
        aMesCommandes.setAttribute('class', "nav-link active");
      } else {
        aMesCommandes.setAttribute('class', "nav-link");
      }

      liMesCommandes.append(aMesCommandes);
      var iMesCommandes = document.createElement('i');
      iMesCommandes.setAttribute('class', 'fas fa-history light opacity-75');
      aMesCommandes.append(iMesCommandes);
      aMesCommandes.append(' Mes commandes');
    }
  },
  displayNavActionsBtn: function displayNavActionsBtn(parent) {
    var isLoggedIn = document.querySelector('#isLoggedIn');
    var dataIsLoggedIn = JSON.parse(isLoggedIn.dataset.data);

    if (dataIsLoggedIn == null) {
      var liRegister = document.createElement('li');
      liRegister.setAttribute('class', 'nav-item');
      parent.append(liRegister);
      var divCurrentRoute = document.querySelector('#currentRoute');
      var aRegister = document.createElement('a');
      aRegister.setAttribute('href', responsive_nav.baseUri + "/register");

      if (divCurrentRoute.dataset.data == 'app_register') {
        aRegister.setAttribute('class', "nav-link active");
      } else {
        aRegister.setAttribute('class', "nav-link");
      }

      liRegister.append(aRegister);
      var iRegister = document.createElement('i');
      iRegister.setAttribute('class', 'fas fa-user-edit light opacity-75');
      aRegister.append(iRegister);
      aRegister.append(' S\'inscrire');
      liRegister.append(aRegister);
      var liLogIn = document.createElement('li');
      liLogIn.setAttribute('class', 'nav-item');
      parent.append(liLogIn);
      var aLogIn = document.createElement('a');
      aLogIn.setAttribute('href', responsive_nav.baseUri + "/login");

      if (divCurrentRoute.dataset.data == 'app_login') {
        aLogIn.setAttribute('class', "nav-link active");
      } else {
        aLogIn.setAttribute('class', "nav-link");
      }

      liLogIn.append(aLogIn);
      var iLogIn = document.createElement('i');
      iLogIn.setAttribute('class', 'fas fa-sign-in-alt light opacity-75');
      aLogIn.append(iLogIn);
      aLogIn.append(' Se connecter');
    } else {
      var liDropDown = document.createElement('li');
      liDropDown.setAttribute('class', 'nav-item dropdown');
      parent.append(liDropDown);
      var aDropDown = document.createElement('a');
      aDropDown.setAttribute('class', 'dropdown-toggle btn');
      aDropDown.setAttribute('href', '#');
      aDropDown.setAttribute('id', 'navbarDropdown');
      aDropDown.setAttribute('role', 'button'); // aDropDown.setAttribute('data-bs-toggle', 'dropdown');
      // aDropDown.setAttribute('aria-expanded', false);

      aDropDown.addEventListener('click', responsive_nav.handleClickToggleDropdown);
      liDropDown.append(aDropDown);
      var dataAvatar = isLoggedIn.dataset.avatar;
      var isJpg = new RegExp('.jpg').test(dataAvatar);

      if (isJpg == true) {
        var imgAvatar = document.createElement('img');
        imgAvatar.setAttribute('class', 'rounded-pill');
        imgAvatar.setAttribute('src', responsive_nav.baseUri + '/images/avatars/' + dataAvatar);
        imgAvatar.setAttribute('width', "30");
        imgAvatar.setAttribute('alt', 'avatar');
        aDropDown.append(imgAvatar);
      } else {
        var iAvatar = document.createElement('i');
        iAvatar.setAttribute('class', dataAvatar);
        aDropDown.append(iAvatar);
      }

      var dataPseudo = isLoggedIn.dataset.pseudo;
      aDropDown.append(' ' + dataPseudo);
      var ulDropdownNav = document.createElement('ul');
      ulDropdownNav.setAttribute('class', 'ulDropdown');
      ulDropdownNav.setAttribute('aria-labelledby', 'navbarDropdown');
      ulDropdownNav.setAttribute('data-bs-popper', 'static');
      parent.append(ulDropdownNav);
      var liProfil = document.createElement('li');
      liProfil.setAttribute('class', 'nav-item');
      ulDropdownNav.append(liProfil);
      var aProfil = document.createElement('a');
      aProfil.setAttribute('class', 'dropdown-item nav-link');
      aProfil.setAttribute('href', responsive_nav.baseUri + "/profil/" + isLoggedIn.dataset.id);
      liProfil.append(aProfil);
      var iProfil = document.createElement('i');
      iProfil.setAttribute('class', 'fas fa-user-cog light opacity-75');
      aProfil.append(iProfil);
      aProfil.append(" Profil");
      var liLogout = document.createElement('li');
      liLogout.setAttribute('class', 'nav-item');
      ulDropdownNav.append(liLogout);
      var aLogout = document.createElement('a');
      aLogout.setAttribute('class', 'dropdown-item nav-link');
      aLogout.setAttribute('href', responsive_nav.baseUri + "/logout");
      liLogout.append(aLogout);
      var iLogout = document.createElement('i');
      iLogout.setAttribute('class', 'fas fa-sign-out-alt light opacity-75');
      aLogout.append(iLogout);
      aLogout.append(" Déconnexion\n");
    }
  },
  handleClickToggleDropdown: function handleClickToggleDropdown(event) {
    var ulDropdown = document.querySelector('.ulDropdown');
    app.handleSwitchDropdownToPanier(ulDropdown);
    ulDropdown.classList.toggle('active');
  }
};
document.addEventListener('DOMContentLoaded', responsive_nav.init);

/***/ }),

/***/ "./public/css/backoffice.css":
/*!***********************************!*\
  !*** ./public/css/backoffice.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/css/newsletter.css":
/*!***********************************!*\
  !*** ./public/css/newsletter.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/css/textareaWithHTML.css":
/*!*****************************************!*\
  !*** ./public/css/textareaWithHTML.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-chartjs_di-dd6ce0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEIsc0NBQTlCO01BQ0FpTixPQUFPLENBQUN0TSxNQUFSLENBQWV1TSxPQUFmO01BQ0FELE9BQU8sQ0FBQ3RNLE1BQVIsQ0FBZSxnQkFBZjtJQUNIO0VBQ0osQ0F4VXVCO0VBMFV4QnNMLHlCQUF5QixFQUFFLG1DQUFVbk8sS0FBVixFQUFpQjtJQUN4QyxJQUFNcVAsVUFBVSxHQUFHaE8sUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQW5CO0lBQ0FOLEdBQUcsQ0FBQ3NPLDRCQUFKLENBQWlDRCxVQUFqQztJQUVBQSxVQUFVLENBQUN4SixTQUFYLENBQXFCb0csTUFBckIsQ0FBNEIsUUFBNUI7RUFDSDtBQS9VdUIsQ0FBckI7QUFrVlA1SyxRQUFRLENBQUN6QixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENnTCxjQUFjLENBQUN6SixJQUE3RDs7Ozs7Ozs7Ozs7O0FDcFZBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbXljaGFydF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9fb3JkZXJfZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvb3JkZXJfZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVzcG9uc2l2ZV9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Nzcy9iYWNrb2ZmaWNlLmNzcz8zNjY0Iiwid2VicGFjazovLy8uL3B1YmxpYy9jc3MvbmV3c2xldHRlci5jc3M/ZjczNSIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL3N0eWxlcy5jc3M/NWZiNSIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL3RleHRhcmVhV2l0aEhUTUwuY3NzPzk1OTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbXljaGFydF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbXljaGFydF9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtY2hhcnRqcy0tY2hhcnQnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhcnRqczpwcmUtY29ubmVjdCcsIHRoaXMuX29uUHJlQ29ubmVjdCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYXJ0anM6Y29ubmVjdCcsIHRoaXMuX29uQ29ubmVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICAvLyBZb3Ugc2hvdWxkIGFsd2F5cyByZW1vdmUgbGlzdGVuZXJzIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgZGlzY29ubmVjdGVkIHRvIGF2b2lkIHNpZGUgZWZmZWN0c1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFydGpzOnByZS1jb25uZWN0JywgdGhpcy5fb25QcmVDb25uZWN0KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhcnRqczpjb25uZWN0JywgdGhpcy5fb25Db25uZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25QcmVDb25uZWN0KGV2ZW50KSB7XHJcbiAgICAgICAgLy8gVGhlIGNoYXJ0IGlzIG5vdCB5ZXQgY3JlYXRlZFxyXG5cclxuICAgICAgICAvLyBGb3IgaW5zdGFuY2UgeW91IGNhbiBmb3JtYXQgWSBheGlzXHJcbiAgICAgICAgZXZlbnQuZGV0YWlsLm9wdGlvbnMuc2NhbGVzID0ge1xyXG4gICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ29ubmVjdChldmVudCkge1xyXG4gICAgICAgIC8vIFRoZSBjaGFydCB3YXMganVzdCBjcmVhdGVkXHJcblxyXG4gICAgICAgIC8vIEZvciBpbnN0YW5jZSB5b3UgY2FuIGxpc3RlbiB0byBhZGRpdGlvbmFsIGV2ZW50c1xyXG4gICAgICAgIGV2ZW50LmRldGFpbC5jaGFydC5vcHRpb25zLm9uSG92ZXIgPSAobW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvKiAuLi4gKi9cclxuICAgICAgICB9O1xyXG4gICAgICAgIGV2ZW50LmRldGFpbC5jaGFydC5vcHRpb25zLm9uQ2xpY2sgPSAobW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvKiAuLi4gKi9cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIGltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vLi4vcHVibGljL2Nzcy9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi8uLi9wdWJsaWMvY3NzL2JhY2tvZmZpY2UuY3NzJztcbmltcG9ydCAnLi8uLi9wdWJsaWMvY3NzL25ld3NsZXR0ZXIuY3NzJztcbmltcG9ydCAnLi8uLi9wdWJsaWMvY3NzL3RleHRhcmVhV2l0aEhUTUwuY3NzJztcblxuLy8gZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuLy8gICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbi8vICAgICB0cnVlLFxuLy8gICAgIC9cXC4oanx0KXN4PyQvXG4vLyAgICAgKSk7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vanMvYm9fb3JkZXJfZm9ybSc7XG5pbXBvcnQgJy4vanMvb3JkZXJfZGF0ZXBpY2tlci5qcyc7XG5pbXBvcnQgJy4vanMvcmVzcG9uc2l2ZV9uYXYuanMnO1xuICAgIFxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlJyk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImV4cG9ydCB2YXIgYm9fb3JkZXJfZm9ybSA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBidG5CdXJnZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmRyb3Bkb3duLXRvZ2dsZScpO1xyXG4gICAgICAgIGlmIChidG5CdXJnZXJJY29uKSB7XHJcbiAgICAgICAgICAgIGJ0bkJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib19vcmRlcl9mb3JtLmhhbmRsZUNsaWNrQ2xlYW5QKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkFkZFByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2R1Y3QnKTtcclxuICAgICAgICBpZiAoYnRuQWRkUHJvZHVjdCkge1xyXG4gICAgICAgICAgICBidG5BZGRQcm9kdWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9fb3JkZXJfZm9ybS5oYW5kbGVDbGlja0FkZFByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlQ2xpY2tDbGVhblA6ZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC5lbGVtZW50TWlzc2luZycpO1xyXG4gICAgICAgIGlmIChwRWxlbWVudCkge1xyXG4gICAgICAgICAgICBwRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBoYW5kbGVDbGlja0FkZFByb2R1Y3Q6ZnVuY3Rpb24gKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0QWRkUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXByb2R1Y3RfYWRkXScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0UHJvZHVjdFF0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmlucHV0LWFkZCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0U2VsZWN0ZWRRdHkgPSBpbnB1dFByb2R1Y3RRdHkudmFsdWU7XHJcbiAgICAgICAgaWYgKHNlbGVjdEFkZFByb2R1Y3Quc2VsZWN0ZWRJbmRleCA9PSAwIHx8IGlucHV0U2VsZWN0ZWRRdHkgPD0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlbGVtZW50TWlzc2luZycpO1xyXG4gICAgICAgICAgICBwRWxlbWVudC5pbm5lckhUTUwgPSAnTWVyY2kgZGUgc8OpbGVjdGlvbm5lciB1biBwcm9kdWl0IGV0IHNhIHF1YW50aXTDqSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkaXZEZXRhaWxzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jYXJkLWRldGFpbHMtZm9ybScpO1xyXG4gICAgICAgICAgICBmb3JtVGFnLmluc2VydEJlZm9yZShwRWxlbWVudCwgZGl2RGV0YWlsc0Zvcm0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9wdGlvblNlbGVjdGVkUHJvZHVjdCA9IHNlbGVjdEFkZFByb2R1Y3QudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdE5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uW2RhdGEtcHJvZHVjdG5hbWVdJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSBwcm9kdWN0TmFtZXNbc2VsZWN0QWRkUHJvZHVjdC5zZWxlY3RlZEluZGV4IC0gMV07XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdlJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdlJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2QtZmxleCBmbGV4LXJvdyB0ZXh0LWxpZ2h0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG9wdGlvbi1zdHlsZScpO1xyXG4gICAgICAgIGNvbnN0IGNhcmREZXRhaWxzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jYXJkLWRldGFpbHMtZm9ybScpO1xyXG4gICAgICAgIGNhcmREZXRhaWxzRm9ybS5hcHBlbmQoZGl2Um93KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGl2U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2U2VsZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndy0yNSB0ZXh0LXN0YXJ0Jyk7XHJcbiAgICAgICAgZGl2Um93LmFwcGVuZChkaXZTZWxlY3QpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgc2VsZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlbGVjdC1zdHlsZScpO1xyXG4gICAgICAgIHNlbGVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2R1Y3RfJyArIG9wdGlvblNlbGVjdGVkUHJvZHVjdCk7XHJcbiAgICAgICAgZGl2U2VsZWN0LmFwcGVuZChzZWxlY3RFbGVtZW50KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LXN0YXJ0Jyk7XHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvblNlbGVjdGVkUHJvZHVjdDtcclxuICAgICAgICBvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gJ3NlbGVjdGVkJztcclxuICAgICAgICBvcHRpb25FbGVtZW50LmlubmVySFRNTCA9IHByb2R1Y3ROYW1lLmRhdGFzZXQucHJvZHVjdG5hbWU7XHJcbiAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmQob3B0aW9uRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2SW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3LTI1IHRleHQtZW5kJyk7XHJcbiAgICAgICAgZGl2Um93LmFwcGVuZChkaXZJbnB1dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dFRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtY2VudGVyJyk7XHJcbiAgICAgICAgaW5wdXRUYWcuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xyXG4gICAgICAgIGlucHV0VGFnLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwJyk7XHJcbiAgICAgICAgaW5wdXRUYWcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgIGlucHV0VGFnLnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdHlfJyArIG9wdGlvblNlbGVjdGVkUHJvZHVjdCk7XHJcbiAgICAgICAgaW5wdXRUYWcuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGlucHV0U2VsZWN0ZWRRdHkpO1xyXG4gICAgICAgIGRpdklucHV0LmFwcGVuZChpbnB1dFRhZyk7XHJcbiAgICAgICAgcHJvZHVjdE5hbWVzW3NlbGVjdEFkZFByb2R1Y3Quc2VsZWN0ZWRJbmRleCAtIDFdLnJlbW92ZSgpO1xyXG4gICB9XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9fb3JkZXJfZm9ybS5pbml0KTtcclxuIiwiZXhwb3J0IHZhciBvcmRlcl9kYXRlcGlja2VyID0ge1xyXG4gICAgbW9udGhzOiBbXHJcbiAgICAgICAgXCJKYW52aWVyXCIsXHJcbiAgICAgICAgXCJGw6l2cmllclwiLFxyXG4gICAgICAgIFwiTWFyc1wiLFxyXG4gICAgICAgIFwiQXZyaWxcIixcclxuICAgICAgICBcIk1haVwiLFxyXG4gICAgICAgIFwiSnVpblwiLFxyXG4gICAgICAgIFwiSnVpbGxldFwiLFxyXG4gICAgICAgIFwiQW91dFwiLFxyXG4gICAgICAgIFwiU2VwdGVtYnJlXCIsXHJcbiAgICAgICAgXCJPY3RvYnJlXCIsXHJcbiAgICAgICAgXCJOb3ZlbWJyZVwiLFxyXG4gICAgICAgIFwiRMOpY2VtYnJlXCJcclxuICAgIF0sXHJcblxyXG4gICAgbW9udGhzQWJydjogW1xyXG4gICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgXCJGZWJcIixcclxuICAgICAgICBcIk1hclwiLFxyXG4gICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgXCJNYXlcIixcclxuICAgICAgICBcIkp1blwiLFxyXG4gICAgICAgIFwiSnVsXCIsXHJcbiAgICAgICAgXCJBdWdcIixcclxuICAgICAgICBcIlNlcFwiLFxyXG4gICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgXCJOb3ZcIixcclxuICAgICAgICBcIkRlY1wiXHJcbiAgICBdLFxyXG5cclxuICAgIGZ1bGxsZXR0ZXJEYXlzOiBbXHJcbiAgICAgICAgXCJEaW1hbmNoZVwiLFxyXG4gICAgICAgIFwiTHVuZGlcIixcclxuICAgICAgICBcIk1hcmRpXCIsXHJcbiAgICAgICAgXCJNZXJjcmVkaVwiLFxyXG4gICAgICAgIFwiSmV1ZGlcIixcclxuICAgICAgICBcIlZlbmRyZWRpXCIsXHJcbiAgICAgICAgXCJTYW1lZGlcIlxyXG4gICAgXSxcclxuXHJcbiAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKSxcclxuXHJcbiAgICB5ZWFyVmFsdWU6IFwiXCIsXHJcbiAgICBtb250aFZhbHVlOiBcIlwiLFxyXG4gICAgZGF5VmFsdWU6IFwiXCIsXHJcbiAgICBob3VyVmFsdWU6IFwiXCIsXHJcbiAgICBtaW51dGVWYWx1ZTogXCJcIixcclxuXHJcbiAgICBzZWxlY3RlY0RlbGl2ZXJ5RGF0ZToge30sXHJcblxyXG4gICAgY29weUlucHV0OiBcIlwiLFxyXG5cclxuICAgIGNvbnN0cnVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1zZWxlY3QtYW5uZWVdJyk7XHJcbiAgICAgICAgY29uc3QgeWVhclZhbHVlID0geWVhclNlbGVjdC52YWx1ZTtcclxuICAgICAgICBvcmRlcl9kYXRlcGlja2VyLnllYXJWYWx1ZSA9IHllYXJWYWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9udGhTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1zZWxlY3QtbW9pc10nKTtcclxuICAgICAgICBjb25zdCBtb250aFZhbHVlID0gbW9udGhTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgb3JkZXJfZGF0ZXBpY2tlci5tb250aFZhbHVlID0gbW9udGhWYWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9c2VsZWN0LWpvdXJdJyk7XHJcbiAgICAgICAgY29uc3QgZGF5VmFsdWUgPSBkYXlTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgb3JkZXJfZGF0ZXBpY2tlci5kYXlWYWx1ZSA9IGRheVZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBob3VyU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9c2VsZWN0LWhldXJlXScpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJWYWx1ZSA9IGhvdXJTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgb3JkZXJfZGF0ZXBpY2tlci5ob3VyVmFsdWUgPSBob3VyVmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbnV0ZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1taW51dGVdJyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlVmFsdWUgPSBtaW51dGVTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgb3JkZXJfZGF0ZXBpY2tlci5taW51dGVWYWx1ZSA9IG1pbnV0ZVZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlY0RlbGl2ZXJ5RGF0ZSA9IG5ldyBEYXRlKHllYXJWYWx1ZSwgbW9udGhWYWx1ZSAtIDEsIGRheVZhbHVlKTtcclxuICAgICAgICBvcmRlcl9kYXRlcGlja2VyLnNlbGVjdGVjRGVsaXZlcnlEYXRlID0gc2VsZWN0ZWNEZWxpdmVyeURhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBmb3JtQ3VzdG9tZXJPcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1vcmRlcl9jdXN0b21lcl0nKTtcclxuICAgICAgICBjb25zdCBmb3JtT3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9b3JkZXJdJyk7XHJcbiAgICAgICAgaWYgKGZvcm1DdXN0b21lck9yZGVyIHx8IGZvcm1PcmRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dERlbGl2ZXJ5RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9ZGVsaXZlcnlfZGF0ZV0nKTtcclxuICAgICAgICAgICAgb3JkZXJfZGF0ZXBpY2tlci5jb3B5SW5wdXQgPSBpbnB1dERlbGl2ZXJ5RGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlEYXRlUGFyZW50ID0gaW5wdXREZWxpdmVyeURhdGUucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtT3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dERlbGl2ZXJ5RGF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBKU09OLnBhcnNlKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGVBcnJheSA9IG5ld0RhdGUuZGF0ZS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhvdXJEYXRlID0gbmV3RGF0ZUFycmF5WzFdO1xyXG4gICAgICAgICAgICAgICAgaG91ckRhdGUgPSBob3VyRGF0ZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgaG91ckRhdGUgPSBob3VyRGF0ZVswXTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGVBcnJheSA9IG5ld0RhdGVBcnJheVswXTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGVBcnJheSA9IG5ld0RhdGVBcnJheS5yZXBsYWNlQWxsKCctJywgJyAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREZWxpdmVyeURhdGUgPSBuZXcgRGF0ZSgnJyArIG5ld0RhdGVBcnJheSArICcgJyArIGhvdXJEYXRlKTtcclxuICAgICAgICAgICAgICAgIG9yZGVyX2RhdGVwaWNrZXIuY3VycmVudERhdGUgPSBjdXJyZW50RGVsaXZlcnlEYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dERlbGl2ZXJ5RGF0ZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIG9yZGVyX2RhdGVwaWNrZXIuY3JlYXRlU2VsZWN0Q29udGFpbmVyKGRlbGl2ZXJ5RGF0ZVBhcmVudCk7XHJcbiAgICAgICAgICAgIG9yZGVyX2RhdGVwaWNrZXIuY29uc3RydWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKTtcclxuICAgICAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3JkZXJfZGF0ZXBpY2tlci5oYW5kbGVDbGlja1N1Ym1pdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGFuRGF5RnVsbExldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmdWxsbGV0dGVyRGF5Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9c2VsZWN0LW1vaXNdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1qb3VyXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9yZGVyX2RhdGVwaWNrZXIuc2VsZWN0ZWNEZWxpdmVyeURhdGUuZ2V0RGF5KCkgIT0gMCAmJiBvcmRlcl9kYXRlcGlja2VyLnNlbGVjdGVjRGVsaXZlcnlEYXRlLmdldERheSgpICE9IDEgJiYgb3JkZXJfZGF0ZXBpY2tlci5zZWxlY3RlY0RlbGl2ZXJ5RGF0ZS5nZXREYXkoKSAhPSA2KSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7Jyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05vdXMgbmUgc29tbWVzIHBhcyBvdXZlcnRzIGNlIGpvdXIuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9udGhTZWxlY3QuY2xhc3NMaXN0LmFkZCgndGV4dC1zZWNvbmRhcnknKTtcclxuICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDsnKTtcclxuICAgICAgICAgICAgICAgIGRheVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgZGF5U2VsZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Q29udGFpbmVyU3R5bGUnKTtcclxuICAgICAgICAgICAgY29uc3QgY3V0T2ZmVGltZUVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY3V0T2ZmVGltZUVsdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtb3JhbmdlIGZzdC1pdGFsaWMnKTtcclxuICAgICAgICAgICAgc2VsZWN0Q29udGFpbmVyLmFwcGVuZChjdXRPZmZUaW1lRWx0KTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGVja1NhbWVEYXkgPSBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldERhdGUoKSA9PSBvcmRlcl9kYXRlcGlja2VyLmRheVZhbHVlID8gdHJ1ZSA6IGZhbHNlICYmIG9yZGVyX2RhdGVwaWNrZXIuY3VycmVudERhdGUuZ2V0TW9udGgoKSA9PSBvcmRlcl9kYXRlcGlja2VyLm1vbnRoVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjaGVja1NhbWVEYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldEhvdXJzKCkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0RWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVMZWZ0RWx0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZUxlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lTGVmdEVsdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvdW50RG93bicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3Vyc0xlZnRSZXN1bHQgPSAoMTAgLSBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldEhvdXJzKCkpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzTGVmdFJlc3VsdCA9ICg2MCAtIG9yZGVyX2RhdGVwaWNrZXIuY3VycmVudERhdGUuZ2V0TWludXRlcygpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kc0xlZnRSZXN1bHQgPSAoNjAgLSBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldFNlY29uZHMoKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhVGltZUxlZnQgPSAneyBcImhvdXJcIjogMCwgXCJtaW51dGVcIjogMCwgXCJzZWNvbmRlXCI6IDUgfSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRpbWVMZWZ0ID0gSlNPTi5wYXJzZShkYXRhVGltZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUaW1lTGVmdC5ob3VyID0gaG91cnNMZWZ0UmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUaW1lTGVmdC5taW51dGUgPSBtaW51dGVzTGVmdFJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVGltZUxlZnQuc2Vjb25kZSA9IHNlY29uZHNMZWZ0UmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVMZWZ0RWx0LnNldEF0dHJpYnV0ZSgnZGF0YS10aW1lbGVmdCcsIEpTT04uc3RyaW5naWZ5KGRhdGFUaW1lTGVmdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWVMZWZ0RWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1kb2F0ZW5kJywgJ3RhcmdldC5pbm5lclRleHQgPSBcIkxlcyBsaXZyYWlzb25zIHBvdXIgYXVqb3VyZCBodWkgc29udCBjbG9zZXNcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVMZWZ0RWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1kb2F0ZW5kJywgXCJhbGVydCgnUGx1cyBkZSBsaXZyYWlzb24gcG9zc2libGUgcG91ciBhdWpvdXJkIGh1aSwgc8OpbGVjdGlvbm5leiB1bmUgZGF0ZSB1bHTDqXJpZXVyZS4nKTsgdGFyZ2V0LmlubmVyVGV4dCA9ICcnO1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXRPZmZUaW1lRWx0LmFwcGVuZCh0aW1lTGVmdEVsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1RpbWUuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXRPZmZUaW1lRWx0LmlubmVyVGV4dCA9ICdMZXMgbGl2cmFpc29ucyBwb3VyIGF1am91cmRcXCdodWkgc29udCBjbG9zZXMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVTZWxlY3RDb250YWluZXI6IGZ1bmN0aW9uIChkZWxpdmVyeURhdGVQYXJlbnQpIHtcclxuICAgICAgICBjb25zdCBkaXZTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZTZWxlY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdkLWZsZXggZmxleC1jb2x1bW4gc2VsZWN0Q29udGFpbmVyU3R5bGUnKTtcclxuICAgICAgICBkZWxpdmVyeURhdGVQYXJlbnQuYXBwZW5kKGRpdlNlbGVjdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RSb3dBID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdhbm5lZScsXHJcbiAgICAgICAgICAgICAgICAnb3B0aW9ubGlzdCc6IFtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGF0ZXBpY2tlci5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpICsgMSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdFJvd0IgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ2hldXJlJyxcclxuICAgICAgICAgICAgICAgICdvcHRpb25saXN0JzogWzE4ICsgXCJoXCIsIDE5ICsgXCJoXCIsIDIwICsgXCJoXCIsIDIxICsgXCJoXCIsIDIyICsgXCJoXCIsIDIzICsgXCJoXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdtaW51dGUnLFxyXG4gICAgICAgICAgICAgICAgJ29wdGlvbmxpc3QnOiBbMCwgMTUsIDMwLCA0NV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICduYW1lJzogJ2pvdXInLFxyXG4gICAgICAgICAgICAgICAgJ29wdGlvbmxpc3QnOiBvcmRlcl9kYXRlcGlja2VyLm15UmFuZ2UoMSwgMzEpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdtb2lzJyxcclxuICAgICAgICAgICAgICAgICdvcHRpb25saXN0Jzogb3JkZXJfZGF0ZXBpY2tlci5teVJhbmdlKDEsIDEyKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBvcmRlcl9kYXRlcGlja2VyLmNyZWF0ZVJvdyhkaXZTZWxlY3QpO1xyXG4gICAgICAgIG9yZGVyX2RhdGVwaWNrZXIuZmlsbFJvdyhkaXZTZWxlY3QsIGxpc3RSb3dBKTtcclxuICAgICAgICBvcmRlcl9kYXRlcGlja2VyLmNyZWF0ZVJvdyhkaXZTZWxlY3QpO1xyXG4gICAgICAgIG9yZGVyX2RhdGVwaWNrZXIuZmlsbFJvdyhkaXZTZWxlY3QsIGxpc3RSb3dCKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlUm93OiBmdW5jdGlvbiAoZGl2U2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgZGl2Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2Um93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tY29udGVudC1iYXNlbGluZSBteS0xJyk7XHJcbiAgICAgICAgZGl2U2VsZWN0LmFwcGVuZChkaXZSb3cpO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaWxsUm93OiBmdW5jdGlvbiAoZGl2U2VsZWN0LCBsaXN0Um93KSB7XHJcbiAgICAgICAgY29uc3QgZGl2Um93ID0gZGl2U2VsZWN0Lmxhc3RDaGlsZDtcclxuICAgICAgICBsaXN0Um93LmZvckVhY2goKHNlbGVjdCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0Um93Lmxlbmd0aCA+IDEgJiYga2V5ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5BdFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuQXRUaW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1kYXJrJyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuQXRUaW1lLmlubmVySFRNTCA9IFwiw4BcIjtcclxuICAgICAgICAgICAgICAgIGRpdlJvdy5hcHBlbmQoc3BhbkF0VGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdFJvdy5sZW5ndGggPiAxICYmIGtleSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuT25EYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuT25EYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWRhcmsgbXgtMicpO1xyXG4gICAgICAgICAgICAgICAgc3Bhbk9uRGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnZnVsbGxldHRlckRheScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW5PbkRheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ3Rvb2x0aXAnKTtcclxuICAgICAgICAgICAgICAgIHNwYW5PbkRheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaHRtbCcsICd0cnVlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3Bhbk9uRGF5LmlubmVySFRNTCA9IFwibGUgXCIgKyBvcmRlcl9kYXRlcGlja2VyLmZ1bGxsZXR0ZXJEYXlzW29yZGVyX2RhdGVwaWNrZXIuY3VycmVudERhdGUuZ2V0RGF5KCldO1xyXG4gICAgICAgICAgICAgICAgZGl2Um93LmFwcGVuZChzcGFuT25EYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICBzZWxlY3RUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NlbGVjdC0nICsgc2VsZWN0Lm5hbWUpO1xyXG4gICAgICAgICAgICBzZWxlY3RUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb3JkZXJfZGF0ZXBpY2tlci5oYW5kbGVDaGFuZ2VDaGVja0RhdGUpO1xyXG4gICAgICAgICAgICBkaXZSb3cuYXBwZW5kKHNlbGVjdFRhZyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25MaXN0ID0gc2VsZWN0Lm9wdGlvbmxpc3Q7XHJcbiAgICAgICAgICAgIG9wdGlvbkxpc3QuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UYWcuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0VGFnLm5hbWUgPT0gXCJzZWxlY3QtbW9pc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGFnLmlubmVyVGV4dCA9IG9yZGVyX2RhdGVwaWNrZXIubW9udGhzW29wdGlvbiAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uIC0gMSA9PSBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldE1vbnRoKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGFnLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RUYWcubmFtZSA9PSBcInNlbGVjdC1oZXVyZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiA9PSBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyAnaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGFnLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGFnLmlubmVyVGV4dCA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdFRhZy5uYW1lID09IFwic2VsZWN0LW1pbnV0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiA9PSBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25UYWcuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25UYWcuaW5uZXJUZXh0ID0gb3B0aW9uIDwgMTAgPyBcIjBcIiArIG9wdGlvbiA6IFwiXCIgKyBvcHRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RUYWcubmFtZSA9PSBcInNlbGVjdC1qb3VyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uID09IG9yZGVyX2RhdGVwaWNrZXIuY3VycmVudERhdGUuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRhZy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRhZy5pbm5lclRleHQgPSBvcHRpb24gPCAxMCA/IFwiMFwiICsgb3B0aW9uIDogXCJcIiArIG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRhZy5pbm5lclRleHQgPSBvcHRpb24gPCAxMCA/IFwiMFwiICsgb3B0aW9uIDogXCJcIiArIG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdFRhZy5hcHBlbmQob3B0aW9uVGFnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG15UmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IG1pbjsgaW5kZXggPD0gbWF4OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxpc3RbaW5kZXhdID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2VDaGVja0RhdGU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1zZWxlY3QtYW5uZWVdJyk7XHJcbiAgICAgICAgY29uc3QgeWVhclZhbHVlID0geWVhclNlbGVjdC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9udGhTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1zZWxlY3QtbW9pc10nKTtcclxuICAgICAgICBjb25zdCBtb250aFZhbHVlID0gbW9udGhTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1qb3VyXScpO1xyXG4gICAgICAgIGNvbnN0IGRheVZhbHVlID0gZGF5U2VsZWN0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBob3VyU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9c2VsZWN0LWhldXJlXScpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJWYWx1ZSA9IGhvdXJTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbnV0ZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1taW51dGVdJyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlVmFsdWUgPSBtaW51dGVTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwYW5EYXlGdWxsTGV0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGxsZXR0ZXJEYXknKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlY0RlbGl2ZXJ5RGF0ZSA9IG5ldyBEYXRlKHllYXJWYWx1ZSwgbW9udGhWYWx1ZSAtIDEsIGRheVZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tJZlBJbnZhbGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncC5wSW52YWxpZFN1Ym1pdCcpO1xyXG4gICAgICAgIGlmIChjaGVja0lmUEludmFsaWQpIHtcclxuICAgICAgICAgICAgY2hlY2tJZlBJbnZhbGlkLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgc2VsZWN0ZWQgZGF0ZSBleGlzdHNcclxuICAgICAgICBjb25zdCBpc0RhdGUgPSBvcmRlcl9kYXRlcGlja2VyLmNoZWNrSWZEYXRlVHJ1ZShkYXlWYWx1ZSwgbW9udGhWYWx1ZSwgeWVhclZhbHVlKTtcclxuICAgICAgICAvLyBkZXNpZ24gYW5kIGluZm8gb2Ygc2VsZWN0ZWQgdmFsdWUgaWYgZmFsc2VcclxuICAgICAgICBpZiAoaXNEYXRlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNwYW5EYXlGdWxsTGV0dGVyLmlubmVySFRNTCA9IFwibGUgXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vbnRoU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygndGV4dC1kYW5nZXInKSkge1xyXG4gICAgICAgICAgICAgICAgbW9udGhTZWxlY3QuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRheVNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3RleHQtZGFuZ2VyJykpIHtcclxuICAgICAgICAgICAgICAgIGRheVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICAgICAgZGF5U2VsZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWRheVNlbGVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZGF5U2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAndG9vbHRpcCcpO1xyXG4gICAgICAgICAgICAgICAgZGF5U2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1odG1sJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIGRheVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0xhIGRhdGUgZHUgJyArIGRheVZhbHVlICsgJyAnICsgb3JkZXJfZGF0ZXBpY2tlci5tb250aHNbbW9udGhWYWx1ZSAtIDFdICsgJyBuXFwnZXhpc3RlIHBhcy4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRheVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0xhIGRhdGUgZHUgJyArIGRheVZhbHVlICsgJyAnICsgb3JkZXJfZGF0ZXBpY2tlci5tb250aHNbbW9udGhWYWx1ZSAtIDFdICsgJyBuXFwnZXhpc3RlIHBhcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEFmZmljaGUgbGUgam91ciB1bmlxdWVtZW50IHNpIGxhIGRhdGUgZXhpc3RlXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlY0RlbGl2ZXJ5RGF0ZS5nZXREYXkoKSAhPSAwICYmIHNlbGVjdGVjRGVsaXZlcnlEYXRlLmdldERheSgpICE9IDEgJiYgc2VsZWN0ZWNEZWxpdmVyeURhdGUuZ2V0RGF5KCkgIT0gNikge1xyXG4gICAgICAgICAgICAgICAgc3BhbkRheUZ1bGxMZXR0ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwidGV4dC1zZWNvbmRhcnlcIik7XHJcbiAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7Jyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05vdXMgbmUgc29tbWVzIHBhcyBvdXZlcnRzIGNlIGpvdXIuJyk7XHJcbiAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgbW9udGhTZWxlY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOycpO1xyXG4gICAgICAgICAgICAgICAgZGF5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RleHQtc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICBkYXlTZWxlY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwYW5EYXlGdWxsTGV0dGVyLmNsYXNzTGlzdC5jb250YWlucygndGV4dC1zZWNvbmRhcnknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5EYXlGdWxsTGV0dGVyLmNsYXNzTGlzdC5yZXBsYWNlKCd0ZXh0LXNlY29uZGFyeScsICd0ZXh0LWRhcmsnKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpub25lOycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5EYXlGdWxsTGV0dGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC1zZWNvbmRhcnknKTtcclxuICAgICAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpub25lOycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpub25lOycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdGVkRGVsaXZlcnlEYXRlID0gbmV3IERhdGUoXCJcIiArIHllYXJWYWx1ZSArIFwiIFwiICsgbW9udGhWYWx1ZSArIFwiIFwiICsgZGF5VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVOb3cgPSByZXF1ZXN0ZWREZWxpdmVyeURhdGUgPCBvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0JlZm9yZU5vdyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlY0RlbGl2ZXJ5RGF0ZS5nZXREYXkoKSA9PSAwIHx8IHNlbGVjdGVjRGVsaXZlcnlEYXRlLmdldERheSgpID09IDEgfHwgc2VsZWN0ZWNEZWxpdmVyeURhdGUuZ2V0RGF5KCkgPT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJ0ZXh0LXNlY29uZGFyeVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbkRheUZ1bGxMZXR0ZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0xhIGRhdGUgc8OpbGVjdGlvbm7DqWUgZXN0IGRhbnMgbGUgcGFzc8OpLiBEYXRlIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RleHQtc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoU2VsZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RleHQtc2Vjb25kYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuRGF5RnVsbExldHRlci5pbm5lckhUTUwgPSBcImxlIFwiICsgb3JkZXJfZGF0ZXBpY2tlci5mdWxsbGV0dGVyRGF5c1tzZWxlY3RlY0RlbGl2ZXJ5RGF0ZS5nZXREYXkoKV07XHJcblxyXG4gICAgICAgICAgICBpZiAobW9udGhTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0LWRhbmdlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBtb250aFNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgICAgICAgICAgbW9udGhTZWxlY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWRlY29yYXRpb246bm9uZTsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF5U2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygndGV4dC1kYW5nZXInKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICBkYXlTZWxlY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWRlY29yYXRpb246bm9uZTsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF5U2VsZWN0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlTZWxlY3Quc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0RlbGl2ZXJ5VGltZSA9IG9yZGVyX2RhdGVwaWNrZXIuY2hlY2tEZWxpdmVyeVRpbWUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tEZWxpdmVyeVRpbWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBob3VyU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9c2VsZWN0LWhldXJlXScpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJWYWx1ZSA9IGhvdXJTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG1pbnV0ZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1taW51dGVdJyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlVmFsdWUgPSBtaW51dGVTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChob3VyVmFsdWUgPT0gXCIyM2hcIiAmJiBtaW51dGVWYWx1ZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXJTZWxlY3QuY2xhc3NMaXN0LmFkZCgndGV4dC1zZWNvbmRhcnknKTtcclxuICAgICAgICAgICAgaG91clNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7Jyk7XHJcbiAgICAgICAgICAgIGhvdXJTZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0b29sdGlwJyk7XHJcbiAgICAgICAgICAgIGhvdXJTZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLWJzLWh0bWwnLCAndHJ1ZScpO1xyXG5cclxuICAgICAgICAgICAgaG91clNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05vdXMgbmUgc29tbWVzIHBhcyBvdXZlcnRzIMOgIGNldHRlIGhldXJlIGzDoC4nKTtcclxuXHJcbiAgICAgICAgICAgIG1pbnV0ZVNlbGVjdC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICBtaW51dGVTZWxlY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoOycpO1xyXG4gICAgICAgICAgICBtaW51dGVTZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0b29sdGlwJyk7XHJcbiAgICAgICAgICAgIG1pbnV0ZVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaHRtbCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIG1pbnV0ZVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05vdXMgbmUgc29tbWVzIHBhcyBvdXZlcnRzIMOgIGNldHRlIGhldXJlIGzDoC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChob3VyU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygndGV4dC1zZWNvbmRhcnknKSkge1xyXG4gICAgICAgICAgICAgICAgaG91clNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgaG91clNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtZGVjb3JhdGlvbjpub25lOycpO1xyXG4gICAgICAgICAgICAgICAgaG91clNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pbnV0ZVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXNlY29uZGFyeScpO1xyXG4gICAgICAgICAgICAgICAgbWludXRlU2VsZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uOm5vbmU7Jyk7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVTZWxlY3Quc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7IG51bWJlciB8IHN0cmluZyB9IGRheVxyXG4gICAgICogQHBhcmFtIHsgbnVtYmVyIHwgc3RyaW5nIH0gbW9udGhcclxuICAgICAqIEBwYXJhbSB7IG51bWJlcnwgc3RyaW5nIH0geWVhclxyXG4gICAgICogQHJldHVybnMgeyBib29sZWFuIH1cclxuICAgICAqL1xyXG4gICAgY2hlY2tJZkRhdGVUcnVlOiBmdW5jdGlvbiAoZGF5LCBtb250aCwgeWVhcikge1xyXG5cclxuICAgICAgICBkYXkgPSBOdW1iZXIoZGF5KTtcclxuICAgICAgICBtb250aCA9IE51bWJlcihtb250aCkgLSAxOyAvL2Jsb29keSAwLWluZGV4ZWQgbW9udGhcclxuICAgICAgICB5ZWFyID0gTnVtYmVyKHllYXIpO1xyXG5cclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xyXG5cclxuICAgICAgICBsZXQgeWVhck1hdGNoZXMgPSBkLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXI7XHJcbiAgICAgICAgbGV0IG1vbnRoTWF0Y2hlcyA9IGQuZ2V0TW9udGgoKSA9PT0gbW9udGg7XHJcbiAgICAgICAgbGV0IGRheU1hdGNoZXMgPSBkLmdldERhdGUoKSA9PT0gZGF5O1xyXG5cclxuICAgICAgICBsZXQgdmFsaWREYXRlID0gdHJ1ZTtcclxuICAgICAgICBpZiAoeWVhck1hdGNoZXMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb250aE1hdGNoZXMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXlNYXRjaGVzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWREYXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVDbGlja1N1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdENvbnRhaW5lclN0eWxlJyk7XHJcbiAgICAgICAgY29uc3QgeWVhclNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1hbm5lZV0nKTtcclxuICAgICAgICBjb25zdCB5ZWFyVmFsdWUgPSB5ZWFyU2VsZWN0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBtb250aFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1tb2lzXScpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoVmFsdWUgPSBtb250aFNlbGVjdC52YWx1ZSA8IDEwID8gJzAnICsgKG1vbnRoU2VsZWN0LnZhbHVlKS50b1N0cmluZygpIDogbW9udGhTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPXNlbGVjdC1qb3VyXScpO1xyXG4gICAgICAgIGNvbnN0IGRheVZhbHVlID0gZGF5U2VsZWN0LnZhbHVlIDwgMTAgPyAnMCcgKyAoZGF5U2VsZWN0LnZhbHVlKS50b1N0cmluZygpIDogZGF5U2VsZWN0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBob3VyU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9c2VsZWN0LWhldXJlXScpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJWYWx1ZSA9IGhvdXJTZWxlY3QudmFsdWUuc2xpY2UoMCwgLTEpO1xyXG5cclxuICAgICAgICBjb25zdCBtaW51dGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1zZWxlY3QtbWludXRlXScpO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZVZhbHVlID0gbWludXRlU2VsZWN0LnZhbHVlIDwgMTAgPyAnMCcgKyAobWludXRlU2VsZWN0LnZhbHVlKS50b1N0cmluZygpIDogbWludXRlU2VsZWN0LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWVrZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbiNmdWxsbGV0dGVyRGF5Jyk7XHJcbiAgICAgICAgY29uc3Qgd2Vla2RheVZhbHVlID0gKHdlZWtkYXkuaW5uZXJUZXh0KS5zdWJzdHJpbmcoMyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzV2Vla2RheSA9IHdlZWtkYXlWYWx1ZSA9PSBcIlNhbWVkaVwiIHx8IHdlZWtkYXlWYWx1ZSA9PSBcIkRpbWFuY2hlXCIgfHwgd2Vla2RheVZhbHVlID09IFwiTHVuZGlcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBpc0RhdGUgPSBvcmRlcl9kYXRlcGlja2VyLmNoZWNrSWZEYXRlVHJ1ZShkYXlWYWx1ZSwgbW9udGhWYWx1ZSwgeWVhclZhbHVlKTtcclxuICAgICAgICBjb25zdCBpc0RlbGl2ZXJ5VGltZSA9IG9yZGVyX2RhdGVwaWNrZXIuY2hlY2tEZWxpdmVyeVRpbWUoKTtcclxuXHJcbiAgICAgICAgbGV0IGlzQmVmb3JlQ3V0T2ZmVGltZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKChvcmRlcl9kYXRlcGlja2VyLmN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKSA9PSBtb250aFZhbHVlICYmIG9yZGVyX2RhdGVwaWNrZXIuY3VycmVudERhdGUuZ2V0RGF0ZSgpID09IGRheVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVXaGVuU3VibWl0ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgaXNCZWZvcmVDdXRPZmZUaW1lID0gZGF0ZVdoZW5TdWJtaXQuZ2V0SG91cnMoKSA8IDEwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkRGVsaXZlcnlEYXRlID0gbmV3IERhdGUoXCJcIiArIHllYXJWYWx1ZSArIFwiIFwiICsgbW9udGhWYWx1ZSArIFwiIFwiICsgZGF5VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGlzQmVmb3JlTm93ID0gcmVxdWVzdGVkRGVsaXZlcnlEYXRlIDwgb3JkZXJfZGF0ZXBpY2tlci5jdXJyZW50RGF0ZSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IChpc1dlZWtkYXkgKyBpc0RhdGUgKyBpc0RlbGl2ZXJ5VGltZSArIGlzQmVmb3JlQ3V0T2ZmVGltZSArIGlzQmVmb3JlTm93KSA9PSA1ID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja0lmUEludmFsaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLnBJbnZhbGlkU3VibWl0Jyk7XHJcbiAgICAgICAgaWYgKGNoZWNrSWZQSW52YWxpZCkge1xyXG4gICAgICAgICAgICBjaGVja0lmUEludmFsaWQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdENvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGVsaXZlcnlEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPWRlbGl2ZXJ5X2RhdGVdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcHlJbnB1dCA9IG9yZGVyX2RhdGVwaWNrZXIuY29weUlucHV0O1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZU9iamVjdCA9IEpTT04ucGFyc2UoY29weUlucHV0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSB5ZWFyVmFsdWUgKyAnLScgKyBtb250aFZhbHVlICsgJy0nICsgZGF5VmFsdWUgKyAnICcgKyBob3VyVmFsdWUgKyAnOicgKyBtaW51dGVWYWx1ZSArICc6MDAnO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZU9iamVjdC5kYXRlID0gbmV3RGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGVPYmplY3QpO1xyXG4gICAgICAgICAgICBjb3B5SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGVUb1JldHVybik7XHJcblxyXG4gICAgICAgICAgICBsYWJlbERlbGl2ZXJ5RGF0ZS5wYXJlbnRFbGVtZW50LmFwcGVuZChjb3B5SW5wdXQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgcEludmFsaWRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHBJbnZhbGlkU3VibWl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncEludmFsaWRTdWJtaXQnKTtcclxuICAgICAgICAgICAgcEludmFsaWRTdWJtaXQuaW5uZXJUZXh0ID0gJ1ZvdHJlIGRhdGUgZGUgbGl2cmFpc29uIG5cXCdlc3QgcGFzIHZhbGlkZS4nO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbERlbGl2ZXJ5RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1kZWxpdmVyeV9kYXRlXScpO1xyXG4gICAgICAgICAgICBsYWJlbERlbGl2ZXJ5RGF0ZS5wYXJlbnRFbGVtZW50LmFwcGVuZChwSW52YWxpZFN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG9yZGVyX2RhdGVwaWNrZXIuaW5pdCk7IiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCB2YXIgcmVzcG9uc2l2ZV9uYXYgPSB7XHJcbiAgICBjbGllbnRXaWR0aDogMCxcclxuICAgIGNsaWVudEhlaWdodDogMCxcclxuICAgIGlzUG9ydHJhaXQ6IGZhbHNlLFxyXG4gICAgaXNMYW5kc2NhcGU6IGZhbHNlLFxyXG5cclxuICAgIGNvcHlCdXJnZXJNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jYnRuLW1lbnUnKSxcclxuXHJcbiAgICBiYXNlVXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG5cclxuICAgIGNvbnN0cnVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3BvbnNpdmVfbmF2LmNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgcmVzcG9uc2l2ZV9uYXYuY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHJlc3BvbnNpdmVfbmF2LmlzUG9ydHJhaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICByZXNwb25zaXZlX25hdi5pc0xhbmRzY2FwZSA9IHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZV9uYXYuY29uc3RydWN0KCk7XHJcbiAgICAgICAgcmVzcG9uc2l2ZV9uYXYuZGlzcGxheUJ1cmdlck1lbnUoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNpdmVfbmF2LmlzUG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZV9uYXYuZGlzcGxheVBvcnRyYWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlX25hdi5kaXNwbGF5TGFuZHNjYXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVfbmF2LmNvbnN0cnVjdCgpO1xyXG4gICAgICAgICAgICByZXNwb25zaXZlX25hdi5kaXNwbGF5QnVyZ2VyTWVudSgpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2l2ZV9uYXYuaXNQb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZV9uYXYuZGlzcGxheVBvcnRyYWl0KCk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlX25hdi5jbGVhckxhbmRzY2FwZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZV9uYXYuZGlzcGxheUJ1cmdlck1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVfbmF2LmRpc3BsYXlMYW5kc2NhcGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVfbmF2LmNsZWFyUG9ydHJhaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYnVyZ2VyTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNidG4tbWVudScpO1xyXG4gICAgICAgIGlmIChidXJnZXJNZW51QnRuKSB7XHJcbiAgICAgICAgICAgIGJ1cmdlck1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNwb25zaXZlX25hdi5oYW5kbGVDbGlja1RvZ2dsZU1lbnUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BsYXlCdXJnZXJNZW51OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VyTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNidG4tbWVudScpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZSaWdodFNpZGVOYXYnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNpdmVfbmF2LmlzUG9ydHJhaXQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoYnVyZ2VyTWVudUJ0bikge1xyXG4gICAgICAgICAgICAgICAgYnVyZ2VyTWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6aW5saW5lLWJsb2NrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlX25hdi5jb3B5QnVyZ2VyTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3BvbnNpdmVfbmF2LmhhbmRsZUNsaWNrVG9nZ2xlTWVudSk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRCdXJnZXIuYXBwZW5kKHJlc3BvbnNpdmVfbmF2LmNvcHlCdXJnZXJNZW51QnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNpdmVfbmF2LmlzTGFuZHNjYXBlID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGJ1cmdlck1lbnVCdG4pIHtcclxuICAgICAgICAgICAgICAgIGJ1cmdlck1lbnVCdG4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNsaWNrVG9nZ2xlTWVudTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdk1lbnVQb3J0cmFpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNtZW51UG9ydHJhaXQnKTtcclxuICAgICAgICBkaXZNZW51UG9ydHJhaXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BsYXlQb3J0cmFpdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdk1lbnVQb3J0cmFpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNtZW51UG9ydHJhaXQnKTtcclxuICAgICAgICBpZiAoZGl2TWVudVBvcnRyYWl0LmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UGFyZW50QmxvY2tOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2UGFyZW50QmxvY2tOYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkLWZsZXggZmxleC1jb2x1bW4gdy01MCcpO1xyXG4gICAgICAgICAgICBkaXZQYXJlbnRCbG9ja05hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Jsb2NrTmF2QScpO1xyXG4gICAgICAgICAgICBkaXZNZW51UG9ydHJhaXQuYXBwZW5kKGRpdlBhcmVudEJsb2NrTmF2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdlBhcmVudEJsb2NrTmF2QiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXZQYXJlbnRCbG9ja05hdkIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkLWZsZXggZmxleC1jb2x1bW4gdy01MCcpO1xyXG4gICAgICAgICAgICBkaXZQYXJlbnRCbG9ja05hdkIuc2V0QXR0cmlidXRlKCdpZCcsICdibG9ja05hdkInKTtcclxuXHJcbiAgICAgICAgICAgIGRpdk1lbnVQb3J0cmFpdC5hcHBlbmQoZGl2UGFyZW50QmxvY2tOYXZCKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVfbmF2LmRpc3BsYXlOYXZMaXN0TGluayhkaXZQYXJlbnRCbG9ja05hdkIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdWxCdG5BY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgICAgdWxCdG5BY3Rpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2YmFyLW5hdiBkLWZsZXggZmxleC1jb2x1bW4nKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tQb3J0cmFpdCA9IHJlc3BvbnNpdmVfbmF2LmlzUG9ydHJhaXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hlY2tQb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAgICAgZGl2UGFyZW50QmxvY2tOYXYucHJlcGVuZCh1bEJ0bkFjdGlvbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGl2UGFyZW50QmxvY2tOYXYuYXBwZW5kKHVsQnRuQWN0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2l2ZV9uYXYuZGlzcGxheU5hdkFjdGlvbnNCdG4odWxCdG5BY3Rpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFyUG9ydHJhaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBkaXZNZW51UG9ydHJhaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjbWVudVBvcnRyYWl0Jyk7XHJcbiAgICAgICAgZGl2TWVudVBvcnRyYWl0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBkaXZNZW51UG9ydHJhaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgZGl2TWVudVBvcnRyYWl0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGxheUxhbmRzY2FwZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXZSaWdodFNpZGVOYXYnKTtcclxuICAgICAgICBpZiAocGFyZW50QnVyZ2VyLmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UGFyZW50QmxvY2tOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2UGFyZW50QmxvY2tOYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkLWZsZXggZmxleC1yb3cnKTtcclxuICAgICAgICAgICAgcGFyZW50QnVyZ2VyLmFwcGVuZChkaXZQYXJlbnRCbG9ja05hdik7XHJcblxyXG4gICAgICAgICAgICByZXNwb25zaXZlX25hdi5kaXNwbGF5TmF2TGlzdExpbmsoZGl2UGFyZW50QmxvY2tOYXYpO1xyXG4gICAgICAgICAgICBjb25zdCB1bEJ0bkFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICB1bEJ0bkFjdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXZiYXItbmF2IGQtZmxleCBmbGV4LXJvdyBwb3NpdGlvbi1yZWxhdGl2ZScpO1xyXG4gICAgICAgICAgICBkaXZQYXJlbnRCbG9ja05hdi5hcHBlbmQodWxCdG5BY3Rpb25zKTtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZV9uYXYuZGlzcGxheU5hdkFjdGlvbnNCdG4odWxCdG5BY3Rpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFyTGFuZHNjYXBlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpdlJpZ2h0U2lkZU5hdicpO1xyXG4gICAgICAgIHBhcmVudEJ1cmdlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwbGF5TmF2TGlzdExpbms6IGZ1bmN0aW9uIChwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGlmIChyZXNwb25zaXZlX25hdi5pc1BvcnRyYWl0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgdWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2YmFyLW5hdiBkLWZsZXggZmxleC1jb2x1bW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdmJhci1uYXYgZC1mbGV4IGZsZXgtcm93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmQodWxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8hIENyw6lhdGlvbiBkZXMgbGllbnMgZGUgbmF2aWdhdGlvblxyXG4gICAgICAgIGNvbnN0IGxpTW9uUGFuaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaU1vblBhbmllci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XHJcbiAgICAgICAgdWxFbGVtZW50LmFwcGVuZChsaU1vblBhbmllcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdkN1cnJlbnRSb3V0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50Um91dGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYU1vblBhbmllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhTW9uUGFuaWVyLnNldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3BvbnNpdmVfbmF2LmJhc2VVcmkgKyBcIi9vcmRlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGRpdkN1cnJlbnRSb3V0ZS5kYXRhc2V0LmRhdGEgPT0gJ2FwcF9vcmRlcicpIHtcclxuICAgICAgICAgICAgYU1vblBhbmllci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJuYXYtbGluayBhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhTW9uUGFuaWVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcIm5hdi1saW5rXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaU1vblBhbmllci5hcHBlbmQoYU1vblBhbmllcik7XHJcbiAgICAgICAgY29uc3QgaU1vblBhbmllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpTW9uUGFuaWVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLXNob3BwaW5nLWNhcnQgbGlnaHQgb3BhY2l0eS03NScpO1xyXG4gICAgICAgIGFNb25QYW5pZXIuYXBwZW5kKGlNb25QYW5pZXIpO1xyXG4gICAgICAgIGNvbnN0IHF0ZVBhbmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpc0xvZ2dlZEluJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYU1vblBhbmllci5hcHBlbmQocXRlUGFuaWVyLmRhdGFzZXQuY291bnRwYW5pZXIgPiAwID8gXCIgTW9uIHBhbmllciAoXCIgKyBxdGVQYW5pZXIuZGF0YXNldC5jb3VudHBhbmllciArICcpJyA6IFwiIE1vbiBwYW5pZXJcIik7ICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGxpTm9zUHJvZHVpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpTm9zUHJvZHVpdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xyXG4gICAgICAgIHVsRWxlbWVudC5hcHBlbmQobGlOb3NQcm9kdWl0cyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFOb3NQcm9kdWl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhTm9zUHJvZHVpdHMuc2V0QXR0cmlidXRlKCdocmVmJywgcmVzcG9uc2l2ZV9uYXYuYmFzZVVyaSArIFwiL3Byb2R1Y3RcIik7XHJcblxyXG4gICAgICAgIGlmIChkaXZDdXJyZW50Um91dGUuZGF0YXNldC5kYXRhID09ICdwcm9kdWN0X2xpc3QnKSB7XHJcbiAgICAgICAgICAgIGFOb3NQcm9kdWl0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJuYXYtbGluayBhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhTm9zUHJvZHVpdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwibmF2LWxpbmtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpTm9zUHJvZHVpdHMuYXBwZW5kKGFOb3NQcm9kdWl0cyk7XHJcbiAgICAgICAgY29uc3QgaU5vc1Byb2R1aXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIGlOb3NQcm9kdWl0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhcyBmYS1oYW1idXJnZXIgbGlnaHQgb3BhY2l0eS03NScpO1xyXG4gICAgICAgIGFOb3NQcm9kdWl0cy5hcHBlbmQoaU5vc1Byb2R1aXRzKTtcclxuICAgICAgICBhTm9zUHJvZHVpdHMuYXBwZW5kKCcgTm9zIHByb2R1aXRzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNMb2dnZWRJbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFJc0xvZ2dlZEluID0gSlNPTi5wYXJzZShpc0xvZ2dlZEluLmRhdGFzZXQuZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhSXNMb2dnZWRJbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpTWVzQ29tbWFuZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlNZXNDb21tYW5kZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xyXG4gICAgICAgICAgICB1bEVsZW1lbnQuYXBwZW5kKGxpTWVzQ29tbWFuZGVzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFNZXNDb21tYW5kZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgICAgICAgICBhTWVzQ29tbWFuZGVzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3BvbnNpdmVfbmF2LmJhc2VVcmkgKyBcIi9vcmRlci9zaG93L1wiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXZDdXJyZW50Um91dGUuZGF0YXNldC5kYXRhID09ICdhcHBfb3JkZXJfc2hvdycpIHtcclxuICAgICAgICAgICAgICAgIGFNZXNDb21tYW5kZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwibmF2LWxpbmsgYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYU1lc0NvbW1hbmRlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJuYXYtbGlua1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaU1lc0NvbW1hbmRlcy5hcHBlbmQoYU1lc0NvbW1hbmRlcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlNZXNDb21tYW5kZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgIGlNZXNDb21tYW5kZXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYXMgZmEtaGlzdG9yeSBsaWdodCBvcGFjaXR5LTc1Jyk7XHJcbiAgICAgICAgICAgIGFNZXNDb21tYW5kZXMuYXBwZW5kKGlNZXNDb21tYW5kZXMpO1xyXG4gICAgICAgICAgICBhTWVzQ29tbWFuZGVzLmFwcGVuZCgnIE1lcyBjb21tYW5kZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BsYXlOYXZBY3Rpb25zQnRuOiBmdW5jdGlvbiAocGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpc0xvZ2dlZEluJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YUlzTG9nZ2VkSW4gPSBKU09OLnBhcnNlKGlzTG9nZ2VkSW4uZGF0YXNldC5kYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGFJc0xvZ2dlZEluID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlSZWdpc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpUmVnaXN0ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbScpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGxpUmVnaXN0ZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGl2Q3VycmVudFJvdXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRSb3V0ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJlZ2lzdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBhUmVnaXN0ZXIuc2V0QXR0cmlidXRlKCdocmVmJywgcmVzcG9uc2l2ZV9uYXYuYmFzZVVyaSArIFwiL3JlZ2lzdGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpdkN1cnJlbnRSb3V0ZS5kYXRhc2V0LmRhdGEgPT0gJ2FwcF9yZWdpc3RlcicpIHtcclxuICAgICAgICAgICAgICAgIGFSZWdpc3Rlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJuYXYtbGluayBhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhUmVnaXN0ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwibmF2LWxpbmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlSZWdpc3Rlci5hcHBlbmQoYVJlZ2lzdGVyKTtcclxuICAgICAgICAgICAgY29uc3QgaVJlZ2lzdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgICAgICBpUmVnaXN0ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYXMgZmEtdXNlci1lZGl0IGxpZ2h0IG9wYWNpdHktNzUnKTtcclxuICAgICAgICAgICAgYVJlZ2lzdGVyLmFwcGVuZChpUmVnaXN0ZXIpO1xyXG4gICAgICAgICAgICBhUmVnaXN0ZXIuYXBwZW5kKCcgU1xcJ2luc2NyaXJlJyk7XHJcbiAgICAgICAgICAgIGxpUmVnaXN0ZXIuYXBwZW5kKGFSZWdpc3Rlcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaUxvZ0luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlMb2dJbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQobGlMb2dJbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhTG9nSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGFMb2dJbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXNwb25zaXZlX25hdi5iYXNlVXJpICsgXCIvbG9naW5cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGl2Q3VycmVudFJvdXRlLmRhdGFzZXQuZGF0YSA9PSAnYXBwX2xvZ2luJykge1xyXG4gICAgICAgICAgICAgICAgYUxvZ0luLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcIm5hdi1saW5rIGFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFMb2dJbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJuYXYtbGlua1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaUxvZ0luLmFwcGVuZChhTG9nSW4pO1xyXG4gICAgICAgICAgICBjb25zdCBpTG9nSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgIGlMb2dJbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhcyBmYS1zaWduLWluLWFsdCBsaWdodCBvcGFjaXR5LTc1Jyk7XHJcbiAgICAgICAgICAgIGFMb2dJbi5hcHBlbmQoaUxvZ0luKTtcclxuICAgICAgICAgICAgYUxvZ0luLmFwcGVuZCgnIFNlIGNvbm5lY3RlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbGlEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpRHJvcERvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtaXRlbSBkcm9wZG93bicpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGxpRHJvcERvd24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBhRHJvcERvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkcm9wZG93bi10b2dnbGUgYnRuJyk7XHJcbiAgICAgICAgICAgIGFEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xyXG4gICAgICAgICAgICBhRHJvcERvd24uc2V0QXR0cmlidXRlKCdpZCcsICduYXZiYXJEcm9wZG93bicpO1xyXG4gICAgICAgICAgICBhRHJvcERvd24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAvLyBhRHJvcERvd24uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgICAgICAgICAvLyBhRHJvcERvd24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBhRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNwb25zaXZlX25hdi5oYW5kbGVDbGlja1RvZ2dsZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgICAgIGxpRHJvcERvd24uYXBwZW5kKGFEcm9wRG93bik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhQXZhdGFyID0gaXNMb2dnZWRJbi5kYXRhc2V0LmF2YXRhcjtcclxuICAgICAgICAgICAgbGV0IGlzSnBnID0gbmV3IFJlZ0V4cCgnLmpwZycpLnRlc3QoZGF0YUF2YXRhcik7XHJcbiAgICAgICAgICAgIGlmIChpc0pwZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZ0F2YXRhci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdW5kZWQtcGlsbCcpO1xyXG4gICAgICAgICAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVzcG9uc2l2ZV9uYXYuYmFzZVVyaSArICcvaW1hZ2VzL2F2YXRhcnMvJyArIGRhdGFBdmF0YXIpO1xyXG4gICAgICAgICAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBcIjMwXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1nQXZhdGFyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2F2YXRhcicpO1xyXG4gICAgICAgICAgICAgICAgYURyb3BEb3duLmFwcGVuZChpbWdBdmF0YXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaUF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICAgICAgICAgIGlBdmF0YXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRhdGFBdmF0YXIpO1xyXG4gICAgICAgICAgICAgICAgYURyb3BEb3duLmFwcGVuZChpQXZhdGFyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhUHNldWRvID0gaXNMb2dnZWRJbi5kYXRhc2V0LnBzZXVkbztcclxuICAgICAgICAgICAgYURyb3BEb3duLmFwcGVuZCgnICcgKyBkYXRhUHNldWRvKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVsRHJvcGRvd25OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICB1bERyb3Bkb3duTmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxEcm9wZG93bicpO1xyXG4gICAgICAgICAgICB1bERyb3Bkb3duTmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJ25hdmJhckRyb3Bkb3duJyk7XHJcbiAgICAgICAgICAgIHVsRHJvcGRvd25OYXYuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXBvcHBlcicsICdzdGF0aWMnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQodWxEcm9wZG93bk5hdik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaVByb2ZpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpUHJvZmlsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWl0ZW0nKTtcclxuICAgICAgICAgICAgdWxEcm9wZG93bk5hdi5hcHBlbmQobGlQcm9maWwpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVByb2ZpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgYVByb2ZpbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Ryb3Bkb3duLWl0ZW0gbmF2LWxpbmsnKVxyXG4gICAgICAgICAgICBhUHJvZmlsLnNldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3BvbnNpdmVfbmF2LmJhc2VVcmkgKyBcIi9wcm9maWwvXCIgKyBpc0xvZ2dlZEluLmRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgICBsaVByb2ZpbC5hcHBlbmQoYVByb2ZpbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBpUHJvZmlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgICAgICBpUHJvZmlsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLXVzZXItY29nIGxpZ2h0IG9wYWNpdHktNzUnKVxyXG4gICAgICAgICAgICBhUHJvZmlsLmFwcGVuZChpUHJvZmlsKTtcclxuICAgICAgICAgICAgYVByb2ZpbC5hcHBlbmQoXCIgUHJvZmlsXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlMb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsaUxvZ291dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1pdGVtJyk7XHJcbiAgICAgICAgICAgIHVsRHJvcGRvd25OYXYuYXBwZW5kKGxpTG9nb3V0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFMb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGFMb2dvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkcm9wZG93bi1pdGVtIG5hdi1saW5rJylcclxuICAgICAgICAgICAgYUxvZ291dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXNwb25zaXZlX25hdi5iYXNlVXJpICsgXCIvbG9nb3V0XCIpO1xyXG4gICAgICAgICAgICBsaUxvZ291dC5hcHBlbmQoYUxvZ291dCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBpTG9nb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgICAgICBpTG9nb3V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLXNpZ24tb3V0LWFsdCBsaWdodCBvcGFjaXR5LTc1JylcclxuICAgICAgICAgICAgYUxvZ291dC5hcHBlbmQoaUxvZ291dCk7XHJcbiAgICAgICAgICAgIGFMb2dvdXQuYXBwZW5kKFwiIETDqWNvbm5leGlvblxcblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNsaWNrVG9nZ2xlRHJvcGRvd246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHVsRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxEcm9wZG93bicpO1xyXG4gICAgICAgIGFwcC5oYW5kbGVTd2l0Y2hEcm9wZG93blRvUGFuaWVyKHVsRHJvcGRvd24pO1xyXG5cclxuICAgICAgICB1bERyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlc3BvbnNpdmVfbmF2LmluaXQpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblByZUNvbm5lY3QiLCJfb25Db25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGV0YWlsIiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJjYWxsYmFjayIsInZhbHVlIiwiaW5kZXgiLCJ2YWx1ZXMiLCJjaGFydCIsIm9uSG92ZXIiLCJtb3VzZUV2ZW50Iiwib25DbGljayIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsImJvX29yZGVyX2Zvcm0iLCJpbml0IiwiYnRuQnVyZ2VySWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhhbmRsZUNsaWNrQ2xlYW5QIiwiYnRuQWRkUHJvZHVjdCIsImhhbmRsZUNsaWNrQWRkUHJvZHVjdCIsInBFbGVtZW50IiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RBZGRQcm9kdWN0IiwiaW5wdXRQcm9kdWN0UXR5IiwiaW5wdXRTZWxlY3RlZFF0eSIsInNlbGVjdGVkSW5kZXgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiZm9ybVRhZyIsImRpdkRldGFpbHNGb3JtIiwiaW5zZXJ0QmVmb3JlIiwib3B0aW9uU2VsZWN0ZWRQcm9kdWN0IiwicHJvZHVjdE5hbWVzIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2R1Y3ROYW1lIiwiZGl2Um93IiwiY2FyZERldGFpbHNGb3JtIiwiYXBwZW5kIiwiZGl2U2VsZWN0Iiwic2VsZWN0RWxlbWVudCIsIm9wdGlvbkVsZW1lbnQiLCJzZWxlY3RlZCIsImRhdGFzZXQiLCJwcm9kdWN0bmFtZSIsImRpdklucHV0IiwiaW5wdXRUYWciLCJvcmRlcl9kYXRlcGlja2VyIiwibW9udGhzIiwibW9udGhzQWJydiIsImZ1bGxsZXR0ZXJEYXlzIiwiY3VycmVudERhdGUiLCJEYXRlIiwieWVhclZhbHVlIiwibW9udGhWYWx1ZSIsImRheVZhbHVlIiwiaG91clZhbHVlIiwibWludXRlVmFsdWUiLCJzZWxlY3RlY0RlbGl2ZXJ5RGF0ZSIsImNvcHlJbnB1dCIsImNvbnN0cnVjdCIsInllYXJTZWxlY3QiLCJtb250aFNlbGVjdCIsImRheVNlbGVjdCIsImhvdXJTZWxlY3QiLCJtaW51dGVTZWxlY3QiLCJmb3JtQ3VzdG9tZXJPcmRlciIsImZvcm1PcmRlciIsImlucHV0RGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlEYXRlUGFyZW50IiwicGFyZW50RWxlbWVudCIsImlucHV0VmFsdWUiLCJuZXdEYXRlIiwiSlNPTiIsInBhcnNlIiwibmV3RGF0ZUFycmF5IiwiZGF0ZSIsInNwbGl0IiwiaG91ckRhdGUiLCJyZXBsYWNlQWxsIiwiY3VycmVudERlbGl2ZXJ5RGF0ZSIsImNyZWF0ZVNlbGVjdENvbnRhaW5lciIsInN1Ym1pdEJ0biIsImhhbmRsZUNsaWNrU3VibWl0Iiwic3BhbkRheUZ1bGxMZXR0ZXIiLCJnZXREYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3RDb250YWluZXIiLCJjdXRPZmZUaW1lRWx0IiwiY2hlY2tTYW1lRGF5IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0SG91cnMiLCJ0aW1lTGVmdEVsdCIsImhvdXJzTGVmdFJlc3VsdCIsIm1pbnV0ZXNMZWZ0UmVzdWx0IiwiZ2V0TWludXRlcyIsInNlY29uZHNMZWZ0UmVzdWx0IiwiZ2V0U2Vjb25kcyIsImRhdGFUaW1lTGVmdCIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmRlIiwic3RyaW5naWZ5IiwiZHluYW1pY1RpbWUiLCJpbm5lclRleHQiLCJsaXN0Um93QSIsImdldEZ1bGxZZWFyIiwibGlzdFJvd0IiLCJteVJhbmdlIiwiY3JlYXRlUm93IiwiZmlsbFJvdyIsImxpc3RSb3ciLCJsYXN0Q2hpbGQiLCJmb3JFYWNoIiwic2VsZWN0Iiwia2V5IiwibGVuZ3RoIiwic3BhbkF0VGltZSIsInNwYW5PbkRheSIsInNlbGVjdFRhZyIsIm5hbWUiLCJoYW5kbGVDaGFuZ2VDaGVja0RhdGUiLCJvcHRpb25MaXN0Iiwib3B0aW9ubGlzdCIsIm9wdGlvbiIsIm9wdGlvblRhZyIsIm1pbiIsIm1heCIsImxpc3QiLCJjaGVja0lmUEludmFsaWQiLCJpc0RhdGUiLCJjaGVja0lmRGF0ZVRydWUiLCJjb250YWlucyIsInRpdGxlIiwicmVwbGFjZSIsInJlcXVlc3RlZERlbGl2ZXJ5RGF0ZSIsImlzQmVmb3JlTm93IiwiaXNEZWxpdmVyeVRpbWUiLCJjaGVja0RlbGl2ZXJ5VGltZSIsImRheSIsIm1vbnRoIiwieWVhciIsIk51bWJlciIsImQiLCJ5ZWFyTWF0Y2hlcyIsImdldFVUQ0Z1bGxZZWFyIiwibW9udGhNYXRjaGVzIiwiZGF5TWF0Y2hlcyIsInZhbGlkRGF0ZSIsInRvU3RyaW5nIiwic2xpY2UiLCJ3ZWVrZGF5Iiwid2Vla2RheVZhbHVlIiwic3Vic3RyaW5nIiwiaXNXZWVrZGF5IiwiaXNCZWZvcmVDdXRPZmZUaW1lIiwiZGF0ZVdoZW5TdWJtaXQiLCJpc1ZhbGlkIiwibGFiZWxEZWxpdmVyeURhdGUiLCJjdXJyZW50RGF0ZU9iamVjdCIsImRhdGVUb1JldHVybiIsInBJbnZhbGlkU3VibWl0IiwiZGF0YSIsInJlc3BvbnNpdmVfbmF2IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpc1BvcnRyYWl0IiwiaXNMYW5kc2NhcGUiLCJjb3B5QnVyZ2VyTWVudUJ0biIsImJhc2VVcmkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRpc3BsYXlCdXJnZXJNZW51IiwiZGlzcGxheVBvcnRyYWl0IiwiZGlzcGxheUxhbmRzY2FwZSIsImNsZWFyTGFuZHNjYXBlIiwiY2xlYXJQb3J0cmFpdCIsImJ1cmdlck1lbnVCdG4iLCJoYW5kbGVDbGlja1RvZ2dsZU1lbnUiLCJwYXJlbnRCdXJnZXIiLCJkaXZNZW51UG9ydHJhaXQiLCJ0b2dnbGUiLCJjaGlsZEVsZW1lbnRDb3VudCIsImRpdlBhcmVudEJsb2NrTmF2IiwiZGl2UGFyZW50QmxvY2tOYXZCIiwiZGlzcGxheU5hdkxpc3RMaW5rIiwidWxCdG5BY3Rpb25zIiwiY2hlY2tQb3J0cmFpdCIsInByZXBlbmQiLCJkaXNwbGF5TmF2QWN0aW9uc0J0biIsImlzQWN0aXZlIiwicGFyZW50IiwidWxFbGVtZW50IiwibGlNb25QYW5pZXIiLCJkaXZDdXJyZW50Um91dGUiLCJhTW9uUGFuaWVyIiwiaU1vblBhbmllciIsInF0ZVBhbmllciIsImNvdW50cGFuaWVyIiwibGlOb3NQcm9kdWl0cyIsImFOb3NQcm9kdWl0cyIsImlOb3NQcm9kdWl0cyIsImlzTG9nZ2VkSW4iLCJkYXRhSXNMb2dnZWRJbiIsImxpTWVzQ29tbWFuZGVzIiwiYU1lc0NvbW1hbmRlcyIsImlNZXNDb21tYW5kZXMiLCJsaVJlZ2lzdGVyIiwiYVJlZ2lzdGVyIiwiaVJlZ2lzdGVyIiwibGlMb2dJbiIsImFMb2dJbiIsImlMb2dJbiIsImxpRHJvcERvd24iLCJhRHJvcERvd24iLCJoYW5kbGVDbGlja1RvZ2dsZURyb3Bkb3duIiwiZGF0YUF2YXRhciIsImF2YXRhciIsImlzSnBnIiwiUmVnRXhwIiwidGVzdCIsImltZ0F2YXRhciIsImlBdmF0YXIiLCJkYXRhUHNldWRvIiwicHNldWRvIiwidWxEcm9wZG93bk5hdiIsImxpUHJvZmlsIiwiYVByb2ZpbCIsImlkIiwiaVByb2ZpbCIsImxpTG9nb3V0IiwiYUxvZ291dCIsImlMb2dvdXQiLCJ1bERyb3Bkb3duIiwiaGFuZGxlU3dpdGNoRHJvcGRvd25Ub1BhbmllciJdLCJzb3VyY2VSb290IjoiIn0=