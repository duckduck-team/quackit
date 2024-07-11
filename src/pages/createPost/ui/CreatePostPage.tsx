"use client";

import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { UserData } from "@/pages/createPost/ui/createPost/UserData";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { TextareaWithText } from "@/pages/createPost/ui/createPost/TextareaWithText";
import { ChooseCategory } from "@/pages/createPost/ui/createPost/ChooseCategory";
import { ToggleGroupCastom } from "@/pages/createPost/ui/createPost/ToggleGroupCastom";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";

export function CreatePostPage() {
  return (
    <div className="flex flex-col bg-secondary p-4 w-content gap-4">
      <Card className="flex flex-col w-full bg-background p-4 gap-4">
        <UserData user_id={1} username={"danmaninc"} />
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
              >
                Edit
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className="focus:outline-none hover:bg-gray-200 focus:bg-gray-200"
              >
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <ToggleGroupCastom />
        </div>

        <TextareaWithText />

        <Input id="picture" type="file" />

        <div className="flex flex-row gap-4 items-center">
          <Button type="submit">Submit</Button>
          <p className="text-sm text-muted-foreground">
            Posts should follow Terms of Service.
          </p>
        </div>
      </Card>
    </div>
  );
}
