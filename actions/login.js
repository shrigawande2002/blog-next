"use server";
import { getCollection } from "@/lib/db";
import { loginSchem, registerSchem } from "@/lib/validation";
import bcrypt from 'bcrypt';
import { createSession } from "@/lib/session";
import { cookies } from "next/headers";

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

    if (!password || password.trim() === "") {
    return {
      error: { password: "Password cannot be empty" },
      name,
      email,
    };
  }



    const userCollection = await getCollection('users');

    if(!userCollection) return { error:{email: "Failed to connect to the database"} };

    const existingUser = await userCollection.findOne({ email });
    
    if (existingUser) {
        return {
            error: { email: "User with this email already exists" },
            
        };
    }

    // // hassshing the password 

    const hasPassword = await bcrypt.hash(password, 10);
    
    const result = await userCollection.insertOne({ name, email, password:hasPassword});


    // // session management
    await createSession(result.insertedId.toString());
     return {
        success: true,
        status: 201,
        data: {
            user :{
                id: result.insertedId.toString(),
                name,
                email
            }
        },
        message: "User registered successfully"
     }
     

}

export const loginAction = async (state, formData) => {

    const validateFields = loginSchem.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (!validateFields.success) {

        return {
            error: validateFields.error.flatten().fieldErrors,
            email: formData.get("email"),
        };
    }

    const { email, password } = validateFields.data;

    console.log("Login  action called", email, password);

    const userCollection = await getCollection('users');
    if (!userCollection) return { error: { email: "Failed to connect to the database" } };

    const existingUser = await userCollection.findOne({ email });
    if (!existingUser) {
        return {
            error: { email: "User with this email does not exist" },
        };
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) return { error: { password: "Incorrect password" } };

    await createSession(existingUser._id.toString());
    return {
        success: true,
        status: 201,
        data: {
            user: {
                email: existingUser.email,
                id: existingUser._id.toString(),
                name: existingUser.name
            }
        },
        message: "User registered successfully"
    }

}

export const logOut = async () => {
    const cookiesStore = await cookies();
    cookiesStore.delete("session");
}






