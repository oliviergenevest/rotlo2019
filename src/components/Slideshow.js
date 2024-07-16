import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import {GatsbyImage} from 'gatsby-plugin-image'

// install Swiper components
SwiperCore.use([ EffectFade, Autoplay ])
const Splash = ({slides}) => {
  const slidesSwiper = []
  slides.map((slide, i) =>

    slidesSwiper.push(
      <SwiperSlide key={`slide_${i}`}>
        <GatsbyImage image={slide.gatsbyImageData} alt="" style={{ height: '100%' }} />
      </SwiperSlide>
    )
  )

  return (
    <Swiper
      effect="fade"
     autoplay={{ delay: 4000 }}
      slidesPerView={1}
      loop={1}
     /* style={{ height: '100%' }}*/
    
     
    >
      {slidesSwiper}
    </Swiper>
  )
}

export default Splash
