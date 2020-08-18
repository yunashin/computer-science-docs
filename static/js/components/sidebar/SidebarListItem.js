import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import {
  LIGHT_PINK,
  BASE_BACKGROUND_COLOR,
  HOVER_COLOR,
} from "../constants/Styles";
import { SidebarContent } from "../constants/SidebarContent";

const Item = (backgroundColor, isSelected) => styled.li`
  background-color: ${backgroundColor};
  font-size: 14px;
  font-weight: ${isSelected ? "bold" : "normal"};
  height: 20px;
  list-style: none;
  margin: auto;
  padding: 10px;
  vertical-align: middle;
  width: 200px;
`;

const getBackgroundColor = (isSelected, isHoveredOver) => {
  if (isSelected) return LIGHT_PINK;
  if (isHoveredOver) return HOVER_COLOR;
  return BASE_BACKGROUND_COLOR;
};

const SidebarListItem = ({
  currentPageIndex,
  history,
  page,
  selectPageIndex,
}) => {
  const [isHoveredOver, setIsHovering] = useState(false);
  const index = SidebarContent.indexOf(page);
  const isSelected = currentPageIndex === index;
  const backgroundColor = getBackgroundColor(isSelected, isHoveredOver);
  const ListItem = Item(backgroundColor, isSelected);

  const handleClick = () => {
    selectPageIndex(index);
    history.push(page.path);
  };

  return (
    <ListItem
      onClick={handleClick}
      onMouseLeave={() => setIsHovering(false)}
      onMouseOver={() => setIsHovering(true)}
    >
      {page.title}
    </ListItem>
  );
};

export default withRouter(SidebarListItem);
