import { Button } from "@/shared/ui/button";
import React from "react";

interface PostButton {
  className: string;
  children: React.ReactNode;
}
export function PostButton({ children }: PostButton) {
  return (
    <Button className="w-fit h-fit p-0 flex bg-secondary hover:bg-secondary/75 font-medium text-sm text-primary/75 hover:text-primary">
      {children}
    </Button>
  );
}
