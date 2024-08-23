import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-end items-center'>
            <div className='text-white text-base justify-end '>
                <ul className='flex space-x-4'>
                     <li>
                        <Link to='/' className='text-white hover:text-gray-400'>
                         Home
                        </Link>
                    </li>
                     <li>
                        <Link to='/login' className='text-white hover:text-gray-400'>
                            Login
                        </Link>

                    </li>
                    <li>
                        <Link to='/register' className='text-white hover:text-gray-400'>
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to='/category' className='text-white hover:text-gray-400'>
                            Category
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar