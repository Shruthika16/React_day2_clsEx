import { Apple } from '@mui/icons-material';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Apple/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.apple.com/in/?afid=p238%7Cs8Vs8GkTq-dc_mtid_187079nc38483_pcrid_651442957353_pgrid_112258962467_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-">Home</Nav.Link>
            <Nav.Link href="https://www.apple.com/in/mac/">Mac</Nav.Link>
            <Nav.Link href="https://www.apple.com/in/airpods/">Airpods</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header