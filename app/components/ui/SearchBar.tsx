//search bar

import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
  <div className="w-full flex items-center justify-center px-4 py-2">
    <div className='bg-white text-black flex items-center justify-center py-4 space-x-2 w-full border border-gray-200 rounded-4xl drop-shadow-xl'>
      <button className='items-center justify-center place-content-center'><Search /></button>
      <input 
      type="text" 
      placeholder="Start your search"
      className='focus:outline-none focus:ring-0 w-full items-center justify-center text-center bg-white text-black'
      />
    </div>
  </div>
  )
}
