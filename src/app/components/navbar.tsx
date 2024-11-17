"use client";
import Link from "next/link";
import react from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-700 h-12 py-2 px-3 text-white flex justify-between place-items-center">
        <div>
          <img src="Imran-removebg-preview.png" alt="logo"
          className=" w-25 h-20" />
          <h1 className="text-2xl font-semibold font-serif">
            <a href="#!" className="hover:text-blue-400"></a>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5 font-semibold">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300">Contact Us </Link></li>
            <li><Link href="/jobs" className="hover:text-blue-300">Jobs</Link></li>
            <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
            <li><Link href="/programming" className="hover:text-blue-300">Programming</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4 font-semibold items-center">
            <li><Link href="#!" className="hover:text-blue-300">Login</Link></li>
            <li><Link href="#!" className="hover:text-blue-300">Sign up</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
