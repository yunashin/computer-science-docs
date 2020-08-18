import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import hljs from "highlight.js";
import showdown from "showdown";

import Page from "./Page";
import Title from "./headings/Title";
import { getCurrentContentPage } from "../utils/routingUtils";

const highlightCode = () => {
  var pres = document.querySelectorAll("pre>code");
  for (var i = 0; i < pres.length; i++) {
    hljs.highlightBlock(pres[i]);
  }
};

const ContentPage = ({ location }) => {
  const [contentHtml, setContent] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const pageContent = document.getElementById("page-content");
  const pathname = location.pathname;
  const page = getCurrentContentPage(pathname);
  const filePath = page.file;

  useEffect(() => {
    if (filePath) {
      let converter = new showdown.Converter();
      converter.setOption("tables", true);
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
          setContent(converter.makeHtml(xmlhttp.responseText));
        }
      };
      xmlhttp.open("GET", filePath, true);
      xmlhttp.send();
    } else {
      setContent(null);
      pageContent.innerHTML = null;
      setHasLoaded(true);
    }

    if (contentHtml) {
      pageContent.innerHTML = contentHtml;
      highlightCode();
      setHasLoaded(true);
    }
  }, [contentHtml, filePath, page, pageContent, pathname]);

  return (
    <Page>
      {!contentHtml && hasLoaded && <Title>{page.title}</Title>}
      <div id="page-content" />
    </Page>
  );
};

export default withRouter(ContentPage);
