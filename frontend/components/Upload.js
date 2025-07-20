'use client';

import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { ProgressBar } from '@/components/upload/progress-bar';
import MultifileUploadDialog from '@/components/MultifileUploadDialog'
import UploadIcon from '@/public/upload.svg';
import Image from 'next/image';

import {Dropzone} from "@/components/MultiFileDropzone";


export default function Upload() {
  // const [file, setFile] = React.useState();
  // const [progress, setProgress] = React.useState(0);
  // const { edgestore } = useEdgeStore();

  // const handleUpload = async () =>{
  //   if(!file) return;
  //   const res = await edgestore.publicFiles.upload({
  //     file,
  //     onProgressChange: (p) =>{
  //       setProgress(p);
  //     }
  //   })
  //   console.log("Upload complete:", res);
  // }

  return (
    <div className='space-y-4 p-4 mx-auto pt-20'>
      <div className="text-center space-y-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Upload Your Past Papers
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl">
          Upload your past year exam papers and syllabus to get AI-powered analysis and predictions
        </p>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-4 lg-gap-5 justify-self-center">
        <div className="card p-3 space-y-2 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[50vh] bg-blue-300/60 dark:bg-blue-300 rounded-xl">
          <div className='title flex gap-2 text-2xl font-medium text-blue-800 '>
            <Image src={UploadIcon} alt='Upload Icon'/>
            <h2>Upload Past Papers</h2>
          </div>
          <div className='dark:invert'>
            {/* <MultifileUploadDialog/> */}
            <Dropzone/>
          </div>
        </div>
        <div className="card p-3 space-y-2 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[50vh] bg-green-300/60 dark:bg-green-300 rounded-xl">
          <div className='title flex gap-2 text-2xl font-medium text-green-800 '>
            <Image src={UploadIcon} alt='Upload Icon'/>
            <h2>Add Your Syllabus</h2>
          </div>
          <div className='dark:invert'>
            <MultifileUploadDialog/>
          </div>
        </div>
      </div>

      {/* <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
        className='w-full border-2 border-dashed border-muted-foreground rounded-md'
      />
      <button
        onClick={handleUpload}
        className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
      >
        Upload Syllabus
      </button>
      
      {progress>0 && (
        <ProgressBar progress={progress} className='h-4 bg-muted'/>
      )} */}
    </div>
  );
}
