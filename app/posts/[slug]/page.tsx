import { posts } from "#site/content";
import Footer from "@/components/footer";
import { MDXContent } from "@/components/mdx";
import NavBar from "@/components/nav";
import { notFound } from "next/navigation";
import { calculateReadingTime } from "../utils";

export async function generateStaticParams() {
  return (await posts).map((post) => ({
    slug: post.slug,
  }));
}

async function getPostFromParams(params: { slug: string }) {
  const slug = params?.slug;
  const post = posts.find((post) => post.slug === `${slug}`);
  return post;
}

export default async function Blog({ params }: { params: { slug: string } }) {
  let post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <section className="flex items-center justify-center flex-col p-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            description: post.summary,
            image: post.image
              ? `https://www.jensenlwt.com${post.image}`
              : `https://www.jensenlwt.com/og?title=${post.title}`,
            url: `https://www.jensenlwt.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Jensen Low",
            },
          }),
        }}
      />
      <div className="w-full flex justify-end">
        <NavBar />
      </div>
      <div className="w-full max-w-2xl">
        <h1 className="title text-center font-semibold text-2xl md:text-5xl tracking-tighter font-heading text-wrap">
          {post.title}
        </h1>
        <div className="flex justify-center items-center gap-2 mt-5 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {new Date(post.date).toLocaleDateString()}
          </p>
          {" · "}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {calculateReadingTime(post.raw)["text"]}
          </p>
        </div>
        <article className="prose prose-quoteless prose-neutral dark:text-neutral-200 text-neutral-800 lg:col-span-8 xl:col-span-8">
          <MDXContent code={post.body} />
        </article>
        <div className="border mt-16 border-neutral-100"></div>
        <div className="mt-10">
          <p>
            {`Thanks for reading! If you have any questions or feedback, message me on `}
            <a
              href="https://www.linkedin.com/in/vigneshtd"
              className="underline"
            >
              LinkedIn
            </a>
            {` or `}
            <a href="https://x.com/vvgnsh" className="underline">
              X
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
