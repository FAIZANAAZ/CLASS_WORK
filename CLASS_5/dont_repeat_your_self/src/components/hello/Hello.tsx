import React from 'react'
import Image from 'next/image'

function Hello() {

  let mapping =[
    {
      text :"(1) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, possimus",
      pic: "/ai-generated-8916956_1280.jpg",
      
    },

    {
      text:" (2) THIS IS WORK WHERE WE USE MAP AND LOOP FOR SHORT CODE😎 SMART WORK ",

      pic: "/1 drass.jpg",
    },
    {
      text:"(3) THIS IS WORK WHERE WE USE MAP AND LOOP FOR SHORT CODE😎 SMART WORK ",
      pic: "/2 drass.jpg",
    },
    {
      text:"(4) THIS IS WORK WHERE WE USE MAP AND LOOP FOR SHORT CODE😎 SMART WORK ",
      pic: "/3 drass.jpg",
    },
    {
      text:"(5) THIS IS WORK WHERE WE USE MAP AND LOOP FOR SHORT CODE😎 SMART WORK ",
      pic: "/react1.jpg",
    }
   

  ]


  return (
    <>


    {mapping.map((item, index) => (
        <div className='ml-[20px] h-[300px] w-[200px] bg-red-500 hover:h-[310px]   shadow-xl shadow-amber-300 p-[5px]'>
    <Image width={200} height={200} alt='watch' src={item.pic} className='h-[130px]  '></Image>
      <h1 key={index} className='text-white font-bold mt-[20px] ml-[10px]' >{item.text}</h1> </div>  
    ))}
 

   
    
    </>
  )
}

export default Hello
