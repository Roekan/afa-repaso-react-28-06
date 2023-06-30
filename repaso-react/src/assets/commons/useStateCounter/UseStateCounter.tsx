import './UseStateCounter.css'
import { useState } from 'react'

const UseStateCounter = () => {

const [numero, setNumero] = useState(0);

const sumar = () =>{
    setNumero(numero +1);
}

const restar = () =>{
    setNumero(numero -1);
}

const resetear = () =>{
    setNumero(0);
}

  return (
    <>
        <div className='container-counter'>
          <div className='title-counter'>UseStateCounter</div>
          <button className='btn-counter' onClick={sumar}>+</button>
          <button className='btn-counter' onClick={restar}>-</button>
          <button className='btn-counter' onClick={resetear}>Reset</button>
          <div className='text-counter'> {numero} </div>
        </div>
    </>
  )
}

export default UseStateCounter