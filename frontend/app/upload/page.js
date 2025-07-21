'use client';

import * as React from 'react';
import UploadIcon from '@/public/upload.svg';
import Image from 'next/image';
import {Dropzone} from "@/components/MultiFileDropzone";
import SyllabusUploadSection from '@/components/SyllabusUploadSection';

import { BarChart3, LucideUpload } from 'lucide-react';

export default function Upload() {
  const canAnalyze = true
  return (
    <div className='space-y-4 p-4 mx-auto pt-20 dark:bg-[#020817]'>
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
          <div className='title flex gap-2 text-2xl font-medium text-blue-800 items-center dark:text-blue-600'>
            {/* <Image src={UploadIcon} alt='Upload Icon' className='dark:invert'/> */}
            <LucideUpload className="h-5 w-5" />
            <h2 className=''>Upload Past Papers</h2>
          </div>
          <div className='dark:invert'>
            <Dropzone/>
          </div>
        </div>
        <div className="card space-y-0 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] h-fit bg-green-300/60 dark:bg-green-300 rounded-xl">
          <SyllabusUploadSection/>
        </div>
      </div>

      {/* <div className='w-full flex justify-center mt-10'>
        <button className="flex w-fit bg-blue-600 dark:bg-blue-600 text-white px-6 my-2 mx-auto py-2 rounded cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-700 text-xl font-bold">
          Analyze
        </button>
      </div> */}

      {/* Analyze Button */}
      <div className="text-center flex w-full justify-center">
        <button
          size="lg"
          disabled={!canAnalyze}
          className={`px-6 py-4 text-lg font-semibold transition-all duration-300 rounded-xl flex text-white items-center ${
            canAnalyze 
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl" 
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <BarChart3 className="h-5 w-5 mr-2" />
          <p>Analyze Papers</p>
        </button>
        {!canAnalyze && (
          <p className="text-sm text-muted-foreground mt-2">
            Please upload both past papers and syllabus to continue
          </p>
        )}
      </div>
    </div>
  );
}
