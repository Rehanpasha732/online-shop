import Shop from './component/shop.js'
import Women from './component/women.js'
import Men from './component/men.js'
import Kids from './component/kids.js'
import Cart from './component/cart.js'
import BasicModal from './component/modal.js'
import { Routes, Route } from "react-router-dom"
import Bags from './component/bags.js'
import Signup from './component/signup.js'
import Login from './component/login.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/modal" element={<BasicModal />} />


      <Route path="/Cart" element={<Cart />} />


    </Routes>
  );
}

export default App;
