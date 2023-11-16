import React from 'react'
import Container from './Container'
import Link from 'next/link'
import {Footprints, Shirt, Watch } from "lucide-react"

const Products = () => {
  return (
    <div className="mt-10">
      <Container>
        <div className="py-10 flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a Category</h2>
          <p className="text-lg text-center">
            Take a gander out latest design.
          </p>
        </div>
        <div className="text-zinc-500 flex justify-center gap-2 md:gap-6 
        mt-5">
          <Link 
            href={"/trainers"} 
            className="flex gap-2 hover:text-black cursor-pointer
            duration-200"
          >
            <Footprints />
            <p>Trainers</p>
          </Link>
          <div className="h-7 w-[1px] bg-designColor inline-flex" />
          <Link 
            href={"/trainers"} 
            className="flex gap-2 hover:text-black cursor-pointer
            duration-200"
          >
            <Shirt />
            <p>T-Shirts</p>
          </Link>
          <div className="h-7 w-[1px] bg-designColor inline-flex" />
          <Link 
            href={"/sweatshirts"} 
            className="flex gap-2 hover:text-black cursor-pointer
            duration-200"
          >
            <Shirt />
            <p>Sweatshirts</p>
          </Link>
          <div className="h-7 w-[1px] bg-designColor inline-flex" />
          <Link 
            href={"/accessories"} 
            className="flex gap-2 hover:text-black cursor-pointer
            duration-200"
          >
            <Watch />
            <p>Accessories</p>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Products