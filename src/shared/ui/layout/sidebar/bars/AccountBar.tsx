import Link from "next/link";
import { HomeIcon, MessageSquareIcon, UserIcon } from "lucide-react";

export function AccountBar() {
  return (
    <div className="flex flex-col gap-2.5">
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <HomeIcon className="mr-2 h-4 w-4" /> Home
      </Link>
      {/*<Link*/}
      {/*  href={"/"}*/}
      {/*  className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"*/}
      {/*>*/}
      {/*  <UserIcon className="mr-2 h-4 w-4" /> My account*/}
      {/*</Link>*/}
      {/*<Link*/}
      {/*  href={"/"}*/}
      {/*  className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"*/}
      {/*>*/}
      {/*  <MessageSquareIcon className="mr-2 h-4 w-4" /> My conversations*/}
      {/*</Link>*/}
    </div>
  );
}
