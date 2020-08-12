import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTag} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

import './entry.scss';

export const Entry = () => {
  return (
    <li className="post">
      <ul className="tags">
        <li>
          <FontAwesomeIcon className="fa-icon" icon={faTag} />
          AWS
        </li>
        <li>
          <FontAwesomeIcon className="fa-icon" icon={faTag} />
          cloud
        </li>
        <li>
          <FontAwesomeIcon className="fa-icon" icon={faTag} />
          serverless
        </li>
      </ul>
      <div className="title">
        How Neosperience adopted Serverless to build a platform
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="more">
        <a href="more">Read the full article</a>
      </div>
      <div className="datetime">
        <FontAwesomeIcon className="fa-icon" icon={faCalendar} />
        2020-08-11
      </div>
    </li>
  );
};
