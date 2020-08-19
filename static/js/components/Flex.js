import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = (
  alignItems,
  direction,
  justify,
  padding,
  textAlign,
  wrap
) => styled.div`
  align-items: ${alignItems};
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  padding: ${padding}px;
  text-align: ${textAlign};
`;

/** @param justify: Justifies content horizontally */
const Flex = ({
  alignItems = "stretch",
  children,
  direction = "row",
  justify = "flex-start",
  padding = 0,
  textAlign = "start",
  wrap = "wrap",
}) => {
  const FlexWrapper = Wrapper(
    alignItems,
    direction,
    justify,
    padding,
    textAlign,
    wrap
  );

  return <FlexWrapper>{children}</FlexWrapper>;
};

Flex.propTypes = {
  alignItems: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  children: PropTypes.array,
  direction: PropTypes.oneOf([
    "column",
    "column-reverse",
    "row",
    "row-reverse",
  ]),
  justify: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "space-around",
    "space-between",
  ]),
  padding: PropTypes.number,
  textAlign: PropTypes.oneOf(["start", "center", "end"]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
};

export default Flex;
