import React from 'react';
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const BlogContent = ({ blogs }) => {

  console.log("Blog Found!");
  const { id } = useParams();

  let blog = {}
  if (blog) {
    let arr = blogs.data.filter(blog => blog.id == id);
    blog = arr[0]
  } else {
    blog = {}
  }

  return (
    <main className=''>
      <div className='blogs-container'>
        <div className='blog-desc'>
          <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.title}</h1>
          <img className='' alt='Blog Pic' src={blog.attributes.imageUrl} />
          <div className='blog-body'>
            <ReactMarkdown>{blog.attributes.body}</ReactMarkdown>
          </div>
        </div>
      </div>
      
      <a href="/" className='redirect'>Back to Homepage</a>
    </main>

  )
}

export default BlogContent;