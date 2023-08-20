import React, { useState, DragEvent } from "react";
import Icon from "../Icon/Icon";
import { twMerge } from "tailwind-merge";

interface DraggerProps {
  onFile: (files: FileList) => void;
  children?: React.ReactNode;
}

export const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };
  return (
    <div
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      <div
        className={twMerge(
          "relative h-[180px] w-[360px] rounded-lg border-2 border-dashed border-gray-300 bg-slate-100 transition-all duration-200",
          dragOver ? "border-primary" : ""
        )}
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
          <Icon icon="upload" className="text-4xl text-primary" />
          <p className=" text-sm">Drag your files here</p>
        </div>
        {children}
      </div>
    </div>
  );
};
