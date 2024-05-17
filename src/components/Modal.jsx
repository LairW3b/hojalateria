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
                  <h2>Facias</h2>
                  <hr />
                  <p>
                    Pintamos tus <strong>FACIAS</strong> por tan solo <span>$5000</span>
                  </p>
                </section>
                <section>
                  <h2>Restauración de Faros</h2>
                  <hr />
                  <p>
                    Deja tus <strong>faros</strong> como nuevos  por tan solo <span>$5000</span>
                  </p>
                </section>
                <section>
                  <h2>Renovación parte superior</h2>
                  <hr />
                  <p>
                    Pintura de cajuela, <strong>toldo</strong> y cofre por tan solo <span>$5000</span>
                  </p>
                </section>
                <section>
                  <h2>Costado completo</h2>
                  <hr />
                  <p>
                    Reparación puertas y salpicadera
                    por <span>$5000</span>
                  </p>
                </section>
                {/* <ul>
                  <li>Facias</li>
                  <li>Restauración de faros</li>
                  <li>Pintado de cajuela, toldo y cofer</li>
                  <li>Facia salpicadera y cofre</li>
                  <li>Costado completo</li>
                </ul> */}

                <div className='btn-modal'>
                  <a href='tel:222222222'>
                    Llamar
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
