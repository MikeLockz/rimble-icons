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

var SvgFiberDvr = function SvgFiberDvr(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("defs", null, _react2["default"].createElement("path", {
    id: "fiberDvr_svg__a",
    d: "M0 0h24v24H0V0z"
  })), _react2["default"].createElement("clipPath", {
    id: "fiberDvr_svg__b"
  }, _react2["default"].createElement("use", {
    xlinkHref: "#fiberDvr_svg__a",
    overflow: "visible"
  })), _react2["default"].createElement("path", {
    d: "M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z",
    clipPath: "url(#fiberDvr_svg__b)"
  }));
};

SvgFiberDvr.displayName = "SvgFiberDvr";
SvgFiberDvr.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgFiberDvr;