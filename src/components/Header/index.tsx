import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import './header.scss';

export const Header = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="header">
        <div>
          <h1>serverless4all.com</h1>
          <div className="subtitle">make everything serverless</div>
        </div>
        <div className="menu">
          <Link to="/about">{t('menu_about')}</Link>
          <Link to="/">{t('menu_blog')}</Link>
          {/* <a href="/video/">Video</a> */}
          {/* <a href="/deck/">Slides</a> */}
          <Link to="/contributors">{t('menu_contributors')}</Link>
        </div>
      </div>
      <div className="spacer" />
    </>
  );
};
