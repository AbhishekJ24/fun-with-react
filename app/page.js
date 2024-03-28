"use client"
import React from 'react';

const page = () => {
  return (
    <>
      <div className=''>
        <div className=''>
          <span>
            Hi! Myself,
          </span>
        </div>
        <div className='flex justify-center'>
          <span id='name'>
            Abhishek Joshi
          </span>
        </div>
        <div className='' id='about'>
          <p>Currently in my pre-final year of my bachelor's degree. Always eager to deepen my technical
            knowledge and skills. Honed proficiency in Java, C++ and Python while embracing problem-solving
            abilities vital to computer science.
          </p>
          <p>
            I've completed projects spanning complex algorithms and web development, reinforcing the value
            of efficient, scalable code. Active involvement in coding competitions which has fueled my
            passion for innovation and collaboration.
          </p>
          <p>
            I'm eager to secure internships to gain practical experience and work toward my goal of becoming
            a skilled software developer.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src='/fun-with-react/Components/java.svg' />
        </div>
      </div>
    </>
  )
}

export default page
