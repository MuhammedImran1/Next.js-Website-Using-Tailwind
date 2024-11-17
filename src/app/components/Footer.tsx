import react from "react";
import { AiTwotoneMail } from "react-icons/ai";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 px-10 text-gray-800 flex justify-around">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Core Courses</h3>
            <ul className="space-y-2 text-lg">
              <li>Programming Fundamentals</li>
              <li>Web2 Using NextJS</li>
              <li>Earn as You Learn</li>
            </ul>
            <div>
              <h3 className="text-xl font-bold mb-4">Advanced Courses</h3>
              <ul className="space-y-2 text-lg">
                <li>Web 3 and Metaverse</li>
                <li>Cloud-Native Computing</li>
                <li>Artificial Intelligence (AI) and Deep Learning</li>
                <li>Ambient Computing and IoT</li>
                <li>Genomics and Bioinformatics</li>
                <li>Network Programmability and Automation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Social Links</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#">
                  <FaFacebookF className="text-white w-6 h-6 rounded-full bg-blue-800 pt-1.5 pb-1.5 " />
                </Link>
                <Link href="#">
                  <FaTiktok className="text-white w-6 h-6 rounded-full bg-black pt-1.5 pb-1.5" />
                </Link>
            
                <Link href="#">
                  <FaYoutube className="text-white w-6 h-6 rounded-full bg-red-600 pt-1.5 pb-1.5" />
                </Link>
                <Link href="#">
                  <FaTwitter className="text-white w-6 h-6 rounded-full bg-blue-400 pt-1.5 pb-1.5" />
                </Link>
                <Link href="#">
                  <FaInstagram className="text-white w-6 h-6 rounded-full bg-pink-500 pt-1.5 pb-1.5" />
                </Link>
              </div>
              <a href="mailto:anabiyaimran531@gmail.com" className="text-blue-900 underline flex place-items-center gap-3">
              <AiTwotoneMail className="size-5" />anabiyaimran531@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
