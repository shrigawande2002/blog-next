"use server";
import { getCollection } from "@/lib/db";
import {registerSchem} from "@/lib/validation";

export const registerAction = async (state , formData) => {
    const validateFields = registerSchem.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        name: formData.get("name")
    })
    if (!validateFields.success) {
     
        return {
            error: validateFields.error.flatten().fieldErrors,
            email: formData.get("email"),
            name: formData.get("name"),
        };
    } 

    const {email , name , password} = validateFields.data;
    const userCollection = await getCollection('users');
     
    const result = userCollection.insertOne({name, email, password});
    console.log(result);

    
  
}


export const loginAction = async (state , formData) => {
 console.log("Login action called" );
 const email = formData.get("email");
 const password = formData.get("password");
 console.log("Login action called", email, password);
}

