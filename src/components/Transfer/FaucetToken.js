import { GlobalContext } from "@/context/context";
import { useAccount } from 'wagmi'
export const FauceToken = () => {
const { balance } = useAccount()
const { setIsTokenShowing, selectedToken, selectedTokenLogo  } = GlobalContext();
  
  return (
    <div>
      <div onClick={() => setIsTokenShowing(true)} className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12  focus:ring-green-500 focus:border-green-500 w-[98%] p-2.5 dark:bg-green-400/30 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div   className="flex py-1 px-1 ml-3 mr-auto">
          <div className=" flex">
            <img className="ml-1 mr-2" src={selectedTokenLogo} />
            <p className="ml-1 mr-1">{selectedToken}</p>
          </div>
        </div>
        <div className="mr-1 ml-auto py-0.5 px-1">
          <img className="mr-1 ml-auto py-0.5 px-1" src="/icons/chevron-down.svg" />
        </div>
      </div>
    </div>
  );
};
