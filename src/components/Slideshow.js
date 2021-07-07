import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Img from 'gatsby-image'

// install Swiper components
SwiperCore.use([ EffectFade, Autoplay ])
const Splash = ({slides}) => {
  const slidesSwiper = []
  slides.edges.map((slide, i) =>

    slidesSwiper.push(
      <SwiperSlide key={`slide_${i}`}>
        <Img fluid={slide.node.childImageSharp.fluid} style={{ height: '100%' }} />
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
