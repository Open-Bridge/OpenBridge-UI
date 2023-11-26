'use client'
// import Image from 'next/image'
// import Wallet from "../components/Wallet";
//import { ChainSelector } from '@/components/Transfer/ChainSelector'
import { ChainSelect } from '@/components/Transfer/ChainSelector'
import { MoreDetails } from '@/components/Transfer/Details'
import { NFTSelect } from '@/components/Transfer/NFTSelect'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import { OriginChainSelector } from '@/components/Transfer/OriginChainSelector'
import { DestinationChainSelector } from '@/components/Transfer/DestinationChainSelector'
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
      <div className="w-[85%] h-[110vh]  mt-8 flex justify-center items-center pt-5 mb-20 ml-auto mr-auto ">
        <div className=' w-[42%] h-[95vh] py-4 px-3 drop-shadow-glow  bg-black/80 rounded-3xl'>
          {/**main transfer header**/}
          <div className='text-white flex py-2 w-[93%] ml-auto mr-auto h-12'>
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
          <div className='text-white flex py-2 w-[90%] mt-10 ml-auto mr-auto h-12'>
            <div className='ml-0 mr-auto w-[45%] py-1 px-1 mb-4'>
              <p className='text-sm font-bold text-center mb-4'>Origin</p>
              <OriginChainSelector />
            </div>
            <div className='ml-auto mr-auto  w-[10%] py-12'>
              <div className='w-8 h-8 py-1.5 px-1 ml-auto mr-auto  rounded-lg bg-green-400/30'>
                <img src='/icons/arrow-right.svg' className='ml-auto mr-auto' />
              </div>
            </div>
            <div className='ml-auto mr-3 w-[45%] py-1 mb-4 px-1'>
              <p className='text-sm text-center font-bold mb-4'>Destination</p>
              <DestinationChainSelector />
            </div>
          </div>
          {/**main transfer card address input**/}
          <div className='text-white flex flex-col mb-3  py-2 w-[90%] mt-20 ml-auto mr-auto h-12'>
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
            <div className='w-[99%] ml-auto mr-auto mt-8 py-1 px-1 flex'>
              <button onClick={() => claimToken()} className='w-[99%] bg-green-500/70 h-12 ml-auto mr-auto rounded-xl cursor-pointer ml-auto mr-auto'>Transfer</button>
            </div>
          </div>
          {/** nan */}
        </div>

      </div>
    </div>

  )
}
