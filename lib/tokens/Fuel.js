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

var SvgFuel = function SvgFuel(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M19.149 7.5h-4.871l-1.445 3.623H8.278V9.257h4.555L13.5 7.5H6.601a.322.322 0 00-.324.32v3.302h-1.11L4.5 12.878h1.777v3.298c0 .179.147.324.329.324h3.338l.667-1.756H8.278v-1.867h3.777L10.611 16.5h2.222l1.556-3.623h4.785c.18 0 .326-.144.326-.321v-4.71a.349.349 0 00-.351-.346zm-1.538 3.345a.279.279 0 01-.28.277h-2.275l.777-1.864h1.496a.28.28 0 01.283.276v1.311z",
    fill: "white"
  }));
};

SvgFuel.displayName = "SvgFuel";
SvgFuel.defaultProps = {
  size: 24,
  color: "#4096D0"
};
exports["default"] = SvgFuel;