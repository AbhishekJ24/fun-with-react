import React from 'react'

const projects = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div id='project-cont' className='flex flex-wrap gap-10 justify-evenly'>
          <div className='bg-slate-300 rounded-2xl h-80 w-80 p-5 overflow-y-auto'>
            <img src='hybridmodel.avif' className='object-cover h-28 w-72 hover:scale-105' />
            <p className='mt-5 text-cyan-950 font-medium'> Hybrid model for accurate prediction of increasing temporal big data in the cloud for mining large collections of co-evolving sequences </p>
            <p className='mt-2 mb-3 text-cyan-700 font-normal'>
              Engaged in collaborative research and development efforts for an ongoing project. Dedicated on designing a hybrid model, integrating improved k-means, Hidden Markov Models, and Baum-Welch algorithm for predictive analysis of temporal big data in cloud-based co-evolving sequence mining.
            </p>
          </div>
          <div className='bg-slate-300 rounded-2xl h-80 w-80 p-5 overflow-y-auto'>
            <img src='llm.jpg' className='object-cover h-28 w-72 hover:scale-105' />
            <p className='mt-5 text-cyan-950 font-medium'> SummaEase: Text and Speech Summarization using BERT </p>
            <p className='mt-2 mb-3 text-cyan-700 font-normal'>
              Currently in the development of an innovative project leveraging BERT and a real-time speech and text summarization LLM model. Applying cutting-edge technologies and using StreamLit to create a robust and user-friendly platform for seamless communication and information synthesis.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default projects
