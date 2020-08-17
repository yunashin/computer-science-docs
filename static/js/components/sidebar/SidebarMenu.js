import React from "react";
import styled from "styled-components";

import SidebarListItem from "./SidebarListItem";
import { SidebarContent } from "../constants/SidebarContent";

const SidebarContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 200px;
`;

const List = styled.ul`
  list-style: none;
  margin-block-start: 0px;
  padding-inline-start: 20px;
`;

const SidebarMenu = ({ currentPageIndex, selectPage }) => {
  return (
    <SidebarContainer>
      <List>
        {SidebarContent.map((page) => (
          <SidebarListItem
            key={page.title}
            page={page}
            currentPageIndex={currentPageIndex}
            selectPage={selectPage}
          />
        ))}
      </List>
    </SidebarContainer>
  );
};

export default SidebarMenu;
