import { SanityDocument } from "next-sanity";

import { CategoryCard } from "@/components/category-card";
import { sanityClient } from "@/config/client";
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await sanityClient.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options,
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>

      <div className="flex flex-col gap-6">
        <CategoryCard blogs={posts} />
      </div>
    </main>
  );
}
