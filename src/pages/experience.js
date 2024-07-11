import React from 'react'
import { Container } from 'react-bootstrap'

export default function Experience() {
  return (
    <Container id='experience' className='mb-5 pb-5 mt-3'>
        <div className='container w-75'>
            <h1 className='ex mt-5 mb-2'>Experience</h1>
            <div>
                <div className='d-flex'>
                    <img className='me-4' id='codsoft' src="./images/CodSoft.png" alt="logo" />
                    <h5 className='text-white mt-2'>Remote intern at CodSoft</h5>
                    <p className='text-secondary ms-auto mt-2'>June 10-Present</p>
                </div>
            </div>
            <p className='ms-5 text-secondary'>As a remote intern at CodSoft, I completed tasks ranked level 1 in other 
                to gain a highly revered certification. I pushed all projects to my git repos in order to contribute to 
                the ever growing open-source
            </p>
        </div>
    </Container>
  )
}
