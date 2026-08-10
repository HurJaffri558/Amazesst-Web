import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazesst Blog | Amazon Growth Insights",
    description: "Expert strategies and deep dives into Amazon growth, advertising, and brand building.",
    openGraph: {
        title: "Amazesst Blog",
        description: "Official knowledge base for Amazon scaling and marketing.",
        type: "website",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
