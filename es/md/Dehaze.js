function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgDehaze = function SvgDehaze(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), React.createElement("path", {
    d: "M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

SvgDehaze.displayName = "SvgDehaze";
SvgDehaze.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgDehaze;