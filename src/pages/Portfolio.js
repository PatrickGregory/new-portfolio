import React from 'react'
import {Bootstrap, Arrow} from '../components/icon/icon';
import { Container } from 'react-bootstrap';





export default function Portfolio() {
  return (
    <div id='portfolio'>
      <h3 className='mt-5'>EXPERIENCE WITH</h3>
      <div>
        <div className='mx-auto mt-5 d-flex logos'>
          <img src="./images/html.png" alt="html logo" className='mx-4'/>
          <img src="./images/css.png" alt="css logo" className='mx-4'/>
          <img src="./images/javascript.png" alt="javascript logo" className='mx-4'/>
          <img src="./images/reactjs.png" alt="react logo" className='mx-4'/>
          <Bootstrap />
        </div>
      </div>
      <h1 className='project-heading fw-bolder my-5'>PROJECTS</h1>
        <Container>
          <div className='row justify-content-center'>
            <div className='card col-sm-6 col-md-6 col-lg-3 mx-3 mt-3'>
              <img src="./images/project1.png" className='card-image' alt="project" />
              <a href='https://hotel-booking-self.vercel.app/'>
                <div className='card-body mt-1 d-flex'>
                    <div>
                      <p>click here to visit</p>
                      <h5 className='text-white'>Travel Agency</h5>
                    </div>
                    <div className='ms-auto'>
                      <Arrow />
                    </div>
                </div>
              </a>
            </div>
            <div className='card col-sm-6 col-md-6 col-lg-3 mx-3 mt-3'>
              <img src="./images/project1.png" className='card-image' alt="project" />
              <a href='https://hotel-booking-self.vercel.app/'>
                <div className='card-body mt-1 d-flex'>
                    <div>
                      <p>click here to visit</p>
                      <h5 className='text-white'>Travel Agency</h5>
                    </div>
                    <div className='ms-auto'>
                      <Arrow />
                    </div>
                </div>
              </a>
            </div>
          </div>
            <div className='row justify-content-center'>
              <div className='card col-sm-6 col-md-6 col-lg-3 mx-3 mt-3'>
                <img src="./images/project1.png" className='card-image' alt="project" />
                <a href='https://hotel-booking-self.vercel.app/'>
                  <div className='card-body mt-1 d-flex'>
                    <div>
                      <p>click here to visit</p>
                      <h5 className='text-white'>Travel Agency</h5>
                    </div>
                    <div className='ms-auto'>
                      <Arrow />
                    </div>
                  </div>
                </a>
              </div>
              <div className='card col-sm-6 col-md-6 col-lg-3 mx-3 mt-3'>
                <img src="./images/project1.png" className='card-image' alt="project" />
                <a href='https://hotel-booking-self.vercel.app/'>
                  <div className='card-body mt-1 d-flex'>
                    <div>
                      <p>click here to visit</p>
                      <h5 className='text-white'>Travel Agency</h5>
                    </div>
                    <div className='ms-auto'>
                      <Arrow />
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </Container>
    </div>
  )
}
