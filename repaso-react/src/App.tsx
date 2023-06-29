import './App.css'
import{Routes,Route} from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Paginanoencontrada from './assets/pages/noEncontrada/NoEncontrada'
import Project from './assets/pages/project/Project'
import Header from './assets/commons/header/Header'
import Footer from './assets/commons/Footer/Footer'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="*" element={<Paginanoencontrada />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
