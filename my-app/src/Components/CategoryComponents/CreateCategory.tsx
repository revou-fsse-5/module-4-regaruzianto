import React from 'react'
import { useState } from 'react';
import { createCategory } from '../../Api/FetchCategory';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CategoryDataInterface, UpdateDataInterface } from '../../Interface/Interface';


interface CreateCategoryProps {
  onAddCategory: (newCategory: UpdateDataInterface) => void;
}

function CreateCategory({ onAddCategory }: CreateCategoryProps) {
  
  const validateSchema = Yup.object().shape({
    name : Yup.string().required('name required'),
    description : Yup.string().required('description required')
  })



  const formik = useFormik({
    initialValues : {
      name : '',
      description : '',
    },
    validationSchema : validateSchema,
    onSubmit : async (values :CategoryDataInterface) => {
      try {
        const data = await createCategory(values);
        console.log(data);

        onAddCategory(data);

        formik.resetForm();
      }
      catch(error){
        console.error('failed create new category');
      }
    }
  })


  
  
  return (
    <div className="flex items-center justify-center">
      <div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md'>
      <h2>Create Category</h2>
        <form action="" onSubmit={formik.handleSubmit} className='flex flex-col justify-normal text-left gap-2'>
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
          
          
          <button type='submit' className="bg-green-500 text-white py-2 px-4 rounded">Add Category</button>
        </form>
        

      </div>
    </div>
  )
}

export default CreateCategory