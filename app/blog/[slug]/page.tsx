import { AppImage } from "@/components/image";
import { sanityClient } from "@/config/client";

import "@/styles/blog.css";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import moment from "moment";
import { SanityDocument } from "next-sanity";

const POST_QUERY = `*[_type=='post'&& slug.current ==$slug][0]{
  ...,
  content[]{
    ...,
    _type == "image" => {
      "image": asset->
    }
  }
}`;

const { projectId, dataset } = sanityClient.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return <AppImage src={value.image.url} />;
    },
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.url.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <a href={value.url} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  /// Required to await because it creates an error in console
  const paramsData = await params;
  const post = await sanityClient.fetch<SanityDocument>(
    POST_QUERY,
    paramsData,
    options,
  );
  const postImageUrl = post.featured_image
    ? urlFor(post.featured_image)?.url()
    : null;
  const publishedDate = moment(new Date(post.publishedAt)).format("LL");

  return (
    <main className="blog">
      <div className="blog-head">
        <h1 className="blog-title">{post.title}</h1>
        <p className="text-gray-500">Posted on {publishedDate}</p>
        {postImageUrl && (
          <AppImage
            alt={post.title}
            className="feature-image"
            src={postImageUrl}
          />
        )}
      </div>
      <div className="blog-content">
        {Array.isArray(post.content) && (
          <PortableText
            components={myPortableTextComponents}
            value={post.content}
          />
        )}
      </div>
    </main>
  );
}
