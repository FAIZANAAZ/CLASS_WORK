"use client";

import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function HEADER_WITH_FOOTER() {
  return (
    <>
      <Head>
        <title>HEADER_WITH_FOOTER</title>
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>

      </Head>
      <div className="container mx-auto p-[30px] bg-gradient-to-b from-pink-500 to-yellow-500 rounded-xl shadow-lg max-w-3xl min-h-[400px] flex flex-col justify-between">
        
        <header className="flex justify-between bg-black border-solid border-[5px]  p-[10px] pr-[20px] items-center mt-[10px]">
          <div className="text-white text-xl font-bold">Portfolio</div>
          <div className="space-x-10">
            <Link href={"./homee"} className="nav-link active text-white uppercase font-bold hover:underline">Home</Link>
            <Link href={"./about"} className="nav-link active text-white uppercase font-bold hover:underline">About</Link>
            <Link href={"./contact"} className="nav-link active text-white uppercase font-bold hover:underline">Contact</Link>
          
          </div>
        </header>

        <section className="flex justify-between items-center mt-[10px]">
          <div className="content text-white mt-5">
            <p className="text-lg mb-[10px]">Hello, It's Me</p>
            <h1 className="text-4xl font-bold">FAIZA NAAZ</h1>
            <h2 className="text-2xl mt-3">And I'm a <span className="text-black font-bold">Frontend Developer</span></h2>
            <p className="mt-3 text-base">"As a web developer, I craft responsive and dynamic <br /> websites that deliver seamless user experiences."</p>
            <a className="download-btn bg-black text-white py-2 px-4 rounded mt-5 inline-block border-pink-700 font-bold border-solid border-[5px] hover:bg-pink-500" href="#">Download CV</a>
          </div>
          <div>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k7wGAI2F8SGH_s61ZBwxEAC74zpiZjBvYw&s"
              width={184}
              height={184}
              className="rounded-full object-cover border-4 border-pink-700"
              alt="this is profile pic"
            />
          </div>
        </section>

        <footer className="flex justify-between space-x-7 p-[10px] border-solid border-[5px] items-center bg-black pt-4 pb-2 mt-[24px] text-white">
          <div className="flex flex-col items-center">
            <a href="#" className="text-white font-bold text-2xl"><i className=" fa-square-facebook"></i>Facebook</a>
          
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white font-bold text-2xl"><i className="fab fa-instagram"></i>Instagram</a>
           
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white font-bold  text-2xl"><i className="fab fa-linkedin"></i>LinkedIn</a>
        
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white font-bold  text-2xl"><i className="fab fa-twitter"></i>Twitter</a>
            
          </div>
        </footer>
      </div>
    </>
  );
}

export default HEADER_WITH_FOOTER
