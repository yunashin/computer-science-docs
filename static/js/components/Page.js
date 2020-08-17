import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import showdown from "showdown";
import styled from "styled-components";

import { BASE_BACKGROUND_COLOR } from "./constants/Styles";
import Title from "./headings/Title";

const PageContainer = styled.div`
  background-color: ${BASE_BACKGROUND_COLOR};
  height: auto;
  margin: 120px 60px 100px 300px;
  max-width: 1000px;
  position: relative;
  width: auto;
  z-index: 3;
`;

const highlightCode = () => {
  var pres = document.querySelectorAll("pre>code");
  for (var i = 0; i < pres.length; i++) {
    hljs.highlightBlock(pres[i]);
  }
};

const Page = ({ page }) => {
  const [contentHtml, setContent] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const pageContent = document.getElementById("page-content");
  const filePath = page.file;

  useEffect(() => {
    if (page.file) {
      const converter = new showdown.Converter();
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
  }, [contentHtml, filePath, page, pageContent]);

  return (
    <div>
      <PageContainer>
        {!contentHtml && hasLoaded && <Title>{page.title}</Title>}
        <div id="page-content" />
      </PageContainer>
    </div>
  );
};

export default Page;
