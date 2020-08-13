import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTag} from '@fortawesome/free-solid-svg-icons';

import './taglist.scss';

export const TagList = ({tags}: {tags: string[]}) => {
  const renderTag = (tag: string) => (
    <li key={tag}>
      <FontAwesomeIcon className="fa-icon" icon={faTag} />
      {tag}
    </li>
  );

  return <ul className="tags">{tags.map(tag => renderTag(tag))}</ul>;
};
