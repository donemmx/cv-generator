import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <div className="header">
      <div className="header__main">
        <div className="header__logo">Cv Generator</div>
        <div className="header__links">
          <Link className="btn__secondary" href="/cover-letter">
            Cover Letter
          </Link>
          <Link className="btn__primary" href="/generator">
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
