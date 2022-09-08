import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Modal2  from './modal2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Navbar2() {
    return (
        <>
        <div className="main_Section">
            <div className="navbar">
                <ul>
                    <li><a><Link to="/" >Home</Link></a></li>
                    <li><a><Link to="/Women" >Women</Link></a></li>
                    <li><a><Link to="/Men">Men</Link></a></li>
                    <li><a><Link to="/Kids">Kids</Link></a></li>
                    <li className='icon'><AttachMoneyIcon /></li>
                   <div className='icons'> <li ><Modal2/></li></div>

                 
                </ul>  
               
            </div> 
          
        </div>


  {/* <div className="icons"><BasicModal/></div>  */}

        
        </>
    )
}
