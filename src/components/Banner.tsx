"use client"
import React from "react"
import Slider from "react-slick"
import { sliderOne, sliderTwo, sliderThree } from "@/assets"
import Image from "next/image"

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <div className="lg:main-h-screen relative">
    <Slider {...settings}>
      <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200">
        <div className="w-full z-0 relative">
          <Image src={sliderOne} alt="sliderone" className="absolute object-cover right-0 lg:-r48 lg-screen" priority/>
        </div>
      </div>
    </Slider>
  </div>
}

export default Banner