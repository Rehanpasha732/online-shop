import React from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'
import Navbar from './navbar.js'
export default function Bags() {
  const location = useLocation()
  console.log(location.state)
  return (
    <>
      <Navbar />
      {/* <br /><br /><br /><br /><br /><br /><br /> */}
      <div className="section">
        <div className="main_bags_section">
          <div className="small_img">
            <div><img className="bags_img" src={location.state.img} /></div>
            <div><img className="bags_img" src={location.state.img} /></div>
            <div><img className="bags_img" src={location.state.img} /></div>

          </div>
          <div className="Large">
            <img className="bags_img_full" src={location.state.img} />
          </div>
        </div>
        <div className="bags_text">
          <h1 >{location.state.para}</h1>
          {/* <h1>Women SPECIAL KURTA</h1> */}
          <div className="bags_size">
            <h1 style={{ marginTop: '30px', marginBottom: '30px' }}>Size</h1>
            <span className='bags_sizes_data'>XS</span>
            <span className='bags_sizes_data'>S</span>
            <span className='bags_sizes_data'>M</span>
            <span className='bags_sizes_data'>L</span>
          </div>
          <div className="bags_size">
            <h1 style={{ marginTop: '30px', marginBottom: '30px' }}>Color</h1>
            <span className='bags_sizes_data_red'>Red</span>
            <span className='bags_sizes_data_green'>green</span>
            <span className='bags_sizes_data_blue'>blue</span>
          </div>
        </div>

        {/* <Link><button></button></Link> */}

      </div>
    </>
  )
}
