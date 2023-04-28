import React from 'react';
import { Navbar, Blogs } from "../components";

const Homepage = ({ blogs }) => {

  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs} /> 
    </div>
  )

}

export default Homepage;