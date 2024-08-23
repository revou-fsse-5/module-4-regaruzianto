import axios from "axios";
import { CategoryDataInterface, UpdateDataInterface } from "../Interface/Interface";


const apiURLCategory = 'http://localhost:8080/categories'

export const getCategory = async () => {
    const response = await axios.get(`${apiURLCategory}`)
    console.log(response);
    console.log(response.data);
    return response.data; 
}

export const createCategory = async (data : CategoryDataInterface)=> {
    const response = await axios.post(`${apiURLCategory}`,data);
    return response.data;
}

export const updateCategory = async (name: string, description : string, id: string)=> {
    const response = await axios.put(`${apiURLCategory}/${id}`,{name,description});
    return response.data;
} 

export const deleteCategory = async (data : number)=> {
    const response = await axios.delete(`${apiURLCategory}/${data}`);
    return response.data;
} 
