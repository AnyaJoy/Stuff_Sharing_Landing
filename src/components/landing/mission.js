import Image from 'next/image';
import house from '../../assets/house.png'
import React from 'react'

function Mission() {
  return (
    <div className="md:px-40 px-10 w-screen md:py-32 py-20 content-center bg-orange-bg text-white text-2xl">
      <div className="md:grid grid-cols-12 gap-10">
        <div className="col-span-7">
          <h1 className="text-5xl mb-10">Why?</h1>
          <p className="mb-8">
            By sharing we help one another get the experiences without having to
            buy things that will pile up in our homes.
          </p>
          <p className="mb-8">
            We are able to make money by simply sharing what we already have.
            From books and cutlery, to goggles and drills.
          </p>
          <p>
            We save our planet by reducing the amount of waste ending up in the
            landfills and the oceans.
          </p>
        </div>
        <div className="col-span-5 md:mt-o mt-10">
          <Image
            src={house}
            alt="logo"
            className="max-h-full w-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission