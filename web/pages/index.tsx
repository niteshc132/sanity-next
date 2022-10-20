import Link from "next/link";
import { Suspense, useState } from "react";
import groq from "groq";
import client from "../client";
import { InferGetStaticPropsType } from "next";

export default function Index({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(posts);
  return (
    <div className="text-white flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
      <h1 className="text-3xl font-bold underline">Welcome to a blog!</h1>

      <input
        aria-label="Search articles"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search articles"
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
      />

      {/* {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )} */}

      {searchValue && (
        <>
          {filteredBlogPosts.map((post) => (
            <li key={post.title}>
              <Link
                href={`/post/${posts.slug}`}
                as={`/post/${post.slug.current}`}
                key={post.title}
                //slug={post.slug}
                title={post.title}
              >
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}
