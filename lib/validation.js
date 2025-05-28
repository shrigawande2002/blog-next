
import z from 'zod';

export const registerSchem = z.object({
    email: z.string().email({message: "Please enter a valid email."}).trim().min(1, ''),
    name: z.string().trim().min(1, { message: "Name is required" }).min(2, { message: "Name must be at least 2 characters long" }).max(50, { message: "Name must be at most 50 characters long" }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).min(1, { message:"password is required" }).min(5, { message: "Password must be at least 5 characters long" })
    .trim(),

   
})