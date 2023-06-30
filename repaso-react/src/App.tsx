import './App.css'
import{Routes,Route} from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Paginanoencontrada from './assets/pages/noEncontrada/NoEncontrada'
import Project from './assets/pages/project/Project'
import Header from './assets/commons/header/Header'
import Footer from './assets/commons/footer/Footer'
import UseEffect from './assets/pages/useEffect/UseEffect'
import UseState from './assets/pages/useState/UseState'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="*" element={<Paginanoencontrada />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/useEffect" element={<UseEffect />}/>
        <Route path="/useState" element={<UseState />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
