'use client'
import Image from "next/image";



export default function NewTokens() {
  const Tokens = [
    {
      name: 'CCIP BNM',
      ticker : 'BNM',
      logoUrl: 'https://testnet.bscscan.com/assets/bsc/images/svg/empty-token.svg',
      status: 'Bridgeable'
    },
    {
      name: 'CCIP LNM',
      ticker : 'LNM',
      logoUrl: 'https://testnet.bscscan.com/assets/bsc/images/svg/empty-token.svg',
      status: 'Bridgeable'
    }
  ]
  return (
    <section>
      {/* title */}
      <div className="flex items-center gap-2 mb-[1.56rem]">
        <Image width={24} height={24} src="/icons/coin.svg" alt="fire icon" />
        <h1 className="text-white/80 lg:text-2xl text-xl  tracking-[-0.015rem]">
          Supported tokens
        </h1>
      </div>
      {/* airdrop list */}
      <ul className="bg-green-700/25 border border-green-400 rounded-[0.625rem]">
        {
          Tokens.map((token, i) => (
        <li key={i} className="flex items-center justify-between py-4 px-4 gap-4 border-b border-green-400/40">
          <div className="flex items-center gap-2">
            <Image width={32} height={32} src={token.logoUrl} alt="icon" />
            <div className="flex flex-col">
              <h2 className="text-[#D1D1D6] text-base tracking-[-0.01rem]">
                {token.name}
              </h2>
              <span className="text-[#A0A0AB] text-[0.75rem]">{token.ticker}</span>
            </div>
          </div>
          <p className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            {token.status}
          </p>
        </li>
          ))
        }
      </ul>
    </section>
  );
}
