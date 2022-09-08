import { width } from '@mui/system'
import React from 'react'
import Navbar from './navbar.js'
import './style.css'
export default function Shop() {

  let data = [{
    img: "https://www.junaidjamshed.com/media/wysiwyg/ms3.jpg",
    height:'600px',
    width:'500px'
  },
  {
    img: "https://www.junaidjamshed.com/media/wysiwyg/TB1.jpg",
  },
   {
    img: "https://www.junaidjamshed.com/media/wysiwyg/ms4.jpg",
  },
  {
    img: "https://www.junaidjamshed.com/media/wysiwyg/KB.jpg",
  },{
    h1:"NEW COLLECTION",
    h3:"DRESS BRIGHT AND LIVELY",
    heading:"WITH R. COLLECTION"

  }]



  return (
    <>
      <Navbar />  
      <div className="new_arrivals">
          <h1>NEW ARRIVALS</h1><br />
          <h1>Men Women & kids</h1>
        </div>
      <div className="main_home_section">
      
  {
    data.map((v, i) => {
      return (
        <>
          <div className="box">
            <img className='box_img_1' src={v.img} height={v?.height} width={v?.width} />
            <h1 className='colleaction_heading'>{v.h1}</h1>
            <h3 className='side_heading'>{v.h3}</h3>
            <h1 className='R.'>{v.heading}</h1>
          </div>

        </>
      )
    })
  }
 
      </div>
    </>
  )
}

