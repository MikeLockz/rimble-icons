"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgPoa = function SvgPoa(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? props.color : "#444FA1",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M3.75 18L12 3.75 20.25 18H3.75zm5.154-7.257c.964-.643 1.997-.968 3.096-.968s2.132.325 3.096.968L12 5.395l-3.096 5.348zM7.441 13.27l-2.248 3.883h13.614l-2.248-3.882c-1.357 1.492-2.882 2.25-4.559 2.25s-3.203-.758-4.56-2.25zM12 14.675c1.454 0 2.783-.668 4.003-2.025-1.22-1.36-2.55-2.027-4.003-2.027-1.454 0-2.783.668-4.003 2.026 1.22 1.359 2.55 2.027 4.003 2.027v-.001zm0-.362c-.87 0-1.576-.732-1.576-1.634 0-.902.705-1.633 1.576-1.633.87 0 1.576.732 1.576 1.633 0 .902-.705 1.633-1.576 1.633zm0-.848c.42 0 .759-.352.759-.786a.773.773 0 00-.759-.786.773.773 0 00-.759.786c0 .435.34.787.759.787v-.001z",
      fill: "white"
    })
  );
};

SvgPoa.displayName = "SvgPoa";
SvgPoa.defaultProps = {
  size: 24
};
exports.default = SvgPoa;