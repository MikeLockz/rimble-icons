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

var SvgLend = function SvgLend(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M12.86 15.335L8.773 19.5l-1.166-1.279 2.833-2.887-2.94-2.995 1.255-1.28 4.105 4.276zm2.385-2.394l1.255-1.28-2.94-2.995 2.833-2.887L15.227 4.5l-4.105 4.165 4.123 4.276zm-5.97-2.375l4.124 4.275 1.255-1.279L10.53 9.36l-1.255 1.206z",
    fill: "white"
  }));
};

SvgLend.displayName = "SvgLend";
SvgLend.defaultProps = {
  size: 24,
  color: "#0FA9C9"
};
exports["default"] = SvgLend;