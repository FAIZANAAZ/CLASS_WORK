"use client";
import Image from 'next/image';
import Head from 'next/head';
import React from 'react'

function Porfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="container mx-auto p-[30px] pt-[70px] bg-gradient-to-b from-black to-blue-600 rounded-xl shadow-lg max-w-3xl h-[400px]">

        <section className="flex justify-between items-center mt-[10px]">
          <div className="content text-white mt-5">
            <p className="text-lg mb-[10px]">Hello, It's Me</p>
            <h1 className="text-4xl font-bold">FAIZA NAAZ</h1>
            <h2 className="text-2xl mt-3">And I'm a <span className="text-blue-500">Frontend Developer</span></h2>
            <p className="mt-3 text-base">"As a web developer, I craft responsive and dynamic <br /> websites that deliver seamless user experiences."</p>
           
           
          </div>
          <div>
          <Image
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbdqMoQ8vRS3IHZBaXlweMTKBeDOMO06BPQ&s"
  width={184} // yeh value "w-46" ke liye hai (46 * 4 = 184)
  height={184} // yeh value "h-46" ke liye hai (46 * 4 = 184)
  className="rounded-full object-cover border-4 border-blue-500"
  alt='this is profile pic'
/>
          </div>
        </section>
      </div>
    </>
  );
}

export default Porfolio;
