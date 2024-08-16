import React, {useState} from 'react'

function LoginForm() {
 
    const [currentState, setcurrentState] = useState (1);

    const handlePrev = () => {
        setcurrentState((prevStep) => Math.max(prevStep-1, 1));
    }
 
    const handleNext = () => {
        setcurrentState((prevStep) => Math.min(prevStep + 1, 3));
    }

    console.log(currentState);

    return (
    <div>
        <form action="" className='flex flex-col justify-normal text-justify text-base gap-2'>
            {currentState ===1 && (
                <>
                    <label htmlFor="fullname">fullname </label>
                    <input type="text" className='border' />


                    <label htmlFor="email">email </label>
                    <input type="email" className='border' />


                    <label htmlFor="dateofbirth">Date of Birth </label>
                    <input type="date" className='border' />
                </>
            )}
            
            {currentState === 2 && (
                <>
                    <label htmlFor="streetAddress">Street Address </label>
                    <input type="text" className='border' />

                    <label htmlFor="city">city </label>
                    <input type="text" className='border' />
            
            
                    <label htmlFor="state">state </label>
                    <input type="text" className='border' />


                    <label htmlFor="zipCode">Zip Code </label>
                    <input type="text" className='border' />
                
                </>
            )}

            {currentState ===  3 && (
                <>
                    <label htmlFor="username">Username</label>
                    <input type="text" className='border' />

                    <label htmlFor="password">password </label>
                    <input type="password" className='border' />
                </>

            )}

            {currentState < 3 && (
                <button type='button' onClick={handleNext}>next</button>
            )}

            {currentState > 1 && (
                <button type='button' onClick={handlePrev}>prev</button>
            )}

            {currentState === 3 && (
                <button>submit</button>
            )}
            
           
            
        </form>
    </div>
  )
}

export default LoginForm