import { GlobalContext } from "@/context/context";
export const NFTSelect = () => {
  const { selectedNFT , setIsNFTList, selectedNFTLogo } = GlobalContext()
    return (
      <div>
        <div className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12  focus:ring-green-500 focus:border-green-500 w-[98%] p-2.5 dark:bg-green-400/30 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <div  className="flex py-1 px-1 ml-3 mr-auto">
            <div onClick={() => setIsNFTList(true)} className=" h-[100%] flex">
              <img className=" rounded-full ml-2 mr-4 w-5 h-5" src={selectedNFTLogo} />
              <p className="ml-1 mr-1">{selectedNFT}</p>
            </div>
            
          </div>
          <div className="mr-1 ml-auto py-1 px-1">
            <p>id: 2</p>
          </div>
        </div>
      </div>
    );
  };
  