import React from 'react';
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {

  console.log("Blog Object Found");
  console.log(blogs);

  return (
    <main>
      <div className='blogs-container'>

        {blogs.data.map((blog)=>
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <div className='blog'>
              <img className='' alt='Blog' src={blog.attributes.imageUrl} />
              <div className='blog-details'>
                <h3>{blog.attributes.title}</h3>
                <p>{blog.attributes.body}</p>
              </div>
            </div>
          </Link>
        )}    

      </div>
    </main>
  )

}

export default Blogs;