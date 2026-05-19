import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackLink from "@/components/BackLink";
import { notFound } from "next/navigation";

// Placeholder posts — swap for MDX when ready
const POSTS: Record<
  string,
  { title: string; date: string; readTime: string; intro: string; body: string }
> = {
  "isc2-cc-exam-prep": {
    title: "How I prepared for the ISC2 CC exam",
    date: "May 2026",
    readTime: "8 min read",
    intro:
      "A practical breakdown of the six-month seminar that led me to my first cybersecurity certification.",
    body: "Coming soon. This post will cover study resources, the structure of the ISC2 CC exam, time-management tips, and the things I wish someone had told me before I started.",
  },
  "langgraph-thesis-lessons": {
    title: "Building agents with LangGraph: lessons from my thesis",
    date: "April 2026",
    readTime: "12 min read",
    intro:
      "What I learned designing a stateful AI agent that talks to students over WhatsApp.",
    body: "Coming soon. This post will cover graph design, state management, tool use, RAG retrieval quality, and what I'd do differently next time.",
  },
  "ibm-guardium-explained": {
    title: "Database security with IBM Guardium, explained",
    date: "March 2026",
    readTime: "10 min read",
    intro:
      "A practitioner's introduction to data security monitoring and what Guardium actually does.",
    body: "Coming soon. This post will cover what Guardium monitors, how it deploys, who needs it, and how it fits into modern data security architectures.",
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 lg:px-10 pt-8 lg:pt-10 pb-16 lg:pb-24">
        <BackLink type="writing" />

        <div className="font-mono text-[11px] text-[var(--color-stone-400)] tracking-wider mb-3">
          {post.date} · {post.readTime}
        </div>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-5">
          {post.title}
        </h1>
        <p className="font-italic-serif text-xl text-[var(--color-stone-500)] mb-10 leading-relaxed">
          {post.intro}
        </p>

        <div className="prose prose-stone max-w-none">
          <p className="text-[15px] leading-[1.85] text-[var(--color-stone-500)]">
            {post.body}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
