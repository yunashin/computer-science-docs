import React, { useEffect, useState } from "react";

import Header from "./Header";
import Page from "./Page";
import SidebarMenu from "./sidebar/SidebarMenu";
import { SidebarContent } from "./constants/SidebarContent";

const HomePage = () => {
  const pathname = window.location.pathname;
  const pageIndex = SidebarContent.indexOf(
    SidebarContent.find((page) => page.path === pathname)
  );
  const [currentPageIndex, selectPage] = useState(pageIndex);
  const [currentPage, updatePage] = useState(SidebarContent[currentPageIndex]);

  useEffect(() => {
    updatePage(SidebarContent[currentPageIndex]);
  }, [currentPageIndex]);

  return (
    <div>
      <Header />
      <SidebarMenu
        currentPageIndex={currentPageIndex}
        selectPage={selectPage}
      />
      <Page page={currentPage} />
    </div>
  );
};

export default HomePage;
