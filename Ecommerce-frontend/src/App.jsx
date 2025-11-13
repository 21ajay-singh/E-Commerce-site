import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Home/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ShopPage from './Home/ShopPage.jsx'
import OffersPage from './Home/OfferPage.jsx'
import LoginPage from './Home/LoginPage.jsx'
import SignupPage from './Home/SignUpPage.jsx'
import AboutPage from './Home/About Us.jsx'
import ContactPage from './Home/ContactPage.jsx'
import CartPage from './Home/CartPage.jsx'
import AddProduct from './Home/AddProduct.jsx'

function App() {
  const [count, setCount] = useState(0)
  const inputRef=useRef(null);
  const focusRef=() =>{
      if(inputRef.current){
          inputRef.current.focus();
      }
  }

  
 
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/' element={<Homepage  inputRef={inputRef} focusRef={focusRef}/>}/>
      <Route path='/shop' element={<ShopPage   inputRef={inputRef} focusRef={focusRef}/>}/>
      <Route path='/offers' element={<OffersPage  inputRef={inputRef} focusRef={focusRef}/>}/>
      <Route path='/about' element={<AboutPage   inputRef={inputRef} focusRef={focusRef}/>}/>
      <Route path='/contact' element={<ContactPage   inputRef={inputRef} focusRef={focusRef}/>}/>
      <Route path='/cart' element={<CartPage  inputRef={inputRef} focusRef={focusRef}/>}/>
       <Route path='/addProduct' element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
