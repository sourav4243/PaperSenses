import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='space-y-4 p-4 mx-auto pt-20 dark:bg-[#020817]'>
      {/* <NotFound/> */}
      <div className="text-center space-y-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Past Paper Analysis
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl">
          Analyze past examn papers to identify key questions and trends.
        </p>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg-gap-5 justify-self-center">
        <div className='flex items-center shadow-lg p-3 space-y-2 w-[40vw] sm:w-[40vw] md:w-[20vw] lg:w-[23vw] border-1 max-h-auto h-full bg-blue-200 dark:bg-blue-900/40 rounded-lg'>
          <div className='text-blue-800 dark:text-blue-600'>
            <p className='text-sm'>Subject</p>
            <h2 className='font-bold'>Computer Science</h2>
          </div>
          {/* <Image/> */}
        </div>
        <div className='flex items-center shadow-lg p-3 space-y-2 w-[40vw] sm:w-[40vw] md:w-[20vw] lg:w-[23vw] border-1 max-h-auto h-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-lg'>
          <div className='text-green-800 dark:text-green-600'>
            <p className='text-sm'>Files Uploaded</p>
            <h2 className='font-bold'>5</h2>
          </div>
          {/* <Image/> */}
        </div>
        <div className='flex items-center shadow-lg p-3 space-y-2 w-[40vw] sm:w-[40vw] md:w-[20vw] lg:w-[23vw] border-1 max-h-auto h-full bg-purple-100 dark:bg-purple-900/40 rounded-lg'>
          <div className='text-purple-800 dark:text-purple-600'>
            <p className='text-sm'>Extracted Questions</p>
            <h2 className='font-bold'>120</h2>
          </div>
          {/* <Image/> */}
        </div>
        <div className='flex items-center shadow-lg p-3 space-y-2 w-[40vw] sm:w-[40vw] md:w-[20vw] lg:w-[23vw] border-1 max-h-auto h-full bg-orange-100 dark:bg-orange-900/40 rounded-lg'>
          <div className='text-orange-800 dark:text-orange-600'>
            <p className='text-sm'>Total Marks</p>
            <h2 className='font-bold'>500</h2>
          </div>
          {/* <Image/> */}
        </div>
      </div>
    </div>
  )
}

export default page
