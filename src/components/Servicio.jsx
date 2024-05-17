
const Servicio = ({ prestaciones }) => {

  const { id, service, description, img, textAlt } = prestaciones

  return (
    <section className='section_service'>
      <h2
        className="title_service"
      >
        {service}
      </h2>

      <div className="content_service">
        <p>
          {description}
        </p>

        <img
          src={`/${img}.webp`}
          alt={textAlt}
          className="service_img"
        /> 

        <div className="contacto_service">
          <a
            href="tel:22222222"
            className='btn'
          >
            Contáctanos
          </a>
        </div>
      </div>

    </section>
  )
}

export default Servicio
