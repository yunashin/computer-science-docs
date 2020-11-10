import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = (alignItems, left, maxWidth, right) => {
  return styled.div`
    align-items: ${alignItems};
    display: flex;
    ${left && `left: ${left}px;`}
    ${right && `right: ${right}px;`}
    ${maxWidth && `max-width: ${maxWidth}px;`}
  `;
};

const FlexItem = ({
  alignItems = "stretch",
  children,
  left = 0,
  maxWidth,
  right = 0,
}) => {
  const StyledItem = Item(alignItems, left, maxWidth, right);

  return <StyledItem>{children}</StyledItem>;
};

FlexItem.propTypes = {
  alignItems: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  children: PropTypes.any,
  left: PropTypes.number,
  maxWidth: PropTypes.number,
  right: PropTypes.number,
};

export default FlexItem;
