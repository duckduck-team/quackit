interface CommentContentProps {
  content: string;
  comment_id: number;
}
export function CommentContent({ content, comment_id }: CommentContentProps) {
  function parseContent(content: string) {
    if (content) {
      let contentSep = content.split("\n");
      return contentSep.map((cont, index) => (
        <p key={`${comment_id}-${index}`}>{cont ? cont : <br />}</p>
      ));
    }
  }
  return (
    <div className="w-full h-fit font-normal text-sm">
      {parseContent(content)}
    </div>
  );
}
