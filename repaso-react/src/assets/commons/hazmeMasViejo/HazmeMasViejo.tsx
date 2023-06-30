import { useState} from 'react'
import './HazmeMasViejo.css'

const HazmeMasViejo = () => {

    //Funcion
    const EnteroAleatorio = (min:number,max:number) => {
        return Math.floor(Math.random()*(max-min))+min
    }

    //Variables
    const[age,setAge]=useState(20);
    const numAleatorio = EnteroAleatorio(1,5)




const envejecer = () =>{
    if(age<100){
        setAge(age + numAleatorio);
    }else{
        setAge(0);
    }

}


  return (
    <>
        <div>Hazme mas viejo</div>
        <button className='btn-envejecer' onClick={envejecer}>+</button>
        <div> {age} </div>
    </>
  )
}

export default HazmeMasViejo