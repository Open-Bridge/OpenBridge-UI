'use client'
// import Image from 'next/image'
// import Wallet from "../components/Wallet";
import { Footer } from '@/components/Footer'
import { ChainList } from '@/components/Suspense/ChainList'
import { FauceToken } from '@/components/Transfer/FaucetToken'
import { OriginChainSelector } from '@/components/Transfer/OriginChainSelector';
import { FaucetSelector } from '@/components/Transfer/FaucetTokenSelect'
import { TokenList } from '@/components/Suspense/TokenList'
import { GlobalContext } from '@/context/context';
import { BNM } from '@/config/TokenData'
import { Navbar } from '@/components/Navbar'
import { SuccessModal } from '@/components/Suspense/Success'
import { TokenSelect } from '@/components/Transfer/TokenSelect';
import { NFTSelect } from '@/components/Transfer/NFTSelect';
//import { ChainSelect } from '@/components/Transfer/ChainSelector';
//import { ChainSelector } from '@/components/Transfer/ChainSelector';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { AddressInput } from '@/components/Transfer/InputAddress'
import React from 'react'
import { abi } from '@/config/data'
import { toBigInt } from 'ethers';
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import  NewTokens  from '@/components/NewTokens'
// import NewChains from '@/components/NewChains'
// import Transaction from '@/components/Transactions'

export default function Home() {
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState("");
    const { address } = useAccount()
    const [chain, setChain] = React.useState("");
    const { isModalShowing, isTokenShowing, faucetAddress, claimAddress } = GlobalContext();
    const claimToken = () => {
        console.log({ user, token, chain });
    }
    console.log(faucetAddress)
    const isSuccess1 = false;

    const { config } = usePrepareContractWrite({
        address: faucetAddress,
        abi: BNM.abi,
        functionName: 'drip',
        args: [address],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    return (
        <div className='w-100% flex flex-col  sm:h-[100%]'>
            <Navbar />
            {isModalShowing && <ChainList />}
            {isTokenShowing && <TokenList />}
            {isSuccess1 && <SuccessModal />}
            <div className="w-[96%] lg:w-[40%] lg:h-[55vh] h-[50vh] py-2 px-2 drop-shadow-glow ml-auto mr-auto mt-[210px] lg:mt-[150px] bg-black/80 rounded-3xl flex  pt-5 mb-20 ">
                { 
                <div className=" text-white h-auto ml-auto mr-auto flex flex-wrap justify-center items-center text-center py-2 px-6">
                    <p className='mb-5 text-3xl'>Token Faucet</p>
                    { 
                    isSuccess ? 
                    <div className='w-full  ml-auto mr-auto flex'>
                        <div className='w-[100%] ml-auto mr-0'>
                            <div className='h-[8rem] w-[8rem] ml-auto mr-auto'>
                                <img src='/assets/ch1.png' />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-full  ml-auto mr-auto flex'>
                        <div className='w-[45%] mr-auto ml-0'>
                            <FauceToken />
                        </div>
                        <div className='w-[45%] ml-auto mr-0'>
                            <FaucetSelector />
                        </div>
                    </div>
                    }
                    
                    {/**<div className='w-full mt-8'>
                        <AddressInput />
    </div>**/}
                    {isSuccess ?
                        <div
                            
                            className="ext-base hidden outline-none rounded-xl w-full h-12 bg-green-400 text-white"
                        >
                            
                        </div>
                        :
                        <button
                            onClick={() => {
                                //alert('Claimed') 
                                write?.() 

                            }
                                }
                            className="ext-base outline-none rounded-xl w-full h-12 bg-green-400 text-white"
                        >
                            {isLoading ? 'Driping...' : 'Drip'}
                        </button>
                    }
                </div> 
                }

            </div>
            <div  className='mt-[60px] drop-shadow-glow mb-1 text-white'>
            <Footer/>
      </div>
        </div>

    )
}
