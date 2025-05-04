import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./page/Home"
import StudentNews from "./page/StudentNews"
import './App.css'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/StudentNews" element={<StudentNews/>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
