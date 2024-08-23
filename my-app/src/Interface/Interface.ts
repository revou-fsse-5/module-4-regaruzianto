export interface LoginDataInterface {
    email : string,
    password : string,
    
}

export interface RegisterDataInterface {
    fullName: string,
    email : string,
    dateOfBirth : string,
    street : string,
    city : string,
    state : string,
    zipCode : string,
    username : string,
    password : string,
}

export interface CategoryDataInterface {
    name : string,
    description : string,
}

export interface UpdateDataInterface {
    id : string,
    name : string,
    description : string,
}