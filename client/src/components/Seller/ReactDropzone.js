import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ReactDropzone = ({ setFiles }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      setFiles(
        acceptedFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file)
        }))
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: "image/*"
  });
  return (
    <div
      {...getRootProps()}
      className={isDragActive ? `dropzone--isActive` : ""}
    >
      <input {...getInputProps()} />
      <h1>yeah</h1>
    </div>
  );
};

export default ReactDropzone;