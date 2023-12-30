import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state)=>state.cartlistred)
  // console.log(cartArray);

  const dis = useDispatch()

  const navigate = useNavigate()

  const[total , setTotal] = useState(0)
//fn to find the sum of price in an array
  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCart =()=>{
    alert('Order Placed Successfully,Thank you')
    dis(emptyCart())
    navigate('/')
  }
  return (
    <div style={{marginTop:'100px'}}>
      {cartArray?.length>0?
      <div className="row w-100 m-5">

        
          
          <div className="col-lg-6 m-5">

          <table  className='table shadow border'>
            <thead>
              <tr >
                <th style={{color:'white'}}>#</th>
                <th style={{color:'white'}}>Product</th>
                <th style={{color:'white'}}>Image</th>
                <th style={{color:'white'}}>Price</th>
                <th style={{color:'white'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item,index)=>(<tr>
                <td style={{color:'white'}}>{index+1}</td>
                <td style={{color:'white'}}>{item.title}</td>
                <td><img style={{width:'100px',height:'100px'}} src={item.image} alt="" /></td>
                <td style={{color:'white'}}>Rs {item.price}</td>
                <td style={{color:'white'}}><Button onClick={()=>dis(removeFromCart(item.id))} variant='outline-danger'><i class="fa-solid fa-trash"></i></Button></td>
              </tr>))
                }
            </tbody>
          </table>

        </div>
        
     

      
      <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
        <div className="border shawdow p-5">
          <h3 className='text-success'>Cart Summary</h3>
          <h4>Total no. of Products: <span className='text-warning'>{cartArray.length}</span></h4>
          <h4>Price: <span className='text-warning'>Rs {total}</span></h4>
          <button onClick={handleCart} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
        </div>

      </div>
      </div>:
      <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="" />
      <h3 className='mt-3'>Your WishList is empty</h3>
      <button className='btn btn-success mt-3 mb-4'><Link style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }} to={'/'}>Back to Home</Link></button>
    </div>
    }

    </div>
  )
}

export default Cart