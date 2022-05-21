"use strict";
(self["webpackChunkpulse"] = self["webpackChunkpulse"] || []).push([["src_component_index_tsx"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudF9pbmRleF90c3guZDlkYTUxZGQ1YTIyZDUzZjEyZTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF5QztFQUFBLElBQXRDQyxTQUFzQyxRQUF0Q0EsU0FBc0M7RUFBQSxJQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0VBRXJELG9CQUFPLHVEQUFDLDJDQUFEO0lBQUEsdUJBQVUsdURBQUMsMERBQUQ7TUFBQSx1QkFDZix1REFBQyxxREFBRDtRQUNFLFFBQVEsRUFBRUgsK0RBQWUsQ0FBQ0UsU0FBRCxDQUQzQjtRQUVFLE9BQU8sRUFBQyxTQUZWO1FBR0UsT0FBTyxFQUFDLFNBSFY7UUFJRSxJQUFJLEVBQUMsTUFKUDtRQUtFLEtBQUssRUFBRTtVQUFFRSxTQUFTLEVBQUU7UUFBYixDQUxUO1FBTUUsVUFBVSxFQUFFO1VBQUVDLElBQUksRUFBRSxXQUFSO1VBQXFCQyxRQUFRLEVBQUUsS0FBL0I7VUFBc0NDLE1BQU0sRUFBRUMsUUFBOUM7VUFBd0RDLFVBQVUsRUFBRTtRQUFwRSxDQU5kO1FBQUEsVUFRR047TUFSSDtJQURlO0VBQVYsRUFBUDtBQVlELENBZEQ7O0FBZ0JBLGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJPLElBQU1ELGVBQWdDLEdBQUc7RUFDOUNVLFFBQVEsRUFBRTtJQUNSQyxPQUFPLEVBQUU7TUFBRUMsQ0FBQyxFQUFFLENBQUM7SUFBTixDQUREO0lBRVJDLE9BQU8sRUFBRTtNQUFFRCxDQUFDLEVBQUU7SUFBTCxDQUZEO0lBR1JFLElBQUksRUFBRTtNQUFFRixDQUFDLEVBQUUsQ0FBQztJQUFOO0VBSEUsQ0FEb0M7RUFNOUNHLFVBQVUsRUFBRTtJQUNWSixPQUFPLEVBQUU7TUFBRUssQ0FBQyxFQUFFLENBQUM7SUFBTixDQURDO0lBRVZILE9BQU8sRUFBRTtNQUFFRyxDQUFDLEVBQUU7SUFBTCxDQUZDO0lBR1ZGLElBQUksRUFBRTtNQUFFRSxDQUFDLEVBQUUsQ0FBQztJQUFOO0VBSEk7QUFOa0MsQ0FBekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWxzZS8uL3NyYy9jb21wb25lbnQvaW5kZXgudHN4Iiwid2VicGFjazovL3B1bHNlLy4vc3JjL2NvbXBvbmVudC9wcmVzZXRzL2RpcmVjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgwqkgQWxsIHJpZ2h0cyByZXNlcnZlZCAyMDIyXG4gKiBJbmZpbmlzb2Z0IEluYy5cbiAqIHd3dy5pbmZpbmktc29mdC5jb21cbiAqXG4gKiBNb2R1bGUgRmVkZXJhdGVkIE1pY3JvIENvbXBvbmVudFxuICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkaXJlY3Rpb25QcmVzZXQgfSBmcm9tICcuL3ByZXNldHMvZGlyZWN0aW9uJztcbmltcG9ydCB7IFB1bHNlUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgUHVsc2UgPSAoeyBkaXJlY3Rpb24sIGNoaWxkcmVuIH06IFB1bHNlUHJvcHMpID0+IHtcblxuICByZXR1cm4gPFN1c3BlbnNlPjxBbmltYXRlUHJlc2VuY2U+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtkaXJlY3Rpb25QcmVzZXRbZGlyZWN0aW9uXX1cbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogJ2Vhc2VJbk91dCcsIGR1cmF0aW9uOiAwLjU1MCwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9BbmltYXRlUHJlc2VuY2U+PC9TdXNwZW5zZT5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVsc2U7XG4iLCIvKlxuICogQ29weXJpZ2h0IMKpIEFsbCByaWdodHMgcmVzZXJ2ZWQgMjAyMlxuICogSW5maW5pc29mdCBJbmMuXG4gKiB3d3cuaW5maW5pLXNvZnQuY29tXG4gKi9cblxuaW1wb3J0IHsgTW90aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIENvb3JkaW5hdGVzID0ge1xuICB4PzogbnVtYmVyXG4gIHk/OiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRGlyZWN0aW9uUHJlc2V0UHJvcHMgPSB7XG4gIGluaXRpYWw6IENvb3JkaW5hdGVzLFxuICBhbmltYXRlOiBDb29yZGluYXRlcyxcbiAgZXhpdDogQ29vcmRpbmF0ZXMsXG59XG5cbmV4cG9ydCB0eXBlIERpcmVjdGlvblByZXNldCA9IFJlY29yZDxNb3Rpb25EaXJlY3Rpb24sIERpcmVjdGlvblByZXNldFByb3BzPlxuXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uUHJlc2V0OiBEaXJlY3Rpb25QcmVzZXQgPSB7XG4gIHZlcnRpY2FsOiB7XG4gICAgaW5pdGlhbDogeyB5OiAtMTAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAgfSxcbiAgICBleGl0OiB7IHk6IC0xMCB9XG4gIH0sXG4gIGhvcml6b250YWw6IHtcbiAgICBpbml0aWFsOiB7IHg6IC0xMCB9LFxuICAgIGFuaW1hdGU6IHsgeDogMCB9LFxuICAgIGV4aXQ6IHsgeDogLTEwIH1cbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJSZWFjdCIsIlN1c3BlbnNlIiwiZGlyZWN0aW9uUHJlc2V0IiwiUHVsc2UiLCJkaXJlY3Rpb24iLCJjaGlsZHJlbiIsInRleHRBbGlnbiIsImVhc2UiLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsInZlcnRpY2FsIiwiaW5pdGlhbCIsInkiLCJhbmltYXRlIiwiZXhpdCIsImhvcml6b250YWwiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==