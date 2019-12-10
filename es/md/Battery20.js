var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgBattery20 = function SvgBattery20(props) {
  return React.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? props.color : "#000"
    }, props),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    React.createElement("path", { d: "M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z" }),
    React.createElement("path", {
      fillOpacity: 0.3,
      d: "M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"
    })
  );
};

SvgBattery20.displayName = "SvgBattery20";
SvgBattery20.defaultProps = {
  size: 24
};
export default SvgBattery20;