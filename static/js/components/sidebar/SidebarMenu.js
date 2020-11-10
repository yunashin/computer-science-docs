import React from "react";
import styled from "styled-components";

import SidebarListItem from "./SidebarListItem";
import DropdownList from "../lists/DropdownList/DropdownList";
import { SidebarContent } from "../constants/SidebarContent";

const SidebarContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const SidebarMenu = ({ currentPageIndex, selectPageIndex }) => {
  return (
    <SidebarContainer>
      <DropdownList>
        {SidebarContent.map((page) => (
          <SidebarListItem
            key={page.title}
            page={page}
            currentPageIndex={currentPageIndex}
            selectPageIndex={selectPageIndex}
          />
        ))}
      </DropdownList>
    </SidebarContainer>
  );
};

export default SidebarMenu;
