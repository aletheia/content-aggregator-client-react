import React from 'react';
import './blog.scss';

import {Title} from './Title';
import {Entry} from './Entry';

const createEntry = (post: number) => {
  return <Entry key={post} />;
};

export const Blog = () => {
  return (
    <>
      <Title />
      <div className="blog">
        <h2>latest posts</h2>
        <ul>{[1, 2, 3].map(post => createEntry(post))}</ul>
      </div>
    </>
  );
};
