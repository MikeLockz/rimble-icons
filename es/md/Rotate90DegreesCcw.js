var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgRotate90DegreesCcw = function SvgRotate90DegreesCcw(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { d: "M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26A8.95 8.95 0 0013 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 010 9.9 6.973 6.973 0 01-7.79 1.44l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 000-12.72z" })
  );
};

SvgRotate90DegreesCcw.displayName = "SvgRotate90DegreesCcw";
SvgRotate90DegreesCcw.defaultProps = {
  size: 24
};
export default SvgRotate90DegreesCcw;