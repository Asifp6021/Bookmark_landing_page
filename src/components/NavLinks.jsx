import { useState } from "react";
import { FaBookmark } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import { navLinksAre } from "../Data";

export default function NavLinks({ onShowNav, showNav }) {
  const [linksAre, SetLinkAre] = useState(navLinksAre);
  return (
    <div
      className={`pad fixed left-0 top-0 z-10 h-screen w-screen bg-very-dark-blue/95 transition md:static md:h-auto md:w-full md:basis-3/4 md:bg-transparent md:px-0 md:py-0 md:transition-none ${!showNav ? "translate-x-[-200rem]" : ""} md:translate-x-0`}
    >
      <div className="flex h-full flex-col gap-16 py-16 md:flex-row md:justify-end md:py-0">
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-4">
            <FaBookmark
              className="cursor-pointer rounded-[50%] bg-white px-2 py-4"
              size={30}
            />

            <h2 className="cursor-pointer text-4xl font-medium uppercase text-gray-200">
              BookMark
            </h2>
          </div>
          <p
            className="mt-[-0.8px] cursor-pointer pr-8 text-4xl font-bold text-gray-200"
            onClick={onShowNav}
          >
            X
          </p>
        </div>

        <ul className="mt-8 flex w-full flex-col items-center md:mt-0 md:w-3/4 md:flex-row md:justify-end md:gap-36 lg:gap-40 xl:gap-44">
          {linksAre.map((link) => (
            <li
              key={link.link}
              className="w-full border-t-2 border-stone-100/20 py-12 text-4xl uppercase text-gray-200 md:w-0 md:py-0 md:text-xl md:text-very-dark-blue md:hover:text-soft-red"
            >
              <a href={link.href} className="flex items-center justify-center">
                {link.link}
              </a>
            </li>
          ))}

          <li className="w-full cursor-pointer rounded-lg border-t-2 border-stone-100/20 py-10 text-4xl font-medium uppercase text-gray-200 md:w-0 md:border md:border-transparent md:bg-soft-red md:px-12 md:py-2 md:text-xl md:text-gray-200 md:hover:border-soft-red md:hover:bg-white md:hover:text-soft-red lg:px-16">
            <a className="flex items-center justify-center border-2 border-gray-100 py-6 md:border-none md:py-0">
              Login
            </a>
          </li>
        </ul>

        <div className="flex h-full items-end justify-center gap-16 md:hidden">
          <FaFacebookF
            size={30}
            className="-pr-16 cursor-pointer bg-gray-200 py-2 pl-4 text-black"
          />
          <FaTwitter size={30} className="cursor-pointer text-gray-200" />
        </div>
      </div>
    </div>
  );
}
