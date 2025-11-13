'use client'

import React from 'react'
import Nav from '@/components/Nav'
import Link from 'next/link'
import Cards from '@/components/ui/Cards'

const page = () => {
  return (
  <div className='p-2 h-screen overflow-x-hidden text-black bg-white'>
    <header>
      <Nav />
    </header>
    <main className='mt-8 max-w-full overflow-y-auto overflow-x-hidden'>
      <div className="flex flex-col space-y-4">
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <h2 className='font-bold text-black text-xl px-4'>Section Title</h2>
          <div className="flex flex-row p-4 border-b space-x-2 border-gray-200 overflow-x-auto">
            {[...Array(10)].map((_, index) => (
              <Cards key={index} 
              CardImage={{
              src: "/room4.png",
              width: 300,
              height: 300,
              alt: `Card Image ${index + 1}`
            }}
            CardData={{
            title: `Card Title ${index + 1}`,
            description: `Description for card ${index + 1}`,
            price: { amount: 100 + index * 10, currency: "USD" },
            duration: 2 + index,
            rating: 4 + (index % 5)
          }} />
          ))}
        </div>
      </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <h2 className='font-bold text-black text-xl px-4'>Section Title</h2>
          <div className="flex flex-row p-4 border-b space-x-2 border-gray-200 overflow-x-auto">
            {[...Array(10)].map((_, index) => (
              <Cards key={index} 
              CardImage={{
              src: "/room4.png",
              width: 300,
              height: 300,
              alt: `Card Image ${index + 1}`
            }}
            CardData={{
            title: `Card Title ${index + 1}`,
            description: `Description for card ${index + 1}`,
            price: { amount: 100 + index * 10, currency: "USD" },
            duration: 2 + index,
            rating: 4 + (index % 5)
          }} />
          ))}
        </div>
      </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <h2 className='font-bold text-black text-xl px-4'>Section Title</h2>
          <div className="flex flex-row p-4 border-b space-x-2 border-gray-200 overflow-x-auto">
            {[...Array(10)].map((_, index) => (
              <Cards key={index} 
              CardImage={{
              src: "/room4.png",
              width: 300,
              height: 300,
              alt: `Card Image ${index + 1}`
            }}
            CardData={{
            title: `Card Title ${index + 1}`,
            description: `Description for card ${index + 1}`,
            price: { amount: 100 + index * 10, currency: "USD" },
            duration: 2 + index,
            rating: 4 + (index % 5)
          }} />
          ))}
        </div>
      </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <h2 className='font-bold text-black text-xl px-4'>Section Title</h2>
          <div className="flex flex-row p-4 border-b space-x-2 border-gray-200 overflow-x-auto">
            {[...Array(10)].map((_, index) => (
              <Cards key={index} 
              CardImage={{
              src: "/room4.png",
              width: 300,
              height: 300,
              alt: `Card Image ${index + 1}`
            }}
            CardData={{
            title: `Card Title ${index + 1}`,
            description: `Description for card ${index + 1}`,
            price: { amount: 100 + index * 10, currency: "USD" },
            duration: 2 + index,
            rating: 4 + (index % 5)
          }} />
          ))}
        </div>
      </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <h2 className='font-bold text-black text-xl px-4'>Section Title</h2>
          <div className="flex flex-row p-4 border-b space-x-2 border-gray-200 overflow-x-auto">
            {[...Array(10)].map((_, index) => (
              <Cards key={index} 
              CardImage={{
              src: "/room4.png",
              width: 300,
              height: 300,
              alt: `Card Image ${index + 1}`
            }}
            CardData={{
            title: `Card Title ${index + 1}`,
            description: `Description for card ${index + 1}`,
            price: { amount: 100 + index * 10, currency: "USD" },
            duration: 2 + index,
            rating: 4 + (index % 5)
          }} />
          ))}
        </div>
      </section>
    </div>
  </main>
  <footer className='mt-8'>
    <div className="grid grid-cols-2 py-4">
      <p>Footer Content 1</p>
    </div>
    <div className="grid grid-cols-2 py-4 border-b border-gray-200">
      <nav className='py-3 space-y-4'>
        <h2 className='font-semibold'>Support</h2>
        <ul className='space-y-4'>
          <li><Link href="#" className='text-black font-normal'>Help Center</Link></li>
          <li><Link href="#" className='text-black font-normal'>Get help with a safety issue</Link></li>
          <li><Link href="#" className='text-black font-normal'>AirCover</Link></li>
          <li><Link href="#" className='text-black font-normal'>Disability support</Link></li>
          <li><Link href="#" className='text-black font-normal'>Cancellation options</Link></li>
          <li><Link href="#" className='text-black font-normal'>Our COVID-19 Response</Link></li>
          <li><Link href="#" className='text-black font-normal'>Report a neighborhood concern</Link></li>
        </ul>
      </nav>
    </div>
    <div className="grid grid-cols-2 py-4 border-b border-gray-200">
      <nav className='py-3 space-y-4'>
        <h2 className='font-semibold'>Hosting</h2>
        <ul className='space-y-4'>
          <li><Link href="#" className='text-black font-extralight'>Airbnb your home</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Airbnb your apartment</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Airbnb your experience</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Airbnb your service</Link></li>
          <li><Link href="#" className='text-black font-extralight'>AirCover for Hosts</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Hosting resources</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Hosting responsibility</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Airbnb-friendly apartments</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Join a free Hosting class</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Find a Co-Host</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Refer a Host</Link></li>
        </ul>
      </nav>
    </div>
    <div className="grid grid-cols-2 py-4 border-b border-gray-200">
      <nav className='py-3 space-y-4'>
        <h2 className='font-semibold'>Airbnb</h2>
        <ul className='space-y-4'>
          <li><Link href="#" className='text-black font-extralight'>2025 Summer Release</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Newsroom</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Careers</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Investors</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Gift cards</Link></li>
          <li><Link href="#" className='text-black font-extralight'>Airbnb.org emergency stays</Link></li>
        </ul>
      </nav>
    </div>
  </footer>
</div>
)
}

export default page
