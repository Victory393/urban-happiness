'use client'

import React from 'react'
import Nav from './components/Nav'
import Link from 'next/link'

const page = () => {
  return (
    <div className='p-4 h-screen overflow-y-auto text-black bg-white'>
      <header>
        <Nav />
      </header>
      <main className='mt-8'>
        <div className="border-b border-gray-200"></div>
      </main>
      <footer className='mt-8'>
        <div className="grid grid-cols-2 py-4">
          <p>Footer Content 1</p>
        </div>
        <div className="grid grid-cols-2 py-4 border-b border-gray-200">
          <nav className='py-3 space-y-4'>
            <h2 className='font-semibold'>Support</h2>
            <ul className='space-y-4'>
              <li><Link href="#" className='text-black font-extralight'>Help Center</Link></li>
              <li><Link href="#" className='text-black font-extralight'>Get help with a safety issue</Link></li>
              <li><Link href="#" className='text-black font-extralight'>AirCover</Link></li>
              <li><Link href="#" className='text-black font-extralight'>Disability support</Link></li>
              <li><Link href="#" className='text-black font-extralight'>Cancellation options</Link></li>
              <li><Link href="#" className='text-black font-extralight'>Our COVID-19 Response</Link></li>
              <li><Link href="#" className='text-black font-extralight'>Report a neighborhood concern</Link></li>
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
