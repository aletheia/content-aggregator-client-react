import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

export const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1>serverless4all.com</h1>
          <div className="subtitle">make everything serverless</div>
        </div>
        <div className="menu">
          <Link to="/">Blog</Link>
          {/* <a href="/video/">Video</a> */}
          {/* <a href="/deck/">Slides</a> */}
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="spacer" />
    </>
  );
};
