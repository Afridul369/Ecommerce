import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
 import Home from './componants/pages/Home'
 import Shop from './componants/pages/Shop'
import RootLayout from './componants/RootLayout';
import Error from './componants/Error';
import About from './componants/pages/About';
import Contacts from './componants/pages/Contacts';
import MyAccount from './componants/MyAccount';
import Login from './componants/Login';
import SignUp from './componants/SignUp';
import Cart from './componants/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route>
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/myaccount' element={<MyAccount/>}/>
      <Route path='/journal' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  </Route>

    </> 
  )
);

function App() {
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
