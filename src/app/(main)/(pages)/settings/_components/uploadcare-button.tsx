"use client";
import React, { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FileObject = {
  uuid: string;
  cdnUrl: string;
  fileInfo: {
    mimeType: string;
    originalFilename: string;
  };
  status: string;
};

type Props = {
  onUpload?: any;
};

const UploadCareButton = (props: Props) => {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleChangeEvent = (items: any) => {
    setUploading(true);
    const successfulFiles = items.allEntries.filter((file: FileObject) => file.status === "success");
    setFiles(successfulFiles);
    setUploading(false);
  };

  const renderFilePreview = (file: FileObject) => {
    const { cdnUrl, fileInfo } = file;
    const { mimeType, originalFilename } = fileInfo;

    if (mimeType.startsWith("image/")) {
      return <Image className="rounded-lg" src={cdnUrl} alt={originalFilename} width={400} height={400} />;
    } else {
      return (
        <a href={cdnUrl} download>
          {originalFilename}
        </a>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pb-3">
        {files.map((file) => (
          <div className="mt-4 rounded-lg" key={file.uuid}>
            {renderFilePreview(file)}
          </div>
        ))}
      </div>
      {!uploading && (
        <FileUploaderRegular
          pubkey="c1c3bb516e884e894443"
          maxLocalFileSizeBytes={10000000}
          multiple={false}
          imgOnly={true}
          onChange={handleChangeEvent}
          sourceList="local, url, camera, dropbox, gdrive"
          classNameUploader="my-config"
        />
      )}
    </div>
  );
};

export default UploadCareButton;
