"use client";
import { PostButton } from "@/pages/posts/ui/post/buttons/PostButton";
import { ChevronsDownIcon, ChevronsUpIcon } from "lucide-react";
import { useState } from "react";
import { voteAgainstPost, voteForPost } from "@/pages/posts/lib/posts";

interface VoteButtonProps {
  post_id: number;
  votes_count: number;
}

export function VoteButton({ post_id, votes_count }: VoteButtonProps) {
  const [votes, setVotes] = useState(votes_count);

  async function voteUp() {
    const data = await voteForPost(post_id);
    if (data) {
      return setVotes(data.votes_count);
    } else {
      return;
    }
  }

  async function voteDown() {
    const data = await voteAgainstPost(post_id);
    if (data) {
      return setVotes(data.votes_count);
    } else {
      return;
    }
  }

  return (
    <PostButton className="w-fit flex bg-secondary font-medium text-sm text-primary/75 rounded-md">
      <div
        onClick={voteUp}
        title="Vote up"
        className="rounded-md w-fit p-2 h-full bg-secondary text-primary/75 hover:text-primary"
      >
        <ChevronsUpIcon strokeWidth={3} size={20} />
      </div>
      <span className="py-2">{votes}</span>
      <div
        onClick={voteDown}
        title="Vote down"
        className="rounded-md w-fit p-2 h-full bg-secondary text-primary/75 hover:text-primary"
      >
        <ChevronsDownIcon strokeWidth={3} size={20} />
      </div>
    </PostButton>
  );
}
