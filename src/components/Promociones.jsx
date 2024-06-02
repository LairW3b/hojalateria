import { useState } from 'react'
import Modal from './Modal'

const Promociones = () => {

  const [modal, setModal] = useState(false)

  const Toggle = () => setModal(!modal)

  return (
    <section className='promociones_section'>
      <div className="titulos-promo">
        <h1
          className='title_service'
        >
          Hojalatería y Pintura
        </h1>
      </div>

      <div className='card-promo'>
        <div className='card-promo-content'>
          <h2>+ Pintura de Facias</h2>
          <p className='promo-precio'>Dos por $1500.00</p>
          <p>conoce más:</p>
          <p className='promo-flecha'>
            &#8595;
          </p>
        </div>

        <button
          className='btn btn-modal'
          onClick={() => Toggle()}
        >
          <span>
            <img
              src="/descuento.png"
              alt="icono descuento"
              className='icon-descuento'
            />
          </span>
          <div className='info-btn'>
            <h2> Nuestras promociones </h2>
          </div>
          <span>
            <img
              src="/descuento.png"
              alt="icono descuento"
              className='icon-descuento'
            />
          </span>
        </button>

        {/* Modal */}
        {<Modal
          modal={modal}
          close={Toggle}
        />}

      </div>
      <hr className='hr_promos' />
    </section >
  )
}

export default Promociones