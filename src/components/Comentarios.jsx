// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


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
              <p>Alejandro Perez P.</p>
            </div>
            <p className='user_comment'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est unde delectus odit, quae animi dicta.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/user.svg" className='swiper_img' alt="user_icon" />
              <p>Alejandro Perez P.</p>
            </div>
            <p className='user_comment'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est unde delectus odit, quae animi dicta.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper_content'>
            <div className='user'>
              <img src="/user.svg" className='swiper_img' alt="user_icon" />
              <p>Alejandro Perez P.</p>
            </div>
            <p className='user_comment'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est unde delectus odit, quae animi dicta.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Comentarios