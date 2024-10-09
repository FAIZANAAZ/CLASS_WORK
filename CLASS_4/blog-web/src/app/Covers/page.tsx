

import React from 'react'
import Image from 'next/image'

function Covers() {
  return (
   <>
   
   <div className='flex items-center w-full pl-[20px] h-[90vh] md:pl-[100px] bg-gray-200 md:h-[66vh]'>
<Image alt='this is an image' src='/cover.jpg' width={1000} height={1000} className='h-[400px] w-[250px] sm:h-[400px] sm:w-[300px]  md:h-[420px] md:w-[400px] '></Image>

<div className=" w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] pt-[5px] pl-[50px] max-w-md mx-auto bg-white shadow-md rounded-md md:h-[400px] md:w-[500px] ">
 <head>
  <title>
  Iphone Covers
  </title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
 </head>
 <h1 className="  md:text-2xl font-bold mb-2 ">
 Iphone Covers
 </h1>
 <div className="bg-red-500 text-white md:font-bold px-2 py-1 inline-block mb-2">
  Save Rs.5,00
 </div>
 <div className="text-blue-500 md:mb-2 md:font-bold">
  APPLE
 </div>
 <div className="mb-4">
  <div className="text-[12px] md:text-[18px] font-bold mb-1">
   Size: 256 
  </div>
  <div className="flex space-x-2">
   <button className="px-[2px] py-[1px] h-[20px] md:h-[40px] md:w-[100px] md:text-[20px] border text-[10px] border-blue-500 text-blue-500  rounded-md">
    256 
   </button>
   <button className="md:h-[40px] md:w-[100px] md:text-[20px] px-[2px] py-[1px] h-[20px]  border text-[10px] border-gray-500 text-gray-500 md:px-4  rounded-md" >
    512 
   </button>
   
  </div>
 </div>
 <div className="mb-4">
  <div className="text-[12px] md:text-[18px] font-bold mb-1">
   Color: Nature Titanium
  </div>
  <div className="flex space-x-2 h-[30px] w-[130px] md:h-[50px] md:w-[50px]">
   <img alt="Nature Titanium color option" className="border-2 border-blue-500 p-1 rounded-md" height="50" src="https://storage.googleapis.com/a1aa/image/IEKaqTmfOSXQeEp0frVR9aiPhRgeIwc8f7pLFDK0N1BKkOpcC.jpg" width="50"/>
   <img alt="Other color option 1" className="border-2 border-gray-300 p-1 rounded-md" height="50" src="https://storage.googleapis.com/a1aa/image/cgaBfUSfLAmf4pfiIqKT0FYMedc7qMliZIIx14uJVw80jOpcC.jpg" width="50"/>
   <img alt="Other color option 2" className="border-2 border-gray-300 p-1 rounded-md" height="50" src="https://storage.googleapis.com/a1aa/image/TUeo23LWz03rGiB81ccZfOcRMuVIEowGFNdDU44hjucg0JlTA.jpg" width="50"/>
  </div>
 </div>
 <div className="mb-4">
  <div className="text-[12px] md:text-[18px] font-bold mb-1">
   Price:
  </div>
  <div className="text-red-500 md:text-2xl font-bold">
   Rs.1,499
  </div>
  <div className="text-gray-500 line-through">
   Rs.2,799
  </div>
 </div>

  </div>
 </div>
    
   
   </>
  )
}

export default Covers
