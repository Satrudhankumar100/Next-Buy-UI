import { useState } from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Cart from './screens/Cart'
import Order from './screens/Order'
import {  Route, Routes } from 'react-router-dom'




function App() {


  return (
    <>

      <Header />
        <Routes>

     
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/cart' element={<Cart/>}/>
          <Route  path='/order' element={<Order/>}/>
          <Route  path='/signup' element={<Signup/>}/>
      {/* <Signup /> */}
        </Routes>
   


    </>
  )
}

export default App
