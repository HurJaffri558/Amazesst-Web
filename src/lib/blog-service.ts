import fs from "fs";
import path from "path";

const isDev = process.env.NODE_ENV === 'development';

export interface BlogPostData {
    title: string;
    slug: string;
    content: string;
    category: string;
    author: string;
    image?: string;
    metaTitle?: string;
    metaDescription?: string;
    tags?: string;
    published: boolean;
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || "momibhai/amazesst";
const [REPO_OWNER, REPO_NAME] = GITHUB_REPO.split("/");

export async function saveBlogPost(data: BlogPostData): Promise<{ success: true; mode?: string; url?: string }> {
    const blogPost = {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    const FILE_PATH = `content/posts/${data.slug}.json`;

    if (isDev) {
        console.log(`[BlogService] Local Mode: Saving ${FILE_PATH}`);
        const absolutePath = path.join(process.cwd(), FILE_PATH);
        const dir = path.dirname(absolutePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(absolutePath, JSON.stringify(blogPost, null, 2));
        return { success: true, mode: 'local' };
    }

    // Production (GitHub API)
    if (!GITHUB_TOKEN) {
        throw new Error("GITHUB_TOKEN missing in production environment");
    }

    const contentEncoded = Buffer.from(JSON.stringify(blogPost, null, 2)).toString('base64');
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            "User-Agent": "Amazesst-Blog-Service"
        },
        body: JSON.stringify({
            message: `feat(blog): update post ${data.title.substring(0, 50)}`,
            content: contentEncoded,
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`GitHub API Error: ${errorText}`);
    }

    const ghData = await response.json();
    return { success: true, url: ghData.content?.html_url };
}

export async function deleteBlogPost(slug: string) {
    const FILE_PATH = `content/posts/${slug}.json`;

    if (isDev) {
        console.log(`[BlogService] Local Mode: Deleting ${FILE_PATH}`);
        const absolutePath = path.join(process.cwd(), FILE_PATH);
        if (fs.existsSync(absolutePath)) {
            fs.unlinkSync(absolutePath);
            return { success: true, mode: 'local' };
        }
        throw new Error("Local file not found");
    }

    // Production (GitHub API)
    if (!GITHUB_TOKEN) {
        throw new Error("GITHUB_TOKEN missing in production environment");
    }

    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

    // Get SHA
    const getRes = await fetch(apiUrl, {
        headers: {
            "Authorization": `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            "User-Agent": "Amazesst-Blog-Service"
        }
    });

    if (!getRes.ok) throw new Error("File not found on GitHub");
    const fileData = await getRes.json();

    // Delete
    const delRes = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            "User-Agent": "Amazesst-Blog-Service"
        },
        body: JSON.stringify({
            message: `chore(blog): delete post ${slug}`,
            sha: fileData.sha
        })
    });

    if (!delRes.ok) {
        const errorText = await delRes.text();
        throw new Error(`GitHub API Error: ${errorText}`);
    }

    return { success: true };
}
