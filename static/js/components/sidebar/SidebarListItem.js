import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import { PINK, BASE_BACKGROUND_COLOR, HOVER_COLOR } from "../constants/Styles";
import { SidebarContent } from "../constants/SidebarContent";

const Item = (backgroundColor, isSelected) => styled.li`
  background-color: ${backgroundColor};
  font-family: ${isSelected ? "Montserrat Black" : "Montserrat Medium"};
  font-size: 17px;
  height: 20px;
  list-style: none;
  margin: auto;
  max-width: 400px;
  padding: 10px;
  vertical-align: middle;
`;

const getBackgroundColor = (isSelected, isHoveredOver) => {
  if (isSelected) return PINK;
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
