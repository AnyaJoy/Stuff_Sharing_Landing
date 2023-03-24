"use client"
import Image from 'next/image'
import planet from '../assets/planet.png'
import Navbar from '../components/navbar'
import guitar from '../assets/guitar.png'
import computer from '../assets/computer.png'
import traveler from '../assets/traveler.png'
import hippies from '../assets/hippies.png'
import minimalism from '../assets/minimalism.png'
import coin from '../assets/coin.png'
import house from '../assets/house.png'
import plant from '../assets/plant.png'

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex bg-white text-lg text-black">
      <div>
        <Navbar />
        <div className="px-40 py-14 content-center">
          <div className="grid grid-cols-12 mb-16">
            <div className="col-span-7">
              <div className="text-7xl mb-5">Borrow & Save.</div>
              <div className="text-7xl mb-8">Share & Earn.</div>
              <div className="text-2xl mb-16 text-orange font-fairy-tale">
                Reuse all sorts of things as a part of a global community of
                people advocating for sustainable living and creating a better
                future for our planet and each other!
              </div>
              <p className="mb-5">
                Stay in touch to be the first to use the alpha version!
              </p>
              <div className="grid grid-cols-3 gap-2 w-2/3">
                <input
                  className="col-span-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-500 leading-tight outline outline-1 outline-neutralGrey focus:outline-orange-light focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email"
                ></input>
                <button className="col-span-1 bg-orange-dark hover:bg-orange text-white py-2 px-10 rounded">
                  Join
                </button>
              </div>
              <p className="text-neutralGrey text-xs mt-3">
                By clicking this you agree to receive emails from Stuff Sharing
              </p>
            </div>
            <div className="col-span-5">
              <Image src={planet} alt="logo" className="max-h-full w-auto" />
            </div>
          </div>
        </div>
        <div className="px-40 py-32 content-center bg-orange-bg text-white text-2xl">
          <p className="mb-8">
            <span className="font-bold">Stuff Sharing</span> is an online
            platform for sharing and borrowing things that are essential to have
            on hand, but rarely used in a day to day life.
          </p>
          <p className="mb-8">
            The idea was born among the community of travelers from Israel. We
            would constantly borrow hiking gear, wetsuits, gadgets, bikes and
            many other things, which would not make sense to be bought for a
            one-time or rather rare experience.
          </p>
          <p>
            With <span className="font-bold">Stuff Sharing</span> we make it
            possible to use things without needing to buy them, and also earn by
            sharing our own.
          </p>
        </div>
        <div className="px-40 py-32 content-center bg-white text-2xl">
          <h1 className="text-5xl mb-14">How does it work?</h1>
          <div className="grid grid-cols-12 mb-5">
            <div className="col-span-4">
              <Image
                src={guitar}
                alt="logo"
                className=" max-h-60 w-auto rounded-full"
              />
            </div>
            <div className="col-span-8 my-auto">
              <span className="text-orange text-2xl mr-2">1.</span>
              You want to pick up playing the guitar but not quite sure it is
              your thing.
              <p className="mt-3">
                Your neighbour, on the other, hand owns a guitar, but has not
                had time to practice recently.{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-20 mb-5">
            <div className="col-span-8 my-auto">
              <span className="text-orange text-2xl mr-2">2.</span>
              The neighbour places an ad and sets a fair value he wants to
              receive or decides to share it for free through the platform.
              <p className="mt-3">
                You connect and set a time and place for an exchange.
              </p>
            </div>
            <div className="col-span-4">
              <Image
                src={computer}
                alt="logo"
                className=" max-h-60 w-auto rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 mb-5">
            <div className="col-span-4">
              <Image
                src={coin}
                alt="logo"
                className=" max-h-60 w-auto rounded-full"
              />
            </div>
            <div className="col-span-8 my-auto">
              <span className="text-orange text-2xl mr-2">3.</span>
              As the exchange happens the coins from your account are
              transferred to his.
              <p className="mt-3">
                And once the guitar is returned, you both get bonuses for
                spending on you next sharing journey.
              </p>
            </div>
          </div>
        </div>
        <div className="px-40 py-32 content-center bg-orange-bg text-white text-2xl">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7">
              <h1 className="text-5xl mb-10">Why?</h1>
              <p className="mb-8">
                By sharing we help one another get the experiences without
                having to buy things that will pile up in our homes.
              </p>
              <p className="mb-8">
                We are able to make money by simply sharing what we already
                have. From books and cutlery, to goggles and drills.
              </p>
              <p>
                We save our planet by reducing the amount of waste ending up in
                the landfills and the oceans.
              </p>
            </div>
            <div className="col-span-5">
              <Image
                src={house}
                alt="logo"
                className="max-h-full w-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="px-40 pt-32 pb-10 content-center bg-white text-2xl">
          <h1 className="text-5xl mb-14">Who is it for?</h1>
          <div className="grid grid-cols-9 gap-20 text-center">
            <div className="col-span-3">
              <Image
                src={traveler}
                alt="logo"
                className="max-h-full w-auto rounded-full"
              />
              <div className="mt-12">
                Travelers, immigrants, young people who have not settled down
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src={minimalism}
                alt="logo"
                className="max-h-full w-auto rounded-full"
              />
              <div className="mt-12">
                Minimalists, those who do not like owning too much stuff
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src={hippies}
                alt="logo"
                className="max-h-full w-auto rounded-full"
              />
              <div className="mt-12">
                People who care for nature and living sustainably
              </div>
            </div>
          </div>
          <div className='w-full mx-auto text-center py-16'>
            <button
              onClick={scrollToTop}
              type="button"
              className="col-span-1 bg-orange-bg hover:bg-orange text-white py-2 px-20 rounded-full"
            >
              Join
            </button>
          </div>
        </div>
        <div className="px-40 pt-10 pb-5 content-center bg-neutralGrey ">
          <div className='flex justify-between'>
            <div>
              <div className='flex align-middle'>
                <Image
                  src={plant}
                  alt="logo"
                  className="h-16 w-auto rounded-full"
                />
                <div className='text-orange font-fairy-tale italic ml-1 -mt-0.5 text-2xl tracking-wide xy-auto font-thin'>Stuff Sharing</div>
              </div>
            </div>
            <div className='text-grey text-sm pt-2'>
              Contact: <a className='underline' href="mailto:Stuffsharing.israel@gmail.com?subject=Hi, StuffSharing Staff">stuffsharing.israel@gmail.com</a>
            </div>
          </div>
          <div className='flex justify-between text-xs text-grey mt-5'>
            <div> © All rights reserved: D Foundation LLC. </div>
            <div>
              Logo:<a href="https://www.flaticon.com/free-icons/ecology-and-environment" title="ecology-and-environment icons">Ecology-and-environment icons created by Uniconlabs - Flaticon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
