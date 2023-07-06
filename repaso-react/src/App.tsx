import './App.css'
import{Routes,Route} from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Paginanoencontrada from './assets/pages/noEncontrada/NoEncontrada'
import {Header} from './assets/commons/header/Header'
import Footer from './assets/commons/footer/Footer'
import UseState from './assets/pages/useState/UseState'
import {Login} from './assets/pages/login/Login'
import { LlamadaAPI } from './assets/pages/llamadaAPI/LlamadaAPI'
import {Detail} from './assets/pages/detail/Detail'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="*" element={<Paginanoencontrada />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/llamadaAPI" element={<LlamadaAPI/>}/>
        <Route path="/useState" element={<UseState />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
