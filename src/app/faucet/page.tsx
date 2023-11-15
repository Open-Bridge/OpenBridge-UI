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

    const claimToken = () => {
        console.log({user, token});
    }

  return (
    <div className='w-100%  '>
        <Navbar />
        <div className="w-[88%] h-[80vh] flex justify-center items-center pt-5 mt-0 mb-20 ml-auto mr-auto pl-[1.06rem] sm:pl-8 overflow-x-hidden">
            <div className=" text-white h-auto flex flex-wrap justify-center items-center mt-[200px] text-center xl:text-left pr-[1.06rem] sm:pr-8 ">
            <p className='mb-8 text-3xl'>Token Faucet</p>
            <select onChange={(e) => setToken(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select token</option>
                <option value="contract_address">Token 1</option>
                <option value="contract_address">Token 2</option>
                <option value="contract_address">Token 3</option>
            </select>
            <input onChange={(e) => setUser(e.target.value)} placeholder='Enter wallet address' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            <button
                onClick={() => claimToken()}
                className="ext-base outline-none rounded-2xl w-full h-12 bg-green-400 text-white"
            >
                Request token
            </button>
        </div>
      
        </div>
    </div>

  )
}
