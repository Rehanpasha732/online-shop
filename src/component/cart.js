 import React, { useState } from 'react';
 import Navbar from './navbar.js'
 import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
 import AddCircleIcon from '@mui/icons-material/AddCircle';
 import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

 export default function Cart() {
   const [count, setCount] = useState(1)
    const [plus, setPlus] = useState(50)
    const getitem = JSON.parse(localStorage.getItem('items'))
    function add() {
      setCount(count + 1)
      setPlus(plus + 50)
    }
    function sub() {
      setCount(count - 1)
      setPlus(plus - 50)

    }
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
                         <h1>R. Dressing </h1>
                         <b>$50.00</b>
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
                         </div>
                       </div>

                       <span className="cart_btn" onClick={add}>+</span>
                       <br />
                       <br />
                       <br />
                       <br />
                       <div>{count}</div>
                       <br />
                       <br />
                       <br />
                       <br />
                       <span className="cart_btn" onClick={sub}>-</span>
                       <div className="cart_img">
                         <img src={[v.img]} />
                          
                       </div>

                     </div>


                     <hr />
                    </>
                 )

               })
             } 
                           { <h3>Total : ${plus}</h3> }

           </div>

         </div>
       </div>
     </>
   )
 }
