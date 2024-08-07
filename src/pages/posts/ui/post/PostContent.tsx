import Link from "next/link";
interface PostContentProps {
  title: string;
  content: string;
  post_id: number;
}
export function PostContent({ title, content, post_id }: PostContentProps) {
  function parseContent(content: string) {
    if (content) {
      let contentSep = content.split("\n");
      return contentSep.map((cont, index) => (
        <p key={`${post_id}-${index}`}>{cont ? cont : <br />}</p>
      ));
    }
  }
  return (
    <>
      <Link href={`/posts/${post_id}`}>
        <h1 className="text-base font-semibold">{title}</h1>
      </Link>
      <div className="w-full h-fit font-normal text-sm">
        {parseContent(content)}
      </div>
    </>
  );
}
