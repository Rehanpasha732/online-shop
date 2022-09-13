import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import { Spin } from 'antd';
function Loader() {

    const [loading, setLoading] = useState(false)
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    return (
        <>

            {
                !loading
                    ?
                    <div className='laod' onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                        }, 1500)
                    }}>Add To Cart</div> :
                    <>
                        <div className="carted">
                             Carted
                            <Spin indicator={antIcon} />

                        </div>
                    </>

            }

        </>
    )

}
export default Loader;