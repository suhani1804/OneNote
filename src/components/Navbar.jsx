import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { navlinks } from "../data";

export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="flex w-screen flex-col text-slate-700 font-sans bg-slate-400 justify-center items-center">
      <nav className=" w-full h-15 z-50 fixed insert-x-0 top-0 mb-20 flex backdrop-filter backdrop-blur-lg bg-gray-800 bg-opacity-40 justify-center items-center  ml-auto">
        <div className=" w-[80%] sm:px-8 py-3 rounded-lg flex justify-around items-center ">
          <p className=" w-full lg:px-10 mr-auto text-2xl font-bold text-slate-700 sm:text-3xl sm:font-semibold ">
            Notes{" "}
          </p>
          <div className="hidden md:flex items-center justify-center gap-9 flex-1  mr-6 ">
            {navlinks &&
              navlinks.map((n) => (
                <a
                  key={n.id}
                  href={n.link}
                  className=" text-xl font-medium hover:text-slate-500 cursor-pointer duration-100 ease-in-out"
                >
                  {n.name}
                </a>
              ))}
          </div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="block md:hidden cursor-pointer"
          >
            <IoMenu
              className="text-2xl text-slate-900"
              onClick={() => setisActive(!isActive)}
            />
          </motion.div>
          {isActive && (
            <div className=" p-4 w-full bg-[#dec6f7] rounded-lg fixed top-20 flex flex-col items-center justify-center gap-6 ">
              {navlinks &&
                navlinks.map((n) => (
                  <a
                    key={n.id}
                    href={n.link}
                    className=" text-lg text-slate-50 font-medium hover:text-slate-500 cursor-pointer duration-100 ease-in-out"
                    onClick={() => setisActive(false)}
                  >
                    {n.name}
                  </a>
                ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
