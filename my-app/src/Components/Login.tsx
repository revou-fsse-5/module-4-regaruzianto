import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { loginUser } from '../Api/FetchApi';
import { LoginDataInterface } from '../Interface/Interface';



function Login() {
    
    const validateSchema = Yup.object().shape({
        email : Yup.string().email('invalid email').required('email required'),
        password : Yup.string().required('password required'),
    })


    const formik = useFormik({
        initialValues : {
            email : '',
            password : '',
        },
        validationSchema : validateSchema,
        onSubmit : async (values: LoginDataInterface) => {
            try {
                const data = await loginUser(values);
                console.log(values);
                console.log(data);
            }
            catch (error){
                console.error('Login Failed : error')
            }
            
        }

    });
    
  
  
  
    return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md'>Login
            <form action="" onSubmit={formik.handleSubmit} className='flex flex-col justify-normal text-left gap-2'>
                <label htmlFor="email" className='text-sm font-medium text-gray-700'>email</label>
                <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                {
                    formik.touched.email && formik.errors.email && (
                        <small className='text-red-600'>
                            {formik.errors.email}
                        </small>
                    )
                }
                <label htmlFor="password" className='text-sm font-medium text-gray-700'>password</label>
                <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {
                    formik.touched.password && formik.errors.password && (
                        <small className="text-red-500">
                            {formik.errors.password}
                        </small>
                    )
                }
                <button type='submit' name='login' className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
            
            </form>      
         </div>
    </div>
    
  )
}

export default Login