import Image from 'next/image';
import React from 'react'
import coin from '../../assets/coin.png'
import guitar from '../../assets/guitar.png'
import computer from '../../assets/computer.png'

function Instruction() {
  return (
    <div className="md:px-40 px-10 w-screen md:py-32 py-20 content-center bg-white text-2xl">
      <h1 className="text-5xl mb-14 md:text-left text-center">How does it work?</h1>
      <div className="md:grid grid-cols-12 mb-5 gap-10">
        <div className="col-span-4 lg:col-span-3 hidden md:flex">
          <Image
            src={guitar}
            alt="logo"
            className="h-56 w-auto rounded-full"
          />
        </div>
        <div className="col-span-8 lg:col-span-9 my-auto">
          <span className="text-orange text-2xl">1. </span>
          You want to pick up playing the guitar but not quite sure it is your
          thing.
          <p className="mt-3">
            Your neighbor, on the other, hand owns a guitar, but has not had
            time to practice recently.{" "}
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-12 gap-10 mb-5">
        <div className="col-span-8 lg:col-span-9 my-auto">
          <span className="text-orange text-2xl">2. </span>
          The neighbor places an ad and sets a fair value he wants to receive
          or decides to share it for free through the platform.
          <p className="mt-3">
            You connect and set a time and place for an exchange.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-3 hidden md:flex">
          <Image
            src={computer}
            alt="logo"
            className="h-56 w-auto rounded-full"
          />
        </div>
      </div>
      <div className="md:grid grid-cols-12 mb-5 gap-10">
        <div className="col-span-4 lg:col-span-3 hidden md:flex">
          <Image
            src={coin}
            alt="logo"
            className="h-56 w-auto rounded-full"
          />
        </div>
        <div className="col-span-8 lg:col-span-9 my-auto">
          <span className="text-orange text-2xl">3. </span>
          As the exchange happens the coins from your account are transferred to
          his.
          <p className="mt-3">
            And once the guitar is returned, you both get bonuses for spending
            on you next sharing journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instruction