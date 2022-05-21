"use strict";
(self["webpackChunkpulse"] = self["webpackChunkpulse"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../../../node_modules/react-dom/client.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/component/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");




(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root')).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_component__WEBPACK_IMPORTED_MODULE_2__["default"], {}));

/***/ }),

/***/ "./src/component/index.tsx":
/*!*********************************!*\
  !*** ./src/component/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "webpack/sharing/consume/default/framer-motion/framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presets_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets/direction */ "./src/component/presets/direction.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */





var Pulse = function Pulse(_ref) {
  var direction = _ref.direction,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimatePresence, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
        variants: _presets_direction__WEBPACK_IMPORTED_MODULE_2__.directionPreset[direction],
        initial: "initial",
        animate: "animate",
        exit: "exit",
        style: {
          textAlign: 'center'
        },
        transition: {
          ease: 'easeInOut',
          duration: 0.550,
          repeat: Infinity,
          repeatType: 'reverse'
        },
        children: children
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pulse);

/***/ }),

/***/ "./src/component/presets/direction.tsx":
/*!*********************************************!*\
  !*** ./src/component/presets/direction.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directionPreset": () => (/* binding */ directionPreset)
/* harmony export */ });
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
var directionPreset = {
  vertical: {
    initial: {
      y: -10
    },
    animate: {
      y: 0
    },
    exit: {
      y: -10
    }
  },
  horizontal: {
    initial: {
      x: -10
    },
    animate: {
      x: 0
    },
    exit: {
      x: -10
    }
  }
};

/***/ }),

