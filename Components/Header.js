import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='flex justify-end gap-20 p-8'>
      <Link href='/Home'>Home</Link>
      <Link href='/Projects'>Projects</Link>
      <Link href='/Resume'>Resume</Link>
      <Link href='/Contact'>Contact</Link>
    </div>
    </>
  )
}

export default Header
