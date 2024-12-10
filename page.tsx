"use client"
import React, { useState } from 'react'

const page = () => {
   const [marks, setMarks] = useState(70)
   
  return (
   
    <>
    <div className='text-blue-800 font-bold text-3xl'>My marks were {marks}
    </div>
    <button onClick={()=>{setMarks(90)}}
    className='bg-green-500 px-5 py-2 rounded-2xl m-5 font-bold'>Update</button>
    </>
  )
}

export default page
