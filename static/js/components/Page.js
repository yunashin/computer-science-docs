import React from "react";
import styled from "styled-components";

import { BASE_BACKGROUND_COLOR } from "./constants/Styles";

const PageContainer = styled.div`
  background-color: ${BASE_BACKGROUND_COLOR};
  height: auto;
  margin: 120px 60px 100px 300px;
  max-width: 1120px;
  position: relative;
  width: auto;
  z-index: 3;
`;

const Page = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Page;
