"use server";

import { revalidatePath } from "next/cache";
import { getAllPosts } from "@/lib/blog";
import { saveBlogPost, deleteBlogPost as deleteFromService } from "@/lib/blog-service";

export async function createPost(data: {
    title: string;
    slug: string;
    content: string;
    category: string;
    author: string;
    image?: string;
    metaTitle?: string;
    metaDescription?: string;
    tags?: string;
    published?: boolean;
}) {
    try {
        const result = await saveBlogPost({
            ...data,
            published: data.published ?? true,
        });

        revalidatePath("/blog");
        revalidatePath("/admin/posts");

        return result;
    } catch (error: any) {
        console.error("Failed to create post:", error);
        return { success: false, error: error.message || "Failed to create post." };
    }
}

export async function getPosts() {
    try {
        const posts = await getAllPosts();
        return { success: true, posts };
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return { success: false, error: "Failed to fetch posts" };
    }
}

export async function deletePost(slug: string) {
    try {
        await deleteFromService(slug);

        revalidatePath("/blog");
        revalidatePath("/admin/posts");

        return { success: true };
    } catch (error: any) {
        console.error("Failed to delete post:", error);
        return { success: false, error: error.message || "Failed to delete post" };
    }
}

export async function getStats() {
    try {
        const posts = await getAllPosts();
        return { success: true, totalPosts: posts.length };
    } catch (error) {
        console.error("Failed to fetch stats:", error);
        return { success: false, error: "Failed to fetch stats" };
    }
}
