import axios from "axios";
import { RegisterDataInterface } from "../Interface/Interface";


const apiURL = 'http://localhost:8080';

export const getUser = async () => {
    const response = await axios.get(`${apiURL}/users`);
    console.log(response);
    console.log(response.data);
    return response.data;
}

export const loginUser = async (data: {email :string, password:string}) => {
    const response = await axios.post(`${apiURL}/login`,data);
    return response.data;
}

export const registerUser = async (data: RegisterDataInterface) => {
    const response = await axios.post(`${apiURL}/register`,data);
    return response.data;
}