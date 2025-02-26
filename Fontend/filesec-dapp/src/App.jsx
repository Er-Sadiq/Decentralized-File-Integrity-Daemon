import React, { useState, useEffect } from "react";
import bg from "./assets/bbg1.jpg";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      const timer = setTimeout(() => setShowDashboard(true), 100);
      return () => clearTimeout(timer);
    } else {
      setShowDashboard(false);
    }
  }, [loggedIn]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, opacity: 1 }}
      />

      <div className="w-full h-full flex flex-col items-center relative">
        <Navbar />

        <div className="w-full h-full flex items-center justify-center px-4 md:px-10">
          {!loggedIn ? (
            <div className="w-full max-w-3xl h-auto p-6 text-white bg-opacity-100  rounded-lg shadow-lg flex flex-col justify-center md:absolute md:left-10">
              <h1 className="text-3xl md:text-5xl font-black tracking-wide text-center md:text-left">
                Decentralized File Integrity & Security Dapp
              </h1>
              <p className="text-sm md:text-lg font-bold font-sans my-4 md:my-6 text-center md:text-left">
                A large-scale security solution for file integrity and tamper detection that uses Golang, fsnotify/inotify, and Ethereum (Arbitrum L2) smart contracts to monitor critical Linux system files in real time.
              </p>
              <div className="w-full flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
                <button
                  className="bg-gradient-to-r from-blue-800 to-indigo-900 transition duration-300 text-white px-4 py-3 rounded-lg w-full font-semibold uppercase"
                  onClick={() => setLoggedIn(true)}
                >
                  Login as User
                </button>
                <button
                  className="border-white border-2 transition duration-300 text-white px-4 py-3 rounded-lg w-full font-semibold uppercase"
                  onClick={() => setLoggedIn(true)}
                >
                  Login as Guest
                </button>
              </div>
            </div>
          ) : (
            showDashboard && (
              <div className="bg-transparent bg-opacity-50 mt-10 backdrop-blur-lg text-white w-full max-w-5xl h-auto p-6 md:p-10 shadow-lg rounded-lg mx-auto overflow-hidden">
                <Dashboard />
              </div>
            )
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
