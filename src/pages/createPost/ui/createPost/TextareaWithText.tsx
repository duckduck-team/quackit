import { Textarea } from "@/shared/ui/textarea";
import Markdown from "markdown-to-jsx";

export function TextareaWithText({
  isEditMode,
  text,
  setText,
}: {
  isEditMode: boolean;
  text: string;
  setText: (text: string) => void;
}) {
  return (
    <div className="grid w-full gap-1.5">
      {isEditMode ? (
        <Textarea
          placeholder="Add more content to the post..."
          id="message-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div className="prose">
          <Markdown>{text}</Markdown>
        </div>
      )}
      <p className="text-sm text-muted-foreground">
        You can use Markdown to style your text. Read more
      </p>
    </div>
  );
}
