import Link from "next/link";
import { BookOpenCheckIcon, InfoIcon, ShieldCheckIcon } from "lucide-react";

export function AboutBar() {
  return (
    <div className="flex flex-col gap-2.5">
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <InfoIcon className="mr-2 h-4 w-4" /> About
      </Link>
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <BookOpenCheckIcon className="mr-2 h-4 w-4" /> Terms of Service
      </Link>
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <ShieldCheckIcon className="mr-2 h-4 w-4" /> Privacy Policy
      </Link>
    </div>
  );
}
