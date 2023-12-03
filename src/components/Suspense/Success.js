import { GlobalContext } from "@/context/context";
export const SuccessModal = () => {

    const { setIsTokenShowing, setSelectedToken, setFaucetAddress, setSelectedTokenLogo } = GlobalContext()
    
      
    return(
    <div id="modal" className="bg-black/80 w-[100%] absolute h-[100%] z-[9999999999]">
        <div className=" w-[30%] h-auto py-3 px-3 drop-shadow-glow ml-auto mr-auto text-white  mt-[140px] bg-black/80 rounded-3xl flex flex-col  pt-5 mb-20 ">
            <div className=" w-[95%] ml-auto flex mr-auto h-12 mb-4 py-4 px-4">
              <p className="text-xl ml-auto mr-auto">Transaction Submitted Successfully</p>
            </div>
            <div className="w-[95%] ml-auto mr-auto h-auto  mb-4 py-4 px-4">
               <div></div>
            </div>
        </div>
    </div>
    )
}