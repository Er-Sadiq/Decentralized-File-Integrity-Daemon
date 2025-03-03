import Layout from "../layout/Layout";

function Dashboard() {
    return (
        <Layout>
            <div className="bg-transparent bg-opacity-50 mt-10  text-white w-full max-w-5xl h-auto p-6 md:p-10  rounded-lg mx-auto overflow-hidden">
                <div className="flex flex-col justify-center items-center h-full w-full px-4 md:px-10">
                    <h2 className="text-base md:text-3xl font-bold my-5 text-center text-white bg-clip-text uppercase">-- Welcome to the Integrity Ledger --</h2>
                    <div className="w-full h-40 my-8 bg-slate-800/50 flex flex-col md:flex-row rounded-lg items-center justify-between px-6 md:px-10 py-2">
                        <span className="text-center text-xl md:text-2xl md:text-left">
                            <p>In order to continue</p>
                            <p>Connect yourself to the blockchain</p>
                        </span>
                        <button className="border-2 cursor-pointer h-15 w-44 text-2xl bg-[#2490EA] hover:bg-transparent transition duration-500 border-white text-white px-4 md:px-6  rounded-md flex flex-row gap-2 justify-center items-center mt-4 md:mt-0"> 
                             Connect
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            
                        </button>
                        </div>
                        <div className="border-1 border-white shadow-lg bg-slate-800/30 h-full w-full max-w-4xl rounded-lg p-4 md:p-12 md:pb-4">
                        

                            <div className='p-5 flex flex-col gap-4 my-4'>
                                <input type="text" className='bg-white text-black h-16 w-full border-2 text-xl placeholder-gray-500 px-3 my-1.5 rounded-lg' placeholder='@enter your Telegram, Discord, email' />

                                <input type="text" className='bg-white text-white h-16 w-full border-2 text-xl placeholder-gray-500 px-3 my-1.5 rounded-lg' placeholder='@enter your server username' />

                                <input type="text" className='bg-white text-white h-16 w-full border-2 text-xl placeholder-gray-500 px-3 my-1.5  rounded-lg' placeholder='@enter a path .../etc/passwd' />
                            </div>
                            <div className='flex flex-col md:flex-row gap-4 p-4'>

                                <button className="bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-indigo-900 hover:to-blue-800 transition-all duration-300 border-transparent hover:border-1 hover:border-white text-white text-2xl cursor-pointer px-4 py-2 h-15 rounded-lg w-full flex flex-row gap-2 justify-center items-center">Add A File Status
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>
                                </button>
                                <button className="bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-indigo-900 hover:to-blue-800 transition-all border-transparent duration-300 hover:border-1 hover:border-white text-white text-2xl cursor-pointer px-4 py-2 h-15 rounded-lg w-full flex flex-row gap-2 justify-center items-center"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                    </svg>
                                    Check Status
                                </button>
                            
                            </div>
                    </div>
                </div>          
            </div>
            
        </Layout>
    )
}

export default Dashboard;
