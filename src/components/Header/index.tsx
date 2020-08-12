import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>serverless4all.com</h1>
        <div className="subtitle">make everything serverless</div>
      </div>
      <div className="menu">
        <a href="/">Blog</a>
        <a href="/video/">Video</a>
        <a href="./about.html">About</a>
      </div>
    </div>
  );
};
