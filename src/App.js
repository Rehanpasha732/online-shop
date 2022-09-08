import Shop from './component/shop.js'
import Women from './component/women.js'
import Men from './component/men.js'
import Kids from './component/kids.js'
import Cart from './component/cart.js'
import BasicModal from './component/modal.js'
import {Routes , Route} from "react-router-dom"
import Bags from './component/bags.js'
function App() {
  return (
    <Routes>
<Route path = "/"  element={<Shop/>}/>
<Route path = "/Women"  element={<Women/>}/>
<Route path = "/Men"  element={<Men/>}/>
<Route path = "/kids"  element={<Kids/>}/>
<Route path = "/Bags"  element={<Bags/>}/>
<Route path = "/Modal"  element={<BasicModal/>}/>

<Route path = "/Cart"  element={<Cart/>}/>


    </Routes>
  );
}

export default App;
