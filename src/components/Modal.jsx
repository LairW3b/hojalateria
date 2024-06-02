import React from 'react'

const Modal = ({ modal, close }) => {

  return (
    <>
      {
        modal ? (
          <div className='modal-container' onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <header className='modal-header'>
                <h2>Nuestas Promociones</h2>
                <button
                  className='modal-btn-close'
                  onClick={() => close()}
                >
                  X
                </button>
              </header>
              <hr />
              <main className='modal-main'>

                <section>
                  <h2>Pintado de Facias</h2>
                  <p>
                    Pintamos las dos <strong>facias</strong>:  <span>$1500.00</span>
                  </p>
                  <hr />
                </section>
                <section>
                  <h2>Restauración de Faros</h2>
                  <p>
                    Deja tus <strong>faros</strong> como nuevos: <span>$300.00</span>
                  </p>
                  <hr />
                </section>
                <section>
                  <h2>Renovación parte superior</h2>
                  <p>
                    Pintura de cajuela, <strong>toldo</strong> y cofre: <span>$3000.00</span>
                  </p>
                  <hr />
                </section>
                <section>
                  <h2>Costado completo</h2>
                  <p>
                    Pintura de costado <strong>puerta</strong> o puertas y salpicadera: <span>$2800.00</span>
                  </p>
                  <hr />
                </section>
                <div className='btn-modal'>
                  <a href='tel:2224586636'>
                    Llamar
                    <p>2224586636</p>
                  </a>
                </div>

              </main>
            </div>
          </div>
        ) : null
      }

    </>
  )
}

export default Modal
