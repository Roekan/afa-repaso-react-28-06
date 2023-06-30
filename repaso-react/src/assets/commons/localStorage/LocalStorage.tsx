import { useEffect } from 'react'
import './LocalStorage.css'


const LocalStorage = () => {



useEffect(()=>{

// setFrase(JSON.parse(sessionStorage.getItem("playersInfo")))
const datosSesion:string | null = JSON.parse(sessionStorage.getItem("playersInfo"));
document.getElementById('input-text').value='Hola ' + datosSesion ;

},[])


const guardarDatos = () => {
    const variable:string = document.getElementById('input-text').value;
    sessionStorage.setItem("playersInfo", JSON.stringify(variable));
}



  return (
    <div className='container-local-storage'>
            <input id='input-text' className='input-name-local-storage' type="text" /><br/>
            <button className='btn-local-storage' onClick={guardarDatos}>Guardar</button>
            <div></div>
    </div>

  )
}

export default LocalStorage