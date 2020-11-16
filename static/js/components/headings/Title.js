import React from "react";
import styled from "styled-components";

import { MAGENTA } from "../constants/Styles";

const H1 = styled.h1`
  color: "${MAGENTA} !important";
  font-family: Montserrat Black;
  margin: 15px 10px 10px 10px;
`;

const Title = ({ children }) => {
  return (
    <H1>
      <a className="magenta" href="/">
        {children}
      </a>
    </H1>
  );
};

export default Title;
