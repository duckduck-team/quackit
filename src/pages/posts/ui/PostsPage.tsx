"use client";
import { Post } from "@/pages/posts/ui/post/Post";
import { useEffect, useState } from "react";
import {
  fetchPosts,
  PostInDB,
  AvailablePosts,
  fetchTags,
  TagInDB,
  AvailableTags,
} from "../lib/posts";
import Tag from "./tag/Tag";
import { CreatePostPage } from "@/pages/createPost/ui/CreatePostPage";

export function PostsPage({ user_id }: { user_id: number }) {
  const [posts, setPosts] = useState<PostInDB[]>([]);
  const [tags, setTags] = useState<TagInDB[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData: AvailablePosts<PostInDB> = await fetchPosts();
        const posts: PostInDB[] = postsData["posts"];

        if (posts.length > 0) {
          setPosts(posts);
        } else {
          setError("No posts");
        }
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  useEffect(() => {
    async function getTags() {
      try {
        const tagsData: AvailableTags<TagInDB> = await fetchTags();
        const tags: TagInDB[] = tagsData["tags"];

        if (tags.length > 0) {
          setTags(tags);
        }
      } finally {
        setLoading(false);
      }
    }
    getTags();
  }, []);

  const filterPosts = (new_posts: PostInDB[]) => {
    setPosts(new_posts);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col bg-secondary p-4 w-content gap-4">
      {user_id ? (
        <CreatePostPage className="p-0 w-full" user_id={user_id} />
      ) : null}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: TagInDB) => (
          <Tag key={`tag-${tag}`} callback={filterPosts} tag={tag.tag} />
        ))}
      </div>
      {posts.map((post: PostInDB) => (
        <Post
          key={post.post_id}
          content={post.content}
          post_id={post.post_id}
          published_at={post.published_at}
          title={post.title}
          user_id={post.user_id}
          votes_count={post.votes_count}
        />
      ))}
    </div>
  );
}
