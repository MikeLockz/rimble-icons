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

var SvgBtcd = function SvgBtcd(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M12.809 14.517c3.81-1.175 2.45-5.125 0-5.275.622 0 1.13-1.783 1.13-3.992 5.983.425 8.793 10.283-.18 13.367.058-.8-.27-3.034-.95-4.1zM4.5 13.35v-4.1h.008c2.163-.008 3.908-1.8 3.901-3.992h4.17c0 4.475-3.613 8.092-8.079 8.092zm5.465-.742c2.475 2.034 2.615 5.459 2.615 6.142H8.409c0-2.267-1.475-4.1-3.302-4.1 3.097-.5 3.728-1.025 4.858-2.042z",
    fill: "white"
  }));
};

SvgBtcd.displayName = "SvgBtcd";
SvgBtcd.defaultProps = {
  size: 24,
  color: "#FF6600"
};
exports["default"] = SvgBtcd;