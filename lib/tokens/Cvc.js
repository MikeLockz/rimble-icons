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

var SvgCvc = function SvgCvc(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M12.87 12.584a1.756 1.756 0 00.998-1.58c0-.97-.796-1.757-1.777-1.757-.983 0-1.78.787-1.78 1.757a1.755 1.755 0 00.999 1.58v2.17h1.56v-2.17zm-.78 5.041c-3.139 0-5.692-2.523-5.692-5.625s2.553-5.625 5.693-5.625a5.694 5.694 0 015.445 3.984h1.962C18.74 7.006 15.712 4.5 12.09 4.5 7.898 4.5 4.5 7.858 4.5 12c0 4.142 3.398 7.5 7.59 7.5 3.622 0 6.65-2.506 7.408-5.859h-1.963a5.694 5.694 0 01-5.445 3.984",
    fill: "white"
  }));
};

SvgCvc.displayName = "SvgCvc";
SvgCvc.defaultProps = {
  size: 24,
  color: "#3AB03E"
};
exports["default"] = SvgCvc;