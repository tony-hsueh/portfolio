import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

const MyNavbar = () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className='navbar'>
      <Container>
        <Link to='/'>
          <div className='logo-wrap'>
            <img src='/logo.png' alt='logo'/>
          </div>
        </Link>
        <Nav className="ms-3 me-auto">
          <NavLink
            to="/"
            className='nav-link'
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolios"
            className={({ isActive, isPending }) =>
              isPending ? "pending nav-link" : isActive ? "custom-active nav-link" : "nav-link"
            }
          >
            作品集
          </NavLink>
        </Nav>
        <Button variant="primary">下載履歷</Button>
      </Container>
    </Navbar>
  )
}

export default MyNavbar