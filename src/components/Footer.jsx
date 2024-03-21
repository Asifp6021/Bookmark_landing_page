import { useState } from "react";

import { navLinksAre } from "../Data";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

export default function Footer() {
  const [linksAre, setLinksAre] = useState(navLinksAre);

  return (
    <div className="limit">
      <div className="pad md:py-14cle flex w-full flex-col justify-center gap-28 bg-very-dark-blue py-28 md:flex-row md:justify-between">
        <div className="flex w-full flex-col justify-center gap-28 md:flex-row md:justify-start">
          <div className="flex items-center justify-center gap-4 pr-4">
            <FaBookmark
              className="cursor-pointer rounded-[50%] bg-soft-blue px-2 py-4 text-white"
              size={30}
            />

            <h2 className="cursor-pointer text-4xl font-medium uppercase text-gray-200 transition hover:text-soft-red sm:text-5xl md:text-3xl">
              BookMark
            </h2>
          </div>
          <ul className="flex flex-col items-center justify-center gap-20 md:flex-row">
            {linksAre.map((link) => (
              <li
                key={link.link}
                className="w-full text-4xl uppercase text-gray-200 md:text-2xl"
              >
                <a
                  href={link.href}
                  className="flex items-center justify-center hover:text-soft-red"
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full justify-center gap-16 ">
          <FaFacebookF
            size={30}
            className=" cursor-pointer bg-gray-200 py-2 pl-4 text-black hover:bg-soft-red"
          />
          <FaTwitter
            size={30}
            className="cursor-pointer text-gray-200 hover:text-soft-red"
          />
        </div>
      </div>
    </div>
  );
}
