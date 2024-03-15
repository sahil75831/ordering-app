import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center  ">
      <Link href={"/"} className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center ">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Menu</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </nav>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center ">
        <Link href={"/login"} className="">
          Login
        </Link>
        <Link href={"/register"} className="button">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
