"use client";

import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/toggle-group";
import React, { useState } from "react";

export function ToggleGroupCustom(props: { setText: (text: string) => void }) {
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelectedFormats((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleTextFormatting = (format: string) => {
    const textarea = document.getElementById(
      "message-2",
    ) as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (selectedText) {
      const formattedText =
        format === "bold"
          ? `**${selectedText}**`
          : format === "italic"
            ? `*${selectedText}*`
            : format === "underline"
              ? `<u>${selectedText}</u>`
              : selectedText;

      props.setText(
        textarea.value.substring(0, start) +
          formattedText +
          textarea.value.substring(end),
      );
      setSelectedFormats([]);
    }
  };

  React.useEffect(() => {
    selectedFormats.forEach((format) => handleTextFormatting(format));
  }, [selectedFormats]);

  return (
    <ToggleGroup
      size={"sm"}
      type="multiple"
      className="border border-gray-200 rounded-sm gap-2 px-2"
    >
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle bold"
        onClick={() => handleToggle("bold")}
      >
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
        onClick={() => handleToggle("italic")}
      >
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="underline"
        aria-label="Toggle underline"
        onClick={() => handleToggle("underline")}
      >
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
