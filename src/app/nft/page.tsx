'use client'
// import Image from 'next/image'
// import Wallet from "../components/Wallet";
import { ChainSelector } from '@/components/Transfer/chainSelector'
import { MoreDetails } from '@/components/Transfer/Details'
import { NFTSelect } from '@/components/Transfer/NFTSelect'
import { Navbar } from '@/components/Navbar'
import React from 'react'
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import  NewTokens  from '@/components/NewTokens'
// import NewChains from '@/components/NewChains'
// import Transaction from '@/components/Transactions'
//import { GlobalContext } from '@/context/context';
import { GlobalContext } from '@/context/context'

export default function Home() {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");
  const [chain, setChain] = React.useState("");
  const { chainSelect }: any = GlobalContext();
  const claimToken = () => {
    console.log({ user, token, chain });
    console.log(chainSelect)
  }
  //const  chainSelect  = GlobalContext();
  return (
    <div className='w-100%  flex'>
      <Navbar />
      <div className="w-[86%] h-[110vh]  mt-8 flex justify-center items-center pt-5 mb-20 ml-auto mr-auto ">
        <div className=' w-[45%] h-[97vh] py-4 px-3 drop-shadow-glow  bg-black/80 rounded-3xl'>
          {/**main transfer header**/}
          <div className='text-white flex py-2 w-[95%] ml-auto mr-auto h-12'>
            <div className='ml-3 mr-auto py-1 px-1'>
              <p className='text-xl font-extralight'>NFT Bridge</p>
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
              <ChainSelector />
            </div>
            <div className='ml-auto mr-auto  w-[10%] py-12'>
              <div className='w-8 h-8 py-1.5 px-1 ml-auto mr-auto  rounded-lg bg-green-400/30'>
                <img src='/icons/arrow-right.svg' className='ml-auto mr-auto' />
              </div>
            </div>
            <div className='ml-auto mr-3 w-[45%] py-1 mb-4 px-1'>
              <p className='text-sm text-center font-bold mb-4'>Destination</p>
              <ChainSelector />
            </div>
          </div>
          {/**main transfer card address input**/}
          <div className='text-white flex flex-col mb-3  py-2 w-[95%] mt-20 ml-auto mr-auto h-12'>
            <div className='ml-auto mr-auto w-[100%] py-1 px-1 mb-4'>
              <div className='flex mb-2'>
                <p className='ml-2 mr-auto'>You send</p>
                <p className='ml-auto mr-4'>Balance</p>
              </div>
              <NFTSelect />
            </div>
            <div className='ml-auto mr-auto w-[100%] mt-5 py-1 px-1 mb-4'>
              <div className='flex mb-2'>
                <p className='ml-2 mr-auto'>You Receive</p>
                <p className='ml-auto mr-4'>Balance</p>
              </div>
              <NFTSelect />
            </div>
            <div className='ml-auto mr-auto w-[100%] mt-4 py-1 px-1 mb-4'>
              <MoreDetails />
            </div>
            <div className='w-[100%] mt-8 flex'>
              <button onClick={() => claimToken()} className='w-[80%] bg-green-500/70 h-12 rounded-3xl cursor-pointer ml-auto mr-auto'>Transfer</button>
            </div>
          </div>
          {/** nan */}
        </div>

      </div>
    </div>

  )
}
