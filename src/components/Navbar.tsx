// this must be used to otherwise error will occur
"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Heart, ShoppingBagIcon } from "lucide-react"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    console.log(pathname)
  const navigation =[
    { _id:910, title: "Home", href: "/" },
    { _id:911, title: "Trainers", href: "/trainers" },
    { _id:912, title: "T-shirts", href: "/t-shirts" },
    { _id:913, title: "Sweatshirts", href: "/sweatshirts" },
    { _id:914, title: "Accessories", href: "/accessories" },
  ];
  return (
    <div
      className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white">
      <div className="max-w-screen-x1 mx-auto flex h-full items-center px-20 justify-between scroll-px-4 x1:px-0">
        {/* Logo & */}
        <Logo />
        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-5 text-sm uppercase font-semibold">
          {
            navigation.map((item) => (
              <Link href={item?.href} key={item._id}>
                <li className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${item.href === pathname && "text-designColor"}`}
                >
                  {item?.title}
                  <span className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${item.href === pathname && "translate-x-0 bg-designColor"}`}/>
                  </li>
              </Link>
            ))
          }
        </ul>
        {/* icons */}
        <div className="flex gap-5">
          <Link href={'/wishlist'} className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <Heart className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white" >0</span>
          </Link>
          <Link href={'/wishlist'} className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <ShoppingBagIcon className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white" >0</span>
          </Link>
          <button className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold"
            >
              Login
              <span className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500`}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
