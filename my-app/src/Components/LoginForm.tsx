import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { error } from 'console';


function LoginForm() {
 
   
    
    const [currentState, setcurrentState] = useState (1);
    const today = new Date();

    const stepValidation1 = Yup.object().shape({
        fullname : Yup.string().required('fullname Required'),
        email : Yup.string().email('invalid email').required('email Required'),
        date : Yup.date()
        .max(today, 'Date of birth must be earlier than today')
        .required('Date of birth is required'),
    });

    const stepValidation2 = Yup.object().shape({
        streetAddress : Yup.string().required('street Address Required'),
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
            fullname : '',
            email : '',
            date : '',
            streetAddress : '',
            city : '',
            state : '',
            zipCode : '',
            username : '',
            password : '', 
        },
        validationSchema : getPartialSchema(currentState),
        onSubmit : (values, {resetForm}) => {
            console.log(values);
            resetForm();
            setcurrentState(1);
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
    <div>
        <form onSubmit={formik.handleSubmit} action="" className='flex flex-col justify-normal text-justify text-base gap-2'>
            {currentState ===1 && (
                <>
                    <label htmlFor="fullname">fullname </label>
                    <input type="text" name='fullname' value={formik.values.fullname} onChange={formik.handleChange} onBlur={formik.handleBlur}   className='border' />
                    {formik.touched.fullname && formik.errors.fullname && (
                        <small className="text-red-500">
                            {formik.errors.fullname}
                        </small>
                    )}

                    <label htmlFor="email">email </label>
                    <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.email && formik.errors.email && (
                        <small className="text-red-500">
                            {formik.errors.email}
                        </small>
                    )}



                    <label htmlFor="dateofbirth">Date of Birth </label>
                    <input type="date" name='date' value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.date && formik.errors.date && (
                        <small className="text-red-500">
                            {formik.errors.date}
                        </small>
                    )}
                </>
            )}
            
            {currentState === 2 && (
                <>
                    <label htmlFor="streetAddress">Street Address </label>
                    <input type="text" name='streetAddress' value={formik.values.streetAddress} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.streetAddress && formik.errors.streetAddress && (
                        <small className="text-red-500">
                            {formik.errors.streetAddress}
                        </small>
                    )}


                    <label htmlFor="city">city </label>
                    <input type="text" name='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.city && formik.errors.city && (
                        <small className="text-red-500">
                            {formik.errors.city}
                        </small>
                    )}

            
                    <label htmlFor="state">state </label>
                    <input type="text" name='state' value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.state && formik.errors.state && (
                        <small className="text-red-500">
                            {formik.errors.state}
                        </small>
                    )}



                    <label htmlFor="zipCode">Zip Code </label>
                    <input type="text" name='zipCode' value={formik.values.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.zipCode && formik.errors.zipCode && (
                        <small className="text-red-500">
                            {formik.errors.zipCode}
                        </small>
                    )}



                </>
            )}

            {currentState ===  3 && (
                <>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.username && formik.errors.username && (
                        <small className="text-red-500">
                            {formik.errors.username}
                        </small>
                    )}


                    <label htmlFor="password">password </label>
                    <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border' />
                    {formik.touched.password && formik.errors.password && (
                        <small className="text-red-500">
                            {formik.errors.password}
                        </small>
                    )}
                
                
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