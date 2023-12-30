import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistred)
  
  const dis = useDispatch()
  const handleWishlist = (item) => {
    dis(addToCart(item))
    dis(removeFromWishlist(item.id))
}
  return (
    <div style={{ marginTop: '100px' }}>
      <Row className='ms-5 me-3' style={{ marginTop: '150px' }}>

        {wishlistArray?.length > 0 ?
          wishlistArray?.map((item) => (<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
              <Card.Img variant="top" src={item.image} style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0, 20)}...</p>
                  <p>Price: Rs {item.price}</p>

                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <Button onClick={() => dis(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                  <Button onClick={() => handleWishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
                </div>
              </Card.Body>
            </Card>

          </Col>))

          :
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="" />
            <h3 className='mt-3'>Your WishList is empty</h3>
            <button className='btn btn-success mt-3 mb-4'><Link style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }} to={'/'}>Back to Home</Link></button>
          </div>
        }


      </Row>


    </div>
  )
}

export default WishList