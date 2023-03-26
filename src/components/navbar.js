import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import plant from '../assets/plant.png'

const infoPages = [{ name: "MISSION", slug: "/mission" }, { name: "BLOG", slug: "/blog" }, { name: "CONTACT", slug: "/contact" } ];
const techPages = [{ name: "SIGN UP", slug: "/signup" }, { name: "LOGIN", slug: "/login" }];

function Navbar() {
  return (
    <div className='w-screen flex justify-between bg-white md:px-40 px-10 py-4 navbar'>
        <div className='flex justify-center'>
            <Link href="/" className='flex justify-center align-middle'>
                <Image src={plant} alt='logo' className='h-8 w-8'/>
                <div className='text-orange font-fairy-tale italic ml-1 -mt-0.5 text-2xl tracking-wide xy-auto font-thin'>Stuff Sharing</div>
            </Link>
            <div className='hidden md:contents lg:flex'>
                {infoPages.map((page, index) => (
                    <Link href={page.slug} key={page.name}>
                        <span className='ml-4 cursor-pointer hover:text-grey transition duration-700 text-sm font-semibold tracking-wider'>
                            {page.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
        <div className='hidden md:contents lg:flex '>
            {techPages.map((page, index) => (
                <Link href={page.slug} key={page.name}>
                    <span className='ml-4 cursor-pointer hover:text-grey transition duration-700 text-sm font-semibold tracking-wider'>
                        {page.name}
                    </span>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar