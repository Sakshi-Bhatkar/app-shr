import React from 'react'
import Link from 'next/link'
const Header = () => {
    
  return (
    <div className= 'h-16 px-5 bg-blue-300 flex items-center justify-between'>
      <h2>Logo</h2>
      <Link href="/About">About</Link>
      <Link href="/Product">Product</Link>
      <Link href="/Course">Course</Link>
    </div>
  )
}

export default Header
