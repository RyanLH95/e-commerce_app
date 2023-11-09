import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {

  const navigation =[
    {_id:910, title: "Home", href: "/",},
    {_id:911, title: "Trainers", href: "/trainers",},
    {_id:912, title: "T-shirts", href: "/t-shirts",},
    {_id:913, title: "Sweatshirts", href: "/sweatshirts",},
    {_id:914, title: "Accessories", href: "/accessories",},
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
              <Link href={item?.href}>
                <li>{item?.title}</li>
              </Link>
            ))
          }
        </ul>
        {/* icons */}
        <p>Icons</p>
      </div>
    </div>
  );
};

export default Navbar;
