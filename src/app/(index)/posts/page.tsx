import { PostsPage } from "@/pages/posts/ui/PostsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quackit | News feed",
  description:
    "Discuss with the community latest news and share your opinion with others.",
};
export default function Posts() {
  return <PostsPage user_id={1} />;
}
