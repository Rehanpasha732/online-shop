import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './style.css'
import { Link } from 'react-router-dom';


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
    // const location=useLocation()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [count, setCount] = useState(1)
    function add() {
        setCount(count + 1)
    }
    function sub() {
        setCount(count - 1)

    }
    const getitem = JSON.parse(localStorage.getItem('items'))
    console.log(getitem)

    return (
        <div>
            <Button style={{ width: '10px', marginLeft: '90%', margintop: '-30px', backgroundColor: 'white' }} onClick={handleOpen}><span className='icons'><LocalGroceryStoreIcon style={{ color: 'balck', width: '40px', marginTop: '-0px' }} /></span></Button>
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
                                        <img style={{ width: '60px', marginLeft: '50px' }} src={[v.img]} />
                                        <div className="counter">
                                            <span className='amount'>{count}</span><br />
                                            <AddCircleIcon onClick={add} className="btn" />
                                            <RemoveCircleIcon onClick={sub} className="btn" />
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
                                            </div>
                                        </div><br />
                                    </>
                                )

                            })
                        }
                        <Link to='/cart'> <button>View Bag</button></Link>
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
