"use client";

import { useState } from "react";
import { GlobalContext } from "@/context/context";
import { useChainId, useNetwork } from "wagmi";

export const OriginChainSelector = () => {
  const { setIsModalShowing, originChain } = GlobalContext()
  const [selectedChain, setSelectedChain] = useState("Select Chain");
  const { chain } = useNetwork()
  const activeChains = [
    {
      name: "BNB Chain",
      id: 56,
    },
    {
      name: "Optimism Goerli",
      id: 420,
    },
  ];
  const selected = () => {
    return (
      <div className="w-70% bg-green-400/30 z-10 focus:ring-green-500 focus:border-green-500 block w-[99%] p-2.5 dark:bg-green-400/30 dark:border-green-500">
        <div>hey</div>
      </div>
    );
  };
  return (
    <div>
      <div
        onClick={() => console.log('true')}
        className="bg-green-400/30 w-[100%] flex py-3.5 lg:px-4 px-2 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12  focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-green-400/30 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500/70"
      > 
        {chain && <img src={`/icons/${chain?.id}.svg`} />}
        {chain ? <p className="ml-3 w-auto  mr-auto">{chain?.name}</p> : <p className="ml-auto  w-auto  mr-auto">{'Connect Wallet'}</p>}
      </div>
    </div>
  );
};
