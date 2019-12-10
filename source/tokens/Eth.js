import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgEth = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#0C0C0D"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M12 15.243l4.5-2.662-4.5 6.343-4.5-6.342 4.5 2.662v-.001zm0-10.74l4.5 7.087-4.5 2.662-4.5-2.662L12 4.502z"
      fill="white"
    />
  </Svg>
);

SvgEth.displayName = "SvgEth";
SvgEth.defaultProps = {
  size: 24
};
export default SvgEth;