import React, { useEffect, useState } from 'react'
import { CategoryDataInterface, UpdateDataInterface } from '../Interface/Interface'
import { deleteCategory, getCategory } from '../Api/FetchCategory'
import CreateCategory from './CategoryComponents/CreateCategory'
import UpdateCategory from './CategoryComponents/UpdateCategory'


function Category() {
  
  const [dataCategory, setDataCategory] = useState<UpdateDataInterface[]> ([])
  
  useEffect (() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategory();
        console.log(data);
        setDataCategory(data);
      }
      catch(error){
        console.error('failed load category')

      }
    };
    fetchCategory();
  },[])
  
  const addNewCategory = (newCategory: UpdateDataInterface) => {
    setDataCategory(prevCategories => [...prevCategories, newCategory])
  }

  const updateCategoryInTable = (updatedCategory: UpdateDataInterface) => {
    setDataCategory(prevCategories =>
      prevCategories.map(category =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
  }


  const handleDelete = async (id:number) => {
    
    const confirmed = window.confirm('Are you sure to delete this category ?')

    if(confirmed) {
      try{
        const data = await deleteCategory(id);
        console.log(data);
        setDataCategory((prevCategories) =>
        prevCategories.filter((category) => Number(category.id) !== id)
        )
      }
      catch(error) {
        console.log('failed delete data',error)
      }
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className='w-full max-w-2xl p-8 space-y-8 bg-white rounded shadow-md'>
        
        <h2>Tampilan Category</h2>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              dataCategory.map(category =>  
              <tr key={category.name}>
                <td>
                  {category.id}
                </td>
                <td>
                  {category.name}
                </td>
                <td>
                  {category.description}
                </td>
                <td>
                  <button onClick={() => handleDelete(Number(category.id))} className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
                </td>
              </tr>        
              )
            }
          </tbody> 
        </table>
        
        <CreateCategory onAddCategory={addNewCategory} />
        <UpdateCategory onUpdateCategory={updateCategoryInTable} />
      </div>
    </div>
  )
}

export default Category