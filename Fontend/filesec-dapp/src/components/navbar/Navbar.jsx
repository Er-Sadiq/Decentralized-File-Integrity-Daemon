import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <nav className="flex flex-row items-center justify-between p-4 md:p-6 w-full text-white fixed container mx-auto my-3">
     <div className="">
      <img src="/src/assets/logo.svg" alt="logo" />
     </div>
      
      <ul className={`md:flex  ${openmenu ? "flex" :"hidden"}  md:block absolute md:static top-16 md:w-fit w-52 bg-white md:text-white text-black text-lg p-2.5 rounded-2xl right-5 md:bg-transparent  md:flex-row flex-col  items-center justify-between gap-3  md:gap-4 md:text-2xl font-medium ml-auto`}>
        <li className="cursor-pointer  text-[#2490EA] font-bold!">Home</li>
        <li className="cursor-pointer transition-all duration-500 hover:text-[#2490EA]">About</li>
        <li className="cursor-pointer transition-all duration-500 hover:text-[#2490EA]">Contact</li>
        <li className="cursor-pointer md:w-[181px] w-fit text-center hover:text-[#2490EA] md:bg-white text-black md:text-[#2490EA] hover:bg-transparent md:hover:border-2 border-white transition-all duration-500 hover:rounded-4xl  md:hover:text-white h-[56px] leading-[56px] rounded-lg">Contribute</li>
      </ul>
      <div onClick={()=> setOpenmenu(!openmenu)} className="md:hidden top-[-17px] relative cursor-pointer text-4xl">
      <HiMenuAlt3 className={`absolute top-0 right-0 transition-all duration-300 ${
          openmenu ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}/> 
      <HiOutlineMenu className={`absolute top-0 right-0 transition-all duration-300 ${
          openmenu ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}/>
        
      </div>
    </nav>
  )
}

export default Navbar

