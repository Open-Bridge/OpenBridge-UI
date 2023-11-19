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
    <div className='w-100% flex '>
        <Navbar />
        <div className=" w-[40%] h-[70vh] py-2 px-2 drop-shadow-glow ml-auto mr-auto  mt-[150px] bg-black/80 rounded-3xl flex  pt-5 mb-20 ">
            <div className=" text-white h-auto ml-auto mr-auto flex flex-wrap justify-center items-center text-center py-2 px-6">
            <p className='mb-16 text-3xl'>Token Faucet</p>
            <div className='w-full  ml-auto mr-auto flex justify-between'>
                <select onChange={(e) => setToken(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none h-12 focus:ring-blue-500 focus:border-blue-500 block w-[49%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select token</option>
                    <option value="contract_address">Token 1</option>
                    <option value="contract_address">Token 2</option>
                    <option value="contract_address">Token 3</option>
                </select>
                <select onChange={(e) => setChain(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12 focus:ring-blue-500 focus:border-blue-500 block w-[49%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select chain</option>
                    <option value="chain_id">Polygon</option>
                    <option value="chain_id">Ethereum</option>
                    <option value="chain_id">BSC</option>
                </select>
            </div>
            <input onChange={(e) => setUser(e.target.value)} placeholder='Enter wallet address' className='bg-gray-50 border outline-none border-gray-300 h-12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-8 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
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
