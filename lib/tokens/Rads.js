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

var SvgRads = function SvgRads(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M8.603 5.746a2.856 2.856 0 110 5.712 2.856 2.856 0 010-5.712zm2.855 9.652a2.855 2.855 0 11-2.856-2.856 3.94 3.94 0 003.94-3.94 2.856 2.856 0 112.856 2.857 3.94 3.94 0 00-3.94 3.94zm3.94 2.856a2.856 2.856 0 110-5.712 2.856 2.856 0 010 5.712zm0-1.995a.86.86 0 100-1.721.86.86 0 000 1.721zm-6.795 0a.86.86 0 100-1.722.86.86 0 000 1.722zm6.795-6.796a.86.86 0 100-1.722.86.86 0 000 1.722zm-6.795 0a.861.861 0 100-1.722.861.861 0 000 1.722z",
    fill: "white"
  }));
};

SvgRads.displayName = "SvgRads";
SvgRads.defaultProps = {
  size: 24,
  color: "#9D4BEF"
};
exports["default"] = SvgRads;