import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = (position) => {
  const isPositionRight = position === "right";

  return styled.div`
    ${isPositionRight && "right: 0px;"}
  `;
};

const FlexItem = ({ children, position }) => {
  const StyledItem = Item(position);

  return <StyledItem>{children}</StyledItem>;
};

FlexItem.propTypes = {
  children: PropTypes.object,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export default FlexItem;
