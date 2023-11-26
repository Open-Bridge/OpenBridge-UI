"use client";

import { useState } from "react";
import { GlobalContext } from "@/context/context";

export const ChainSelect = () => {
  const { setIsModalShowing } = GlobalContext()
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
 
  return (
    <div>
      <div
        onClick={() => setIsModalShowing?.(true)}
        className="bg-green-400/30  flex py-3 px-4 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12  focus:ring-green-500 focus:border-green-500 block w-[99%] p-2.5 dark:bg-green-400/30 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500/70"
      >
        <p className="ml-auto mr-auto">{selectedChain}</p>
        <img src="/icons/chevron-down.svg" />
      </div>
    </div>
  );
};
