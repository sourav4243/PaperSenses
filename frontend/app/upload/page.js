'use client';

import * as React from 'react';
import UploadIcon from '@/public/upload.svg';
import Image from 'next/image';
import {Dropzone} from "@/components/MultiFileDropzone";


export default function Upload() {
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
        <div className="card p-3 space-y-2 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[45vh] min-h-fit bg-blue-300/60 dark:bg-blue-300 rounded-xl">
          <div className='title flex gap-2 text-2xl font-medium text-blue-800 '>
            <Image src={UploadIcon} alt='Upload Icon'/>
            <h2>Upload Past Papers</h2>
          </div>
          <div className='dark:invert'>
            <Dropzone/>
          </div>
        </div>
        <div className="card p-3 space-y-2 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[50vh] bg-green-300/60 dark:bg-green-300 rounded-xl">
          <div className='title flex gap-2 text-2xl font-medium text-green-800 '>
            <Image src={UploadIcon} alt='Upload Icon'/>
            <h2>Add Your Syllabus</h2>
          </div>
          <div className='dark:invert'>
          </div>
        </div>
      </div>
    </div>
  );
}
