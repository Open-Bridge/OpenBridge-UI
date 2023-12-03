import { GlobalContext } from "@/context/context";
export const SettingModal = () => {

    const { setIsTokenShowing, setSelectedToken, setFaucetAddress, setSelectedTokenLogo, setIsSettingModal } = GlobalContext()
    
      
    return(
    <div id="modal" className="bg-black/80 w-[100%] absolute h-[100%] z-[9999999999]">
        <div className="w-[96%] lg:w-[30%] h-auto py-3 px-3 drop-shadow-glow ml-auto mr-auto text-white  mt-[140px] bg-black/80 rounded-3xl flex flex-col  pt-5 mb-20 ">
        <div className=" w-[95%] ml-auto mr-auto flex h-12 mb-4 py-4 px-4">
                <p className="text-xl ml-0 mr-auto">Settings</p>
                <div className="text-xl mr-0 ml-auto">
                <div onClick={() => 
                  setIsSettingModal(false)} className='w-8 h-8 py-1.5 px-1 hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30'>
                <img src='/icons/home-icon.svg' className='ml-auto mr-auto' />
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}