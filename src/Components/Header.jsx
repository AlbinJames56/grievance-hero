import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Container className='fixed-top mt-2'>
        <div className='d-flex justify-content-center gap-4'>
          <Link to={'/'} className='text-warning fw-bolder  text-center navLinks' >Home</Link>
          <Link to={'/grievance'} className='text-warning fw-bolder  text-center navLinks' >Grievance</Link>
          <Link to={'/about'} className='text-warning fw-bolder  text-center navLinks'  >About</Link> 
        </div>
      </Container>
    </div>
  )
}

export default Header