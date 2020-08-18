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
      <SidebarMenu
        currentPageIndex={currentPageIndex}
        selectPageIndex={selectPageIndex}
      />
      {renderPage()}
    </div>
  );
};

export default withRouter(HomePage);
