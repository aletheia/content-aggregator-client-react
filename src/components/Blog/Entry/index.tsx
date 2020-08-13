import React from 'react';

import {TagList} from './TagList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

import './entry.scss';

export interface BlogEntry {
  date: Date;
  title: string;
  abstract: string;
  tags: string[];
  link: string;
}

export const Entry = () => {
  const entry = {
    date: '2020-08-11',
    title: 'How Neosperience Serverless to build a platform',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['AWS', 'cloud', 'serverless'],
    link: '',
  };
  const {date, title, abstract, tags, link} = entry;
  return (
    <li className="post">
      <div className="datetime">
        <FontAwesomeIcon className="fa-icon" icon={faCalendar} />
        {date}
      </div>
      <div className="title">{title}</div>
      <p>{abstract}</p>
      <div className="more">
        <a href={link}>Read the full article</a>
      </div>
      <TagList tags={tags} />
    </li>
  );
};
