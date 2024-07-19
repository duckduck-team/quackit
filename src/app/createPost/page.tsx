import { CreatePostPage } from "@/pages/createPost/ui/CreatePostPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quackit | Create post",
  description: "Share your news with the community in a few seconds.",
};
export default function Posts() {
  return <CreatePostPage user_id={1} />;
}
