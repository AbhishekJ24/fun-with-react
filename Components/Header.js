import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='flex justify-end gap-16'>
      <Link href='/Projects'>Projects</Link>
      <Link href='/Resume'>Resume</Link>
      <Link href='/Contact'>Contact</Link>
    </div>
    </>
  )
}

export default Header
