import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../data';
import {logo, menu, close} from '../assets';
import {styles} from '../styles';


const  Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.padding} w-full flex items-center py-5 fixed top-0  bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{setActive(''); window.scrollTo(0,0);}}>
          <img scr={logo} alt={logo} className='w-4 h-4 object-contain' />
          <p className='text-white text-[20px] font-bold cursor-pointer'>Kadi <span className='sm:block hidden'> | Code with me</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white': 'text-secondary'} hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={()=>setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[25px] h-[25px] object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white': 'text-secondary'} text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={()=>{setActive(link.title); setToggle(!toggle);}}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar