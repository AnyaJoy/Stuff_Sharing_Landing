import Image from 'next/image'
import React from 'react'
import plant from '../assets/plant.png'


function Footer() {
  return (
    <div className="md:px-40 px-10 w-screen py-20 pt-10 pb-5 content-center bg-neutralGrey ">
          <div className='flex justify-between'>
            <div>
              <div className='flex align-middle'>
                <Image
                  src={plant}
                  alt="logo"
                  className="h-10 md:h-16 w-auto rounded-full"
                />
                <div className='text-orange font-fairy-tale italic ml-1 -mt-0.5 text-sm md:text-2xl tracking-wide xy-auto font-thin'>Stuff Sharing</div>
              </div>
            </div>
            <div className='text-grey text-xs md:text-sm pt-2'>
              Contact: <a className='underline' href="mailto:Stuffsharing.israel@gmail.com?subject=Hi, StuffSharing Staff">stuffsharing.israel@gmail.com</a>
            </div>
          </div>
          <div className='flex justify-between text-xs text-grey mt-5'>
            <div> © All rights reserved: D Foundation LLC. </div>
          </div>
        </div>
  )
}

export default Footer