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

var SvgDash = function SvgDash(props) {
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
    d: "M19.928 9.728L18.4 14.514s-.943 2.386-3.185 2.386H4.398l.773-2.385h9.8l1.542-4.787H6.728l.758-2.385h10.757c2.357 0 1.685 2.385 1.685 2.385zM4.786 11.015h5.8l-.743 2.213H4.027l.758-2.213z",
    fill: "white"
  }));
};

SvgDash.displayName = "SvgDash";
SvgDash.defaultProps = {
  size: 24,
  color: "#1C75BC"
};
exports["default"] = SvgDash;