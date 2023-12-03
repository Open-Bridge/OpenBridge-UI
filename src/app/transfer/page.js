'use client'
// import Image from 'next/image'
// import Wallet from "../components/Wallet";
import { use, useNetwork } from 'wagmi'
import { bridge } from '@/config/add'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { formatEther } from 'viem'
import { useAccount, useBalance } from 'wagmi'
import { OriginChainSelector } from '@/components/Transfer/OriginChainSelector'
import { DestinationChainSelector } from '@/components/Transfer/DestinationChainSelector'
import { ChainList } from '@/components/Suspense/ChainList'
import { DestList } from '@/components/Suspense/DestList'
import { TokenList } from '@/components/Suspense/TokenList'
import { MoreDetails } from '@/components/Transfer/Details'
import { TokenSelect } from '@/components/Transfer/TokenSelect'
import { Navbar } from '@/components/Navbar'
import { ApproveModal } from '@/components/Suspense/Approve'
import { SettingModal } from '../../components/Suspense/Setting'
import { TokenBridged } from '@/components/Transfer/TokenBridge'
import React from 'react'
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import  NewTokens  from '@/components/NewTokens'
// import NewChains from '@/components/NewChains'
// import Transaction from '@/components/Transactions'
//import { GlobalContext } from '@/context/context';
import { GlobalContext } from '@/context/context'
import { Tsukimi_Rounded } from 'next/font/google'
import { toBigInt } from 'ethers'

export default function Home() {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState(true);
  
  const chainId = '5790810961207155433';
  const { address, isConnected} = useAccount()
  const { isModalShowing,isTokenShowing, isSettingModal, setIsSettingModal, isModal2Showing, expandDetails , amount, faucetAddress,  isApproveModal,selectedToken,  setIsApproveModal } = GlobalContext();
  const claimToken = () => {
    console.log({ user, token, chain });
    console.log(isModalShowing)
    setChain(true)
  }
  const { chain } = useNetwork()
  const { data } = useBalance({
    address:address,
    token:faucetAddress,
    chainId: chain?.id,
  })
  console.log(data?.formatted)
  
  //const  chainSelect  = GlobalContext();
  return (
    <div className='w-100%  flex'>
      <Navbar />
      {isApproveModal && <ApproveModal />}
      {isModal2Showing && <DestList/>}
      {isModalShowing && <ChainList/>}
      {isTokenShowing && <TokenList/>}
      {isSettingModal && <SettingModal />}
      <div className={ `w-[96%] lg:w-[85%] lg:h-[110vh] h-auto mt-20 lg:mt-8 flex justify-center items-center pt-5 mb-20 ml-auto mr-auto `}>
        <div className={` w-[98%] lg:w-[42%] ${expandDetails ? 'h-[92vh] lg:h-[112vh]' : 'h-[78vh] lg:h-[95vh]'} py-6 px-4 px-3 drop-shadow-glow  bg-black/80 rounded-3xl`}>
          {/**main transfer header**/}
          <div className='text-white flex py-2 w-[93%] ml-auto mr-auto h-12'>
            <div className='ml-3 mr-auto py-1 px-1'>
              <p className='text-xl font-extralight'>Bridge</p>
            </div>
            <div className='ml-auto mr-3'>
              <div onClick={() => setIsSettingModal(true)} className='w-8 h-8 py-1.5 px-1 hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30'>
                <img src='/icons/verify.svg' className='ml-auto mr-auto' />
              </div>
            </div>
          </div>
          {/**main transfer card chain select**/}
          <div className='text-white flex py-2 w-[98%] mt-10 ml-auto mr-auto h-12'>
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
          <div className='text-white flex flex-col mb-3  py-2 w-[95%] mt-20 ml-auto mr-auto h-12'>
            <div className='ml-auto mr-auto w-[100%] py-1 px-1 mb-4'>
              <div className='flex mb-2'>
                <p className='ml-2 mr-auto'>You send</p>
                <p className='ml-auto mr-4'>{`Balance: ${data?.formatted.slice(0,6)}`}</p>
              </div>
              <TokenSelect />
            </div>
            <div className='ml-auto mr-auto w-[100%] mt-5 py-1 px-1 mb-4'>
              <div className='flex mb-2'>
                <p className='ml-2 mr-auto'>You Receive</p>
                
              </div>
              <TokenBridged />
            </div>
            <div className='ml-auto mr-auto w-[100%] mt-4 py-1 px-1 mb-4'>
              <MoreDetails />
            </div>
            <div className='w-[100%] mt-8 flex'>
              { isConnected ? 
                 <button onClick={() =>  {
                  
                  setIsApproveModal(true)
                }
                  } className='w-[100%] bg-green-500/70 h-12 rounded-xl cursor-pointer ml-auto mr-auto'>Transfer
                </button>
                :
                <button onClick={() =>  {
                  claimToken()
                }
                  } className='w-[100%] bg-green-500/70 h-12 rounded-xl cursor-pointer ml-auto mr-auto'>Connect Wallet
                </button>
              }
            </div>
          </div>
          {/** nan */}
        </div>

      </div>
    </div>

  )
}
