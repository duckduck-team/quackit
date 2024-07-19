"use client";

import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { UserData } from "@/pages/createPost/ui/createPost/UserData";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/button";
import { TextareaWithText } from "@/pages/createPost/ui/createPost/TextareaWithText";
import { ChooseCategory } from "@/pages/createPost/ui/createPost/ChooseCategory";
import { ToggleGroupCustom } from "@/pages/createPost/ui/createPost/ToggleGroupCustom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tabs";
import { fetchUser } from "@/pages/posts/lib/users";
import { redirect } from "next/navigation";
import { Image, Loader2 } from "lucide-react";
import { createPost } from "@/pages/createPost/lib/createPost";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/lib/utils";

export function CreatePostPage({
  user_id,
  className,
}: {
  user_id: number;
  className?: string;
}) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [postUser, setPostUser] = useState({
    username: "",
    user_id: -1,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleUploadClick = () => {
    document.getElementById("picture")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    }
  };

  useEffect(() => {
    async function getUser(user_id: number) {
      const user = await fetchUser(user_id);
      if (user) {
        setPostUser(user);
        setLoading(false);
      } else {
        router.push("/login");
        setLoading(false);
      }
    }
    getUser(user_id);
  }, []);

  async function handleSubmit() {
    setLoading(true);
    const result = await createPost(title, text, "");
    if (result) router.push("/posts");
    else {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col bg-secondary p-4 sm:w-content gap-4",
        className,
      )}
    >
      <Card className="flex flex-col w-full bg-background p-4 gap-4">
        <UserData user_id={postUser.user_id} username={postUser.username} />
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Input
            id="title"
            placeholder="Post title..."
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ChooseCategory />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Tabs defaultValue="edit" className="bg-gray-200 rounded-sm">
            <TabsList className="grid w-full grid-cols-2 border border-gray-200 rounded-sm">
              <TabsTrigger
                value="edit"
                className="focus:outline-none hover:bg-gray-200 focus:bg-gray-200"
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className="focus:outline-none hover:bg-gray-200 focus:bg-gray-200"
                onClick={() => setIsEditMode(false)}
              >
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <ToggleGroupCustom className="w-full" setText={setText} />
        </div>

        <TextareaWithText
          text={text}
          setText={setText}
          isEditMode={isEditMode}
        />

        <div className="flex flex-row gap-4 items-center">
          <Button
            type="button"
            variant={"outline"}
            className="gap-2 text-sm"
            onClick={handleUploadClick}
            disabled
          >
            <Image size={16} strokeWidth={2} /> Upload photo
          </Button>
          <Input
            id="picture"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {fileName && (
            <span className="text-sm text-muted-foreground">{fileName}</span>
          )}
        </div>

        <div className="flex flex-row gap-4 items-center">
          {loading ? (
            <Button type="submit" disabled className="w-full sm:w-fit">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submit
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              type="submit"
              className="w-full sm:w-fit"
            >
              Submit
            </Button>
          )}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </div>
      </Card>
    </div>
  );
}
