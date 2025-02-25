import { createContext, useState } from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Cart from './screens/Cart'
import Order from './screens/Order'
import {  Navigate, Route, Routes } from 'react-router-dom'
import RazorpayConfig from './components/RazorpayConfig'


export const SerachContext = createContext()


function App() {
  
  const [keywords,setKeyword] = useState('')
  const [flag,setFlag] = useState(false);

  
  return (
    <>
<SerachContext.Provider
  value ={{keywords,setKeyword,flag,setFlag}}
>

      <Header />
        <Routes>

          <Route path='/' element={<Navigate to="/home" />} />
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/cart' element={<Cart/>}/>
          <Route  path='/order' element={<Order/>}/>
          <Route  path='/register' element={<Signup/>}/>
      {/* <Signup /> */}
        </Routes>
</SerachContext.Provider>
   


    </>
  )
}

export default App
