import React from 'react'

import Link from 'next/link'
import SearchBar from './ui/SearchBar'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='border-b border-gray-200 drop-shadow-lg sticky top-0 z-50 flex flex-col max-w-full'>
      <SearchBar />
      <div className="mt-4 flex items-center justify-between px-16 font-thin">
        <Link href="/" className="flex items-center justify-center flex-col px-4 py-2 text-black rounded">
          <Image src="/home.png" alt="Home" width={30} height={30} />
          <span className="">Home</span>
        </Link>
        <Link href="/about" className="flex items-center justify-center flex-col px-4 py-2 text-black rounded">
          <Image src="/navhballon.png" alt="Experiences" width={30} height={30} />
          <span className="">Experiences</span>
        </Link>
        <Link href="/contact" className="flex items-center justify-center flex-col px-4 py-2 text-black rounded">
          <Image src="/navbell.png" alt="Services" width={30} height={30} />
          <span className="">Services</span>
        </Link>
      </div>
    </div>
  )
}

export default Nav
