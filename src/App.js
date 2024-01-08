import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import HomeSub from './pages/HomeSub'
import HomeAssemblies from './pages/HomeAssemblies'

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/homesub' element={<HomeSub/>}/>
            <Route path='/homeassemblies' element={<HomeAssemblies/>}/>

        </Routes>
    </>
  )
}

export default App