import React, { useEffect, useState } from 'react'
import { getUser, loginUser } from '../Api/FetchApi';
import { RegisterDataInterface } from '../Interface/Interface';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';

interface UserInterface {
    id : number;
    fullName : string;
    email : string;
}



function Home() {
  
    const [dataUsers,setDataUsers] = useState<UserInterface[]>([]);
    const [loginButton,setLoginButton] = useState(false)

    
  
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className='w-full max-w-2xl p-8 space-y-8 bg-white rounded shadow-md' >
        <h1>Welcome</h1>
        <p className="text-lg text-gray-700">
          We are delighted to have you here. Explore our platform and discover the
          many services and features we offer.
        </p>
        <div className='flex justify-center gap-x-24'>
            <button onClick={() =>setLoginButton(true)} className="bg-green-500 border-blue-500 w-24 text-white py-2 px-4 rounded">Login</button>
            <button className="bg-blue-500 w-24 text-white py-2 px-4 rounded"><Link to='/register'>Register</Link></button>
        </div>
                
        {loginButton && (
            <Login />
        )}
      </div>   
        
    </div>
  )
}

export default Home