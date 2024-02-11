import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {


  return (
    <div>

          <div className="bg-slate-900">

                <NavBar></NavBar>

          </div>

          <Routes>

              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>

          </Routes>

    </div>
  )
}

export default App