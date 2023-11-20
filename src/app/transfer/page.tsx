'use client'
// import Image from 'next/image'
// import Wallet from "../components/Wallet";
import { Navbar} from '@/components/Navbar'
import React from 'react'
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import  NewTokens  from '@/components/NewTokens'
// import NewChains from '@/components/NewChains'
// import Transaction from '@/components/Transactions'

export default function Home() {
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState("");
    const [chain, setChain] = React.useState("");

    const claimToken = () => {
        console.log({user, token, chain});
    }

  return (
    <div className='w-100%  flex'>
        <Navbar />
        <div className="w-[80%] h-[110vh]  mt-8 flex justify-center items-center pt-5 mb-20 ml-auto mr-auto ">
            <div className=' w-[40%] h-[91vh] py-4 px-3 drop-shadow-glow  bg-black/80 rounded-3xl'>
                {/**main transfer header**/}
                <div className='text-white flex py-2 w-[95%] ml-auto mr-auto h-12'>
                  <div className='ml-3 mr-auto py-1 px-1'>
                    <p className='text-xl font-extralight'>Bridge</p>
                  </div>
                  <div className='ml-auto mr-3'>
                    <div className='w-8 h-8 py-1.5 px-1 hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30'>
                      <img src='/icons/verify.svg' className='ml-auto mr-auto' />
                    </div>
                  </div>
                </div>
                {/**main transfer card chain select**/}
                <div className='text-white flex py-2 w-[95%] mt-10 ml-auto mr-auto h-12'>
                  <div className='ml-3 mr-auto w-[45%] py-1 px-1 mb-4'>
                    <p className='text-sm font-bold text-center mb-4'>Origin</p>
                    <select onChange={(e) => setChain(e.target.value)} className="bg-green-400/30  border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12 focus:ring-blue-500 focus:border-blue-500 block w-[98%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select chain</option>
                    <option value="chain_id">Polygon</option>
                    <option value="chain_id">Ethereum</option>
                    <option value="chain_id">BSC</option>
                </select>
                  </div>
                  <div className='ml-auto mr-auto  w-[10%] py-12'>
                    <div className='w-8 h-8 py-1.5 px-1 ml-auto mr-auto  rounded-lg bg-green-400/30'>
                      <img src='/icons/arrow-right.svg' className='ml-auto mr-auto' />
                    </div>
                  </div>
                  <div className='ml-auto mr-3 w-[45%] py-1 mb-4 px-1'>
                    <p className='text-sm text-center font-bold mb-4'>Destination</p>
                    <select onChange={(e) => setChain(e.target.value)} className="bg-gray-50 border w- border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12 focus:ring-blue-500 focus:border-blue-500 block w-[98%] ml-auto mr-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select chain</option>
                    <option value="chain_id">Polygon</option>
                    <option value="chain_id">Ethereum</option>
                    <option value="chain_id">BSC</option>
                  </select>
                  </div>
                </div>
                {/**main transfer card address input**/}
                <div className='text-white flex flex-col mb-3  py-2 w-[95%] mt-20 ml-auto mr-auto h-12'>
                  <div className='ml-auto mr-auto w-[100%] py-1 px-1 mb-4'>
                    <div className='flex mb-2'>
                        <p className='ml-2 mr-auto'>You send</p>
                        <p className='ml-auto mr-4'>Balance</p>
                    </div>
                    <div  className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12 focus:ring-blue-500 focus:border-blue-500 w-[98%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div className='flex py-1 px-1 ml-3 mr-auto'>
                        <div className='ml-2 mr-2 flex'>
                            <img className='ml-1 mr-1' src='/icons/cornflux.svg' />
                            <p className='ml-1 mr-1'>USDT</p>
                        </div>
                        <img src='/icons/chevron-down.svg' />
                    </div>
                    <div className='mr-1 ml-auto py-1 px-1'>
                        <p>0.00</p>
                    </div>
                    
                   </div>
                  </div>
                  <div className='ml-auto mr-auto w-[100%] mt-5 py-1 px-1 mb-4'>
                    <div className='flex mb-2'>
                        <p className='ml-2 mr-auto'>You Receive</p>
                        <p className='ml-auto mr-4'>Balance</p>
                    </div>
                    <div  className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12 focus:ring-blue-500 focus:border-blue-500 w-[98%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div className='flex py-1 px-1 ml-3 mr-auto'>
                    <div className='ml-2 mr-2 flex'>
                            <img className='ml-1 mr-1' src='/icons/cornflux.svg' />
                            <p className='ml-1 mr-1'>USDT</p>
                        </div>
                        <img src='/icons/chevron-down.svg' />
                    </div>
                    <div className='mr-1 ml-auto py-1 px-1'>
                        <p>0.00</p>
                    </div>
                   </div>
                  </div>
                  <div className='ml-auto mr-auto w-[100%] mt-4 py-1 px-1 mb-4'>
                    <div  className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12 focus:ring-blue-500 focus:border-blue-500 w-[98%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></div>
                  </div>
                  <div className='w-[100%] mt-8 flex'>
                    <button className='w-[80%] bg-green-500/70 h-12 rounded-3xl cursor-pointer ml-auto mr-auto'>Transfer</button>
                  </div>
                </div>
                {/** nan */}    
            </div>
            
        </div>
    </div>

  )
}
