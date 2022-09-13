import React, { useState } from 'react';
import Counter from './counter.js'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';

import './style.css'
import { Link } from 'react-router-dom';
import { BLACK } from "../../src/utils/color"

const style = {
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 200,

    bgcolor: 'background.paper',
    border: '2px solid #888',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getitem = JSON.parse(localStorage.getItem('items'))
    console.log('getitem===>', getitem)
    return (
        <div>
            <Button className="badge" style={{ width: '10px', marginLeft: '90%', margintop: '-30px', backgroundColor: 'white' }} onClick={handleOpen}><span className='icons'>
                <Badge badgeContent={getitem.length} max="9" color="primary">
                </Badge>
                <LocalGroceryStoreIcon style={{ color: BLACK, width: '40px', marginTop: '-0px' }} /></span>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box style={{ overflow: 'scroll', height: '300px' }} className="modal_box" sx={style}>
                    <div className="modal_text">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <b className='prize'> My BAG</b> <br />
                        </Typography>
                    </div>
                    <Typography>
                        {
                            getitem?.map((v, i) => {
                                return (
                                    <>
                                        <h4 className='paragraph_modal'>{[v.paragraph]}</h4>
                                        <img className='img_modal' src={[v.img]} />
                                        <p className='price_text'>{[v.price]}</p>
                                        <div className="counter">
                                            <center>
                                            <b >Size</b>
                                            <div className="sizes">
                                                <span className='size'>S</span>
                                                <span className='size'>M</span>
                                                <span className='size'>xs</span>
                                            </div>
                                            <b >Color</b>
                                            <div className="color" >
                                                <span className='color_red'>Red</span>
                                                <span className='color_green'>Green</span>
                                                <span className='color_blue'>Blue</span>
                                            </div></center>
                                        </div>  <br />
                                      
                                    </>
                                )
                            })
                        }
                        {
                            getitem?.length === 0 ?
                                <h3 style={{ margin: "20px" }}>Your Bag is Empty</h3>
                                :
                                <Link to='/cart'> <button style={{ marginTop: "30px" }}>View Bag</button></Link>
                        }

                    </Typography>
                    <br />
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
