"use client";
import Image from "next/image";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <section className=" mx-auto p-8 rounded-xl shadow-sm border-2 border-gray-100 w-fit">
      <h1 className="text-center text-primary text-4xl ">Register </h1>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className=" mx-auto p-8 flex items-center flex-col w-fit "
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button w-full rounded-lg">
          Register
        </button>
        <div className="my-6"> Or Continue With </div>
        <button
          type="submit"
          className="button w-full rounded-lg bg-transparent border-2 border-gray-200 text-gray-600 flex items-center gap-5 justify-center "
        >
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdby_ZE048_VtvktPmb1zRKPsIeBMZmVZpRg&usqp=CAU"
            }
            width={20}
            height={20}
            alt="google"
          />
          Login With Google
        </button>
      </form>
    </section>
  );
};

export default Register;
