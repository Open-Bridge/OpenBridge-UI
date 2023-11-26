"use client";

import { useState } from "react";
import { GlobalContext } from "@/context/context";

export const DestinationChainSelector = () => {
  const { setIsModal2Showing, destinationChain,   destinationChainID } = GlobalContext()
  const [selectedChain, setSelectedChain] = useState("Select Chain");
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
        onClick={() => setIsModal2Showing?.(true)}
        className="bg-green-400/30  flex py-3.5 px-4 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12  focus:ring-green-500 focus:border-green-500 block w-[99%] p-2.5 dark:bg-green-400/30 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500/70"
      >
        <img src={`/icons/${destinationChainID}.svg`} />
        <p className="ml-3 mr-auto">{destinationChain}</p>
        
      </div>
    </div>
  );
};
