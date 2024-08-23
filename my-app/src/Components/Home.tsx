import React, { useEffect, useState } from 'react'
import { getUser, loginUser } from '../Api/FetchApi';
import { RegisterDataInterface } from '../Interface/Interface';

interface UserInterface {
    id : number;
    fullName : string;
    email : string;
}



function Home() {
  
    const [dataUsers,setDataUsers] = useState<UserInterface[]>([]);


  
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className='w-full max-w-2xl p-8 space-y-8 bg-white rounded shadow-md' >
        <h1>Welcome</h1>
      </div>   
        
    </div>
  )
}

export default Home