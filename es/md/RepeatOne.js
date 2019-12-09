var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var SvgRepeatOne = function SvgRepeatOne(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", height: props.size, width: props.size }, props),
    React.createElement("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z" })
  );
};

export default SvgRepeatOne;