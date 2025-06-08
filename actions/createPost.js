"use server"

import { getCollection } from "@/lib/db";
import getAuth from "@/lib/getAuth";
import { BlogPostSchema } from "@/lib/validation";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export async function CreatePost(state, formData) {

    const title = formData.get("title");
    const content = formData.get("content");
    const img = formData.get("img");
    console.log(title, content);

    const user = await getAuth();
    if (!user) return redirect("/");

    const validateFields = BlogPostSchema.safeParse({ title, content, img });

    if (!validateFields.success) {
        return {
            error: validateFields.error.flatten().fieldErrors,
            title,
            content,
            img
        };
    }


    try {
        const postCollection = await getCollection('posts');
        if (!postCollection) return { error: { title: "Failed to connect to the database" } };
        

        const post = {
            title: validateFields.data.title,
            content: validateFields.data.content,
            img: validateFields.data.img,
            useId: ObjectId.createFromHexString(user.userID),
        }
        await postCollection.insertOne(post);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to the database");
        return { error: { title: "Failed to connect to the database" } };
    }


    redirect("/");
}