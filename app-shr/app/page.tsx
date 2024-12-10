"use client"
import React, { useState } from 'react'
import Header from"@/Components/Header"

const page = () => {
  
  const [user,setUser] = useState("Sakshi")
  const [author, setauthor] = useState("second")
   
  return (
   
    <>
    <Header user= {user} Author={author}/>
    
    </>
  )
}

export default page
