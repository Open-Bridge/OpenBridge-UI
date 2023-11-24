'use client'
// import Image from 'next/image'
// import Wallet from "../components/Wallet";
import { ChainList } from '@/components/Suspense/ChainList'
import { TokenList } from '@/components/Suspense/TokenList'
import { GlobalContext } from '@/context/context';
import { Navbar} from '@/components/Navbar'
import { TokenSelect } from '@/components/Transfer/TokenSelect';
import { ChainSelector } from '@/components/Transfer/ChainSelector';
import { AddressInput } from '@/components/Transfer/InputAddress'
import React from 'react'
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import  NewTokens  from '@/components/NewTokens'
// import NewChains from '@/components/NewChains'
// import Transaction from '@/components/Transactions'

export default function Home() {
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState("");
    const [chain, setChain] = React.useState("");
    const { isModalShowing,isTokenShowing } = GlobalContext();
    const claimToken = () => {
        console.log({user, token, chain});
    }

  return (
    <div className='w-100% flex '>
        <Navbar />
        {isModalShowing && <ChainList/>}
        {isTokenShowing && <TokenList/>}
        <div className=" w-[40%] h-[65vh] py-2 px-2 drop-shadow-glow ml-auto mr-auto  mt-[150px] bg-black/80 rounded-3xl flex  pt-5 mb-20 ">
            <div className=" text-white h-auto ml-auto mr-auto flex flex-wrap justify-center items-center text-center py-2 px-6">
            <p className='mb-16 text-3xl'>Token Faucet</p>
            <div className='w-full  ml-auto mr-auto flex'>
                <div className='w-[45%] mr-auto ml-0'>
                    <TokenSelect />
                </div>
                <div className='w-[45%] ml-auto mr-0'>
                    <ChainSelector />
                </div>
            </div>
            <div className='w-full mt-10'>
                <AddressInput />
            </div>
            <button
                onClick={() => claimToken()}
                className="ext-base outline-none rounded-xl w-full h-12 bg-green-400 text-white"
            >
                Request token
            </button>
        </div>
      
        </div>
    </div>

  )
}
