import './App.css'
import Home from './componants/pages/Home'
import Shop from './componants/pages/Shop'
import RootLayout from './componants/RootLayout';
import Error from './componants/Error';
import About from './componants/pages/About';
import Contacts from './componants/pages/Contacts';
import MyAccount from './componants/MyAccount';
import ProductCart from './componants/ProductDetails';
import Login from './componants/Login';
import SignUp from './componants/SignUp';
import Checkout from './componants/Checkout';
import Cart from './componants/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/productcart' element={<ProductCart/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
