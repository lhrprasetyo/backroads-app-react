import React from "react";
import PageLink from "./PageLink";

import { pageLinks } from "../Data";

const PageLinks = ({itemClass ,parentClass}) => {
  return (
    <ul className={parentClass} id="footer-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
