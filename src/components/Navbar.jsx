import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../data';
import {logo, menu, close} from '../assets';
import {styles} from '../styles';


const  Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0  bg-primary`}>
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
        
      </div>
    </nav>
  )
}

export default Navbar