import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { error } from 'console';
import { RegisterDataInterface } from '../Interface/Interface';
import { registerUser } from '../Api/FetchApi';


function LoginForm() {
    
    const [currentState, setcurrentState] = useState (1);
    const today = new Date();

    const stepValidation1 = Yup.object().shape({
        fullName : Yup.string().required('fullname Required'),
        email : Yup.string().email('invalid email').required('email Required'),
        dateOfBirth : Yup.date()
        .max(today, 'Date of birth must be earlier than today')
        .required('Date of birth is required'),
    });

    const stepValidation2 = Yup.object().shape({
           
        street: Yup.string().required('street Address Required'),
        city : Yup.string().required('city Required'),
        state : Yup.string().required('state Required'),
        zipCode : Yup.string().required('zipcode Required').matches(/^[0-9]+$/, "Must be only digits")
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits'),
        
    });

    const stepValidation3 = Yup.object().shape({
        username : Yup.string().required('username Required'),
        password : Yup.string().required('password Required').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
       
    });

    const getPartialSchema = (step : number) =>{
        switch (step){
            case 1 :
                return stepValidation1;
            case 2 :
                return stepValidation2;
            case 3 :
                return stepValidation3;
            default :
            return stepValidation1;
        }

    }


    const formik = useFormik({
        initialValues : {
            fullName : '',
            email : '',
            dateOfBirth : '',
            street : '',
            city : '',
            state : '',
            zipCode : '',
            username : '',
            password : '', 
        },
        validationSchema : getPartialSchema(currentState),
        onSubmit : async (values : RegisterDataInterface ) => {
            try {
                const data = await registerUser (values);
                console.log(data);
            }
            catch (error) {
                console.error('failed register data : error ');
            }
            
        }
    });



    const handlePrev = () => {
        setcurrentState((prevStep) => Math.max(prevStep-1, 1));
    }
 
    const handleNext = () => {
        formik.validateForm(formik.values).then((error) => {
            if(Object.keys(error).length === 0){
                setcurrentState((prevStep) => Math.min(prevStep + 1, 3));
            }
        }) 
    }

    console.log(currentState);

    
    console.log(formik);

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md'> Register
            <form onSubmit={formik.handleSubmit} action="" className='flex flex-col justify-normal text-left gap-2'>
                {currentState ===1 && (
                    <>
                        <label htmlFor="fullname" className='text-sm font-medium text-gray-700'>fullname </label>
                        <input type="text" name='fullName' value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur}   className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.fullName && formik.errors.fullName && (
                            <small className="text-red-500">
                                {formik.errors.fullName}
                            </small>
                        )}

                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>email </label>
                        <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.email && formik.errors.email && (
                            <small className="text-red-500">
                                {formik.errors.email}
                            </small>
                        )}



                        <label htmlFor="dateofbirth" className='text-sm font-medium text-gray-700'>Date of Birth </label>
                        <input type="date" name='dateOfBirth' value={formik.values.dateOfBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                            <small className="text-red-500">
                                {formik.errors.dateOfBirth}
                            </small>
                        )}
                    </>
                )}

                {currentState === 2 && (
                    <>
                        <label htmlFor="streetAddress" className='text-sm font-medium text-gray-700'>Street Address </label>
                        <input type="text" name='street' value={formik.values.street} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.street && formik.errors.street && (
                            <small className="text-red-500">
                                {formik.errors.street}
                            </small>
                        )}


                        <label htmlFor="city" className='text-sm font-medium text-gray-700'>city </label>
                        <input type="text" name='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.city && formik.errors.city && (
                            <small className="text-red-500">
                                {formik.errors.city}
                            </small>
                        )}

                    
                        <label htmlFor="state" className='text-sm font-medium text-gray-700'>state </label>
                        <input type="text" name='state' value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.state && formik.errors.state && (
                            <small className="text-red-500">
                                {formik.errors.state}
                            </small>
                        )}



                        <label htmlFor="zipCode" className='text-sm font-medium text-gray-700'>Zip Code </label>
                        <input type="text" name='zipCode' value={formik.values.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.zipCode && formik.errors.zipCode && (
                            <small className="text-red-500">
                                {formik.errors.zipCode}
                            </small>
                        )}



                    </>
                )}

                {currentState ===  3 && (
                    <>
                        <label htmlFor="username" className='text-sm font-medium text-gray-700'>Username</label>
                        <input type="text" name='username' value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.username && formik.errors.username && (
                            <small className="text-red-500">
                                {formik.errors.username}
                            </small>
                        )}


                        <label htmlFor="password" className='text-sm font-medium text-gray-700'>password </label>
                        <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        {formik.touched.password && formik.errors.password && (
                            <small className="text-red-500">
                                {formik.errors.password}
                            </small>
                        )}

                    
                    </>

                )}

                <div className="flex flex-col gap-2 mt-4">
                    {currentState < 3 && (
                        <button type='button' onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">next</button>
                    )}

                    {currentState > 1 && (
                        <button type='button' onClick={handlePrev} className="bg-gray-500 text-white py-2 px-4 rounded">prev</button>
                    )}

                    {currentState === 3 && (
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">submit</button>
                    )}       

                </div>

                
            </form>
        </div>
    </div>
  )
}

export default LoginForm