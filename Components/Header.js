import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className='flex justify-between p-10 mb-20'>

        <div className=''>
          <a href='/'> <img id='logo' className='invert h-12' src='logo.png' alt='not found' /> </a>
        </div>
        <div className='flex items-center gap-12'>
          <a className='hover:scale-110' href="/">Home</a>
          <Link className='hover:scale-110' href='/Projects'>Projects</Link>
          <Link className='hover:scale-110' href='/Experience'>Experience</Link>
          <Link className='hover:scale-110' href='/Contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Header
