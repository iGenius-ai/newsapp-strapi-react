import React, { useState } from 'react';
import { menu, close, logo } from "../assets";

const Navbar = () => {

  const [ toggle, setToggle ] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (

    <div className="container">

      <nav>
        <div className="brand-logo">
          <img src={logo} alt="Brand"/>
        </div>

        <ul className="nav-links flex items-center">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="auth flex items-center">
          <a href="/auth/login">Login</a>
          <a href="/auth/register">Register</a>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          <img src={!toggle?menu:close} alt="menu" className='' />
        </div>
      </nav>

    </div>

    // <div className="container">
      /* <div className='navbar-container'> */
        /* <div className='flex justify-between'>

          <div className='flex items-center'>
            <img src={logo} alt="logo" className='brand-logo' />
          </div>

          <ul className='flex items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>

          <div className=''>
            <button className='border-none bg-transparent text-black mr-4'>Login</button>
            <button className='px-8 py-3'>Sign Up</button>
          </div>

          <div className='md:hidden' onClick={handleClick}>
            <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
          </div>
        </div> */
        
        /* <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platform</li>
          <li>Pricing</li>
          <div className='flex flex-col my-4'>
            <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
            <button className='px-8 py-3'>Sign Up</button>
          </div>
        </ul> */

      /* </div> */
    // </div>

  )

}

export default Navbar;