import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = (align, padding) => styled.div`
  display: flex;
  padding: ${padding};
  text-align: ${align};
`;

const Flex = ({ align = "start", children, padding = "0px" }) => {
  const FlexWrapper = Wrapper(align, padding);
  return <FlexWrapper>{children}</FlexWrapper>;
};

Flex.propTypes = {
  align: PropTypes.oneOf(["end", "center", "start"]),
  children: PropTypes.array,
  padding: PropTypes.string,
};

export default Flex;
