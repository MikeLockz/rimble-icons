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

var SvgSignalWifiStatusbarConnectedNoInternet226X24Px = function SvgSignalWifiStatusbarConnectedNoInternet226X24Px(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), _react2["default"].createElement("path", {
    fillOpacity: 0.3,
    d: "M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
  }), _react2["default"].createElement("path", {
    d: "M5.45 12.59l7.54 9.4.01.01.01-.01L20 13.28v-1.09c-1.07-.73-3.59-2.19-7-2.19-4.36 0-7.26 2.38-7.55 2.59zM22 10v8h2v-8h-2zm0 12h2v-2h-2v2z"
  }));
};

SvgSignalWifiStatusbarConnectedNoInternet226X24Px.displayName = "SvgSignalWifiStatusbarConnectedNoInternet226X24Px";
SvgSignalWifiStatusbarConnectedNoInternet226X24Px.defaultProps = {
  size: 24,
  color: "inherit"
};
exports["default"] = SvgSignalWifiStatusbarConnectedNoInternet226X24Px;