import React from "react";

import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks itemClass={"footer-link"} parentClass={"footer-links"}/>
      <ul className="footer-icons" id="footer-icons">
        {socialLinks.map((social) => {
          return (
            <SocialLinks
              key={social.id}
              {...social}
              itemClass={"footer-icon"}
            />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
