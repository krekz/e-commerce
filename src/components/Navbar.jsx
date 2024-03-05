import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav className='flex flex-row justify-around items-center h-16 bg-black text-white contain'>
            <Link to='/' className='text-2xl font-bold'>SOUQ</Link>
            <ul className='flex flex-row gap-4'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar