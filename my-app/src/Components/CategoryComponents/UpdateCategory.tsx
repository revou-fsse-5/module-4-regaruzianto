import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateCategory } from '../../Api/FetchCategory';
import { UpdateDataInterface, CategoryDataInterface } from '../../Interface/Interface';

interface UpdateCategoryProps {
  onUpdateCategory: (updatedCategory: UpdateDataInterface) => void;
}



const UpdateCategory: React.FC<UpdateCategoryProps> = ({onUpdateCategory}) => {
  
    const validateSchema = Yup.object().shape({
        name : Yup.string().required('name required'),
        description : Yup.string().required('description required')
      })
    
    
    
      const formik = useFormik({
        initialValues : {
          id : '',
          name : '',
          description : '',
        },
        validationSchema : validateSchema,
        onSubmit : async (values : UpdateDataInterface) => {
          try {
            const data = await updateCategory(values.name,values.description, values.id);
            console.log(data);
            onUpdateCategory(data);

            
            formik.resetForm();
          }
          catch(error){
            console.error('failed update category');
          }
        }
      })



  
  
    return (
        <div className="flex items-center justify-center">
        <div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md'>
        <h2>Update Category</h2>
          <form action="" onSubmit={formik.handleSubmit} className='flex flex-col justify-normal text-left gap-2'>
            
          <input type="number" name='id' value={formik.values.id} onChange={formik.handleChange} onBlur={formik.handleBlur} 
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='id'/>
            {formik.touched.id && formik.errors.id && (
              <small className="text-red-500">
                {formik.errors.id}
              </small>
            )}
                      
                        
            <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} 
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='name'/>
            {formik.touched.name && formik.errors.name && (
              <small className="text-red-500">
                {formik.errors.name}
              </small>
            )}
            
            
            <input type="text" name='description' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} 
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder= 'description'/>
            {formik.touched.description && formik.errors.description && (
              <small className="text-red-500">
                {formik.errors.name}
              </small>
            )}
            
            
            <button type='submit' className="bg-green-500 text-white py-2 px-4 rounded">Update Category</button>
          </form>
          
  
        </div>
      </div>
  )
}

export default UpdateCategory