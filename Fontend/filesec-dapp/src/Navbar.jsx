import React from 'react'

function Navbar() {
  return (
    <nav className="flex flex-row w-full bg-slate-900 h-20 md:h-20 lg:h-20 justify-between items-center backdrop-blur-md text-white px-6 md:px-12 shadow-md z-10 overflow-hidden">
      <h1 className="text-lg md:text-xl font-black flex flex-row gap-2 justify-center items-center underline">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
        </svg>
        Decentralized File Integrity Daemon
      </h1>
      
      <ul className='flex flex-row gap-2 md:gap-4 text-sm md:text-base font-semibold ml-auto'>
        <li className="cursor-pointer hover:underline">About</li>
        <li className="cursor-pointer hover:underline">Contact</li>
        <li className="cursor-pointer hover:underline">Contribute</li>
      </ul>
    </nav>
  )
}

export default Navbar
