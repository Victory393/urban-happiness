//search bar

import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className='bg-white text-black flex items-center justify-center p-4 space-x-2 w-full border border-gray-200 rounded-4xl drop-shadow-xl'>
      <button><Search /></button>
      <input 
      type="text" 
      placeholder="Start your search"
      className='focus:outline-none focus:ring-0 w-full'
       />
    </div>
  )
}
