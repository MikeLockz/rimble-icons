"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgNxt = function SvgNxt(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.561 12.625c-.38 0-.688-.28-.688-.625v-.626h-3.459c-.38 0-.688-.28-.688-.624 0-.345.308-.625.688-.625h4.147c.38 0 .689.28.689.625V12c0 .345-.308.625-.689.625zm-3.411 0h1.376c.38 0 .689.28.689.624 0 .345-.308.626-.689.626h-2.112a.74.74 0 01-.317-.07l-4.014-2.43H9.926c-.38 0-.688-.28-.688-.625s.307-.625.688-.625h1.377c.148 0 .285.043.398.116l3.924 2.385h.525v-.001zm-4.847 0c.38 0 .688.28.688.624 0 .345-.308.626-.688.626H9.925a.74.74 0 01-.317-.07l-4.014-2.43H4.439c-.38 0-.689-.28-.689-.625s.308-.625.689-.625h1.376c.14 0 .28.04.398.116l3.924 2.385h1.165v-.001zm-6.865 0h1.377c.38 0 .688.28.688.625s-.308.625-.688.625H4.438c-.38 0-.688-.28-.688-.625s.308-.625.689-.625z",
    fill: "white"
  }));
};

SvgNxt.displayName = "SvgNxt";
SvgNxt.defaultProps = {
  size: 24,
  color: "#008FBB"
};
exports["default"] = SvgNxt;