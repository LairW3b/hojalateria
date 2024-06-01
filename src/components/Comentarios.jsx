// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


const Comentarios = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/woman-user.svg" className='swiper_img' alt="user_icon" />
              <p> Monica Galindo.</p>
            </div>
            <p className='user_comment'>
              Decidí probar este servicio de restauración de faros y no podría estar más satisfecho.  Además, el precio fue muy razonable comparado con el costo de reemplazar los faros. ¡Definitivamente lo recomendaría a cualquiera!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/user.svg" className='swiper_img' alt="user_icon" />
              <p>Alejandro Perez.</p>
            </div>
            <p className='user_comment'>
              ¡Servicio excelente! Llevé mi coche para pintar las facias y el resultado fue fantástico.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/woman-user.svg" className='swiper_img' alt="user_icon" />
              <p>Paty Flores.</p>
            </div>
            <p className='user_comment'>
              El acabado es impecable y se nota la atención al detalle. El personal fue muy amable y profesional. Además, el precio fue muy competitivo.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/user.svg" className='swiper_img' alt="user_icon" />
              <p>Jesus Navarrete.</p>
            </div>
            <p className='user_comment'>
              El equipo fue muy profesional y el proceso fue rápido. Ahora mis faros lucen como nuevos y la diferencia en la visibilidad nocturna es impresionante.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/woman-user.svg" className='swiper_img' alt="user_icon" />
              <p> Maria Jose Zarate.</p>
            </div>
            <p className='user_comment'>
              Las facias tenían algunos rasguños y desgaste por el uso diario, pero ahora parecen completamente nuevas. ¡Super recomendable!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/user.svg" className='swiper_img' alt="user_icon" />
              <p>Carlos Martinez.</p>
            </div>
            <p className='user_comment'>
              ¡Impresionante servicio de baño de pintura!. Decidí darle un cambio de imagen con un baño de pintura y no podría estar más contento con el resultado. El equipo fue muy atento y cumplió con los plazos prometidos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/woman-user.svg" className='swiper_img' alt="user_icon" />
              <p>Irma Carreón.</p>
            </div>
            <p className='user_comment'>
              ¡Buen servicio de pulido y encerado! Mi coche parecía opaco y con algunos rasguños, pero después del tratamiento luce como nuevo. El equipo hizo un buen trabajo y en el tiempo estipulado. Además, el precio fue muy razonable. ¡Altamente recomendado!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Comentarios