'use client'
import { Post } from "@/pages/posts/ui/post/Post";
import { useEffect, useState } from "react";
import { fetchPosts, PostInDB, AvailablePosts } from "../lib/posts";


export function PostsPage() {
  const [posts, setPosts] = useState<PostInDB[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData: AvailablePosts<PostInDB> = await fetchPosts();
        const posts: PostInDB[] = postsData['posts']

        if (posts.length > 0) {
          setPosts(posts)
        } else {
          setError("No posts")
        }

      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="flex flex-col bg-secondary p-4 w-content gap-4">
      {posts.map((post: PostInDB) => (
        <Post
          key={post.post_id}
          content={post.content}
          post_id={post.post_id}
          published_at={formatDate(post.published_at)}
          title={post.title}
          user_id={post.user_id}
          votes_count={post.votes_count}
        />
      ))}
    </div>
  );
}
