import './UseState.css'
import UseStateCounter from './../../commons/useStateCounter/UseStateCounter'
import HazmeMasViejo from './../../commons/hazmeMasViejo/HazmeMasViejo'
import MimimiTraductor from './../../commons/mimimiTraductor/MimimiTraductor'
import LocalStorage from './../../commons/localStorage/LocalStorage'

const UseState = () => {
  return (
    <>
      
      <div className='box-title'>
        <h2 className="title" >UseState</h2><br/><br/>
      </div>
      
      <div className='container'>
        <div className='row'>
          <h4 className='subtitle'>Contador</h4><br/>
          <UseStateCounter/><br/><br/>
        </div>

        <div className='row'>
          <h4 className='subtitle'>Hazme mas viejo</h4><br/>
          <HazmeMasViejo/><br/><br/>
        </div>

        <div className='row'>
          <h4 className='subtitle'>MIMIMI Traductor</h4><br/>
          <MimimiTraductor/><br/><br/>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <h4 className='subtitle'>Texto en LocalStorage</h4>
          <LocalStorage/><br/><br/>
        </div>
      </div>

    </>
  )
}

export default UseState