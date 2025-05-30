"use server";
import { getCollection } from "@/lib/db";
import {registerSchem} from "@/lib/validation";
import bcrypt from 'bcrypt';
import { createSession } from "@/lib/session";

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
            name: formData.get("name"),
            email: formData.get("email"),
        };
    } 

    const {email , name , password} = validateFields.data;
    const userCollection = await getCollection('users');

    if(!userCollection) return { error:{email: "Failed to connect to the database"} };

    const existingUser = await userCollection.findOne({ email });
    
    if (existingUser) {
        return {
            error: { email: "User with this email already exists" },
            
        };
    }


    // hassshing the password 

    const hasPassword = await bcrypt.hash(password, 10);
    
    const result = await userCollection.insertOne({ name, email, password: hasPassword });

    // session management
    await createSession(result.insertedId.toString());
    console.log(result.insertedId);

}


export const loginAction = async (state , formData) => {
 console.log("Login action called" );
 const email = formData.get("email");
 const password = formData.get("password");
 console.log("Login action called", email, password);
}

