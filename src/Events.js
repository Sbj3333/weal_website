import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel  from 'react-bootstrap/Carousel'

import image from './assets/events/1.png'
import image2 from './assets/events/2.png'
import image3 from './assets/events/3.png'
import image4 from './assets/events/4.png'
import image5 from './assets/events/5.png'
import image6 from './assets/events/6.png'
import image7 from './assets/events/7.png'
import image8 from './assets/events/8.png'


const Events = () => {
  return (
    <div className='carouselcontainer'>
        <Carousel>
            <Carousel.Item interval={3000}>
                <img src={image} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image2} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image3} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image4} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image5} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image6} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image7} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image8} alt='whatever' className='carouselimage'/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Events
