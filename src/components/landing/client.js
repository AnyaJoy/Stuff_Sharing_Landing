"use client"
import Image from 'next/image';
import React from 'react'
import traveler from '../../assets/traveler.png'
import hippies from '../../assets/hippies.png'
import minimalism from '../../assets/minimalism.png'

function Client() {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="md:px-40 px-10 w-screen md:py-32 pt-14 md:mb-10 content-center bg-white text-2xl">
      <h1 className="text-5xl mb-16 md:mb-14 md:text-left text-center">Who is it for?</h1>
      <div className="md:grid grid-cols-9 gap-20 text-center">
        <div className="col-span-3">
          <Image
            src={traveler}
            alt="logo"
            className="w-9/12 sm:w-1/2 md:max-h-full md:w-auto rounded-full mx-auto md:mx-0"
          />
          <div className="mt-12">
            Travelers, immigrants, young people who have not settled down
          </div>
        </div>
        <div className="col-span-3 md:mt-0 mt-20">
          <Image
            src={minimalism}
            alt="logo"
            className="w-9/12 sm:w-1/2 md:max-h-full md:w-auto rounded-full mx-auto md:mx-0"
          />
          <div className="mt-12">
            Minimalists, those who do not like owning too much stuff
          </div>
        </div>
        <div className="col-span-3 md:mt-0 mt-20">
          <Image
            src={hippies}
            alt="logo"
            className="w-9/12 sm:w-1/2 md:max-h-full md:w-auto rounded-full mx-auto md:mx-0"
          />
          <div className="mt-12">
            People who care for nature and living sustainably
          </div>
        </div>
      </div>
      <div className="w-full mx-auto text-center py-16">
        <button
          onClick={scrollToTop}
          type="button"
          className="col-span-1 bg-orange-bg hover:bg-orange text-white py-2 px-20 rounded-full"
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default Client