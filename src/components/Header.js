import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rbvy2BNtpvdpJ496j9kJ9MgqNHoyO2dEWA&usqp=CAU"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        &nbsp;
        Find me Restaurant
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header