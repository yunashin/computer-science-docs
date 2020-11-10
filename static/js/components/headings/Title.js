import React from "react";
import styled from "styled-components";

import { LILAC } from "../constants/Styles";

const H1 = styled.h1`
  color: ${LILAC};
  font-family: Arial Narrow;
  margin: 15px 10px 10px 10px;
`;

const Title = ({ children }) => {
  return (
    <H1>
      <a class="lilac" href="/">
        {children}
      </a>
    </H1>
  );
};

export default Title;
