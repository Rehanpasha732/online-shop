import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import "./style.css"
import Navbar from './navbar.js'
import { Link, useNavigate } from 'react-router-dom'
export default function Kids() {
    const [cart, setCart] = useState([])
    const [additembtn, setadditembtn] = useState(false)
    const [newdata, setNewdata] = useState()


    const Navigate = useNavigate()
    let data = [{
        img: "https://www.junaidjamshed.com/media/catalog/product/3/5/35974_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "KAMEEZ SHALWAR  ",
        price: "PKR1,942.50",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/catalog/product/4/1/41176.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "KAMEEZ SHALWAR ",
        price: "PKR2,242.50",
        dis: "PKR2,990.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/catalog/product/3/5/35964.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "KAMEEZ SHALWAR",
        price: "PKR2,990.00",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/catalog/product/4/5/45024.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        paragraph: "KAMEEZ SHALWAR",
        price: "PKR2,790.00",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/wysiwyg/KG.jpg",
        paragraph: "WAISTCOAT",
        price: "$50.00",
        dis: "PKR2,590.00"
    },
    {
        img: "https://www.junaidjamshed.com/media/wysiwyg/KB_1.jpg",
        paragraph: "WEDDING",
        price: "PKR1,867.50",
        dis: "PKR2,490.00"
    },]
    const additem = (item) => {
        setadditembtn(true)
        setCart([...cart, { img: item.img, price: item.price, paragraph: item.paragraph }])
        swal("ADD ITEM!");
    }
    useEffect(() => {
        setadditembtn(false)
        localStorage.setItem('items', JSON.stringify(cart))
        const oldData = JSON.parse(localStorage.getItem("items"))
        const newarray = []
        oldData.map((data, index) => {
            newarray.push(data.img)
        })
        setNewdata(newarray)
    }, [additembtn === true])
    const myitem = (index) => {

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
            <h1 className='section_heading'>Kids Collection</h1>
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
                                    <button className='button' onClick={() => { myitem(i) }}>View DISCRIPTION</button>
                                    <br />
                                    <button className='button_cart' onClick={() => {
                                        if (newdata.includes(v?.img)) {
                                            swal("Already Add")
                                        }
                                        else {
                                            additem(v)
                                        }
                                    }} >ADD TO CART</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
