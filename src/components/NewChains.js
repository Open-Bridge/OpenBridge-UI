'use client'
import Image from "next/image";
import {useNetwork} from 'wagmi'



export default function NewChains() {
    const { chains} = useNetwork();
    const Chains = [
      {
        name: 'Optimism Goerli',
        native : 'ETH',
        logoUrl: 'https://goerli-optimism.etherscan.io/images/svg/brands/main.svg',
        status: 'Active'
      },
      {
        name: 'Sepolia',
        native : 'ETH',
        logoUrl: 'https://sepolia.etherscan.io/images/svg/brands/ethereum-original.svg',
        status: 'Active'
      },
      {
        name: 'Base Goerli',
        native : 'ETH',
        logoUrl: 'https://basescan.org/images/svg/brands/main.svg',
        status: 'Active'
      },
      {
        name: 'Avalanche Fuji',
        native : 'AVAX',
        logoUrl: 'https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg',
        status: 'Active'
      },
      
    ]
  return (
    <section>
      {/* title */}
      <div className="flex items-center gap-2 mb-[1.56rem]">
        <Image width={24} height={24} src="/icons/coin.svg" alt="fire icon" />
        <h1 className="text-white/90 text-xl lg:text-2xl tracking-[-0.015rem]">
          Supported Chains
        </h1>
      </div>
      {/* airdrop list */}
      <ul className="bg-green-700/25 border border-green-400 rounded-[0.625rem]">
        {
          Chains.map((chain, i) => (
            <li key={i} className="flex items-center justify-between py-4 px-4 gap-4 border-b border-green-400/40">
            <div className="flex items-center gap-2">
              <Image width={32} height={32} src={chain.logoUrl} alt="icon" />
              <div className="flex flex-col">
                <h2 className="text-[#D1D1D6] text-base tracking-[-0.01rem]">
                  {chain.name}
                </h2>
                <span className="text-[#A0A0AB] text-[0.75rem]">{chain.native}</span>
              </div>
            </div>
            <p className="text-[#D0D5DD]  tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
              {chain.status}
            </p>
          </li>
          ))
        }
        </ul>
    </section>
  );
}
