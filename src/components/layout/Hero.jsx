import Image from "next/image";
import React from "react";
// 25 minutes
function Hero() {
  return (
    <section className=" grid grid-cols-2 ">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a pizza 🍕{" "}
        </h1>
        <p>
          Pizza is the missing piece that makes every day complete, a simple yet
          delecious joy in life
        </p>
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
