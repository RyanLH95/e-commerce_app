"use client"
import React, { useState } from "react"
import Slider from "react-slick"
import { sliderOne, sliderTwo, sliderThree, sliderFour } from "@/assets"
import Image from "next/image"
import { Clock, Smartphone, Map, MailPlus } from "lucide-react";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0)
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    beforeChange:(prev:any, next:any) => {
      setDotActive(next);
    },
    appendDots:(dots:any) =>(
      <div 
          style={{
            position: "absolute",
            top: "55%",
            left: "17%",
            transform: "translate(-50%, 0)",
          }}
        >
          <ul 
            style={{ 
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              }}
        > 
              {dots} 
          </ul>
        </div>
    ),
    customPaging: (i:any) => (
        <div
          style={
            i === dotActive
              ? {
                  width: "50px",
                  height: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  background: "#fff",
                  cursor: "pointer"
              }
            : {
                 width: "50px",
                 height: "6px",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 color: "white",
                 background: "#131921",
                 cursor: "pointer",
            }
          }
        ></div>
    ),
  };
  
  return (
    <div className="lg:main-h-screen relative">
      <Slider {...settings}>
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200">
          <div className="w-full z-0 relative">
            <Image 
              src={sliderOne}
              alt="sliderone" 
              className="absolute object-cover right-0 lg:-r48 lg-screen" 
              priority
            />
          </div>
          <div className="relative top-20 left-20 text-white text-6xl uppercase font-semibold">
            <p>Latest Hottest Footwear</p>
            <p className="relative top-8 left-0 text-white text-2xl uppercase">Browse for our latest popular<br></br>
               streets and sportswear
            </p>
            <button className="relative top-12 left-24 p-2 text-base font-medium text-white bg-designColor rounded-md">Select a Product</button>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-dColor">
          <div className="w-full z-0 relative">
            <Image 
              src={sliderFour}
              alt="sliderfour" 
              className="absolute object-cover left-56 lg:-right-48 lg-screen" 
              priority
            />
          </div>
          <div className="relative top-20 left-20 text-white text-6xl uppercase font-semibold">
            <p>Latest Hottest Footwear</p>
            <p className="relative top-8 left-0 text-white text-2xl uppercase">Browse for our latest popular<br></br>
               streets and sportswear
            </p>
            <button className="relative top-12 left-24 p-2 text-base font-medium text-white bg-designColor rounded-md">Select a Product</button>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 lg:h-screen bg-slate-200">
          <div className="w-full z-0 relative">
            <Image 
              src={sliderThree}
              alt="sliderthree" 
              className="sliderthree absolute right-0 lg:-r48 lg-screen" 
              priority
            />
          </div>
          <div className="relative top-20 left-20 text-white text-6xl uppercase font-semibold">
            <p>Latest Hottest Footwear</p>
            <p className="relative top-8 left-0 text-white text-2xl uppercase">Browse for our latest popular<br></br>
               streets and sportswear
            </p>
            <button className="relative top-12 left-24 p-2 text-base font-medium text-white bg-designColor rounded-md">Select a Product</button>
          </div>
        </div>
      </Slider>
      <div className="h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden
        lg:inline-flex items-center gap-x-12 p-10 shadow-xl">
        <div className="flex items-center gap-5 w-60">
          <Clock className="text-designColor w-8 h-8" />
          <div>
            <p>Saturday - Thursday</p>
            <p className="font-semibold">7:00 - 20:00</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Smartphone className="text-designColor w-8 h-8" />
          <div>
            <p>Customer Care</p>
            <p className="font-semibold">+44 0000 000 000</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Map className="text-designColor w-8 h-8" />
          <div>
            <p>London, England</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <MailPlus className="text-designColor w-8 h-8" />
          <div>
            <p>Get an Invoice</p>
            <p className="font-semibold">Email Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner