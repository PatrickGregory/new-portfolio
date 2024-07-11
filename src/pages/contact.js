import React from 'react'
import { Container } from 'react-bootstrap'
import { Instagram, LinkedIn, Mail, Twitter } from '../components/icon/icon'

export default function Contact() {
  return (
    <div id='contact'>
        <Container>
            <div className='container p-5'>
                <h5 className='text-white mb-4'>Contact</h5>
                <p className='text-secondary'>Let's connect, I'm in need of internships or entry-level gigs. I am excited on what we can achieve together</p>
                <a href='patrickgregoryekene@gmail.com' className='text-secondary d-flex'>
                    <Mail />
                    Email me
                </a>
                <div className='socials'>
                    <a href="https://www.instagram.com/patrick_greg_ekene/" className='text-secondary mx-2'>
                        <Instagram />
                    </a>
                    <a href="https://x.com/kanteeDaDev" className='text-secondary mx-2'>
                        <Twitter />
                    </a>
                    <a href="www.linkedin.com/in/gregory-patrick-66387a284" className='text-secondary mx-2'>
                        <LinkedIn /> 
                    </a>
                </div>
            </div>
        </Container>
    </div>
  )
}
