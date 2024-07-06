interface PostContentProps {
  title: string;
  content: string;
  post_id: number;
}
export function PostContent({ title, content, post_id }: PostContentProps) {
  function parseContent(content: string) {
    let contentSep = content.split("\n");
    console.log(contentSep);
    return contentSep.map((cont, index) => (
      <p key={`${post_id}-${index}`}>{cont ? cont : <br />}</p>
    ));
  }
  return (
    <>
      <h1 className="text-base font-semibold">{title}</h1>
      <p className="w-full h-fit font-normal text-sm">
        {parseContent(content)}
      </p>
    </>
  );
}
