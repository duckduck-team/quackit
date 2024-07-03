import Link from "next/link";
import { BookIcon, GamepadIcon, MonitorIcon, PlaneIcon } from "lucide-react";

export function TopicsBar() {
  return (
    <div className="flex flex-col gap-2.5">
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <GamepadIcon className="mr-2 h-4 w-4" /> Videogames
      </Link>
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <MonitorIcon className="mr-2 h-4 w-4" /> Technology
      </Link>
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <PlaneIcon className="mr-2 h-4 w-4" /> Travel
      </Link>
      <Link
        href={"/"}
        className="flex gap-4 px-4 py-3 w-[23rem] items-center text-sm"
      >
        <BookIcon className="mr-2 h-4 w-4" /> Education
      </Link>
    </div>
  );
}
