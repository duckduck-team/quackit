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
import { Image } from "lucide-react";

export function CreatePostPage({ user_id }: { user_id: number }) {
  const [isEditMode, setIsEditMode] = useState(true);
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [postUser, setPostUser] = useState({
    username: "",
    user_id: -1,
  });
  const [loading, setLoading] = useState(true);

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
        redirect("/login");
        setLoading(false);
      }
    }
    getUser(user_id);
  }, []);

  return (
    <div className="flex flex-col bg-secondary p-4 w-content gap-4">
      <Card className="flex flex-col w-full bg-background p-4 gap-4">
        <UserData user_id={postUser.user_id} username={postUser.username} />
        <div className="flex flex-row gap-4 justify-between">
          <Input id="title" placeholder="Post title..." className="w-full" />
          <ChooseCategory />
        </div>

        <div className="flex flex-row gap-4">
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
          <ToggleGroupCustom setText={setText} />
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
          <Button type="submit">Submit</Button>
        </div>
      </Card>
    </div>
  );
}
