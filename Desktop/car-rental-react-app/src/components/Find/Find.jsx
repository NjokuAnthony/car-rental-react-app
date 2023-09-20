import React from 'react';
import Styles from './Find.module.css';
import Card from './Card';

import {Pagination, Navigation, Scrollbar, Ally} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

const Find = () => {
  return (
    <div className={Styles.find}>
        <div className={Styles.heading}>
            <h1>Find your drive</h1>
            <div className={Styles.text}>
                <p>
                    <span>Explore the World's of Largest Car sharing</span>
                </p>
            </div>
        </div>
        <div className={Styles.slider}>
        <Swiper
        // modules={[Navigation, Pagination, Scrollbar, Ally]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        340: {
            width: 200,
            slidesPerView: 1,
        },

        768: {
            width: 768,
            slidesPerView: 4,
        },

        1040: {
            width: 1040,
            slidesPerView: 5,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        <SwiperSlide>
            <Card image='https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600'
            make='Jeep' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1620547316190-289b3899e010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZ2UlMjByb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            make='Range Rover' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1589536672709-a5d34b12466d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            make='Audi' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=600'
            make='BMW' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvbGxzJTIwcm95Y2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            make='Rolls Royce' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1609904403133-c858367c09af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            make='Honda' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.pexels.com/photos/16033913/pexels-photo-16033913/free-photo-of-4x4-ford-car-on-roadside.jpeg?auto=compress&cs=tinysrgb&w=600'
            make='Ford' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1632441730372-d8509de481d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZlcnJhcml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            make='Fafarri' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600'
            make='Lamboghini' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2hlJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            make='Porshe' />
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.pexels.com/photos/17507672/pexels-photo-17507672/free-photo-of-white-toyota-86-parked-in-a-residential-courtyard.jpeg?auto=compress&cs=tinysrgb&w=600'
            make='Toyota' />
        </SwiperSlide>
    </Swiper>
        </div>
    </div>
  )
}

export default Find