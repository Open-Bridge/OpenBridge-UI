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
            <div className=' w-[40%] h-[88vh] py-4 px-3 drop-shadow-glow  bg-black/80 rounded-3xl'>
                <div className='text-white flex py-2 w-[95%] ml-auto mr-auto h-12'>
                  <div className='ml-3 mr-auto py-1 px-1'>
                    <p className='text-xl font-extralight'>Token Bridge</p>
                  </div>
                  <div className='ml-auto mr-3'>
                    <div className='w-8 h-8 py-1.5 px-1  rounded-lg bg-green-400/30'>
                     <img src='/icons/verify.svg' className='ml-auto mr-auto' />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

  )
}
