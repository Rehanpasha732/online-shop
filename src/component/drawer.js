import React, { useState } from 'react';
import 'antd/dist/antd.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Drawer, Space } from 'antd';
import { Link } from 'react-router-dom';
const Profile = () => {

    let obj = [
        {
            name: localStorage.getItem("name")
        },
        {
            img: JSON.parse(localStorage.getItem("image"))
        },
        ,
        {
            email:(localStorage.getItem("email"))
        }
    ]
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
    };



    const onClose = () => {
        setOpen(false);
    };

    const logout = ()=>{
        localStorage.removeItem("name")
        localStorage.removeItem("email")

    }

    return (
        <>
            <Space className='space'>

                <span className='profile' onClick={showDrawer}>
                    <AccountCircleIcon />
                </span>
            </Space>
            <Drawer
                title="Here your Profile"
                width={400}
                // height={60}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <div > <Link to='/'><LogoutIcon onClick={logout}/></Link></div>
                        <Button onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >

                < div className="profile_data">

                    <span className="img_profile">
                        <img src={obj[1]?.img[0]?.thumbUrl} />
                    </span>
                  
                    <div className="details">
                       <p>Name : {obj[0].name}</p>  
                       {/* <p>Email : {obj[2].email}</p>   */}

                    </div>

                </div>


            </Drawer>
        </>
    );
};

export default Profile;