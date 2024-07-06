import { Post } from "@/pages/posts/ui/post/Post";

export function SinglePostPage() {
  return (
    <div className="flex h-fit flex-col bg-secondary p-4 w-content gap-4">
      <Post
        content={
          "We are happy to announce that Quackit is available to all users!\n• Share your content with Quackit community via posts. Try now!\n• Share your content with Quackit community via posts. Try now!\n• Comment on posts and discuss the news with the community\n• Vote to rise the interesting posts to the top\n\nHave an idea or anything to say? Contact us via hello@quackit.ru"
        }
        post_id={1}
        published_at={"2024-07-06T10:47:17.483Z"}
        title={"The Quackit is launched today!"}
        user_id={1}
        votes_count={0}
      />
    </div>
  );
}
