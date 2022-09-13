import React, { useEffect, useState } from 'react'
import './style.css'
import Navbar from './navbar'
import Bags from './bags.js'
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom'
import Item from 'antd/lib/list/Item'
import { RED } from "../../src/utils/color"
import Loader from './loader';
export default function Women() {
  const [cart, setCart] = useState([])
  const [additembtn, setadditembtn] = useState(false)
  const [newdata, setNewdata] = useState()


  const Navigate = useNavigate()
  let data = [{
    img: "https://www.junaidjamshed.com/media/wysiwyg/3_PC_Unstitched.jpg",
    price: 942.50,
    dis: 590.00,
    paragraph: "WOMEN KURTi ",

  },
  {
    img: "https://www.junaidjamshed.com/media/catalog/product/j/p/jpws-22-3004_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    price: 242.50,
    dis: "PKR2,990.00",
    paragraph: "WOMEN KURTi",

  },
  {
    img: "https://www.junaidjamshed.com/media/catalog/product/j/p/jpws-22-3002_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    price: 990.00,
    dis: 590.00,
    paragraph: "WOMEN KURTi",

  },
  {
    img: "https://www.junaidjamshed.com/media/catalog/product/j/p/jpws-22-3004_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    price: 790.00,
    dis: "PKR2,590.00",
    paragraph: "WOMEN KURTi",
  },
  {
    img: "https://www.junaidjamshed.com/media/wysiwyg/JDS.jpg",
    price: 790.00,
    dis: "PKR2,590.00",
    paragraph: "WOMEN KURTi",

  },
  {
    img: "https://www.junaidjamshed.com/media/catalog/product/2/2/22-3008_6_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    price: 790.00,
    dis: "PKR2,590.00",
    paragraph: "WOMEN KURTi",

  },
  {
    img: "https://www.junaidjamshed.com/media/wysiwyg/Shirt_N_Trouser.jpg",
    price: 790.00,
    dis: "PKR2,590.00",
    paragraph: "WOMEN KURTi",
  },
  {
    img: "https://www.junaidjamshed.com/media/catalog/product/2/2/22-3007_7_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    price: 790.00,
    paragraph: "WOMEN KURTi",
    dis: "PKR2,590.00",
  },]
  const additem = (item) => {
    setadditembtn(true)
    setCart([...cart, { img: item.img, price: item.price, paragraph: item.paragraph }])
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
      <h1 className='section_heading'>Women Collection</h1>
      <div className="data_section">
        {
          data.map((v, i) => {
            return (
              <div className="cards">
                <div className="cards_data">
                  <img className='card_img' src={v?.img} />
                </div>
                <div className="box_text">
                  <p className='paragraph'>{v.paragraph}</p>
                  <b className='price'>{v.price}</b><br />
                  <del className='price'>{v.dis}</del><br /><br />
                </div>
                <br />
                <button className='button_cart' style={{ color: RED }} onClick={() => {
                  if (newdata.includes(v?.img)) {
                  }
                  else {
                    additem(v)
                  }
                }} ><Loader/></button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
