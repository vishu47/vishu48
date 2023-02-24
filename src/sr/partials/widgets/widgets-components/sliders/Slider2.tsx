import React, {useRef, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {useNavigate} from 'react-router-dom'
import {HomepageSliderImage, KTSVG} from 'sr/helpers'
import {ChevronArrow} from 'sr/helpers/constants/IconConstants'

export default function Slider2() {
  const navigate = useNavigate()
  const ref: any = useRef(null)
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  const onPrevClick = () => {
    ref.current.prev()
  }
  const onNextClick = () => {
    ref.current.next()
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <>
      {/* <div className='banner-view slider-button-view'>
        <div className='slider-prev-btn-style' onClick={onPrevClick}>
          <KTSVG path={ChevronArrow} />
        </div>
        <div className='slider-next-btn-style' onClick={onNextClick}>
          <KTSVG path={ChevronArrow} />
        </div>
      </div> */}

      <div className=''>
        <Carousel
          ref={ref}
          activeIndex={index}
          onSelect={handleSelect}
          id='sampleSlide'
          indicators={true}
          controls={false}
        >
          <Carousel.Item interval={1000}>
            <img className='d-block w-100' src={HomepageSliderImage} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className='d-block w-100 h-100' src={HomepageSliderImage} alt='Second slide' />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
