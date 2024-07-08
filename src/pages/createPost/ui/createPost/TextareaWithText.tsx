import { Textarea } from "@/shared/ui/textarea";
import * as React from "react";

export function TextareaWithText() {
  return (
    <div className="grid w-full gap-1.5">
      <Textarea placeholder="Add more content to the post..." id="message-2" />
      <p className="text-sm text-muted-foreground">
        You can use Markdown to style your text. Read more
      </p>
    </div>
  );
}
