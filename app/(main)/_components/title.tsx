"use client"

import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";

interface TitleProps {
  initialData: Doc<"documents">
};

export const Title = ({
  initialData
}: TitleProps) => {
  const update = useMutation(api.documents.update);
  
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex items-center gap-x-1">
      {!!initialData.icon && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          className="h-7 px-2 focus-visible:ring-transparent"
        />
      )}
    </div>
  )
}