import { useState } from 'react'


const MimimiTraductor = () => {

    const[letras, setLetras] = useState('');
    const[letraSeleccionada, setLetraSeleccionada] = useState('i');


    const cambiarLetras =(frase:string) =>{
        const letter = letraSeleccionada;
        let arrayFrase = frase.split('')
        arrayFrase = arrayFrase.map(element => {
            const vocales = ['a','e','i','o','u','']
            if(vocales.includes( element.toLowerCase())){
                element=letter;
            }
            return element
        });
        setLetras(arrayFrase.join(''))
    }


    return (
        <>
            <div>Letra</div>
            <input className='input-name' onChange={(e)=>setLetraSeleccionada(e.target.value)} type="text" /><br/><br/>
            
            <div>Frase</div>
            <input className='input-name' onChange= {(e) => cambiarLetras(e.target.value)} type="text" /><br/><br/>
            
            <div>Traduccion</div><br/>
            <div>{letras}</div>
        </>
    )
}

export default MimimiTraductor