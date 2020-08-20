import React, {Component} from 'react';
import './blog.scss';

import {Title} from '../Title';
import {Entry} from './Entry';
import {BlogPost, loadPosts} from '../../actions';

interface BlogProps {
  posts?: BlogPost[];
}

interface BlogSate {
  posts: BlogPost[];
}

export class Blog extends Component<BlogProps, BlogSate> {
  constructor(props: BlogProps) {
    super(props);
    const posts = props.posts ? props.posts : [];
    this.state = {posts};
  }

  async componentDidMount() {
    const posts = await loadPosts();
    console.log(posts);
    this.setState(Object.assign(this.state, {posts}));
  }

  render() {
    return (
      <>
        <Title />
        <div className="blog">
          <h2>latest posts</h2>
          <ul>
            {this.state.posts.map(post => (
              <Entry key={post.uuid} post={post} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
