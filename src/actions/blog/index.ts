export interface BlogPost {
  uuid: string;
  date: Date;
  title: string;
  abstract: string;
  author: {name: string; url: string};
  language: string;
  tags: string[];
  link: string;
}

export const loadPosts = async (): Promise<BlogPost[]> => {
  const posts = await import('../../data/blog/posts.json');
  console.log(posts.default);
  return posts.default.map(post => {
    return Object.assign(post, {date: new Date(post.date)});
  });
};
