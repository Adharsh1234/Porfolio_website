"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import myImage from "F:/React Js/react-porfolio/public/programer_adharsh.jpg";
import camera from "F:/React Js/react-porfolio/public/camera.jpg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 md:px-10 lg:px40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between ">
            <h1 className="text-lg dark:text-white">Adharsh Ani George</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-10 text-teal-600 font-medium md:text-6xl">
              Adharsh Ani George
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Freelancer
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w- mx-auto dark:text-white">
              Provide the best web experience with the lastest technologies
              found so far.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto w-80 h-80 mt-2 md:h-96 md:w-96">
            <Image src={myImage} alt="" className="rounded-full" />
          </div>
        </section>
        {/* Section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white mt-7">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet. Ut repellendus
              <span className="text-teal-500"> tempora</span> aut impedit quae
              ea enim tempora. Ex beatae enim et
              <span className="text-teal-500"> repellat</span> facilis id fugit
              vero et inventore minima id amet sunt.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={camera} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Designs
              </h3>
              <p className="py-2">
                Creating elegent and designs suited for your needs and design
                theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tool that I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Vscode</p>
              <p className="text-gray-800 py-1">ReactJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={camera} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Designs
              </h3>
              <p className="py-2">
                Creating elegent and designs suited for your needs and design
                theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tool that I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Vscode</p>
              <p className="text-gray-800 py-1">ReactJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={camera} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Designs
              </h3>
              <p className="py-2">
                Creating elegent and designs suited for your needs and design
                theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tool that I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Vscode</p>
              <p className="text-gray-800 py-1">ReactJs</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
