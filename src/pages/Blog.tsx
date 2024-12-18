import React, { useEffect } from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import BlogGrid from '../components/blog/BlogGrid';

function Blog() {
  useEffect(() => {
    document.title = 'Fitness & Health Blog - Expert Tips for a Healthy Lifestyle';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover expert tips on fitness, nutrition, workout plans, and healthy living. Learn how to track macros, build muscle, and achieve your fitness goals.');
    }
  }, []);

  return (
    <main className="flex-grow">
      <BlogHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <BlogGrid />
        </div>
      </div>
    </main>
  );
}

export default Blog;