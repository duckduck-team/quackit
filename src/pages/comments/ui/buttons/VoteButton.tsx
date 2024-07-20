"use client";
import { PostButton } from "@/pages/posts/ui/post/buttons/PostButton";
import { ChevronsDownIcon, ChevronsUpIcon } from "lucide-react";
import { useState } from "react";


interface VoteButtonProps {
  comment_id: number;
  votes_count: number;
}

export function VoteButton({ comment_id, votes_count }: VoteButtonProps) {
  const [votes, setVotes] = useState(votes_count);

  return (
    <PostButton className="w-fit flex bg-secondary font-medium text-sm text-primary/75 rounded-md">
      <div
        title="Vote up"
        className="rounded-md w-fit p-2 h-full bg-secondary text-primary/75 hover:text-primary"
      >
        <ChevronsUpIcon strokeWidth={3} size={20} />
      </div>
      <span className="py-2">{votes}</span>
      <div
        title="Vote down"
        className="rounded-md w-fit p-2 h-full bg-secondary text-primary/75 hover:text-primary"
      >
        <ChevronsDownIcon strokeWidth={3} size={20} />
      </div>
    </PostButton>
  );
}
