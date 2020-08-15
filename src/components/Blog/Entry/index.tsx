import React from 'react';

import {TagList} from './TagList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

import './entry.scss';
import {BlogPost} from '../../../actions';

const lang = 'en';
const i18n = {
  en: {
    readMode: 'Read the full article',
    by: 'by ',
    writtenIn: 'written in ',
  },
};

export const Entry = ({post}: {post: BlogPost}) => {
  const {date, title, abstract, author, language, tags, link} = post;
  return (
    <li className="post">
      <div className="datetime">
        <FontAwesomeIcon className="fa-icon" icon={faCalendar} />
        {date.toLocaleDateString()}
      </div>
      <div className="title">{title}</div>
      <p>{abstract}</p>
      <div className="more">
        <a href={link}>{i18n[lang].readMode}</a>
      </div>
      <div className="credits">
        {i18n[lang].by}
        <a>{author.name}</a>
        <br />
        {i18n[lang].writtenIn}
        <a>{language}</a>
      </div>
      <TagList tags={tags} />
    </li>
  );
};
