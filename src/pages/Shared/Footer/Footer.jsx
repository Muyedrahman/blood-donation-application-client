import React from "react";
import Logo from "../../../components/Logo/Logo";
import { FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-12">
      {/* Logo & Text */}
      <aside>
        <Logo />
        <p className="font-bold text-lg mt-2">
          Blood Donation <br />
          <span className="text-sm">Donate Blood, Save Lives</span>
        </p>
        <p className="text-sm">Copyright © 2026 - All rights reserved</p>
      </aside>

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-6 text-2xl">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <FaXTwitter />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
