import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./menubar.css"
const Menubar = () => {
  return (
    <>
      <div className='menubar d-flex'>
        <div><MenuIcon className='icon1'/>ALL</div>
        <div>MX player</div>
        <div>Sell</div>
        <div>Best Seller</div>
        <div>Mobiles</div>
        <div>Today Special</div>
        <div>Customer Services</div>
        <div>Electronics</div>  
        <div>Amazon Pay</div>
        <div>New Realiases</div>
        <div>Prime</div>
        <div>Home & Kitchen</div>
        <div>Fasion</div>
        <div>Computers</div>
        <div>Books</div>
        <div>Toys & Games</div>
        <div>Sport</div>
        <div>Fitness</div>
        <div>Outdoors</div>
      </div>
    </>
  )
}

export default Menubar
