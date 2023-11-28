"use client"
import React from 'react'
import { trainers } from '@/helpers'
import Link from 'next/link'
import { Heart } from 'lucide-react'

import { ProductType } from '../../type'

interface Product {
  products?: ProductType[]
}

const Item = ({ products }: Product) => {
  console.log(products)
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 relative top-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
      {trainers.map(product => {
        return (
          <div className="relative bg-white px-6 py-9 group border-[1px] border-zinc-200 hover:border-zinc-500 
        duration-300 hover:scale-105 shadow-xl overflow-hidden rounded-lg">
            <Link
              href={{ pathname: `/${product?.id}`, query: { _id: product?.id } }}
            >
              <div key={product.id}>
                <img
                  src={product.image}
                  alt={`Preview of ${product.title}`}
                  width={500}
                  height={500}
                  className=""
                />
                <div className="py-5 uppercase font-semibold text-center relative top-5">
                  <h3>{product.title}</h3>
                  <p>£{product.price}</p>
                  <button
                    className="hover:text-designColor duration-200 
                      uppercase font-semibold relative top-10 -left-20">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
            <Heart fill="black"
              className="absolute bottom-5 right-4 text-zinc-500 w-5 h-5
               hover:text-black cursor-pointer duration-200"
            />
          </div>
        );
      })}
    </div>
  )
}

export default Item