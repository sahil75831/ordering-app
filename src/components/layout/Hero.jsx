import Image from "next/image";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

function Hero() {
  return (
    <section className="py-8 grid grid-cols-2  ">
      <div className=" py-16 ">
        <h1 className="text-6xl font-light ">
          Everything is better with a
          <span className="text-primary"> pizza 🍕</span>
        </h1>
        <p className=" my-10 text-2xl text-gray-500 font tracking-wide ">
          Pizza is the missing piece that makes every day complete, a simple yet
          delecious joy in life
        </p>
        <div className="flex gap-4 items-center">
          <button className="text-sm bg-primary uppercase text-white px-6 py-2 rounded-full flex gap-2  items-center tracking-wide ">
            Order Now
            <span className="text-white text-2xl">
              <CiCircleChevRight />
            </span>
          </button>
          <button className="text-gray-500 font-semibold flex items-center gap-2">
            Learn More
            <span className="text-gray text-2xl">
              <CiCircleChevRight />
            </span>
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={
            "https://github.com/dejwid/food-ordering/blob/master/public/pizza.png?raw=true"
          }
          layout="fill"
          objectFit={"contain"}
          alt="pizza"
        />
      </div>
    </section>
  );
}

export default Hero;
