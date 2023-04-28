import React from 'react';
import { Navbar, BlogContent } from "../components";

const BlogContentPage = ({ blogs }) => {

  console.log(blogs);

  return (
    <div>
      <Navbar />
      <BlogContent blogs={ blogs } />
    </div>
  )
  
}

export default BlogContentPage;