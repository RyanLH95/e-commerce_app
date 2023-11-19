"use client"
import React from 'react'
import { trainers } from '@/helpers'
import Link from 'next/link'

const Item = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 relative top-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
  {trainers.map(product => {
    return (
      <div className="relative bg-white p-3 group border-[1px] border-zinc-200 hover:border-zinc-500 
        duration-300 hover:shadow:xl overflow-hidden rounded-lg">
        <Link href={'/'}>
          <div key={ product.id }>
            <img
              src={ product.image } 
              alt={`Preview of ${product.title}`} 
              width={500}
              height={500}
              className="" />
            <div className="py-5 uppercase font-semibold text-center">
              <h3>{ product.title }</h3>
              <p>£{ product.price }</p>
              <button className="hover:text-designColor duration-200 uppercase font-semibold relative top-5">
                Add to Cart
              </button>
            </div>  
          </div>
        </Link>
      </div>
    );
  })}
</div>
  )
}

export default Item