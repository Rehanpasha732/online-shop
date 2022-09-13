import React, { useState } from 'react';
import Counter from './counter.js'
import Navbar from './navbar.js'
export default function Cart() {
  const getitem = JSON.parse(localStorage.getItem('items'))
//   const [total, setTotal] = useState(0)
//  function sum(){
//      setTotal(200 +200 )

//  }

  return (
    <>
      <Navbar />
      <div className="cart_section" style={{ marginLeft: '100px', marginRight: '100px' }}>
        <div className="cart_heading" ><h1>Cart</h1></div><br /><br /><hr />
        <div className="cart_section_data">
          <div className="cart_text">
          </div>
          <div className="cart_img">
            {
              getitem?.map((v, i) => {
                return (
                  <>
                    <div className="main_cart_section">
                      <div className="cart_data">
                        <h1>{[v.paragraph]}</h1>
                        <b>{[v.price]}</b> 
                    
                        <div className="sizes">
                          <span className='size' style={{ marginTop: '100px' }}>S</span>
                          <span className='size'>M</span>
                          <span className='size'>xs</span>
                        </div>
                        <b >Color</b>
                        <div className="color" >
                          <span className='color_red'>Red</span>
                          <span className='color_green'>Green</span>
                          <span className='color_blue'>Blue</span>
                          <Counter index={i} />
                        </div>
                      </div>
                      <div className="cart_img">
                        <img src={[v.img]} />
                      </div>
           

                    </div>
                    <hr />
                  </>
                )

              })
            } 
          </div>
        </div>
      </div>
    </>
  )
}
