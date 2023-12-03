'use client'
import Image from 'next/image'

import Wallet from "../components/Wallet";
import { Navbar} from '@/components/Navbar'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import  NewTokens  from '@/components/NewTokens'
import NewChains from '@/components/NewChains'
import Transaction from '@/components/Transactions'
import { GlobalContext } from '@/context/context'
import { ChainList } from '@/components/Suspense/ChainList';
import Link from 'next/link';
export default function Home() {
  const { isModalShowing }  = GlobalContext();
 
  console.log(isModalShowing)
  return (
    <div className='w-100% h-auto flex flex-col'>
      <Navbar />
      <div className=''>
        {isModalShowing && <ChainList/>}
      </div>
      <div className="w-[88%] pt-5 mt-0 mb-20 ml-auto mr-auto pl-[1.06rem] sm:pl-8 overflow-x-hidden">
      {/**<LatestPools />**/}
      
      {/* HERO CONTENT */}
      <div className=" text-white lg:mt-[200px] mt-[140px] text-center xl:text-left pr-[1.06rem] sm:pr-8 ">
        <h1 className="lg:text-7xl mb-3 sm:mb-2 text-3xl text-extrabold tracking-[-0.075rem] sm:leading-[3.375rem]">
          The Open{" "} <br/>
          <span className="bg-green-500 bg-clip-text text-transparent">
            Cross Chain Interporabilty protocol
          </span>{" "} <br/>
          
        </h1>
        <p className="text-[#D1D1D6] mb-8 mt-12 tracking-[-0.01125rem] text-lg lg:xl md:text-xl w-full xl:pr-52">
          Open<span className="text-green-500">Bridge</span> a fast and secured cross chain bridge for transfering crypto assets and NFTs accross EVM chains
        </p>
        <div className="flex justify-center items-center xl:justify-start">
          <Link href={'/transfer'}>
          <button
            
            className="mr-4 text-base outline-none rounded-3xl py-0  px-0 lg:w-48 w-[150px] h-12 bg-green-400 text-white"
          >
            Transfer
          </button>
          </Link>
          <Link href={'/faucet'}>
            <button className="text-base outline-none">Faucet</button>
          </Link>
    
        </div>
      </div>
      {/* ------------------------------ */}
      {/* CARDS */}
      <div className="mt-[3.69rem] mb-[5.19rem] whitespace-nowrap pr-[1.06rem] sm:pr-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[2rem] lg:gap-[8rem]">
        {/* TOTAL LIQUIDITY RAISED */}
        
        {/* TOTAL PARTICIPANTS */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem]  bg-green-500 p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b bg-green-700/25 border-green-400 px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL TRANSACTIONS
            </h3>
            <h1 className="tracking-[-0.02rem] bg-green-700/25 font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              590K
            </h1>
          </div>
        </section>
         {/* TOTAL VALUE LOCKED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem]  bg-green-500 p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b bg-green-700/25 border-green-400 px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL VALUE LOCKED
            </h3>
            <h1 className="tracking-[-0.02rem] bg-green-700/25 font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              $2.46 billion
            </h1>
          </div>
        </section>
      </div>
      <div className="mt-[3.12rem] mb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-8 pr-[1.06rem] sm:pr-8">
       {/** <HotAirdrops />**/}
        <NewChains/>
        <NewTokens />
      </div>
      <Transaction />
    </div>
    </div>

  )
}
