import fs from "fs";
import path from "path";

const isDev = process.env.NODE_ENV === 'development';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || "momibhai/amazesst";
const [REPO_OWNER, REPO_NAME] = GITHUB_REPO.split("/");

export interface BlogPost {
    slug: string;
    title: string;
    content: string;
    category: string;
    author: string;
    image?: string;
    metaTitle?: string;
    metaDescription?: string;
    tags?: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getPostSlugs(): Promise<string[]> {
    if (isDev) {
        if (!fs.existsSync(postsDirectory)) return [];
        return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".json"));
    }

    // Production: Fetch from GitHub
    try {
        const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/content/posts`, {
            headers: GITHUB_TOKEN ? { "Authorization": `Bearer ${GITHUB_TOKEN}` } : {}
        });
        if (!response.ok) return [];
        const files = await response.json();
        return files
            .filter((f: any) => f.name.endsWith(".json"))
            .map((f: any) => f.name);
    } catch (e) {
        console.error("Error fetching slugs from GitHub:", e);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const realSlug = slug.replace(/\.json$/, "");

    if (isDev) {
        const fullPath = path.join(postsDirectory, `${realSlug}.json`);
        if (!fs.existsSync(fullPath)) return null;
        try {
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const post = JSON.parse(fileContents);
            return {
                ...post,
                slug: realSlug,
                createdAt: post.createdAt || new Date().toISOString(),
                updatedAt: post.updatedAt || new Date().toISOString(),
            };
        } catch (e) {
            return null;
        }
    }

    // Production: Fetch from GitHub
    try {
        const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/content/posts/${realSlug}.json`, {
            headers: GITHUB_TOKEN ? { "Authorization": `Bearer ${GITHUB_TOKEN}` } : {}
        });
        if (!response.ok) return null;
        const data = await response.json();
        const content = Buffer.from(data.content, 'base64').toString('utf8');
        const post = JSON.parse(content);
        return {
            ...post,
            slug: realSlug,
            createdAt: post.createdAt || new Date().toISOString(),
            updatedAt: post.updatedAt || new Date().toISOString(),
        };
    } catch (e) {
        console.error(`Error fetching post ${slug} from GitHub:`, e);
        return null;
    }
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const slugs = await getPostSlugs();
    const postPromises = slugs.map((slug) => getPostBySlug(slug));
    const posts = await Promise.all(postPromises);

    return posts
        .filter((post): post is BlogPost => post !== null && post.published)
        .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));
}
