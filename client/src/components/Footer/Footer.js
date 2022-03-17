import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      copyright by
      <a
        className="footer__link"
        href="#"
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
       {" "} @NeoSoft technologies
      </a>
    </footer>
  );
};

export default Footer;
