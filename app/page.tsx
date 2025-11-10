'use client'

import React from 'react'
import Nav from './components/Nav'

const page = () => {
  return (
    <div className='p-4 h-screen text-black bg-white'>
      <header>
        <Nav />
      </header>
      <main className='mt-8'>
        Main Content Here
      </main>
      <footer className='mt-8'>
        Footer Content Here
      </footer>
    </div>
  )
}

export default page
