import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {

  const wishlist = useSelector((state)=>state.wishlistred)
  const cartlist = useSelector((state)=>state.cartlistred)
  return (
    <Navbar expand="lg" className="bg-secondary position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
            <h4 className='fw-bold'><i class="fa-solid fa-cart-shopping fa-bounce text-success"></i>{' '}
              <span className='text-success fw-bold'>e-</span>Cart</h4>
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link className='text-success btn border rounded me-5 mt-2' style={{ textDecoration: 'none', fontWeight: 'bold' ,borderColor:'white'}} to={'/cart'}><i class="fa-solid fa-cart-shopping text-success me-2"></i>Cart <Badge bg="secondary">{cartlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link className='text-success btn border rounded me-5 mt-2' style={{ textDecoration: 'none', fontWeight: 'bold' ,borderColor:'white'}} to={'/wishlist'}><i class="fa-solid fa-heart me-2 text-danger" ></i>WishList <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header