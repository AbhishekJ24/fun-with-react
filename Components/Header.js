import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className='flex justify-between'>

        <div className='flex gap-20 p-8'>
          <a href='/'> <img src='./logo.png' alt='not found' /> </a>
        </div>
        <div className='flex justify-end gap-20 p-8'>
          <a className='hover:scale-110' href="/">Home</a>
          <Link className='hover:scale-110' href='/Projects'>Projects</Link>
          <Link className='hover:scale-110' href='/Resume'>Resume</Link>
          <Link className='hover:scale-110' href='/Contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Header
