import React from 'react'
import ReactDOM from 'react-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../Header.css"
import Amazonlogo from "../images/chattogram-bangladesh-april-24-2023-260nw-2292992631.jpg"
import India from "../images/images.png"
const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <img className='amazonlogo' src={Amazonlogo} alt="Image not Found" />
          <div className='header-loc'>

            <div className='Location-icon'><LocationOnIcon className='headerloc'  style={{
              fontSize:"medium !important",
              paddingTop:"20px" 
            }} /></div>
            <div className='text-data'>
              <div className='address'>Delivering to surat</div>
              <div className='Update'>Update Location</div>
            </div>
          </div>
        </div>
        <div className='header-serch'>
          <div>
            <select className='select'>
              <option>All</option>
              <option>b</option>
              <option>c</option>
              <option>d</option>
            </select>
          </div>
          <div>
            <input type='text' className='inputtag' placeholder='Serch Amazon.in ' />
          </div>
          <div>
            <div className='serch_icon'><SearchIcon className='icon' /></div>
          </div>
        </div>

        <div className='header-right'>
          <div className='language d-flex'>
            <img src={India} alt='INDIA Image' className='flag'  /><span>EN</span><ArrowDropDownIcon className='dropdown' />
          </div>
          <div className='detail'>
            <div className='singin'>Hello, sign in</div>
            <div className='account'>Account & List</div>
          </div>
          <div className='detail'>
            <div className='return'>Return &</div>
            <div className='order'>Orders</div>
          </div>
          <div className='detail'>
            <div className='return'><ShoppingCartIcon className='carticon' />Cart</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

