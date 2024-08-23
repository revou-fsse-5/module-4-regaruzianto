import React from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function Navbar() {
    const { isAuthenticated, login, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/'); // Navigate to the home page
    };
 
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
                    {!isAuthenticated ? ( 
                        <li>
                            <Link to='/register' className='text-white hover:text-gray-400'>
                                Register
                            </Link>
                        </li>
                        
                    ): (
                        <>
                            <li>
                                <Link to='/category' className='text-white hover:text-gray-400'>
                                    Category
                                </Link>
                            </li>
                            <li>
                                <button 
                                    onClick={handleLogout}
                                    className="text-white hover:text-gray-400"
                                >
                                    Logout
                                </button>
                            </li>
                        </>

                               
                    )}
                   
                    
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar