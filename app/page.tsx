'use client'
import React, { useState } from 'react'
import axios from 'axios'


const page = () => {
  const [Images, setImages] = useState([])
  const getImages= async()=>{
   try {
    const resp =  await axios.get("https://picsum.photos/v2/list")
    const data=resp.data;
    setImages(data)
    console.log(Images);
   } 
    catch (error) {
    console.error("Error in image")
   }

  }
  return (
    <>
     <button onClick={getImages} className=' px-5 py-3 mt-5 bg-green-500 text-white font-bold'>Get Images</button>
     <div className='p-10'>

      {Images.map((elem,i)=>{
        return <img 
        key={i} 
        src={elem.download_url}
        width={300}
        height={300}
        className='m-10 rounded inline-block'/>
      })}

     </div>
    </>
  )
}

export default page
