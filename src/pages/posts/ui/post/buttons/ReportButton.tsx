import { PostButton } from "@/pages/posts/ui/post/buttons/PostButton";
import { FlagIcon } from "lucide-react";

export function ReportButton() {
  return (
    <PostButton className="w-fit flex p-2 px-3 gap-2 bg-secondary font-medium text-sm text-primary/75 rounded-md">
      <FlagIcon strokeWidth={3} size={16} />
      Report
    </PostButton>
  );
}
