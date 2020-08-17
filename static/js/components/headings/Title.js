import React from "react";
import styled from "styled-components";

import { BASE_FONT_COLOR } from "../constants/Styles";

const H1 = styled.h1`
  color: ${BASE_FONT_COLOR};
  font-size: 40px;
`;

const Title = ({ children }) => {
  return <H1>{children}</H1>;
};

export default Title;
