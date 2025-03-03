import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";


export default function Home() {


  const navigate = useNavigate();
  
  return (
      <Layout>

<div className="w-full h-full flex items-center p-4 md:p-6 container justify-left ">
          
          <div className="w-full max-w-3xl h-auto  text-white bg-opacity-100 p-4 md:p-0 rounded-lg shadow-lg md:left-20">
            <h1 className="text-3xl md:text-5xl leading-[1.5] font-bold text-center md:text-left">
              Decentralized File <br/> Integrity & <span className="text-[#2490EA]">Security</span> Dapp
            </h1>
            <p className="text-sm md:text-xl font-normal font-sans my-4 md:my-6 ">
              A large-scale security solution for file integrity and tamper detection that uses Golang, fsnotify/inotify, and Ethereum (Arbitrum L2) smart contracts to monitor critical Linux system files in real time.
            </p>
            <div className="w-full flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
              <button
                className="hover:bg-[#2490EA]  ease-in-out bg-[linear-gradient(90deg,rgba(0,50,151,0)_0.02%,#098DED_99.98%)] text-xl rounded-3xl transition duration-500 cursor-pointer h-16 text-white px-4 py-3  w-full font-bold capitalize"
                onClick={() => navigate("/dashboard")}
              >
                Login as User
              </button>
              <button
                className=" transition duration-500 bg-white hover:bg-transparent hover:text-white cursor-pointer  text-xl border-white  hover:border-2 ease-in-out  text-black px-4 py-3 rounded-3xl w-full h-16 font-bold capitalize"
                onClick={() => navigate("/dashboard")}
                
              >
                Login as Guest
              </button>
            </div>
          </div>
          
          
          
          
          </div>
          
      </Layout>
  )
}






{/*
 */}