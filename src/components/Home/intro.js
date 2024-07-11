import React from 'react'

export default function Intro() {
  return (
    <div className='mt-5 pt-5' id='intro'>
      <div className='gradient mx-auto mt-5'>
        <img src="./images/portfolio.png" alt="my face" className='ms-2 mt-1'/>
      </div>
      <div className='headers-class'>
        <div className='my-3 fw-bolder'>
            <h1 className='kantee'>I'm Kantee</h1>
            <h1 className='text-white'>a front-end developer</h1>
        </div>
        <p className='text-secondary w-50 mx-auto fs-4'>
            I am Patrick Emeka Gregory, you can call me "kanteeDaDev". 
            I am a front-end developer with about a years worth of experience, 
            whilst I'm currently in training for the back-end aspect of the web stack
        </p>
      </div>
        <button type="button" class="btn btn-lg my-3 rounded-pill bg-white"><a href="https://x.com/kanteeDaDev" className='text-black text-decoration-none'>Get In Touch</a></button>
    </div>
  )
}
