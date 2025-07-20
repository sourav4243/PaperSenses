'use client';

import * as React from 'react';
import UploadIcon from '@/public/upload.svg';
import Image from 'next/image';
import {Dropzone} from "@/components/MultiFileDropzone";

import SyllabusUploadSection from '@/components/SyllabusUploadSection';

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
        <div className="card shadow-lg p-3 space-y-2 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] max-h-auto h-full bg-blue-100 dark:bg-blue-900/40 rounded-xl">
          <div className='title flex gap-2 text-2xl font-medium text-blue-800 '>
            <Image src={UploadIcon} alt='Upload Icon' className='dark:invert'/>
            <h2 className='dark:text-blue-600'>Upload Past Papers</h2>
          </div>
          <div className='dark:invert'>
            <Dropzone/>
          </div>
        </div>
        <div className="card space-y-0 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] h-fit bg-green-300/60 dark:bg-green-300 rounded-xl">
          {/* <div className='title flex gap-2 text-2xl font-medium text-green-800 '>
            <Image src={UploadIcon} alt='Upload Icon'/>
            <h2>Add Your Syllabus</h2>
          </div>
          <p className='text-muted-foreground text-xs dark:invert'>This helps us analyze chapter importance and map questions accurately.</p>
          <div className='dark:invert'>
          </div> */}
          <SyllabusUploadSection/>
        </div>
      </div>

      <div>
        <button>
          Analyze
        </button>
      </div>

    </div>
  );
}
