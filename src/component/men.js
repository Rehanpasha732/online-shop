import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import './style.css'
import Navbar from './navbar.js'
import { Link, useNavigate } from 'react-router-dom'


export default function Men() {
    const [cart, setCart] = useState([])
    const [additembtn, setadditembtn] = useState(false)

    const Navigate = useNavigate()

    let data = [{
        img: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-42301_4_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "DARK GREEN SPECIAL KURTA ",
        price: "PKR1,942.50",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/catalog/product/4/2/42294-1_3_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "BLACK BLENDED KURTA",
        price: "PKR2,242.50",
        dis: "PKR2,990.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/catalog/product/4/0/40333-1_3_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "LIME GREEN KURTA",
        price: "PKR2,990.00",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-42306_4_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "OFF WHITE SPECIAL KURTA",
        price: "PKR2,790.00",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/wysiwyg/prince_coat.jpg",
        paragraph: "OFF WHITE SPECIAL KURTA",
        price: "PKR2,790.00",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/wysiwyg/footwear_20.jpg",
        paragraph: "OFF WHITE SPECIAL KURTA",
        price: "PKR2,790.00",
        dis: "PKR2,590.00"
    },]

    // const additem = (item) => {
    //     setCart([...cart, { img: item.img }])


    //     swal("ADD ITEM!");

    //     localStorage.setItem('items', JSON.stringify(item))
    //   }
    const additem = (item) => {
        setadditembtn(true)
        setCart([...cart, { img: item.img }])
        swal("ADD ITEM!");

    }
    useEffect(() => {
        setadditembtn(false)
        localStorage.setItem('items', JSON.stringify(cart))
        localStorage.getItem("item")


    }, [additembtn === true])
    const myitem = (index) => {
        // console.log(index)
        // console.log(data[index])

        Navigate('/Bags',
            {
                state: {
                    img: data[index].img,
                    price: data[index].price,
                    descp: data[index].dis,
                    para: data[index].paragraph
                }
            })

    }
    return (
        <>
            <Navbar />
            <h1 className='section_heading'>Men Collection</h1>

            <div className="data_section">
                {
                    data.map((v, i) => {
                        return (
                            <div className="cards">
                                <img className='card_img' src={v.img} />
                                <div className="box_text">
                                    <p className='paragraph'>{v.paragraph}</p>
                                    <b className='price'>{v.price}</b><br />
                                    <del className='price'>{v.dis}</del>
                                    <br />
                                    <br />
                                    <button className='button' onClick={() => { myitem(i) }}>View DISCRIPTION</button><br />
                                    <button className='button_cart' onClick={() => { additem(v) }} >ADD CART</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