/***/ "../../../node_modules/react-dom/client.js":
/*!*************************************************!*\
  !*** ../../../node_modules/react-dom/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Jvb3RzdHJhcF90c3guMmRmZTY4YTEyNjE3NjEwN2NjYTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBQyw0REFBVSxDQUFDRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBRCxDQUFWLENBQTZDQyxNQUE3QyxlQUFvRCx1REFBQyxrREFBRCxLQUFwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBeUM7RUFBQSxJQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0VBQUEsSUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtFQUVyRCxvQkFBTyx1REFBQywyQ0FBRDtJQUFBLHVCQUFVLHVEQUFDLDBEQUFEO01BQUEsdUJBQ2YsdURBQUMscURBQUQ7UUFDRSxRQUFRLEVBQUVILCtEQUFlLENBQUNFLFNBQUQsQ0FEM0I7UUFFRSxPQUFPLEVBQUMsU0FGVjtRQUdFLE9BQU8sRUFBQyxTQUhWO1FBSUUsSUFBSSxFQUFDLE1BSlA7UUFLRSxLQUFLLEVBQUU7VUFBRUUsU0FBUyxFQUFFO1FBQWIsQ0FMVDtRQU1FLFVBQVUsRUFBRTtVQUFFQyxJQUFJLEVBQUUsV0FBUjtVQUFxQkMsUUFBUSxFQUFFLEtBQS9CO1VBQXNDQyxNQUFNLEVBQUVDLFFBQTlDO1VBQXdEQyxVQUFVLEVBQUU7UUFBcEUsQ0FOZDtRQUFBLFVBUUdOO01BUkg7SUFEZTtFQUFWLEVBQVA7QUFZRCxDQWREOztBQWdCQSxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCTyxJQUFNRCxlQUFnQyxHQUFHO0VBQzlDVSxRQUFRLEVBQUU7SUFDUkMsT0FBTyxFQUFFO01BQUVDLENBQUMsRUFBRSxDQUFDO0lBQU4sQ0FERDtJQUVSQyxPQUFPLEVBQUU7TUFBRUQsQ0FBQyxFQUFFO0lBQUwsQ0FGRDtJQUdSRSxJQUFJLEVBQUU7TUFBRUYsQ0FBQyxFQUFFLENBQUM7SUFBTjtFQUhFLENBRG9DO0VBTTlDRyxVQUFVLEVBQUU7SUFDVkosT0FBTyxFQUFFO01BQUVLLENBQUMsRUFBRSxDQUFDO0lBQU4sQ0FEQztJQUVWSCxPQUFPLEVBQUU7TUFBRUcsQ0FBQyxFQUFFO0lBQUwsQ0FGQztJQUdWRixJQUFJLEVBQUU7TUFBRUUsQ0FBQyxFQUFFLENBQUM7SUFBTjtFQUhJO0FBTmtDLENBQXpDOzs7Ozs7Ozs7O0FDckJNOztBQUViLFFBQVEsbUJBQU8sQ0FBQyxzRUFBVztBQUMzQixJQUFJLEtBQXFDLEVBQUUsRUFHMUMsQ0FBQztBQUNGO0FBQ0EsRUFBRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1bHNlLy4vc3JjL2Jvb3RzdHJhcC50c3giLCJ3ZWJwYWNrOi8vcHVsc2UvLi9zcmMvY29tcG9uZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wdWxzZS8uL3NyYy9jb21wb25lbnQvcHJlc2V0cy9kaXJlY3Rpb24udHN4Iiwid2VicGFjazovL3B1bHNlLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpISkucmVuZGVyKDxDb21wb25lbnQgLz4pO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgwqkgQWxsIHJpZ2h0cyByZXNlcnZlZCAyMDIyXG4gKiBJbmZpbmlzb2Z0IEluYy5cbiAqIHd3dy5pbmZpbmktc29mdC5jb21cbiAqXG4gKiBNb2R1bGUgRmVkZXJhdGVkIE1pY3JvIENvbXBvbmVudFxuICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkaXJlY3Rpb25QcmVzZXQgfSBmcm9tICcuL3ByZXNldHMvZGlyZWN0aW9uJztcbmltcG9ydCB7IFB1bHNlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgUHVsc2UgPSAoeyBkaXJlY3Rpb24sIGNoaWxkcmVuIH06IFB1bHNlUHJvcHMpID0+IHtcblxuICByZXR1cm4gPFN1c3BlbnNlPjxBbmltYXRlUHJlc2VuY2U+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtkaXJlY3Rpb25QcmVzZXRbZGlyZWN0aW9uXX1cbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogJ2Vhc2VJbk91dCcsIGR1cmF0aW9uOiAwLjU1MCwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9BbmltYXRlUHJlc2VuY2U+PC9TdXNwZW5zZT5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVsc2U7XG4iLCIvKlxuICogQ29weXJpZ2h0IMKpIEFsbCByaWdodHMgcmVzZXJ2ZWQgMjAyMlxuICogSW5maW5pc29mdCBJbmMuXG4gKiB3d3cuaW5maW5pLXNvZnQuY29tXG4gKi9cblxuaW1wb3J0IHsgTW90aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIENvb3JkaW5hdGVzID0ge1xuICB4PzogbnVtYmVyXG4gIHk/OiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRGlyZWN0aW9uUHJlc2V0UHJvcHMgPSB7XG4gIGluaXRpYWw6IENvb3JkaW5hdGVzLFxuICBhbmltYXRlOiBDb29yZGluYXRlcyxcbiAgZXhpdDogQ29vcmRpbmF0ZXMsXG59XG5cbmV4cG9ydCB0eXBlIERpcmVjdGlvblByZXNldCA9IFJlY29yZDxNb3Rpb25EaXJlY3Rpb24sIERpcmVjdGlvblByZXNldFByb3BzPlxuXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uUHJlc2V0OiBEaXJlY3Rpb25QcmVzZXQgPSB7XG4gIHZlcnRpY2FsOiB7XG4gICAgaW5pdGlhbDogeyB5OiAtMTAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAgfSxcbiAgICBleGl0OiB7IHk6IC0xMCB9XG4gIH0sXG4gIGhvcml6b250YWw6IHtcbiAgICBpbml0aWFsOiB7IHg6IC0xMCB9LFxuICAgIGFuaW1hdGU6IHsgeDogMCB9LFxuICAgIGV4aXQ6IHsgeDogLTEwIH1cbiAgfVxufVxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gZnVuY3Rpb24oYywgaCwgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uaHlkcmF0ZVJvb3QoYywgaCwgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkNvbXBvbmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJTdXNwZW5zZSIsImRpcmVjdGlvblByZXNldCIsIlB1bHNlIiwiZGlyZWN0aW9uIiwiY2hpbGRyZW4iLCJ0ZXh0QWxpZ24iLCJlYXNlIiwiZHVyYXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJ2ZXJ0aWNhbCIsImluaXRpYWwiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJob3Jpem9udGFsIiwieCJdLCJzb3VyY2VSb290IjoiIn0=