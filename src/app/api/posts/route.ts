import { NextRequest, NextResponse } from "next/server";
import { saveBlogPost, deleteBlogPost } from "@/lib/blog-service";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Security Check
        const webhookKey = req.headers.get("x-webhook-key");
        const secretKey = process.env.BLOG_WEBHOOK_KEY || "12345678";

        if (webhookKey !== secretKey) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, slug, content, category, author, image, metaTitle, metaDescription, tags } = body;

        if (!title || !slug || !content) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const result = await saveBlogPost({
            title,
            slug,
            content,
            category: category || "Uncategorized",
            author: author || "AI Writer",
            image,
            metaTitle,
            metaDescription,
            tags,
            published: true
        });

        return NextResponse.json(result, { status: 201 });

    } catch (error: any) {
        console.error("API POST Error:", error);
        return NextResponse.json({ error: error.message || "Failed to create post" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        // 1. Security Check
        const webhookKey = req.headers.get("x-webhook-key");
        const secretKey = process.env.BLOG_WEBHOOK_KEY || "12345678";

        if (webhookKey !== secretKey) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { slug } = body;

        if (!slug) {
            return NextResponse.json({ error: "Missing slug" }, { status: 400 });
        }

        const result = await deleteBlogPost(slug);
        return NextResponse.json(result, { status: 200 });

    } catch (error: any) {
        console.error("API DELETE Error:", error);
        return NextResponse.json({ error: error.message || "Failed to delete post" }, { status: 500 });
    }
}