"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuHeadphones } from "react-icons/lu";
import { MdOutlineVideogameAsset } from "react-icons/md"
import { PiDotsThreeOutlineLight } from "react-icons/pi";


function Front() {
  let sec2: any = [
    {
      p1: "Apple  AirPods",
      span: "Max",
      descrip: "Computational audio. Listen, it's powerful",
      pic: "/earphon.png",
      wirth: 192,
      bgcolor: "bg-[#EDEDED]",
      textcolor: "text-black",
    },
    {
      p1: "Apple Vision",
      span: "Pro",
      descrip: "An immersive way to experience entertainment",
      pic: "/ear2.png",
      wirth: 325.87,
      bgcolor: "bg-[#353535]",
      textcolor: "text-white",
    },
    {
      p1: "Playstation",
      span: "5",
      descrip:
        "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
      pic: "/PlayStation.png",
      wirth: 192,
      bgcolor: "bg-[#FFFFFF]",
      textcolor: "text-black",
    },
  ];

  let sec3: any = [
    {
      p1: "Phones",
      icon: <MdOutlinePhoneAndroid />,
    },
    {
      p1: "Smart Watches",
      icon: <IoWatchOutline />,
    },
    {
      p1: "Cameras",
      icon: <CiCamera />,
    },
    {
      p1: "Head phones",
   
      icon:   <LuHeadphones /> ,
    },
    {
      p1: "Computers",
      icon: <HiOutlineComputerDesktop />,
    },
    {
      p1: "Gaming",
      icon: <MdOutlineVideogameAsset />,
    },
  ];



  // sex4
  let sec4: any = [
    {
      p1: "Apple iPhone 14 ",
      p2: " Pro Max 128GB D",
      price: "$900",
      pic: "/Iphonesec4.png",
     
     
    
    },
    {
      p1: "Blackmagic Pocket ",
      p2:"Cinema Camera 6k",
      price: "$2535",
      pic: "/camrasec.png",
      wirth: 192,
     
    
    },
    {
      p1: "Apple Watch Series ",
      p2 :"9 GPS 41mm Starlight ",
      price: "$399",
      pic: "/wattch1sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "AirPods Max ",
      p2:"Silver",
      price: "$549",
      pic: "/earphon1sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "Samsung Galaxy ",
      p2:"Watch6 47mm Black",
      price: "$369",
      pic: "/watch2sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "Galaxy Z Fold5 ",
      p2:"| 256GB | Black",
      price: "$1799",
      pic: "/iphon2sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "Galaxy Buds FE ",
      p2:"Graphite",
      price: "$99.99",
      pic: "/earphon3sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "Apple iPad  64GB",
      p2:" Silver (MK2L3) ",
      price: "$398",
      pic: "/tapsec4.png",
      wirth: 192,
     
    
    },
  ];

  // sec6

  let sec6: any = [
    {
      p1: "Apple iPhone 14  ",
      p2: " Pro 512GB Gold",
      price: "$900",
      pic: "/iphon1sec6.png",
     
     
    
    },
    {
      p1: "AirPods Max ",
      p2:"Silver",
      price: "$2535",
      pic: "/earphon1sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "Apple Watch Series ",
      p2 :"9 GPS 41mm Starlight ",
      price: "$399",
      pic: "/wattch1sec4.png",
      wirth: 192,
     
    
    },
    {
      p1: "Apple iPhone 14   ",
      p2:"Pro 1TB Gold",
      price: "$549",
      pic: "/iphon2sec6.png",
      wirth: 192,
     
    
    }
    
  ];

  return (
    <>
      <Head>
        {/* Font Awesome CSS Link */}
        <title>figma-base-web</title>
      </Head>
      <main className="w-[375px] ">
        <header className="h-[88px] w-[375px] bg-white  flex items-center justify-between px-[16px] font-bold ">
          <h1 className="text-[30px]">cyber</h1>

          {/* Icon with Correct Classes */}
          <div className="text-black text-[30px]">
          <IoMenu />
        </div> 
        </header>

        {/* sec-1 */}
        <section className="w-[375px] h-[769px] px-[16px] pt-[88px] bg-[#211C24] gap-[48px] align-top ">
          {/* banner  div */}

          <div className="h-[344px] w-[343px]  flex flex-col items-center gap-[35px]  ">
            <div className="h-[256px] w-[343px] gap-[16px]  ">
              <p className="text-center text-[#7a777c] font-semibold  text-[25px]">
                Pro.Beyond.
              </p>

              <p className=" text-center font-extralight  w-[343px] text-[72px] text-[#FFFFFF]  tracking-[-1%]  ">
                IPhone 14{" "}
                <span className="mb-[100px] font-bold relative bottom-[30px]">
                  Pro
                </span>
              </p>

              <pre className="text-[17px] h-[48px] w-[343px] text-center text-[#909090] relative bottom-11 font-medium ">
                Created to change everything for the
                <br />
                better. For everyone
              </pre>
            </div>

            <button className="w-[191px] h-[56px] align-middle px-[50px] py-[16px] gap-[8px] rounded-[6px] font-[600] text-white border-solid border-[2px]">
              Shop Now
            </button>
          </div>
          <div className="w-[343px] h-[289px] relative top-[47px]">
            <Image
              alt="this is phon img "
              src="/Iphone Image.png"
              width={500}
              height={500}
            ></Image>
          </div>
          {/* imaged div */}
        </section>

        {/* sec-2 */}

        {/* sec-2 */}
        <section id="sec2" className="h-[1612px] w-[375px] bg-black">
          {sec2.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`h-[376px] w-[375px] flex flex-col justify-center items-center gap-[24px] py-[40px] px-[16px]  ${item.bgcolor}`}
              >
                <Image
                  src={item.pic}
                  alt={`Image of ${item.p1}`}
                  width={item.wirth}
                  height={500}
                  className=" h-[200px]"
                ></Image>

                <div className="w-[343px] h-[72px] gap-y-[8px]">
                  <p
                    className={`text-[34px]  leading-[40px] text-center font-extralight ${item.textcolor}`}
                  >
                    {item.p1} <span className="font-semibold">{item.span}</span>
                  </p>

                  <p className="leading-[24px] text-[16px] font-medium text-[#909090] text-center">
                    {item.descrip}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col  items-center h-[504px] w-[375px] gap-[24px] px-[16px] py-[40px] bg-[#EDEDED] ">
            <Image
              src={"/MacBook Pro 14.png"}
              alt={`Image of com`}
              width={500}
              height={500}
              className=" h-[200px] w-[330.48px] "
            ></Image>
            <div className="w-[343px] h-[72px] gap-y-[8px] mt-[25px]">
              <p className="text-[34px]  leading-[40px] text-center font-extralight ">
                {" "}
                <span className="font-semibold ">Macbook </span> Air
              </p>

              <p className="leading-[24px] mt-[15px] text-[16px] font-medium text-[#909090] text-center">
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <button className="w-[343px] h-[56px] mt-[10px] px-[50px] py-[16px] gap-[8px] rounded-[6px] font-[600] text-black border-solid border-[2px] border-[#3f3434]">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* sec-3 */}
        <section className="relative bg-[#FAFAFA] h-[624px] gap-[48px] py-[64px] px[16px]">
          <div className="absolute left-[16px] t-[64px] h-[32px] w-[343px] text-center flex flex-row justify-between">
            <h1 className="font-medium text-[24px] leading-[32px] tracking-[1%]">
              Browse By Category 
            </h1>
            <h2 className="text-[30px] font-bold"><PiLessThan /> </h2>
            <h2 className="text-[30px] font-bold">  <PiGreaterThan /></h2>

          </div>

          <div className="iconsparentdiv w-[343px] h-[416px] absolute left-[16px] top-[144px] flex flex-wrap gap-[16px] ">

            {sec3.map((icon:any,index:number)=>{
              return(
               <div key={index} className="icondiv rounded-[15px] relative bg-[#EDEDED] w-[163.5px] h-[128px] flex items-center justify-center  gap-y-[8px] px-[52px] py-[24px]">
               <div className="w-[48px] h-[48px] text-[50px] mb-[15px]">{icon.icon}</div>
               <p className="font-medium text-center text-[16px] leading-[24px] absolute  top-[85px]">
                 {icon.p1}
               </p>
             </div>)
            })}
          
          </div>
        </section>

        {/* sec4 */}

        <section className=" sec4 w-[375px] h-[1612px] gap-y-[32px] px-[16px]  py-[56px] bg-[#FFFFFF] relative">
          <div className="topdiv w-[343px] h-[32px] gap-x-[12px] flex justify-evenly  absolute top-[56px] left-[16px]   text-[16px] font-medium ">
            <a href="#">New Arrival</a>
            <a href="#" className="text-[#8B8B8B]">Bestseller</a>
            <a href="#" className="text-[#8B8B8B]">Featured Products</a>
          
          </div>

          <div className="buttomdiv w-[343px]   h-[1456px] absolute  top-[100px] flex flex-wrap ">

            {sec4.map((items:any, index:any)=>{
              return(
                <div key={index} className="abcdiv w-[163.5px]  h-[332px] ml-[5px] pl-[20px] px-[12px] py-[24px] bg-[#f6f6f6] rounded-[9px] ">
                <div className="ml-[100px] h-[28px] text-end text-[20px] gap-x-[8px] mb-[8px]"><CiHeart /></div>
                <Image src={items.pic} alt={"phon"} width={104} height={104} className="w-[104px] h-[104px]"></Image>
                <pre className="leading-[18px] text-center font-semibold text-[14px] mt-[15px]">{items.p1}<br/>
              {items.p2}</pre>
               <h1 className="leading-[24px] tracking-[3%] font-bold text-[24px] text-center mt-[10px]">{items.price}</h1>
    
               <button className="gap-x-[8px] px-[44px] py-[12px] mt-[20px] bg-black text-[10px] text-white rounded-[8px] ">Buy Now</button>

                </div>
              )
            })}
    
          </div>



        </section>
        {/* sec5 */}

        <section className="flex flex-col  items-center h-[700px] w-[375px] gap-y-[48px] px-[32px] py-[56px] bg-[#F9F9F9] ">
       
          <div className="w-[311px] h-[555px] gap-y-[16px] ">
            <Image
              src={"/sec5.png"}
              alt={`Image of com`}
              width={321}
              height={331}
              className=" h-[321px] w-[331px] "
            ></Image>
            <div className="w-[311px] h-[48px] flex flex-col items-center gap-y-[20px] leading-[48px] text-center">
              <p className="text-[49px] mt-[20px] text-center font-light ">Ipad Pro</p>

              <p className="leading-[24px]  text-[14px] font-medium text-[#909090] text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
              </p>
              <button className="w-[191px] h-[56px]  gap-[8px] rounded-[6px] font-[600] text-black border-solid border-[2px] border-[#3f3434]">
                Shop Now
              </button>

              
           
            </div>
            
            </div>
            <h1 className="text-[30px]"><PiDotsThreeOutlineLight /></h1>

        </section>

        {/* sec6 */}
        <section className="h-[896px] w-[375px] flex flex-col gap-y-[32px] px-[16px] py-[56px] bg-[#FFFFFF] ">
          <h1 className="text-start font-medium text-[24px] leading-[32px] text-[#000000] ">
          Discounts up to -50%
          </h1>
<div className="w-[343px] h-[720px] flex  flex-wrap gap-y-[16px] ">

{sec6.map((items:any, index:any)=>{
              return(
                <div key={index} className=" w-[163.5px]  h-[332px] ml-[5px] pl-[20px] px-[12px] py-[24px] bg-[#f6f6f6] rounded-[9px] ">
                <div className="ml-[100px] h-[28px] text-end text-[20px] gap-x-[8px] mb-[8px]"><CiHeart /></div>
                <Image src={items.pic} alt={"phon"} width={104} height={104} className="w-[104px] h-[104px]"></Image>
                <pre className="leading-[18px] text-center font-semibold text-[14px] mt-[15px]">{items.p1}<br/>
              {items.p2}</pre>
               <h1 className="leading-[24px] tracking-[3%] font-bold text-[24px] text-center mt-[10px]">{items.price}</h1>
    
               <button className="gap-x-[8px] px-[44px] py-[12px] mt-[20px] bg-black text-[10px] text-white rounded-[8px] ">Buy Now</button>

                </div>
              )
            })}
</div>
        </section>

      </main>

      
    </>
  );
}

export default Front;
