import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router";

import Header from "./Header";
import ContentPage from "./ContentPage";
import SidebarMenu from "./sidebar/SidebarMenu";
import SandboxPage from "./SandboxPage";
import {
  getCurrentContentPage,
  getCurrentPageIndex,
  getIsSandboxPage,
} from "../utils/routingUtils";
import Flex from "./Flex";
import FlexItem from "./FlexItem";

const HomePage = ({ location }) => {
  const pathname = location.pathname;
  const [currentPage, updateCurrentPage] = useState(
    getCurrentContentPage(pathname)
  );
  const [currentPageIndex, selectPageIndex] = useState(
    getCurrentPageIndex(currentPage)
  );
  const isSandboxPage = getIsSandboxPage(pathname);

  useEffect(() => {
    if (!isSandboxPage) {
      updateCurrentPage(getCurrentContentPage(pathname));
    }
  }, [isSandboxPage, pathname]);

  const renderPage = useCallback(() => {
    if (isSandboxPage) {
      return <SandboxPage />;
    }
    return <ContentPage />;
  }, [isSandboxPage]);

  return (
    <div>
      <Header />
      <Flex wrap="nowrap">
        <FlexItem left={400}>
          <SidebarMenu
            currentPageIndex={currentPageIndex}
            selectPageIndex={selectPageIndex}
          />
        </FlexItem>
        <FlexItem right={0}>{renderPage()}</FlexItem>
      </Flex>
    </div>
  );
};

export default withRouter(HomePage);
