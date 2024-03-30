"use client"
import React from 'react';

const page = () => {
  return (
    <>
      <div className='flex justify-center'>

        <div id='introduction' className='text-justify'>
          <div className='font-semibold text-3xl m'>
            <span>
              Hey, I'm
            </span>
          </div>
          <div className=''>
            <span id='name'>
              Abhishek Joshi
            </span>
          </div>
          <div className='text-xl' id='about'>
            <p>Currently in my pre-final year of my bachelor's degree. Always eager to deepen my technical
              knowledge and skills. Honed proficiency in Java, Python and MERN stack while embracing problem-solving
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
      </div>
      <div className='h-20'>
      </div>
      <div className='m-2 flex justify-center gap-8 items-center'>
        <img className='h-24 rounded-lg' src='java.svg' />
        <img className='h-24 rounded-lg' src='python.svg' />
        <img className='h-16 rounded-lg' src='sklearn.svg' />
        <img className='h-20 rounded-lg' src='pytorch.svg' />
      </div>
      <div className='m-4 flex justify-center gap-8 items-center mb-32'>
        <img className='h-20 rounded-lg' src='javascript.svg' />
        <img className='h-14 rounded-lg' src='tailwind.svg' />
        <img className='h-20 rounded-lg' src='react.svg' />
        <img className='h-20 rounded-lg invert' src='next.svg' />
      </div>
    </>
  )
}

export default page
