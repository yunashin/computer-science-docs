import { SidebarContent } from "../components/constants/SidebarContent";

export const getCurrentContentPage = (pathname) =>
  SidebarContent.find((page) => page.path === pathname) || SidebarContent[0];

export const getCurrentPageIndex = (page) => SidebarContent.indexOf(page) || 0;

export const getIsSandboxPage = (pathname) => pathname === "/sandbox";
