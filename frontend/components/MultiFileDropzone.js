"use client";

import React, { useRef, useState, useMemo } from "react";
import { AlertCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import UploadIcon from "@/public/upload.svg";
import FileLogo from "@/public/file.svg";
import Image from "next/image";

const DROPZONE_VARIANTS = {
  base: "relative rounded-md p-4 w-full flex justify-center items-center flex-col cursor-pointer border-2 border-dashed border-muted-foreground transition-colors duration-200 ease-in-out",
  active: "border-primary",
  disabled:
    "bg-muted border-muted-foreground cursor-default pointer-events-none opacity-50",
  accept: "border-primary bg-primary/10",
  reject: "border-destructive bg-destructive/10",
};

function formatFileSize(size) {
  const kb = size / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export const Dropzone = React.forwardRef(({ maxFiles = 5, maxSize = 1024 * 1024 * 10 }, ref) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = (incomingFiles) => {
    setError(null);

    if (incomingFiles.length + files.length > maxFiles) {
      setError(`You can only add ${maxFiles} file(s).`);
      return;
    }

    for (let file of incomingFiles) {
      if (file.size > maxSize) {
        setError(`The file ${file.name} is too large. Max size is ${formatFileSize(maxSize)}.`);
        return;
      }
    }

    setFiles(prev => [...prev, ...incomingFiles]);
  };

  const dropZoneClassName = useMemo(() =>
    cn(
      DROPZONE_VARIANTS.base,
      isDragging && DROPZONE_VARIANTS.active,
    ), [isDragging]);

  return (
    <div className="w-full h-auto min-h-fit mb-2 z-100">
      <div
        className={dropZoneClassName}
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => processFiles(Array.from(e.target.files))}
          {...ref}
        />

        <div className="flex flex-col items-center justify-center gap-2 text-center text-muted-foreground">
          <Image src={UploadIcon} alt="Upload Icon" className="h-10 w-10" />
          <div className="text-sm font-medium text-black">
            {isDragging ? "Drop files here..." : "Drag and drop your past year exam papers"}
            <p className="text-muted-foreground">or</p>
            <div className="flex w-fit bg-blue-600 dark:bg-amber-500 text-white dark:text-black px-3.5 my-2 mx-auto py-2 rounded cursor-pointer hover:bg-blue-700">
              <Image src={FileLogo} alt="File logo" className="dark:invert" />
              Browse Files
            </div>
          </div>
          {(!!maxSize || !!maxFiles) && (
            <div className="text-xs">
              {maxFiles > 1 && `Up to ${maxFiles} files`}
              {maxFiles > 1 && maxSize ? ", " : ""}
              {maxSize && `Max size: ${formatFileSize(maxSize)}`}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-1 flex items-center text-xs text-destructive">
          <AlertCircleIcon className="mr-1 h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2 text-left">  
        <p className="font-semibold my-1">Uploaded files</p>
          <div className="overflow-y-auto min-h-10 max-h-20 h-fit">
            {files.map((file, idx) => (
                <div key={idx} className="text-sm text-muted-foreground w-full bg-white dark:bg-gray-950/65 min-h-8 border rounded-sm border-gray-500/40 my-1 p-1">
                📎 {file.name} ({formatFileSize(file.size)})
                </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

Dropzone.displayName = "Dropzone";
