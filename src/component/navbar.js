import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import BasicModal from './modal.js';
import Profile from './drawer.js';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
export default function Navbar() {
    return (
        <>
            <div classNameName="main_Section">
                <div  classNameName="navbar">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <li> <a><Link to="/Shop" style={{ color: 'black' }}>Home</Link></a></li>
                                    </li>
                                    <li className="nav-item">
                                        <li><a><Link to="/Women" style={{ color: 'black' }} >Women</Link></a></li>

                                    </li>
                                    <li className="nav-item">
                                        <li><a><Link to="/Men" style={{ color: 'black' }}>Men</Link></a></li>

                                    </li>
                                    <li className="nav-item">
                                        <li><a><Link to="/Kids" style={{ color: 'black' }}>Kids</Link></a></li>

                                    </li>
                                    <li className="nav-item">
                                        <Profile />
                                    </li>
                                    <div className="shop_icon">
                                        <BasicModal style={{ color: 'black'}} />
                                    </div>
                                </ul>

                            </div>

                        </div>
                    </nav>

                </div>

            </div>


            {/* <div classNameName="icons"><BasicModal/></div>  */}


        </>
    )
}


// <li><a><Link to="/Shop" >Home</Link></a></li>
//                         <li><a><Link to="/Women" >Women</Link></a></li>
//                         <li><a><Link to="/Men">Men</Link></a></li>
//                         <li><a><Link to="/Kids">Kids</Link></a></li>
//                            <span className='profile'><Profile/> </span>
//                          <div className='icons'> <li ><BasicModal /></li> 