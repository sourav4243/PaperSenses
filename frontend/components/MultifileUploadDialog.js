'use client';

import { FileUploader } from '@/components/upload/multi-file';
import {
  UploaderProvider,
} from '@/components/upload/uploader-provider';
import { useEdgeStore } from '@/lib/edgestore';
import * as React from 'react';

export default function MultiFileDropzoneUsage() {
  const { edgestore } = useEdgeStore();

  const uploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      // you can run some server action or api here

      // Send the uploaded file url to backend
      await fetch("http://localhost:5000/upload", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          url: res.url,
          size: res.size,
        })
      })

      // to add the necessary data to your database
      // console.log("File uploaded and sent to backend:",res.url);
      // console.log(res);
      return res;
    },
    [edgestore],
  );

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <FileUploader
        maxFiles={5}
        maxSize={1024 * 1024 * 10} // 10 MB
        accept={{
          'application/pdf': [],
          'text/plain': ['.txt'],
          'image/jpeg': ['.jpg', '.jpeg'],
          'image/png': ['.png'],
        }}
      />
    </UploaderProvider>
  );
}