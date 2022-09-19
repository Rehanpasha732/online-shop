import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Counter from './counter.js'
import Navbar from './navbar.js'
import PDF from './pdf.js'
import './style.css'

export default function Cart() {
  const [show, setShow] = useState('hide')
  const getitem = JSON.parse(localStorage.getItem('items'))
  // const [count, setCount] = useState(1)
  // const [plus, setPlus] = useState()
  // const [price, setPrice] = useState(getitem[0].price)
  // var amount = getitem[0].price
  // console.log(amount)


  // function add() {
  //   setCount(count + 1)
  //   setPlus(price + getitem[0].price)
  //   // setTotal(count + amount)

  // }
  // function sub() {
  //   setCount(count - 1)
  //   // setPlus(plus - amount)
  // }
  const showBtn = () => {
    setShow("show")
  }

  const hideBtn = () => {
    setShow("hide")
  }
  return (
    <>
      <Navbar />
      <div className="cart_section" style={{ marginLeft: '100px', marginRight: '100px' }}>
        <div className="cart_heading" ><h1>Cart</h1></div><br /><br /><hr />
        <div className="cart_section_data">
          <div className="cart_text">
          </div>
          <div className="cart_img">
            {
              getitem?.map((v, i) => {
                return (
                  <>
                    <div className="main_cart_section">
                      <div className="cart_data">
                        <h1>{[v.paragraph]}</h1>
                        <b>{[v.price]}</b>
                        <div className="sizes">
                          <span className='size' style={{ marginTop: '100px' }}>S</span>
                          <span className='size'>M</span>
                          <span className='size'>xs</span>
                        </div>
                        <b >Color</b>
                        <div className="color" >
                          <span className='color_red'>Red</span>
                          <span className='color_green'>Green</span>
                          <span className='color_blue'>Blue</span>
                          <Counter index={i} />

                        </div>
                      </div>
                      <div className="cart_img">
                        <img src={[v.img]} />
                      </div>


                    </div>
                    <hr />
                  </>
                )

              })
            }
            {/* <center>
              {show !== 'show' ? <>
                <button className='pdf_btn' onClick={showBtn}>Show PDF</button>
                <button className='pdf_btn' style={{ display: 'none' }}>Hide</button>

              </>
                :
                <>
                  <button className='pdf_btn' style={{ display: 'none' }}>Show PDF</button>
                  <button className='pdf_btn' onClick={hideBtn}>Hide</button>
                </>
              }
            </center> */}
            {show !== 'show' ?
              <PDFViewer style={{ display: 'none',marginTop:'30px' }}>
                <PDF />
              </PDFViewer> :
              <center> <PDFViewer style={{ height: '300px', width: '300px' }}>
                <PDF />
              </PDFViewer></center>
            }
            <br />
            <br />
            <PDFDownloadLink document={<PDF />} fileName="Bag">
              {({ loading }) => (loading ? <button className='pdf_btn'>Downloding</button> : <center>
                <button className='pdf_btn'>Downlod </button>
              </center>)}
            </PDFDownloadLink>
            <center>
              {show !== 'show' ? <>
                <button className='pdf_btn' onClick={showBtn}>Show PDF</button>
                <button className='pdf_btn' style={{ display: 'none' }}>Hide</button>

              </>
                :
                <>
                  <button className='pdf_btn' style={{ display: 'none' }}>Show PDF</button>
                  <button className='pdf_btn' onClick={hideBtn}>Hide</button>
                </>
              }
            </center>
          </div>
        </div>
      </div>
    </>
  )
}
