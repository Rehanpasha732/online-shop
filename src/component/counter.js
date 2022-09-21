import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
export default function Counter(props) {
    const [count, setCount] = useState(1)
    const item = JSON.parse(localStorage.getItem("items"))
    var amount = item[props.index].price
    const [plus, setPlus] = useState(amount)
    const [total, setTotal] = useState(0)
    function add() {
        setCount(count + 1)
        setPlus(amount + plus)

    }
    function sub() {
        setCount(count - 1)
        setPlus(plus - amount)
    }


    return (
        <>
            <div className="counter">
                {
                    count === 9 ?
                        <AddCircleIcon style={{ opacity: '0.4' }} />
                        : <AddCircleIcon onClick={add} />
                }
                <span className='count'>{count}</span>
                {
                    count === 1 ?
                        <RemoveCircleIcon style={{ opacity: '0.4' }} />
                        : <RemoveCircleIcon onClick={sub} />
                }

            </div>
            {<h3>Total : ${plus}</h3>}


        </>

    )

}
