import Image from 'next/image'
import Wallet from "../components/Wallet";
import { Navbar} from '@/components/Navbar'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import  NewTokens  from '@/components/NewTokens'
import NewChains from '@/components/NewChains'
export default function Home() {
  const router = ''
  return (
    <div className='w-100% h-auto '>
      <Navbar />
      <div className="w-[88%] pt-5 mt-0 mb-20 ml-auto mr-auto pl-[1.06rem] sm:pl-8 overflow-x-hidden">
      {/**<LatestPools />**/}
      
      {/* HERO CONTENT */}
      <div className=" text-white mt-[200px] text-center xl:text-left pr-[1.06rem] sm:pr-8 ">
        <h1 className="text-9xl mb-3 sm:mb-2 sm:text-[2.5rem] text-extrabold tracking-[-0.075rem] sm:leading-[3.375rem]">
          The{" "} <br/>
          <span className="bg-green-500 bg-clip-text text-transparent">
            Cross Chain Interporabilty protocol
          </span>{" "} <br/>
          for everyone
        </h1>
        <p className="text-[#D1D1D6] mb-8 mt-20 tracking-[-0.01125rem] text-lg md:text-xl w-full xl:pr-52">
          Our easy to use platform makes creation of your own tokens and token
          sales seamless. Tokens created on{" "}
          <span className="text-[#C38CC3]">SoliMax</span> will be verified and
          published on explorer websites
        </p>
        <div className="flex justify-center items-center xl:justify-start">
          <button
            //onClick={() => router.push("/launchpad/presale/create")}
            className="mr-8 text-base outline-none rounded-3xl py-0  px-0 w-48 h-12 bg-green-400 text-white"
          >
            Transfer
          </button>
          <button className="text-base outline-none">Learn more</button>
        </div>
      </div>
      {/* ------------------------------ */}
      {/* CARDS */}
      <div className="mt-[3.69rem] mb-[5.19rem] whitespace-nowrap pr-[1.06rem] sm:pr-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.88rem]">
        {/* TOTAL LIQUIDITY RAISED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              SUPPORTED CHAINS
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              5
            </h1>
          </div>
        </section>
        {/* TOTAL PROJECTS LAUNCHED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              SUPPORTED TOKENS
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              6
            </h1>
          </div>
        </section>
        {/* TOTAL PARTICIPANTS */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL TRANSACTIONS
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              5M
            </h1>
          </div>
        </section>
        {/* TOTAL VALUE LOCKED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL VALUE LOCKED ACCROSS CHAINS
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              $222.4M
            </h1>
          </div>
        </section>
      </div>
      {/**<TrendingPools />**/}
      <div className="mt-[3.12rem] grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-8 pr-[1.06rem] sm:pr-8">
       {/** <HotAirdrops />**/}
        <NewChains/>
        <NewTokens />
      </div>
    </div>
    </div>

  )
}
