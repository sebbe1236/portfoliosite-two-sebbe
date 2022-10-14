import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <Link className="text-center" to="/contact">
          Contact me
        </Link>
      </footer>
    </>
  );
}

export default Footer;
