import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='pt-[60px]'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App
