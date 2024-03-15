import React from "react";
import { FaCartPlus } from "react-icons/fa";
function MenuItem() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col transition-all items-center hover:bg-red-50 hover:shadow-xl">
      <img
        src="https://github.com/dejwid/food-ordering/blob/master/public/pizza.png?raw=true"
        alt="pizza"
        width={200}
        height={200}
      />
      <h1 className="text-primary text-2xl py-2">Pepperoni Pizza</h1>
      <p className="text-black text-lg px-4 py-2 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
        dolor sit amet consectetur
      </p>
      <button className="button flex gap-4 items-center hover:bg-green-00 transition-all">
        <FaCartPlus />
        <span> | </span>
        <span>$ 12</span>
      </button>
    </div>
  );
}

export default MenuItem;
