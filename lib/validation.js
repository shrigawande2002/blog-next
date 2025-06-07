
import z, { string } from 'zod';

export const registerSchem = z.object({
    email: z.string().email({message: "Please enter a valid email."}).trim().min(1, ''),
    name: z.string().trim().min(1, { message: "Name is required" }).min(2, { message: "Name must be at least 2 characters long" }).max(50, { message: "Name must be at most 50 characters long" }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).min(1, { message:"password is required" }).min(5, { message: "Password must be at least 5 characters long" })
    .trim(),

   
})


export const loginSchem = z.object({
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).min(1, { message: "password is required" }).trim(),

})

export const BlogPostSchema = z.object({
    title: string().min(1, { message: "Title is required" }).min(2, { message: "Title must be at least 2 characters long" }).max(100, { message: "Title must be at most 100 characters long" }).trim(),
    content: string().min(1, { message: "Content is required" }).min(2, { message: "Content must be at least 2 characters long" }).trim(),
})