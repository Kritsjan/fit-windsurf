import React from 'react';
import PostCard from './PostCard';
import { useBlogPosts } from '../../hooks/useBlogPosts';

const BlogGrid = () => {
  const posts = useBlogPosts();

  return (
    <div className="grid grid-cols-1 gap-8">
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogGrid;